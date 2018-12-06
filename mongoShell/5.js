//它是数据库运行命令的执行器，执行命令首选就要使用它，因为它在Shell和驱动程序间提供了一致的接口。
let db=connect('test')

db.test.update({name:'JSPang'},{$set:{sex:2}})

let resultMessage=db.runCommand({getLastError:1})

printjson(resultMessage)
// findAndModify:
// 从名字上就可以看出，findAndModify是查找并修改的意思。配置它可以在修改后给我们返回修改的结果。我们先看下面的代码：