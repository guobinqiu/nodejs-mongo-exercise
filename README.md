# nodejs_api

## Installation
1. 安装nodejs https://nodejs.org/en/ 以获得npm
2. package.json声明依赖包（express，mongoose）
3. 执行npm install安装依赖包
4. 安装mongodb http://www.mongodb.org/downloads
5. 启动mongodb `/usr/local/mongodb/bin/mongod`
6. 启动应用程序 `NODE_ENV=test node app.js`

## API Calls
curl -X POST -H 'Content-Type: application/x-www-form-urlencoded' -d 'task[task]=study nodejs' -i http://localhost:3001/api/v1/tasks
curl -X GET http://localhost:3001/api/v1/tasks

### List in Mongo
/usr/local/mongodb/bin/mongo
use todo_test
db.tasks.find().pretty()
```
{
	"_id" : ObjectId("58be7b6a647654c45821b47e"),
	"task" : "study nodejs",
	"updated_at" : ISODate("2017-03-07T09:20:42.967Z"),
	"created_at" : ISODate("2017-03-07T09:20:42.967Z"),
	"__v" : 0
}
```
