
### 原理
**每当执行npm run，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。**

### 简写


### npm init
 **(想偷懒免去一直按enter键，在命令后加yes就行    npm init --yes)**
 
**安装之前，npm install会先检查，node_modules目录之中是否已经存在指定模块。如果存在，就不再重新安装了，即使远程仓库已经有了一个新版本，也是如此。**

**如果你希望，一个模块不管是否安装过，npm 都要强制重新安装，可以使用-f或--force参数。**

### npm update
**如果想更新已安装模块，就要用到npm update命令**

### npm view  <packagename>
**查询服务，作用同 npm v react,npm info react,npm show react**

### 模块的安装过程
- 发出npm install命令
- npm 向 registry 查询模块压缩包的网址
- 下载压缩包，存放在~/.npm目录
- 解压压缩包到当前项目的node_modules目录

**注意，一个模块安装以后，本地其实保存了两份。一份是~/.npm目录下的压缩包，另一份是node_modules目录下解压后的代码。**

**但是，运行npm install的时候，只会检查node_modules目录，而不会检查~/.npm目录。也就是说，如果一个模块在～/.npm下有压缩包，但是没有安装在node_modules目录中，npm 依然会从远程仓库下载一次新的压缩包。**