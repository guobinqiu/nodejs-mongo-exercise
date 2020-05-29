Install
---

1. 安装[nodejs](https://nodejs.org/en/)

2. package.json声明依赖包 (express, mongoose)

3. `npm install`安装依赖包

4. 安装[mongodb](http://www.mongodb.org/downloads)

5. 启动mongodb`/usr/local/mongodb/bin/mongod`

6. 启动应用程序`NODE_ENV=test node app.js`

APIs
---

### Create

```
curl -X POST -H 'Content-Type: application/x-www-form-urlencoded' -d 'task[task]=study nodejs' -i http://localhost:3001/api/v1/tasks
or
curl -X POST -H 'Content-Type: application/json' -d '{ "task": { "task": "study nodejs" } }' -i http://localhost:3001/api/v1/tasks
```

### Read

```
curl -X GET http://localhost:3001/api/v1/tasks
```

### Update

```
懒
```

### Delete

```
懒
```
