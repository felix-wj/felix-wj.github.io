(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{598:function(s,a,e){"use strict";e.r(a);var n=e(10),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("linux alias 命令用于设置指令的别名。语法格式为：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'指令名称'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("定义 alias 时，有时候会有用命令行参数的需求。但通过查证文档的结果是，alias 根本就不支持传递命令行参数。不过，我们可以变通的解决这个问题，即定义函数。")]),s._v(" "),a("p",[s._v("这里通过 alias 实现之前提到过的 “git一步完成文件的 add, commit 和 push功能的命令” 的为示例演示一下该功能的实现：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("g")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gmerge() { git add .; git commit -m \"$1\"; git push; }; gmerge'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://www.phpernote.com/linux/1431.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("来源"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"运用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运用"}},[s._v("#")]),s._v(" 运用")]),s._v(" "),a("h3",{attrs:{id:"合并代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并代码"}},[s._v("#")]),s._v(" 合并代码")]),s._v(" "),a("p",[s._v("下面使用这种方式写一个封装了一系列动作的别名：")]),s._v(" "),a("p",[s._v("每次在git分支下工作完成，都要切到dev分支进行合并、推送远端。为了避免切分支，代码变动过大导致IDEA卡顿，所以单独有个文件夹下放dev分支代码。所以每次都是先在项目分支推送远端，然后切换到dev路径下合并代码，推送远端。于是给这部分流程写到alias别名中，在命令行一行搞定。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gmerge")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'merge() {\n   echo "推送代码";\n   git push;\n   path=$(pwd) ;\n   echo "当前路径：${path}" ;\n   folderName=${path##*/} ;\n   branch=$(git rev-parse --abbrev-ref HEAD) ;\n   echo "当前分支：${branch}" ;\n   echo "当前文件夹名：${folderName}" ;\n   cd ../../merge/"${folderName}" ;\n   echo "当前目录：$(pwd)" ;\n   echo "拉取代码" ;\n   git pull ;\n   echo "合并分支 origin/${branch}" ;\n   git merge origin/"${branch}";\n   echo "推送代码" ;\n   git push;\n   echo "回到目录${path}" ;\n   cd ${path};\n   }; merge\'')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("其中主要难点：")]),s._v(" "),a("ol",[a("li",[s._v("工作中是多个项目组合开发，所以每次要进入到dev分支的项目路径不同")])]),s._v(" "),a("p",[s._v("例如在开发项目路径下:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--future\n----server(单独git项目 xxx分支)\n----web-api(单独git项目  xxx分支)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("用于合并到测试分支的项目路径：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--merge\n----server(单独git项目 dev分支)\n----web-api(单独git项目  dev分支)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("第一版的想法是将项目名和分支名作为参数输入，这样就能进入到merge目录下对应的项目目录，然后合并指定分支代码。")]),s._v(" "),a("p",[s._v("用了一段时间觉得输入项目名和分支名麻烦，于是改进成自动获取项目名和分支名，便有了上面最终版本。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://dulunar.github.io/2019/11/08/Linux-shell%E4%B8%AD%E6%8F%90%E5%8F%96%E6%96%87%E4%BB%B6%E5%90%8D%E5%92%8C%E8%B7%AF%E5%BE%84/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux shell中提取文件名和路径"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000020840822",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git打印且只打印本地分支名"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"删除其他分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除其他分支"}},[s._v("#")]),s._v(" 删除其他分支")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gclean")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git branch | grep -v \"$(git rev-parse --abbrev-ref HEAD)\" | xargs git branch -D'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[s._v("#")]),s._v(" 优化")]),s._v(" "),a("p",[s._v("上面的别名方式其实是整麻烦了，可以将方法直接写成shell脚本，然后放到环境变量中，这样就可以在任何地方使用了。")]),s._v(" "),a("p",[s._v("以下是一个简单的示例，演示如何创建一个名为"),a("code",[s._v("myFunction")]),s._v("的自定义方法：")]),s._v(" "),a("ol",[a("li",[s._v("创建一个新文件，例如“~/myFunctions.sh”。")]),s._v(" "),a("li",[s._v("输入以下内容：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("myFunction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, world!"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这个代码块定义了一个名为"),a("code",[s._v("myFunction")]),s._v("的函数，当调用它时，它将打印一条消息“Hello, world!”。")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[s._v("保存并关闭文件。")])]),s._v(" "),a("li",[a("p",[s._v("接下来，需要执行以下命令使脚本可执行：")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x ~/myFunctions.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("最后，需要将脚本添加到终端环境中，以便随时可以使用该自定义方法。可以在"),a("code",[s._v(".bashrc")]),s._v("或"),a("code",[s._v(".bash_profile")]),s._v("文件中添加以下行：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/myFunctions.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("保存并关闭文件，然后重新启动终端或运行"),a("code",[s._v("source ~/.bashrc")]),s._v("或"),a("code",[s._v("source ~/.bash_profile")]),s._v("命令来使更改生效。")])]),s._v(" "),a("p",[s._v("现在，就可以在终端中使用"),a("code",[s._v("myFunction")]),s._v("方法了。只需在终端中键入"),a("code",[s._v("myFunction")]),s._v("，它将打印出“Hello, world!”消息。")])])}),[],!1,null,null,null);a.default=t.exports}}]);