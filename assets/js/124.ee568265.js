(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{599:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[s._v("#")]),s._v(" 命令")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://learn.microsoft.com/zh-cn/windows/wsl/install",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("安装默认"),a("code",[s._v("Linux")]),s._v("版本")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看Linux发行版本")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("online\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装默认版本 Ubuntu")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("install\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装特定的 Linux 发行版")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("distribution <Distribution Name>\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出已安装的 Linux 发行版")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("verbose\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 WSL 版本设置为 1 或 2")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set-version")]),s._v(" <distribution name> <versionNumber>\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置默认 WSL 版本")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set-default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("version <Version>\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置默认 Linux 发行版")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set-default")]),s._v(" <Distribution Name>\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新 WSL")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("update\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查 WSL 状态")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("status\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("shutdown\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"迁移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迁移"}},[s._v("#")]),s._v(" 迁移")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先终止正在运行的wsl")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--shutdown")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将需要迁移的Linux，进行导出")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--export")]),s._v(" Ubuntu D:/export.tar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出完成之后，就需要将原有的分发进行卸载")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--unregister")]),s._v(" Ubuntu\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后将导出的文件放到需要保存的地方，进行导入即可")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--import")]),s._v(" Ubuntu D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("export"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("export.tar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"配置代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置代理"}},[s._v("#")]),s._v(" 配置代理")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://solidspoon.xyz/2021/02/17/%E9%85%8D%E7%BD%AEWSL2%E4%BD%BF%E7%94%A8Windows%E4%BB%A3%E7%90%86%E4%B8%8A%E7%BD%91/",target:"_blank",rel:"noopener noreferrer"}},[s._v("配置 WSL2 使用 Windows 代理上网 "),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hostip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/resolv.conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-oP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(?<=nameserver\\ ).*'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("setss")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'export https_proxy="http://${hostip}:7890";export http_proxy="http://${hostip}:7890";export all_proxy="socks5://${hostip}:7890";\'')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("unsetss")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'unset all_proxy'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("需要代理的时候输入 "),a("code",[s._v("setss")]),s._v(" 即可设置代理，取消代理就 "),a("code",[s._v("unsetss")]),s._v(" ，或者新开一个窗口。")]),s._v(" "),a("h2",{attrs:{id:"开启ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启ssh"}},[s._v("#")]),s._v(" 开启SSH")]),s._v(" "),a("p",[s._v("切换到"),a("code",[s._v("root")]),s._v("用户，并编辑配置文件：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改以下四个位置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Port = 22 # 去掉前面的#号\nListenAddress 0.0.0.0\t\t#去掉前面的#号\nPasswordAuthentication yes # 将 no 改为 yes 表示使用帐号密码方式登录\nPermitRootLogin yes # 允许root用户登录\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("重启"),a("code",[s._v("sshd")]),s._v("服务")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("dpkg-reconfigure openssh-server\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用于安装RSA_KEY")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" restart \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启SSH服务")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"一些问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些问题"}},[s._v("#")]),s._v(" 一些问题")]),s._v(" "),a("h3",{attrs:{id:"wsl-ping-不通主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wsl-ping-不通主机"}},[s._v("#")]),s._v(" wsl ping 不通主机")]),s._v(" "),a("p",[s._v("需要设置主机防火墙规则,详情参考"),a("a",{attrs:{href:"https://github.com/microsoft/WSL/issues/4585",target:"_blank",rel:"noopener noreferrer"}},[s._v(" WSL 的 Issue"),a("OutboundLink")],1),s._v(" "),a("code",[s._v('New-NetFirewallRule -DisplayName "WSL" -Direction Inbound -InterfaceAlias "vEthernet (WSL)" -Action Allow')])]),s._v(" "),a("h3",{attrs:{id:"clash开启tun模式-wsl无法联网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clash开启tun模式-wsl无法联网"}},[s._v("#")]),s._v(" Clash开启TUN模式，wsl无法联网")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("调整 WSL 网络配置：打开 WSL 终端并执行以下命令来编辑 WSL 的网络配置文件 "),a("code",[s._v("/etc/wsl.conf")]),s._v("：")]),s._v(" "),a("p",[s._v("如果文件不存在，创建一个新的文件。添加以下内容：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[network]\ngenerateResolvConf = false\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这将阻止 WSL 自动生成 DNS 配置文件并使用系统级 DNS 配置。")])]),s._v(" "),a("li",[a("p",[s._v("设置 WSL DNS 配置：在 WSL 终端中，编辑 "),a("code",[s._v("/etc/resolv.conf")]),s._v(" 文件，并确保其内容与 Windows 主机系统的 DNS 设置相匹配，以确保正确的 DNS 解析。")]),s._v(" "),a("p",[s._v('例如，如果在 Windows 主机上的 DNS 服务器是 "192.168.1.1"，那么你的 /etc/resolv.conf 文件应该类似于：')]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nameserver 192.168.1.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("检查 Clash 配置：确保 Clash 客户端的 TUN 模式配置正确，并且上游代理等相关设置正确。")])]),s._v(" "),a("li",[a("p",[s._v("检查防火墙和安全软件：确保 Windows 防火墙、杀毒软件或其他安全软件没有阻止 WSL 访问互联网。尝试临时禁用防火墙或者按照 Clash 和 WSL 的网络需求进行必要的防火墙和安全软件配置。")])]),s._v(" "),a("li",[a("p",[s._v("重新启动网络服务：在 WSL 终端中，尝试重新启动网络服务以应用新的配置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("service networking restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"clash-开启tun模式后-git无法无法使用-git-clone-push-kex-ssh-密钥错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clash-开启tun模式后-git无法无法使用-git-clone-push-kex-ssh-密钥错误"}},[s._v("#")]),s._v(" CLash 开启TUN模式后，git无法无法使用 git clone/push，kex ssh 密钥错误")]),s._v(" "),a("p",[s._v("开启TUN模式后，clash接管全局的网络，但是clash不支持22端口，所以指定git使用443端口即可")]),s._v(" "),a("p",[s._v("编辑"),a("code",[s._v("~/.ssh/config")]),s._v("文件，添加以下内容")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Host github.com\n    Hostname ssh.github.com\n    Port 443\n    User git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://github.com/vernesong/OpenClash/issues/1960",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考链接"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);