(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{606:function(a,s,e){"use strict";e.r(s);var t=e(10),n=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"创建集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建集群"}},[a._v("#")]),a._v(" 创建集群")]),a._v(" "),s("ol",[s("li",[s("code",[a._v("docker swarm init")]),a._v("  初始化集群")])]),a._v(" "),s("p",[a._v("输出示例：")]),a._v(" "),s("div",{staticClass:"language-PlainText line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plaintext"}},[s("code",[a._v("Swarm initialized: current node (1dayw2jss8e7pseq1dxaufo7s) is now a manager.\n\nTo add a worker to this swarm, run the following command:\n\n    docker swarm join --token SWMTKN-1-0dm85ix64fa5j62hricif97kds21jj4aharkoqfuzfw22n10mc-9tlq05a1xafxnqtujj94t288k 10.0.10.131:2377\n\nTo add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("如果服务器有多个网卡，可以在初始化时手动指定IP:"),s("code",[a._v("docker swarm init --advertise-addr [ip]")])]),a._v(" "),s("p",[a._v("初始化之后，当前节点就默认成了管理节点，初始化成功后，会给出加入Swarm集群的命令信息, 默认给出的命令使用的是以Worker节点加入集群的的Token，可以通过命令获取Manager节点的命令和Token")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 获取Manager节点加入命令")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" swarm join-token manager\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 获取Worker节点加入命令")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" swarm join-token worker\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h3",{attrs:{id:"查看节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看节点"}},[a._v("#")]),a._v(" 查看节点")]),a._v(" "),s("p",[s("code",[a._v("docker node ls")])]),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("STATUS")]),a._v(" 列显示节点的状态")]),a._v(" "),s("ol",[s("li",[s("p",[s("code",[a._v("Ready")]),a._v("：\n节点已准备好接收任务。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("Down")]),a._v("：\n节点不可用，可能是由于网络问题或节点宕机。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("Disconnected")]),a._v("：\n节点与集群管理器失去连接。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("Unknown")]),a._v("：\n节点状态未知，可能是由于网络问题或节点未响应。")])])])]),a._v(" "),s("li",[s("p",[s("code",[a._v("AVAILABILITY")]),a._v(" 列显示节点的可用性")]),a._v(" "),s("ol",[s("li",[s("p",[s("code",[a._v("Active")]),a._v("：\n节点可用。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("Pause")]),a._v("：\n节点已暂停，不接受新任务。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("Drain")]),a._v("：\n节点已暂停，不接受新任务，并且正在停止现有任务。")])])]),a._v(" "),s("p",[a._v("设置可用性 "),s("code",[a._v("docker node update --availability [可用性] [节点名]")])])]),a._v(" "),s("li",[s("p",[s("code",[a._v("MANAGER STATUS")]),a._v(" 列显示节点的管理器状态")]),a._v(" "),s("ol",[s("li",[s("p",[s("code",[a._v("Leader")]),a._v("：\n节点是集群的管理器领导者。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("Reachable")]),a._v("：\n节点是管理器，但不是领导者。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("Unreachable")]),a._v("：\n节点是管理器，但无法与其他管理器通信。")])])])])]),a._v(" "),s("h4",{attrs:{id:"查看节点ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看节点ip"}},[a._v("#")]),a._v(" 查看节点IP")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[a._v("node")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Node: '),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$node")]),a._v('"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v(" inspect "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$node")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--format")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hostname: {{ .Description.Hostname }}, IP: {{ .Status.Addr }},'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"节点标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点标签"}},[a._v("#")]),a._v(" 节点标签")]),a._v(" "),s("p",[a._v("给节点添加标签: "),s("code",[a._v("docker node update --label-add [标签名]=[标签值] [节点名]")])]),a._v(" "),s("p",[a._v("删除标签: "),s("code",[a._v("docker node update --label-rm [标签名] [节点名]")])]),a._v(" "),s("p",[a._v("查看节点标签: ")]),s("div",{pre:!0},[s("code",[a._v("docker node inspect --format '{{json .Spec.Labels}}' [节点名]")])]),s("p"),a._v(" "),s("p",[a._v("更新服务以添加约束条件： "),s("code",[a._v("docker service update --constraint-add 'node.labels.role == worker' <service_name>")])]),a._v(" "),s("h3",{attrs:{id:"角色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#角色"}},[a._v("#")]),a._v(" 角色")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("Manager")]),a._v("：管理节点，负责集群管理，调度任务，维护集群状态")]),a._v(" "),s("li",[s("code",[a._v("Worker")]),a._v("：工作节点，负责运行任务")])]),a._v(" "),s("p",[s("code",[a._v("Manager")]),a._v("转为"),s("code",[a._v("Worker")]),a._v(":"),s("code",[a._v("docker node demote [节点名]")])]),a._v(" "),s("p",[s("code",[a._v("Worker")]),a._v("转为"),s("code",[a._v("Manager")]),a._v(":"),s("code",[a._v("docker node promote [节点名]")])]),a._v(" "),s("h2",{attrs:{id:"部署或更新服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署或更新服务"}},[a._v("#")]),a._v(" 部署或更新服务")]),a._v(" "),s("h3",{attrs:{id:"使用docker部署集群服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用docker部署集群服务"}},[a._v("#")]),a._v(" 使用docker部署集群服务")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("创建一个服务 "),s("code",[a._v("docker service create --name [服务名] [镜像名]")])])]),a._v(" "),s("li",[s("p",[a._v("更新服务 "),s("code",[a._v("docker service update --image [镜像名] [服务名]")])])]),a._v(" "),s("li",[s("p",[a._v("扩展服务 "),s("code",[a._v("docker service scale [服务名]=[数量]")])])]),a._v(" "),s("li",[s("p",[a._v("删除服务 "),s("code",[a._v("docker service rm [服务名]")])])]),a._v(" "),s("li",[s("p",[a._v("服务列表 "),s("code",[a._v("docker service ls")])])]),a._v(" "),s("li",[s("p",[a._v("查看服务详情 "),s("code",[a._v("docker service inspect [服务名]")])])]),a._v(" "),s("li",[s("p",[a._v("查看单个服务下的具体实例 "),s("code",[a._v("docker service ps [服务名]")])])])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("docker service ps --no-trunc [服务名]")]),a._v(" 显示完整信息，如果服务启动失败，可以查看错误信息")])]),a._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[s("p",[a._v("查看服务日志 "),s("code",[a._v("docker service logs [服务名]")])])]),a._v(" "),s("li",[s("p",[a._v("重启服务 "),s("code",[a._v("docker service update --force [服务名]")])])])]),a._v(" "),s("h4",{attrs:{id:"服务参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务参数"}},[a._v("#")]),a._v(" 服务参数")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("--mode")]),a._v(" 指定服务的调度模式，有global和replicated两种模式")]),a._v(" "),s("li",[s("code",[a._v("--replicas")]),a._v(" 指定服务的副本数量")]),a._v(" "),s("li",[s("code",[a._v("--update-parallelism")]),a._v(" 指定更新服务时的并发数")]),a._v(" "),s("li",[s("code",[a._v("--update-delay")]),a._v(" 指定更新服务时的延迟时间")]),a._v(" "),s("li",[s("code",[a._v("--update-failure-action")]),a._v(" 指定更新服务失败时的处理方式")]),a._v(" "),s("li",[s("code",[a._v("--restart-condition")]),a._v(" 指定服务重启的条件")]),a._v(" "),s("li",[s("code",[a._v("--mount-add")]),a._v(" 指定挂载目录")]),a._v(" "),s("li",[s("code",[a._v("--limit-cpu")]),a._v(" 指定cpu限制")]),a._v(" "),s("li",[s("code",[a._v("--limit-memory")]),a._v(" 指定内存限制")]),a._v(" "),s("li",[s("code",[a._v("--constraint")]),a._v(" 指定服务部署在某个节点上")])]),a._v(" "),s("h4",{attrs:{id:"更新服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新服务"}},[a._v("#")]),a._v(" 更新服务")]),a._v(" "),s("p",[a._v("更新挂载目录 "),s("code",[a._v("docker service update --mount-add source=[目录],target=[容器目录] [服务名]")])]),a._v(" "),s("p",[a._v("查看挂载目录 ")]),s("div",{pre:!0},[s("code",[a._v("docker service inspect --format '{{json .Spec.TaskTemplate.ContainerSpec.Mounts}}' [服务名]")])]),s("p"),a._v(" "),s("p",[a._v("查看cpu和内存限制 ")]),s("div",{pre:!0},[s("code",[a._v("docker service inspect --format '{{json .Spec.TaskTemplate.Resources}}' [服务名]")])]),s("p"),a._v(" "),s("p",[a._v("更新cpu和内存限制 "),s("code",[a._v("docker service update --limit-cpu 0.5 --limit-memory 2g [服务名]")])]),a._v(" "),s("h4",{attrs:{id:"回滚"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回滚"}},[a._v("#")]),a._v(" 回滚")]),a._v(" "),s("p",[s("code",[a._v("docker service update --rollback [服务名]")])]),a._v(" "),s("h4",{attrs:{id:"指定节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定节点"}},[a._v("#")]),a._v(" 指定节点")]),a._v(" "),s("p",[a._v("通过"),s("code",[a._v("--constraint")]),a._v("参数可以指定服务部署在某个节点上：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 部署")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" create "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("服务名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--constraint")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'node.role==worker'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("镜像名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 扩容缩容")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" scale "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("服务名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("数量"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--constraint")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'node.role==worker'")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[s("code",[a._v("--constraint")]),a._v("参数可选的值有：")]),a._v(" "),s("ol",[s("li",[s("code",[a._v("node.role==manager")]),a._v("和"),s("code",[a._v("node.role==worker")]),a._v("，分别表示部署在管理节点和工作节点上")]),a._v(" "),s("li",[s("code",[a._v("node.hostname==[hostname]")]),a._v("，表示部署在指定主机上")]),a._v(" "),s("li",[s("code",[a._v("node.labels.[label]==[value]")]),a._v("，表示部署在具有指定标签的节点上")])]),a._v(" "),s("h3",{attrs:{id:"使用docker-compose部署集群服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用docker-compose部署集群服务"}},[a._v("#")]),a._v(" 使用docker-compose部署集群服务")]),a._v(" "),s("h4",{attrs:{id:"在docker-compose-yml文件中定义服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在docker-compose-yml文件中定义服务"}},[a._v("#")]),a._v(" 在docker-compose.yml文件中定义服务")]),a._v(" "),s("p",[a._v("配置文件例如：")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3.8'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("redis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("alpine\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("placement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("constraints")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" node.role == manager\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("update_config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("parallelism")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 10s\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("failure_action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" rollback\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart_policy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("condition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("failure\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("p",[a._v("deploy参数说明：")]),a._v(" "),s("ul",[s("li",[a._v("mode 指定服务的调度模式，有global和replicated两种模式, global表示每个节点上都运行一个实例，replicated，默认值，表示指定副本数量")]),a._v(" "),s("li",[a._v("replicas 服务副本数量")]),a._v(" "),s("li",[a._v("placement.constraints 指定服务的部署位置")]),a._v(" "),s("li",[a._v("update_config.parallelism 指定更新服务时的并发数")]),a._v(" "),s("li",[a._v("update_config.delay 指定更新服务时的延迟时间")]),a._v(" "),s("li",[a._v("update_config.failure_action 指定更新服务失败时的处理方式")]),a._v(" "),s("li",[a._v("restart_policy.condition 指定服务重启的条件")])]),a._v(" "),s("p",[a._v("这里引入了"),s("code",[a._v("stack")]),a._v("的概念，"),s("code",[a._v("stack")]),a._v("是一组服务的集合，可以通过"),s("code",[a._v("docker-compose.yml")]),a._v("文件来定义服务，然后通过"),s("code",[a._v("docker stack deploy")]),a._v("命令来部署服务.")]),a._v(" "),s("p",[a._v("这些服务拥有一个共同的服务栈名称，可以通过"),s("code",[a._v("docker stack")]),a._v("命令来管理这些服务。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("创建一个服务栈 "),s("code",[a._v("docker stack deploy -c [docker-compose.yml] [服务栈名]")]),a._v(","),s("code",[a._v("--detach=false")]),a._v(" 可以查看部署过程")])]),a._v(" "),s("li",[s("p",[a._v("查看服务栈 "),s("code",[a._v("docker stack services [服务栈名]")])])]),a._v(" "),s("li",[s("p",[a._v("查看服务栈中的服务 "),s("code",[a._v("docker stack ps [服务栈名]")])])]),a._v(" "),s("li",[s("p",[a._v("删除服务栈 "),s("code",[a._v("docker stack rm [服务栈名]")])])]),a._v(" "),s("li",[s("p",[a._v("更新服务栈 "),s("code",[a._v("docker stack deploy -c [docker-compose.yml] [服务栈名]")]),a._v("\n只有配置发生变化的服务会更新，其他服务不受影响")])])]),a._v(" "),s("p",[a._v("而对于每一个服务栈中的服务，依然可以通过"),s("code",[a._v("docker service")]),a._v("命令来管理，只是服务的名称会变成"),s("code",[a._v("服务栈名称_服务名称")]),a._v("的形式。")]),a._v(" "),s("h4",{attrs:{id:"docker-compose-yml变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml变化"}},[a._v("#")]),a._v(" docker-compose.yml变化")]),a._v(" "),s("p",[a._v("用于集群部署的docker-compose.yml文件与单机部署的文件有一些不同")]),a._v(" "),s("p",[a._v("主要是增加了"),s("code",[a._v("deploy")]),a._v("字段，用于指定服务的部署策略。")]),a._v(" "),s("p",[a._v("之前设置的"),s("code",[a._v("restart")]),a._v("字段也在"),s("code",[a._v("deploy")]),a._v("字段中设置。")]),a._v(" "),s("p",[a._v("设置cpu和内存限制也在"),s("code",[a._v("deploy")]),a._v("字段中设置。")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("update_config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("parallelism")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 10s\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("failure_action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" rollback\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart_policy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("condition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("failure\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("resources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("limits")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cpus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'0.5'")]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("memory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 2g\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("h2",{attrs:{id:"集群网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群网络"}},[a._v("#")]),a._v(" 集群网络")]),a._v(" "),s("p",[a._v("创建一个网络 "),s("code",[a._v("docker network create --driver overlay [网络名]")])])])}),[],!1,null,null,null);s.default=n.exports}}]);