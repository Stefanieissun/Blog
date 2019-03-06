### cat

#### 主要功能

- 一次显示整个文件:cat filename
- 从键盘创建一个文件:cat > filename 只能创建新文件,不能编辑已有文件.
- 从键盘创建一个文件:cat > filename 只能创建新文件,不能编辑已有文件.

#### 命令参数

`-A, --show-all 等价于 -vET`

`-b, --number-nonblank 对非空输出行编号`

`-e 等价于 -vE`

`-E, --show-ends 在每行结束处显示 $`

`-n, --number 对输出的所有行编号,由1开始对所有输出的行数编号`

`-s, --squeeze-blank 有连续两行以上的空白行，就代换为一行的空白行`

`-t 与 -vT 等价`

`-T, --show-tabs 将跳格字符显示为 ^I`

`-u (被忽略)`

`-v, --show-nonprinting 使用 ^ 和 M- 引用，除了 LFD 和 TAB 之外`

#### demo1 把 log2012.log 的文件内容加上行号后输入 log2013.log 这个文件里
`cat -n log2012.log log2013.log`

#### demo2 把 log2012.log 和 log2013.log 的文件内容加上行号（空白行不加）之后将内容附加到 log.log 里。 
``