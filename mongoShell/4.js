
let db=connect('test');

// db.test.update({name:'JSPang'},{$set:{interest:['code']}})
db.test.update({name:'JSPang'},{$addToSet:{interest:{$each:['ha','code','read']}}})

print('修改成功');