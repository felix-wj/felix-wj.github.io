(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{609:function(s,a,t){"use strict";t.r(a);var e=t(10),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"dockerfile-命令解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-命令解释"}},[s._v("#")]),s._v(" Dockerfile 命令解释")]),s._v(" "),a("ul",[a("li",[s._v("FROM : 基础镜像")]),s._v(" "),a("li",[s._v("MAINTAINER : 维护者信息")]),s._v(" "),a("li",[s._v("COPY 复制文件到镜像，./ 指的是Dockerfile当前上下文环境")]),s._v(" "),a("li",[s._v("ADD ：添加文件,与COPY类似，ADD会自动解压文件")]),s._v(" "),a("li",[s._v("RUN : 执行命令")]),s._v(" "),a("li",[s._v("WORKDIR :cd命令  指定目录，之后的操作在该目录下进行 . 上下文")]),s._v(" "),a("li",[s._v("VOLUME : 挂载目录")]),s._v(" "),a("li",[s._v("EXPOSE : 端口")]),s._v(" "),a("li",[s._v("ENTRYPOINT : 容器启动时执行命令")]),s._v(" "),a("li",[s._v("CMD 容器启动时执行命令,可以被docker run命令后的参数替换。如果同时存在ENTRYPOINT和CMD，CMD会被当作ENTRYPOINT的参数。")])]),s._v(" "),a("p",[s._v("Dockerfile写好后可以用 docker build config 进行检查，如果有问题会进行提示")]),s._v(" "),a("h2",{attrs:{id:"dockerfile文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile文件"}},[s._v("#")]),s._v(" Dockerfile文件")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基础镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" openjdk:8-jdk")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" TZ=Asia/Shanghai")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" sed -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/deb.debian.org/mirrors.ustc.edu.cn/g'")]),s._v(" /etc/apt/sources.list")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get install -y tini")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"构建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[s._v("#")]),s._v(" 构建镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" java8:ustc "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"测试运行容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试运行容器"}},[s._v("#")]),s._v(" 测试运行容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" java8:ustc "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("-it")]),s._v("：交互式")]),s._v(" "),a("li",[a("code",[s._v("--rm")]),s._v("：容器退出后删除")]),s._v(" "),a("li",[a("code",[s._v("bash")]),s._v("：进入容器后执行bash命令")])])])}),[],!1,null,null,null);a.default=r.exports}}]);