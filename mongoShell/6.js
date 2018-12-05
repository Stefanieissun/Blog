let db=connect('test');
let result=db.test.find({interest:{$all:['看电影']}})

let resultMessage=db.runCommand({getLastError:1})

print(resultMessage);
result.forEach(x=>printjson(x))