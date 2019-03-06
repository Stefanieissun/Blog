### rm 命令

#### 参数

    -f,--force 忽略不存在的文件从而不给出提示
    -i，--interactive进行交互式删除
    -r,--recursive 将参数中列出的全部目录和子目录均递归删除
    -v， --verbose 详细显示进行的步骤
      	--help 显示此帮助信息并退出
      	--version 输出版本信息并退出

#### demo1 强行删除 file，系统不再提示。

`rm -f log1.log`

#### demo2 删除任何.log 文件；删除前注意询问确认删除

`rm -i *.log`

#### demo3 删除目录和目录中所有档案

`rm -r test1`

#### demo4 删除-f 开头的文件

`rm -- -f`
