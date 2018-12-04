let conn=new Mongo();
let db=conn.getDB('test');

let result=db.test.update({age:2},{$set:{interest:['code','read']}},{upsert:true});
let result1=db.test.find({age:{$lte:9}});
printjson('RESULT',result1);

