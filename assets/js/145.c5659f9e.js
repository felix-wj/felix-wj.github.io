(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{611:function(a,s,t){"use strict";t.r(s);var r=t(10),v=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"位运算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位运算"}},[a._v("#")]),a._v(" 位运算")]),a._v(" "),s("h2",{attrs:{id:"进制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进制"}},[a._v("#")]),a._v(" 进制")]),a._v(" "),s("p",[a._v("整数各种进制的字面量如下：")]),a._v(" "),s("ul",[s("li",[a._v("十进制数，没有前缀")]),a._v(" "),s("li",[a._v("二进制数，前缀是0b")]),a._v(" "),s("li",[a._v("八进制数，前缀是0o")]),a._v(" "),s("li",[a._v("十六进制数，前缀是0x")])]),a._v(" "),s("h2",{attrs:{id:"操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作符"}},[a._v("#")]),a._v(" 操作符")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("&  |  ^  ~\n>> 右移 用符号位填充高位\n<< 左移\n>>> 右移，用0填充高位\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"与"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与"}},[a._v("#")]),a._v(" & 与")]),a._v(" "),s("ol",[s("li",[a._v("判断奇偶")]),a._v(" "),s("li",[a._v("获取某个位上是0还是1    x & 1<<n")]),a._v(" "),s("li",[a._v("判断二进制中1的个数")])]),a._v(" "),s("ul",[s("li",[a._v("方法一：逐个数各个位 右移原数与1与运算，负数可能陷入死循环，可以右移1，与原数与运算")]),a._v(" "),s("li",[a._v("方法二：n&(n-1)  每次消除最低位的1，直到n为0")])]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[a._v("判断一个数是不是2的整数次方    即问整数的2进制中是不是只有1个1")])]),a._v(" "),s("p",[a._v("利用3中的方法二，n&(n-1)==0，则是2的整数次方")]),a._v(" "),s("h2",{attrs:{id:"异或"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异或"}},[a._v("#")]),a._v(" ^ 异或")]),a._v(" "),s("h3",{attrs:{id:"性质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性质"}},[a._v("#")]),a._v(" 性质")]),a._v(" "),s("p",[a._v("满足 交换律 结合律"),s("br"),a._v("\nA^A=0  A^0=A")]),a._v(" "),s("h3",{attrs:{id:"应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[a._v("#")]),a._v(" 应用")]),a._v(" "),s("ol",[s("li",[a._v("交换两个数\na=a^b; b=a^b;  a=a^b;")])]),a._v(" "),s("p",[s("em",[a._v("需要注意的是，如果a和b指向同一个地址，那么将得到0值")])]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("不使用判断语句求绝对值\na+(a>>31) ^ (a>>31)")])]),a._v(" "),s("p",[a._v("a为正数   a>>31=0，a+(a>>31)=a,  a^0=a")]),a._v(" "),s("p",[a._v("a为负数   a>>31=-1  a-1得到原码，原码取反得到正数")]),a._v(" "),s("p",[a._v("负数的二进制为补码    求补码的过程  正数原码  --\x3e  求反得到反码  --\x3e  再加1得到补码")]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[a._v("找出唯一成对的数")])]),a._v(" "),s("p",[a._v("1-1000中，999个数都出现了一次，只有一个数出现了两次，找出这个数。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("利用异或的性质，相同的数异或为0，0与任何数异或为任何数本身，将1-1000的数全部异或，再与目标数组异或，得到的数就是目标数。\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[a._v("找出落单的数")]),a._v(" "),s("p",[a._v("将所有数异或，得到的数就是落单的数。")])]),a._v(" "),s("li",[s("p",[a._v("二进制数奇偶互换")])])]),a._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[a._v("  odd "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x55555555")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 取所有奇数位")]),a._v("\n  even "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0xaaaaaaaa")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//取所有偶数位")]),a._v("\nodd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),a._v(" even"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"运算优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运算优先级"}},[a._v("#")]),a._v(" 运算优先级")]),a._v(" "),s("p",[a._v("指针最优，单目运算优于双目运算。如正负号。"),s("br"),a._v("\n先算术运算，后移位运算，最后位运算。")]),a._v(" "),s("h2",{attrs:{id:"浮点数转二进制数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浮点数转二进制数"}},[a._v("#")]),a._v(" 浮点数转二进制数")]),a._v(" "),s("p",[a._v("整数部分 除以2 有余数计1，无余数计0， 余数继续除以2 依次确定低位到高位"),s("br"),a._v("\n小数部分 乘以2，大于等于1 ，计1结果减去1；小于1计0；继续乘以2")]),a._v(" "),s("h2",{attrs:{id:"不进位加法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不进位加法"}},[a._v("#")]),a._v(" 不进位加法")]),a._v(" "),s("ol",[s("li",[a._v("一个整数数列有只出现1次的数a,其他数均出现k次，求a"),s("br"),a._v("\nk进制下，k个n相加，末位为0。"),s("br"),a._v("\n解法是 将数字全部转为k进制，然后将相应位上的数相加对k取模，作为该位的值，得到的数就是只出现一次的数的k进制形式，再转成十进制即可。")])])])}),[],!1,null,null,null);s.default=v.exports}}]);