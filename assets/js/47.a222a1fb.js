(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{515:function(a,s,t){"use strict";t.r(s);var e=t(10),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"查看gc信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看gc信息"}},[a._v("#")]),a._v(" 查看gc信息")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("jstat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-gc")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("PID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/01/15/pEbjghDYtcUxNaP.png",alt:"gc信息"}})]),a._v(" "),s("p",[a._v("发现老年代占用过大")]),a._v(" "),s("h2",{attrs:{id:"查看堆内存对象统计信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看堆内存对象统计信息"}},[a._v("#")]),a._v(" 查看堆内存对象统计信息")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("jmap "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-histo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("PID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/01/15/VHdAgksYDr6eBSZ.png",alt:"内存对象统计"}})]),a._v(" "),s("p",[a._v("发现有大量的"),s("code",[a._v("HashMap$Node")]),a._v("和"),s("code",[a._v("JSONArray")]),a._v("对象")]),a._v(" "),s("h2",{attrs:{id:"转储堆内存到文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转储堆内存到文件"}},[a._v("#")]),a._v(" 转储堆内存到文件")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("jmap "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-dump:format")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("b,file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("head_dump.hprof "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("PID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("jmap -dump:format=b,file=stock_head_dump_0212_1.hprof 7")]),a._v(" "),s("h2",{attrs:{id:"使用-jprofiler-分析堆内存文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-jprofiler-分析堆内存文件"}},[a._v("#")]),a._v(" 使用 JProfiler 分析堆内存文件")]),a._v(" "),s("p",[a._v("通过"),s("code",[a._v("最大对象")]),a._v("选项查看占用内存最多的对象")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/01/15/Oud9R8vSz67weVU.png",alt:"20250115131410"}})]),a._v(" "),s("p",[a._v("点击该对象右键选择"),s("code",[a._v("使用选定对象")]),a._v("，选择"),s("code",[a._v("引用->传入引用")]),a._v("查看该对象的引用链\n"),s("img",{attrs:{src:"https://s2.loli.net/2025/01/15/o7E5OpHySfVdFgJ.png",alt:"20250115131925"}})]),a._v(" "),s("p",[a._v("根据堆栈信息定位到代码中的问题")])])}),[],!1,null,null,null);s.default=r.exports}}]);