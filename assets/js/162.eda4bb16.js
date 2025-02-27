(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{630:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/longest-common-subsequence/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),s("p",[t._v("给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。")]),t._v(" "),s("p",[t._v("一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。")]),t._v(" "),s("p",[t._v('例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。\n两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。')]),t._v(" "),s("p",[t._v("示例 1：")]),t._v(" "),s("p",[t._v('输入：text1 = "abcde", text2 = "ace"\n输出：3'),s("br"),t._v('\n解释：最长公共子序列是 "ace" ，它的长度为 3 。\n示例 2：')]),t._v(" "),s("p",[t._v('输入：text1 = "abc", text2 = "abc"\n输出：3\n解释：最长公共子序列是 "abc" ，它的长度为 3 。\n示例 3：')]),t._v(" "),s("p",[t._v('输入：text1 = "abc", text2 = "def"\n输出：0\n解释：两个字符串没有公共子序列，返回 0 。')]),t._v(" "),s("p",[t._v("提示：")]),t._v(" "),s("p",[t._v("1 <= text1.length, text2.length <= 1000\ntext1 和 text2 仅由小写英文字符组成。")]),t._v(" "),s("h2",{attrs:{id:"题解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),s("p",[t._v("使用动态规划的思想，"),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp[i][j]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("d")]),s("span",{staticClass:"mord mathnormal"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v("表示"),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("S")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mn",[t._v("0")]),s("mo",[t._v(":")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("S1[0:i]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord"},[t._v("0")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v(":")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v("和"),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("t")]),s("mi",[t._v("S")]),s("mn",[t._v("2")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mn",[t._v("0")]),s("mo",[t._v(":")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("tS2[0:j]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[t._v("tS")]),s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord"},[t._v("0")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v(":")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v("的最长公共子序列的长度,如果位于"),s("code",[t._v("i")]),t._v("和j`有如下状态转移方程：")],1),t._v(" "),s("section",[s("eqn",[s("span",{staticClass:"katex-display"},[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",[t._v("=")]),s("mrow",[s("mo",{attrs:{fence:"true"}},[t._v("{")]),s("mtable",{attrs:{rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"}},[s("mtr",[s("mtd",[s("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[s("mrow",[s("mi",[t._v("m")]),s("mi",[t._v("a")]),s("mi",[t._v("x")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("j")]),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mspace",{attrs:{width:"1em"}}),s("mi",[t._v("S")]),s("msub",[s("mn",[t._v("1")]),s("mi",[t._v("i")])],1),s("mo",{attrs:{stretchy:"false"}},[t._v("!")]),s("mo",[t._v("=")]),s("mi",[t._v("S")]),s("msub",[s("mn",[t._v("2")]),s("mi",[t._v("j")])],1)],1)],1)],1)],1),s("mtr",[s("mtd",[s("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("j")]),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mspace",{attrs:{width:"1em"}}),s("mi",[t._v("S")]),s("msub",[s("mn",[t._v("1")]),s("mi",[t._v("i")])],1),s("mo",[t._v("=")]),s("mo",[t._v("=")]),s("mi",[t._v("S")]),s("msub",[s("mn",[t._v("2")]),s("mi",[t._v("j")])],1)],1)],1)],1)],1)],1)],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\ndp[i,j]=\n\\begin{cases}\nmax(dp[i-1][j],dp[i][j-1]),\\quad S1_i!=S2_j \\\\[2ex]\ndp[i-1][j-1], \\quad S1_i==S2_j\n\\end{cases}\n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("d")]),s("span",{staticClass:"mord mathnormal"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"3.742em","vertical-align":"-1.621em"}}),s("span",{staticClass:"minner"},[s("span",{staticClass:"mopen"},[s("span",{staticClass:"delimsizing mult"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"2.05em"}},[s("span",{staticStyle:{top:"-2.5em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"3.15em"}}),s("span",{staticClass:"delimsizinginner delim-size4"},[s("span",[t._v("⎩")])])]),s("span",{staticStyle:{top:"-2.492em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"3.15em"}}),s("span",{staticStyle:{height:"0.016em",width:"0.8889em"}},[s("svg",{staticStyle:{width:"0.8889em"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0.8889em",height:"0.016em",viewBox:"0 0 888.89 16",preserveAspectRatio:"xMinYMin"}},[s("path",{attrs:{d:"M384 0 H504 V16 H384z M384 0 H504 V16 H384z"}})])])]),s("span",{staticStyle:{top:"-3.15em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"3.15em"}}),s("span",{staticClass:"delimsizinginner delim-size4"},[s("span",[t._v("⎨")])])]),s("span",{staticStyle:{top:"-4.292em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"3.15em"}}),s("span",{staticStyle:{height:"0.016em",width:"0.8889em"}},[s("svg",{staticStyle:{width:"0.8889em"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0.8889em",height:"0.016em",viewBox:"0 0 888.89 16",preserveAspectRatio:"xMinYMin"}},[s("path",{attrs:{d:"M384 0 H504 V16 H384z M384 0 H504 V16 H384z"}})])])]),s("span",{staticStyle:{top:"-4.3em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"3.15em"}}),s("span",{staticClass:"delimsizinginner delim-size4"},[s("span",[t._v("⎧")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"1.55em"}},[s("span")])])])])]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mtable"},[s("span",{staticClass:"col-align-l"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"2.121em"}},[s("span",{staticStyle:{top:"-4.121em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal"},[t._v("ma")]),s("span",{staticClass:"mord mathnormal"},[t._v("x")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal"},[t._v("d")]),s("span",{staticClass:"mord mathnormal"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("d")]),s("span",{staticClass:"mord mathnormal"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v("])")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mclose"},[t._v("!")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[s("span")])])])])])])]),s("span",{staticStyle:{top:"-1.819em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal"},[t._v("d")]),s("span",{staticClass:"mord mathnormal"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("==")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[s("span")])])])])])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"1.621em"}},[s("span")])])])])])]),s("span",{staticClass:"mclose nulldelimiter"})])])])])])])],1),s("h3",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("div",{staticClass:"language-JAVA line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("longestCommonSubsequence")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" text1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" text2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("text1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("text2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" text1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" text2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" text1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("text1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("text2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);