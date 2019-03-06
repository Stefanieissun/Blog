### mv

#### 命令参数

`-b ：若需覆盖文件，则覆盖前先行备份。`

`-f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；`

`-i ：若目标文件 (destination) 已经存在时，就会询问是否覆盖！`

`-u ：若目标文件已经存在，且 source 比较新，才会更新(update)`

#### demo1 文件改名

`mv test1.log test2.txt`

#### demo2 移动文件 将 test2.js 移动到 Test 文件夹

`mv test2.js Test`

#### demo3 移动多个文件

`mv log1.txt log2.txt log3.txt test3`

#### demo4 将文件 file1 改名为 file2，如果 file2 已经存在，则询问是否覆盖

`mv -i log1.txt log2.tx`

#### demo5 将文件 file1 改名为 file2，即使 file2 存在，也是直接覆盖掉。

`rm -f log3.txt log2.ts`

#### demo6 目录的移动

`mv dir1 dir2`

#### demo7 移动当前文件夹下的所有文件到上一级目录

`mv * ../`

#### demo8 把当前目录的一个子目录里的文件移动到另一个子目录里

`mv test3/*.txt test5`
