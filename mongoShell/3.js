//循环插入
let startTime=(new Date()).getTime();

let db=connect('test');

var userInfo=[];
for(let i=0;i<=70000;i++){
    userInfo.push({name:'Stefanie'+i,age:i})
}

db.test.insert(userInfo)
let runTime=(new Date()).getTime()-startTime;

print('this run this is:'+runTime+'ms')
//755ms
//批量插入
let startTime=(new Date()).getTime();
let db=connect('test');


for(let i=0;i<=70000;i++){
    db.test.insert({name:'Stefanie'+i,age:i})
}

let runTime=(new Date()).getTime()-startTime;

print('this run this is:'+runTime+'ms')
//花费时间为:17538ms


//结论:批量插入比循环插入性能更佳