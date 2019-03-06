### 聚合函数

`AVG(col_name)`

`COUNT(col_name)`

`MAX()`

`MIN()`

`SUM()`

### 数学

`floor() 向下取整`

`celil() 向上取整`

`round() 四舍五入`

`truncate(,)不四舍五入`

`mod(,)取余数`

`abs()绝对值`

`power(,)次方`

`pi()圆周率六位`

`rand()随机数`

`sign()大于0返回1,小于0返回-1,否则为0`
`exp() e的几次方`

### 字符串

`char_length()字符数`

`length()字符串长度`

`concat()拼接字符串，包含Null,则返回值就是null`
`concat_wa()以指定分隔符拼接字符串`

`concat_wa(null,'','') 返回null`

`concat_wa('-','a','b',null) 返回a-b`

`upper()=ucase() 转大写`

`lower()=lcase() 转小写`

`reverse() 转换大小写`

`left(,)|right(,)字符串前几个|后几个字符`

`lpad(x,y,z)|rpad(x,y,z) x按y长度在前|后添加z字符`

`trim()|ltrim()|rtrim() 去空格`

`repeat(,次数) 重复指定次数`

`replace(x,y,z)x字符串把y字符串替换为z`
`substring(x,y,z) x字符串从y开始截取z长度，y从1开始`

`strcmp(x,y)字符串比较`

### 日期函数

`curdate()=current_date()当前日期 如：2019-03-01`

`curtime()=current_time()当前时间 如：19:01:57`

`now()=current_timestamp()=sysdate()当前日期和时间 如：2019-03-01 19:00:16`

`month(curdate())当前月份 如：3`

`monthname(curdate())当前月份的名字`

`dayname(curdate())周几名字如：Friday`

`dayofweek(curdate())周几，周天为1`

`week(now())一年中第几周`

`year/month/day/hour/minute/second年月日时分秒`

`datediff() 两个日期相差天数`

`date_format(日期,"%Y%m%d")`

### 加密函数

`AES_ENCRYPT(str,key) 返回用密钥 key 对字符串 str 利用高级加密标准算法加密后的结果，调用 AES_ENCRYPT 的结果是一个二进制字符串，以 BLOB 类型存储`

`AES_DECRYPT(str,key) 返回用密钥 key 对字符串 str 利用高级加密标准算法解密后的结果`

`DECODE(str,key) 使用 key 作为密钥解密加密字符串 str`

`ENCRYPT(str,salt) 使用 UNIXcrypt()函数，用关键词 salt(一个可以唯一确定口令的字符串，就像钥匙一样)加密字符串 str`

`ENCODE(str,key) 使用 key 作为密钥加密字符串 str，调用 ENCODE()的结果是一个二进制字符串，它以 BLOB 类型存储`

`MD5() 计算字符串 str 的 MD5 校验和`

`PASSWORD(str) 返回字符串 str 的加密版本，这个加密过程是不可逆转的，和 UNIX 密码加密过程使用不同的算法。`

`SHA() 计算字符串 str 的安全散列算法(SHA)校验和`

### 其他

`version()版本`

`connection_id()连接数`

`database()=schema()当前数据库`

`user()=current_user()=system_user()=session_user()当前用户`

`last_insert_id()当前表的上一次auto_increment值`

`md5() password()加密`

`format(数字，2)千分位表示并只保留两位小数`
