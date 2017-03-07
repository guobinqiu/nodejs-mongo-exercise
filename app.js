var express = require('express');
var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});
var Task = mongoose.model('Task', taskSchema);

var app = module.exports = express.createServer();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  //要写在router之前
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
  mongoose.connect('mongodb://127.0.0.1:27017/todo_development')
  app.listen(3000);
});

app.configure('test', function(){
  app.use(express.errorHandler());
  mongoose.connect('mongodb://127.0.0.1:27017/todo_test')
  app.listen(3001);
});

app.get('/api/v1/tasks', function(req, res){
  // res.setHeader('Access-Control-Allow-Origin', '*');
  Task.find({}, function(err, docs){
    res.send(docs, 200);
  });
});

app.post('/api/v1/tasks', function(req, res){
  var task = new Task(req.body.task);
  task.save(function(err){
    if (!err) {
      res.send(task, 201);
    } else {
      res.send(err, 400);
    }
  });
});

app.put('/api/v1/tasks/:id', function(req, res){
  Task.findById(req.params.id, function(err, doc){
    if (!doc) {
      res.json({ "error": "task not found" }, 404);
    } else {
      doc.task = req.body.task.task;
      doc.updated_at = new Date();
      doc.save(function(err){
        if (!err) {
          res.send(doc, 200);
        } else {
          res.send(err, 400);
        }
      });
    }
  });
});

app.delete('/api/v1/tasks/:id', function(req, res){
  Task.findById(req.params.id, function(err, doc){
    if (!doc) {
      res.json({ "error": "task not found" }, 404);
    } else {
      doc.remove(function(){
        res.send(204);
      });
    }
  });
});

console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

