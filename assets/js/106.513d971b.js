(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{581:function(t,a,s){"use strict";s.r(a);var _=s(10),v=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"程序运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序运行"}},[t._v("#")]),t._v(" 程序运行")]),t._v(" "),a("h3",{attrs:{id:"应用程序入口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用程序入口"}},[t._v("#")]),t._v(" 应用程序入口")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("必须是main包：package main，目录名可以不是main。")])]),t._v(" "),a("li",[a("p",[t._v("必须是main方法：func main()")])]),t._v(" "),a("li",[a("p",[t._v("文件名不一定是main.go")])])]),t._v(" "),a("h3",{attrs:{id:"退出返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#退出返回值"}},[t._v("#")]),t._v(" 退出返回值")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Go中main函数不支持任何返回值")])]),t._v(" "),a("li",[a("p",[t._v("通过os.Exit来返回状态")])])]),t._v(" "),a("h3",{attrs:{id:"获取命令行参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取命令行参数"}},[t._v("#")]),t._v(" 获取命令行参数")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("main函数不支持传入参数")])]),t._v(" "),a("li",[a("p",[t._v("在程序中直接通过os.Args获取命令行参数")])]),t._v(" "),a("li",[a("p",[t._v("os.Args[0]保存的是执行命令的全路径，os.Args[1:]保存的是传入参数")])])]),t._v(" "),a("h3",{attrs:{id:"编写测试程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写测试程序"}},[t._v("#")]),t._v(" 编写测试程序")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("源码文件以_test结尾：xxx_test.go")])]),t._v(" "),a("li",[a("p",[t._v("测试方法名以Test开头：func TestXXX(t *testing.T) {...}")])]),t._v(" "),a("li",[a("p",[t._v("使用go test来执行测试")])])]),t._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("h3",{attrs:{id:"类型转化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型转化"}},[t._v("#")]),t._v(" 类型转化")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Go语言中只有强制类型转换，没有隐式类型转换")])]),t._v(" "),a("li",[a("p",[t._v("别名和原有类型也不能进行隐式类型转换")])]),t._v(" "),a("li",[a("p",[t._v("对于无类型常量参与的表达式求值，Go 编译器会根据上下文中的类型信息，把无类型常量自动转换为相应的类型后，再参与求值计算")])])]),t._v(" "),a("h3",{attrs:{id:"指针类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指针类型"}},[t._v("#")]),t._v(" 指针类型")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("指针不能进行运算")])]),t._v(" "),a("li",[a("p",[t._v("函数参数传递都是值拷贝，如果希望函数内部修改外部变量可以传入指针")])]),t._v(" "),a("li",[a("p",[t._v("不同类型的指针不能相互赋值")])])]),t._v(" "),a("h3",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("string是数据类型，不是引用或指针类型。其默认的初始化值为空字符串，而不是nil")])]),t._v(" "),a("li",[a("p",[t._v("string是只读的byte slice，len函数可以它所包含的byte数")])]),t._v(" "),a("li",[a("p",[t._v("string的byte数组可以存放任何数据")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);