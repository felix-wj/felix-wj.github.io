(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{512:function(s,a,t){"use strict";t.r(a);var e=t(10),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"使用-top-找到占用-cpu-最高的-java-进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-top-找到占用-cpu-最高的-java-进程"}},[s._v("#")]),s._v(" 使用 top 找到占用 CPU 最高的 Java 进程")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("监控cpu运行状，显示进程运行信息列表")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("按CPU使用率排序，键入大写的P")])])]),s._v(" "),a("h2",{attrs:{id:"第二步-用-top-hp-命令查看占用-cpu-最高的线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步-用-top-hp-命令查看占用-cpu-最高的线程"}},[s._v("#")]),s._v(" 第二步，用 top -Hp 命令查看占用 CPU 最高的线程")]),s._v(" "),a("p",[s._v("执行"),a("code",[s._v("top -Hp pid")]),s._v("命令，pid 就是前面获得的 Java 进程，然后键入P (大写p)，线程按照CPU使用率排序\n，查到占用CPU最高的那个线程。")]),s._v(" "),a("h2",{attrs:{id:"查看堆栈信息-定位对应代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看堆栈信息-定位对应代码"}},[s._v("#")]),s._v(" 查看堆栈信息，定位对应代码")]),s._v(" "),a("p",[s._v("通过printf命令将其转化成16进制，之所以需要转化为16进制，是因为堆栈里，线程id是用16进制表示的。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%x'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16756")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("得到16进制的线程ID。")]),s._v(" "),a("p",[s._v("通过jstack命令查看堆栈信息")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("jstack "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16738")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0x4174'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--color")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);