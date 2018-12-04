let conn = new Mongo();
let db = conn.getDB('test');

let start=new Date().getTime()
let result = db.test.find({}).pretty().limit(100);

while (result.hasNext()) {
    printjson(result.next())
}

print('spend time :'+(new Date().getTime()-start))