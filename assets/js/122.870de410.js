(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{589:function(v,_,e){"use strict";e.r(_);var t=e(10),s=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"ps"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ps"}},[v._v("#")]),v._v(" ps")]),v._v(" "),_("p",[_("code",[v._v("ps")]),v._v("命令用于显示当前系统的进程状态。")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("ps -ef")]),v._v(" 显示所有进程")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("ps -aux")]),v._v(" 显示所有进程")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("ps -eo pid,%mem,rss,command")]),v._v(" 显示进程ID、内存使用率、实际内存使用量、命令")])])]),v._v(" "),_("h2",{attrs:{id:"top"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#top"}},[v._v("#")]),v._v(" TOP")]),v._v(" "),_("p",[_("code",[v._v("top")]),v._v(" 命令是一个实时显示系统中各个进程资源占用状况的工具。以下是 "),_("code",[v._v("top")]),v._v(" 命令输出中各个参数的含义：")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("top")]),v._v("：命令名称和版本号。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("up")]),v._v("：系统运行时间。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("user")]),v._v("：当前登录用户数。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("load average")]),v._v("：系统的平均负载，分别为1分钟、5分钟和15分钟的平均值。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("Tasks")]),v._v("：任务（进程）的总数。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("running")]),v._v("：正在运行的进程数。")]),v._v(" "),_("li",[_("code",[v._v("sleeping")]),v._v("：睡眠中的进程数。")]),v._v(" "),_("li",[_("code",[v._v("stopped")]),v._v("：停止的进程数。")]),v._v(" "),_("li",[_("code",[v._v("zombie")]),v._v("：僵尸进程数。")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("Cpu(s)")]),v._v("：CPU的使用情况。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("us")]),v._v("：用户空间占用CPU的百分比。")]),v._v(" "),_("li",[_("code",[v._v("sy")]),v._v("：内核空间占用CPU的百分比。")]),v._v(" "),_("li",[_("code",[v._v("ni")]),v._v("：用户进程空间内改变过优先级的进程占用CPU的百分比。")]),v._v(" "),_("li",[_("code",[v._v("id")]),v._v("：空闲CPU百分比。")]),v._v(" "),_("li",[_("code",[v._v("wa")]),v._v("：等待I/O的CPU时间百分比。")]),v._v(" "),_("li",[_("code",[v._v("hi")]),v._v("：硬件中断占用CPU的百分比。")]),v._v(" "),_("li",[_("code",[v._v("si")]),v._v("：软件中断占用CPU的百分比。")]),v._v(" "),_("li",[_("code",[v._v("st")]),v._v("：被虚拟机偷去的CPU时间百分比。")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("Mem")]),v._v("：内存使用情况。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("total")]),v._v("：总内存大小。")]),v._v(" "),_("li",[_("code",[v._v("free")]),v._v("：空闲内存大小。")]),v._v(" "),_("li",[_("code",[v._v("used")]),v._v("：已使用内存大小。")]),v._v(" "),_("li",[_("code",[v._v("buff/cache")]),v._v("：缓冲/缓存内存大小。")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("Swap")]),v._v("：交换分区使用情况。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("total")]),v._v("：总交换分区大小。")]),v._v(" "),_("li",[_("code",[v._v("free")]),v._v("：空闲交换分区大小。")]),v._v(" "),_("li",[_("code",[v._v("used")]),v._v("：已使用交换分区大小。")]),v._v(" "),_("li",[_("code",[v._v("avail Mem")]),v._v("：可用内存大小。")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("PID")]),v._v("：进程ID。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("USER")]),v._v("：进程所有者。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("PR")]),v._v("：进程优先级。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("NI")]),v._v("：进程的nice值。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("VIRT")]),v._v("：进程使用的虚拟内存总量。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("RES")]),v._v("：进程使用的物理内存总量。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("SHR")]),v._v("：进程使用的共享内存总量。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("%CPU")]),v._v("：进程占用的CPU百分比。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("%MEM")]),v._v("：进程占用的内存百分比。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("TIME+")]),v._v("：进程使用的CPU时间总计。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("COMMAND")]),v._v("：进程的命令名称/命令行。")])])]),v._v(" "),_("p",[v._v("输入"),_("code",[v._v("P")]),v._v("按cpu使用率排序，"),_("code",[v._v("M")]),v._v("按内存使用率排序,输入'R'反转排序。")]),v._v(" "),_("h3",{attrs:{id:"load-average"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#load-average"}},[v._v("#")]),v._v(" load average")]),v._v(" "),_("p",[v._v("load average有三个值，分别表示1分钟、5分钟、15分钟的负载情况，大于核心数时，表示系统负载过高。")]),v._v(" "),_("p",[v._v("平均负载是指单位时间内，系统处于可运行状态和不可中断状态的平均进程数，也就是平均活跃进程数，即R+D状态的进程数量。代表的是当前系统对cpu的负担情况，平均负载要结合当前系统所拥有的cpu个数来看 ，理想情况下：平均负载等于CPU个数")]),v._v(" "),_("h4",{attrs:{id:"负载过高"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#负载过高"}},[v._v("#")]),v._v(" 负载过高")]),v._v(" "),_("p",[v._v("说明进程占用CPU时间过多，或者进程等待CPU时间过多，造成进程任务排队。")]),v._v(" "),_("p",[v._v("shift +t可以按照 CPU TIME 进行排序。找到对应进程ID。")]),v._v(" "),_("h3",{attrs:{id:"cpu使用率"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu使用率"}},[v._v("#")]),v._v(" CPU使用率")]),v._v(" "),_("p",[v._v("CPU使用率 = CPU时间片被程序使用的时间 / 总时间")]),v._v(" "),_("h4",{attrs:{id:"cpu使用率过高"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu使用率过高"}},[v._v("#")]),v._v(" CPU使用率过高")]),v._v(" "),_("p",[v._v("可能是程序运行出错，出现了死循环。输入"),_("code",[v._v("P")]),v._v("按cpu使用率排序，找到使用率最高的进程ID。")]),v._v(" "),_("h3",{attrs:{id:"查看单个进程的情况"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查看单个进程的情况"}},[v._v("#")]),v._v(" 查看单个进程的情况")]),v._v(" "),_("p",[_("code",[v._v("top -Hp pid")]),v._v("命令查看各个线程的情况。对应线程ID是十进制。")]),v._v(" "),_("h3",{attrs:{id:"查看内存使用情况"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查看内存使用情况"}},[v._v("#")]),v._v(" 查看内存使用情况")]),v._v(" "),_("h4",{attrs:{id:"virt-virtual-memory-size"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#virt-virtual-memory-size"}},[v._v("#")]),v._v(" "),_("code",[v._v("VIRT")]),v._v("（Virtual Memory Size）")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("含义")]),v._v("：进程使用的虚拟内存总量，包括所有代码、数据、共享库、以及分配但未实际使用的内存。")]),v._v(" "),_("li",[_("strong",[v._v("理解")]),v._v("：这是进程可以访问的所有内存的总和，包括物理内存和交换空间。它包括：\n"),_("ul",[_("li",[v._v("进程实际使用的物理内存（"),_("code",[v._v("RES")]),v._v("）。")]),v._v(" "),_("li",[v._v("进程使用的共享内存（"),_("code",[v._v("SHR")]),v._v("）。")]),v._v(" "),_("li",[v._v("进程分配但未实际使用的内存。")]),v._v(" "),_("li",[v._v("进程使用的交换空间。")])])])]),v._v(" "),_("h4",{attrs:{id:"res-resident-set-size"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#res-resident-set-size"}},[v._v("#")]),v._v(" "),_("code",[v._v("RES")]),v._v("（Resident Set Size）")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("含义")]),v._v("：进程使用的物理内存总量，不包括交换空间。")]),v._v(" "),_("li",[_("strong",[v._v("理解")]),v._v("：这是进程实际驻留在物理内存中的部分。它包括：\n"),_("ul",[_("li",[v._v("进程的代码段。")]),v._v(" "),_("li",[v._v("进程的数据段。")]),v._v(" "),_("li",[v._v("进程使用的共享库的物理内存部分。")]),v._v(" "),_("li",[v._v("进程的堆栈。")])])])]),v._v(" "),_("h4",{attrs:{id:"shr-shared-memory-size"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#shr-shared-memory-size"}},[v._v("#")]),v._v(" "),_("code",[v._v("SHR")]),v._v("（Shared Memory Size）")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("含义")]),v._v("：进程使用的共享内存总量。")]),v._v(" "),_("li",[_("strong",[v._v("理解")]),v._v("：这是进程与其他进程共享的内存部分。它包括：\n"),_("ul",[_("li",[v._v("共享库的内存。")]),v._v(" "),_("li",[v._v("其他进程共享的内存段。")])])])]),v._v(" "),_("h4",{attrs:{id:"示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[v._v("#")]),v._v(" 示例")]),v._v(" "),_("p",[v._v("假设某个进程的 "),_("code",[v._v("top")]),v._v(" 输出如下：")]),v._v(" "),_("div",{staticClass:"language-plaintext line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-plaintext"}},[_("code",[v._v("  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND\n 1234 user      20   0  500000  20000  10000 S   0.0  0.5   0:00.00 example\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("ul",[_("li",[_("code",[v._v("VIRT")]),v._v(" 为 500000 KB，表示该进程可以访问的虚拟内存总量为 500 MB。")]),v._v(" "),_("li",[_("code",[v._v("RES")]),v._v(" 为 20000 KB，表示该进程实际使用的物理内存为 20 MB。")]),v._v(" "),_("li",[_("code",[v._v("SHR")]),v._v(" 为 10000 KB，表示该进程使用的共享内存为 10 MB。")])]),v._v(" "),_("p",[v._v("通过理解这些指标，你可以更好地分析进程的内存使用情况，判断系统资源的分配和使用效率。")]),v._v(" "),_("h2",{attrs:{id:"vmstat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vmstat"}},[v._v("#")]),v._v(" vmstat")]),v._v(" "),_("p",[v._v("实时显示系统的虚拟内存、进程、CPU等信息。一般vmstat工具的使用是通过两个数字参数来完成的，第一个参数是采样的时间间隔数，单位是秒，第二个参数是采样的次数。")]),v._v(" "),_("p",[v._v("r 表示运行队列(就是说多少个进程真的分配到CPU)，当这个值超过了CPU数目，就会出现CPU瓶颈了。这个也和top的负载有关系，一般负载超过了3就比较高，超过了5就高，超过了10就不正常了，服务器的状态很危险。top的负载类似每秒的运行队列。如果运行队列过大，表示你的CPU很繁忙，一般会造成CPU使用率很高。")]),v._v(" "),_("p",[v._v("b 表示阻塞的进程。")]),v._v(" "),_("p",[v._v("swpd 虚拟内存已使用的大小，如果大于0，表示你的机器物理内存不足了，如果不是程序内存泄露的原因，那么你该升级内存了或者把耗内存的任务迁移到其他机器。")]),v._v(" "),_("p",[v._v("free   空闲的物理内存的大小。")]),v._v(" "),_("p",[v._v("si  每秒从磁盘读入虚拟内存的大小，如果这个值大于0，表示物理内存不够用或者内存泄露了，要查找耗内存进程解决掉。我的机器内存充裕，一切正常。")]),v._v(" "),_("p",[v._v("so  每秒虚拟内存写入磁盘的大小，如果这个值大于0，同上。")]),v._v(" "),_("p",[v._v("in 每秒CPU的中断次数，包括时间中断")]),v._v(" "),_("p",[v._v("cs 每秒上下文切换次数，例如我们调用系统函数，就要进行上下文切换，线程的切换，也要进程上下文切换，这个值要越小越好，太大了，要考虑调低线程或者进程的数目,例如在apache和nginx这种web服务器中，我们一般做性能测试时会进行几千并发甚至几万并发的测试，选择web服务器的进程可以由进程或者线程的峰值一直下调，压测，直到cs到一个比较小的值，这个进程和线程数就是比较合适的值了。系统调用也是，每次调用系统函数，我们的代码就会进入内核空间，导致上下文切换，这个是很耗资源，也要尽量避免频繁调用系统函数。上下文切换次数过多表示你的CPU大部分浪费在上下文切换，导致CPU干正经事的时间少了，CPU没有充分利用，是不可取的。")]),v._v(" "),_("p",[v._v("us 用户CPU时间。")]),v._v(" "),_("p",[v._v("sy 系统CPU时间，如果太高，表示系统调用时间长，例如是IO操作频繁。")]),v._v(" "),_("p",[v._v("id  空闲 CPU时间，一般来说，id + us + sy = 100,一般我认为id是空闲CPU使用率，us是用户CPU使用率，sy是系统CPU使用率。")]),v._v(" "),_("p",[v._v("wt 等待IO CPU时间。")]),v._v(" "),_("h2",{attrs:{id:"lsof"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#lsof"}},[v._v("#")]),v._v(" lsof")]),v._v(" "),_("p",[_("code",[v._v("lsof(list open files)")]),v._v("是一个列出当前系统打开文件的工具。")]),v._v(" "),_("p",[v._v("lsof 查看端口占用语法格式："),_("code",[v._v("lsof -i:端口号")])]),v._v(" "),_("h2",{attrs:{id:"netstat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#netstat"}},[v._v("#")]),v._v(" netstat")]),v._v(" "),_("p",[_("code",[v._v("netstat -tunlp")]),v._v(" 用于显示 tcp，udp 的端口和进程等相关情况。")]),v._v(" "),_("p",[v._v("netstat 查看端口占用语法格式："),_("code",[v._v("netstat -tunlp | grep 端口号")])]),v._v(" "),_("ul",[_("li",[v._v("-t (tcp) 仅显示tcp相关选项")]),v._v(" "),_("li",[v._v("-u (udp)仅显示udp相关选项")]),v._v(" "),_("li",[v._v("-n 拒绝显示别名，能显示数字的全部转化为数字")]),v._v(" "),_("li",[v._v("-l 仅列出在Listen(监听)的服务状态")]),v._v(" "),_("li",[v._v("-p 显示建立相关链接的程序名")])])])}),[],!1,null,null,null);_.default=s.exports}}]);