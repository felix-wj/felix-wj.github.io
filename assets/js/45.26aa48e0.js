(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{520:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"jcmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jcmd"}},[s._v("#")]),s._v(" jcmd")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("JPS")]),s._v("命令查看Java进程的"),a("code",[s._v("PID")]),s._v("，然后通过"),a("code",[s._v("JCMD")]),s._v("命令查看Java进程的启动参数。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印VM参数")]),s._v("\njcmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" VM.flags\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印线程堆栈")]),s._v("\njcmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Thread.print\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#打印堆空间大小和GC情况")]),s._v("\njcmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" GC.heap_info\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"jmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmap"}},[s._v("#")]),s._v(" jmap")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印堆内存使用情况")]),s._v("\njmap "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-heap")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印堆内存中对象的统计信息")]),s._v("\njmap "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-histo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 转储堆内存到文件")]),s._v("\njmap "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-dump:format")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("b,file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"jstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jstack"}},[s._v("#")]),s._v(" jstack")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印线程堆栈")]),s._v("\njstack "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印线程堆栈到文件")]),s._v("\njstack "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"jstat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jstat"}},[s._v("#")]),s._v(" jstat")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看GC情况")]),s._v("\njstat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-gc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看GC情况，每隔1000ms打印一次，打印10次")]),s._v("\njstat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-gc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"字段意义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段意义"}},[s._v("#")]),s._v(" 字段意义")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("S0C：第一个幸存区的大小，单位KB\nS1C：第二个幸存区的大小\nS0U：第一个幸存区的使用大小\nS1U：第二个幸存区的使用大小\nEC：伊甸园区的大小\nEU：伊甸园区的使用大小\nOC：老年代大小\nOU：老年代使用大小\nMC：方法区大小(元空间)\nMU：方法区使用大小\nCCSC:压缩类空间大小\nCCSU:压缩类空间使用大小\nYGC：年轻代垃圾回收次数\nYGCT：年轻代垃圾回收消耗时间，单位s\nFGC：老年代垃圾回收次数\nFGCT：老年代垃圾回收消耗时间，单位s\nGCT：垃圾回收消耗总时间，单位s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"jinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jinfo"}},[s._v("#")]),s._v(" jinfo")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看Java进程的启动参数")]),s._v("\njinfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);