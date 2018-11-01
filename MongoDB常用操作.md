# MongoDB常用操作

### 查询所有结果
`db.集合名.find()`
`select * from  集合名`

###投影操作（指定返回name和age字段，不返回_id）
`db.collectionDemo.find({},{name:1,age:1,_id:0})`

### 查询条件
##### And(查全部name为Stefanie的age为12记录)
`db.collectionDemo.find({name:'Stefanie,age:12'})`
##### 查询单个
`db.collectionDemo.findOne({name:'Stefanie'})`
##### or条件(查询全部全部name为Stefanie或者Boj)
`db.collectionDemo.find({$or:[{name:'Stefanie'},{name:'Boj'}])`

##### 比较条件(`$gte` >=,`$lte` <=,`$ne` !=) 查询age在15~26之间
`db.collectionDemo.find({age:{'$gte':15,'$lte':26}})`

##### like条件 
`sselect * from article where title like "%mongodb%"`
`db.collectionDemo.find({title:/mongodb})`

##### in条件 
`db.collectionDemo.find({title:{'$in':['js','java']}})`
##### count
`db.collectionDemo.find().count()`
##### 排序(name降序)
`db.collectionDemo.find().sort({name:1})`
##### 排序(name升序)
`db.collectionDemo.find().sort({name:-1})`

### 改变collection
##### insert 插入记录
`db.article.insert({"title": "mongodb", "author": "tg", "content": "haha"})`

##### update 语法 db.collecion.update(query, update[, options] ) 

+ query 必填 (条件)
+ update 必填 (`$inc`,`$set`)
+ option 可选
upsert：可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
multi：可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
writeConcern：可选，抛出异常的级别。

`update game set count = 10000 where _id = 123`
等价
`db.game.update({"_id": 123}, { "$set": {"count": 10000}})`

##### 删除字段 
`db.collectionDemo.update({name:'Stefanie'},{'$unset:{age:1}'})`

##### 删除记录
`db.collectionDemo.remove({age:12})`


##### 只有type数组同时存在mongodb和javascript才会匹配
`db.article.find({"type": {"$all": ["mongodb", "javascript"]}})`

##### 限制数组长度  (只有数组的长度是2才会匹配)
`db.article.find({"type": {"$size": 2}})`

##### 数组
`{
 kown: [{ a: 2, b: 4}, 10, { a: 4}, {b:10}]}`
`db.article.find({"kown": { "$elemMatch": {a: 1, b: {"$gt": 2}}}})`


##### 判断字段是否存在
`db.article.find({"love": {"$exists": false}}) // 如果不存在字段love，就返回`


##### 内嵌文档
`{adddress:{name:'nanjing'}}`
`db.article.find({'address.name':'nanjing'})`


##### 分页效果
`db.article.find().skip(10).limit(20)`


##### 删除集合
`db.article.drop()`
