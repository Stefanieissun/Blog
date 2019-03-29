### 原理图
![blockchain](https://user-gold-cdn.xitu.io/2018/3/23/16251a633280d5e8?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1)

### git init 
在文件夹里使用，如果不想被git监控,rm -rf .git

### vi 命令
vi 文件名 i:插入模式  esc退出编辑模式  :q!强制退出   :wq保存并退出

### 
git diff 工作区和暂存区作比较
git diff master 工作区和历史区/版本库作比较
git diff --cached 暂存区和历史区作比较

### 撤销
- 从暂存区中讲工作区内容覆盖掉
```
git checkout 文件名
```
-暂存区回到上一个版本
```
git reset HEAD 文件名
```

### 快速提交，直接加到版本库
一般 git add 
   git commit
```
git commit -a -m
```
需要提交过一次

### 查看提交记录
```
git log  
git reflog
```
### 版本回滚
```
git reset --hard 版本号
```
### 分支
- 查看分支
```
git branck
```
- 创建分支
```
 git branch 分支名
```
- 切换分支
```
 git checkout 分支名
```
- 删除分支
```
git branch -D 分支名
```
- 创建并且切换
```

```

### 配置用户
```
git config --list 
git config --global user.name

git config --global user.email
```