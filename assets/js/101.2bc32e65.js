(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{570:function(s,e,a){"use strict";a.r(e);var r=a(10),t=Object(r.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("a",{attrs:{href:"https://blog.tag.gg/showinfo-3-36184-0.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("原文"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("2022年1月1日起CentOS官方将不再对CentOS 8提供服务支持,虽然系统可以正常使用,但CentOS 8的yum源已经移除无法使用了,使用yum安装会报错："),e("code",[s._v("Repository extras is listed more than once in the configuration CentOS Linux 8 - AppStream Errors during downloading metadata for repository 'appstream': - Status code: 404 for")])]),s._v(" "),e("p",[s._v("完整报错如下：")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Repository extras is listed more than once in the configuration\nCentOS Linux 8 - AppStream                                                                            18 kB/s | 2.3 kB     00:00    \nErrors during downloading metadata for repository 'appstream':\n  - Status code: 404 for http://mirrors.cloud.aliyuncs.com/centos/8/AppStream/x86_64/os/repodata/repomd.xml (IP: 100.100.2.148)\nError: Failed to download metadata for repo 'appstream': Cannot download repomd.xml: Cannot download repodata/repomd.xml: All mirrors were tried\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("解决方法：针对该问题,阿里云也提供了解决方法,可依次执行如下命令即可解决\n该方法只适用于阿里云的ECS服务器,其他IDC公司的服务器可参考教程操作："),e("a",{attrs:{href:"https://blog.tag.gg/showinfo-3-36185-0.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.tag.gg/showinfo-3-36185-0.html"),e("OutboundLink")],1),s._v("\n1、执行如下命令先将之前的yum文件备份：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rename")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.repo'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.repo.bak'")]),s._v(" /etc/yum.repos.d/*.repo \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2、运行以下命令下载最新的repo文件：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" /etc/yum.repos.d/Centos-vault-8.5.2111.repo\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://mirrors.aliyun.com/repo/epel-archive-8.repo "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" /etc/yum.repos.d/epel-archive-8.repo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("3、运行以下命令替换repo文件中的链接：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/mirrors.cloud.aliyuncs.com/url_tmp/g'")]),s._v("  /etc/yum.repos.d/Centos-vault-8.5.2111.repo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/mirrors.aliyun.com/mirrors.cloud.aliyuncs.com/g'")]),s._v(" /etc/yum.repos.d/Centos-vault-8.5.2111.repo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/url_tmp/mirrors.aliyun.com/g'")]),s._v(" /etc/yum.repos.d/Centos-vault-8.5.2111.repo\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/mirrors.aliyun.com/mirrors.cloud.aliyuncs.com/g'")]),s._v(" /etc/yum.repos.d/epel-archive-8.repo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("4、运行以下命令重新创建缓存,若没报错,则正常了。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum clean all "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" yum makecache\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("注意：若使用阿里云服务器参考本教程重新执行后还有问题,请将 进入 /etc/yum.repos.d/ 目录,将之前下载的yum文件（repo）改名后再重新按照本教程操作一次即可")])])}),[],!1,null,null,null);e.default=t.exports}}]);