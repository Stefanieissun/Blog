let conn=new Mongo();//不填，默认本地
let start=new Date().getTime()
let db=conn.getDB('test')//选择数据库名称
let users=[];
for(let i=0;i<1000;i++){
    users.push({name:'stefanie-'+i,age:i})
}
let operation=db.test.insert(users);
print(operation);
print(`spend time:${new Date().getTime()-start}`);