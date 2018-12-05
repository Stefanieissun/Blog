let db=connect('test')


let startTime=(new Date()).getTime();

// let 

let result=db.test.find({username:/bb3j/}).pretty();
result.forEach(x=>printjson(x));
let runtime=(new Date()).getTime()-startTime;
// print('num:'+result.count())
print('it takes '+runtime+'ms');