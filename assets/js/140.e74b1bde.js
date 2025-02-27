(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{608:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"变量问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量问题"}},[s._v("#")]),s._v(" 变量问题")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("${}")]),s._v("设置变量，例如 "),a("code",[s._v("image: product:${IMAGE_VERSION}")]),s._v("，使用命令"),a("code",[s._v("IMAGE_VERSION=1.0.0 docker-compose up")]),s._v("启动可将变量传入。")]),s._v(" "),a("p",[s._v("但是如果是shell命令中要使用"),a("code",[s._v("$")]),s._v("取值，而不是作为变量传入，则需要"),a("code",[s._v("&&")]),s._v("进行转义.")]),s._v(" "),a("p",[s._v("例如"),a("code",[s._v("Java")]),s._v("项目设置"),a("code",[s._v('JAVA_OPTS: "-Xloggc:/root/log/dump/allspark-vc/gc-$$(date +%Y%m%d%H%M%S).log"')]),s._v("，这里希望日志文件是动态命名的，所以需要使用"),a("code",[s._v("$(date +%Y%m%d%H%M%S)")]),s._v("取值，为了与变量区分，所以使用"),a("code",[s._v("$$(date +%Y%m%d%H%M%S)")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"变量默认值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量默认值"}},[s._v("#")]),s._v(" 变量默认值")]),s._v(" "),a("p",[s._v("格式"),a("code",[s._v("${变量名:-默认值}")]),s._v("，注意需要有"),a("code",[s._v(":-")]),s._v("，例如"),a("code",[s._v("image: product:${IMAGE_VERSION:-1.0.0}")]),s._v("，如果"),a("code",[s._v("IMAGE_VERSION")]),s._v("未定义，则默认为"),a("code",[s._v("1.0.0")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"描点与引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描点与引用"}},[s._v("#")]),s._v(" 描点与引用")]),s._v(" "),a("p",[a("code",[s._v("&")]),s._v("定义描点")]),s._v(" "),a("p",[a("code",[s._v("*")]),s._v("引用描点")]),s._v(" "),a("p",[a("code",[s._v("<<")]),s._v("插入描点")]),s._v(" "),a("p",[a("code",[s._v("x-")]),s._v("自定义字段,不会被"),a("code",[s._v("docker-compose")]),s._v("解析，可以用于定义变量、模板等。")]),s._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("h4",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[s._v("#")]),s._v(" 基本用法")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 &base-service 定义一个锚点")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app-base")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&base-service")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("alpine\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("file\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("max-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10m"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("max-file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 << 和 * 引用并扩展基础配置")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("*base-service")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 引用并合并 base-service 的所有配置")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"80:80"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/nginx/html\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 另一个服务也引用相同的基础配置")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("*base-service")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 引用并合并 base-service 的所有配置")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080:80"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" API_MODE=production\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h4",{attrs:{id:"多描点组合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多描点组合"}},[s._v("#")]),s._v(" 多描点组合")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义通用的环境变量锚点")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("x-environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&common-env")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("POSTGRES_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" user\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("POSTGRES_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" password\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义通用的卷配置锚点")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("x-volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&db-volumes")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/postgresql/data\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("*common-env")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并环境变量")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("POSTGRES_DB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" maindb\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("*db-volumes")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接引用卷配置")]),s._v("\n    \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db-test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("*common-env")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复用相同的环境变量")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("POSTGRES_DB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" testdb\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("*db-volumes")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复用相同的卷配置")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db-data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h4",{attrs:{id:"描点覆盖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描点覆盖"}},[s._v("#")]),s._v(" 描点覆盖")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("base")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&base")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("working_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /app\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("*base")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 引入基本配置")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 覆盖基本配置中的镜像")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3000:3000"')]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加新属性")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm start  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加新属性")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);