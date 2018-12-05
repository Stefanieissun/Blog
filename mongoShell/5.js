let db=connect('test')

db.test.update({name:'JSPang'},{$set:{sex:2}})

let resultMessage=db.runCommand({getLastError:1})

printjson(resultMessage)