(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{614:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"文件目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件目录"}},[s._v("#")]),s._v(" 文件目录")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/felix-wj/docker-compose-hub/tree/master/mq",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub链接"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mq\n  conf\n    broker.conf\n    plain_acl.yml\n    users.properties\n  docker-compose.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"broker-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broker-conf"}},[s._v("#")]),s._v(" "),a("code",[s._v("broker.conf")])]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#所属集群名字")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("brokerClusterName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("DefaultCluster")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#broker名字，注意此处不同的配置文件填写的不一样，如果在broker-a.properties使用:broker-a,")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在broker-b.properties使用:broker-b")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("brokerName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("broker-a")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#0 表示Master，>0 表示Slave")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("brokerId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("0")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动IP,如果 docker 报 com.alibaba.rocketmq.remoting.exception.RemotingConnectException: connect to <192.168.0.120:10909> failed")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解决方式1 加上一句producer.setVipChannelEnabled(false);，解决方式2 brokerIP1 设置宿主机IP，不要使用docker 内部IP")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("brokerIP1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("192.168.220.1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在发送消息时，自动创建服务器不存在的topic，默认创建的队列数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("defaultTopicQueueNums")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("4")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否允许 Broker 自动创建Topic，建议线下开启，线上关闭 ！！！这里仔细看是false，false，false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("autoCreateTopicEnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否允许 Broker 自动创建订阅组，建议线下开启，线上关闭")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("autoCreateSubscriptionGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#此参数控制是否开启密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("aclEnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除文件时间点，默认凌晨4点")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("deleteWhen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("04")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件保留时间，默认48小时")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("fileReservedTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("120")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#commitLog每个文件的大小默认1G")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("mapedFileSizeCommitLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1073741824")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ConsumeQueue每个文件默认存30W条，根据业务情况调整")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("mapedFileSizeConsumeQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("300000")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#destroyMapedFileIntervalForcibly=120000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#redeleteHangedFileInterval=120000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#检测物理文件磁盘空间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("diskMaxUsedSpaceRatio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("88")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#存储路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#storePathRootDir=/home/rocketmq/store")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#commitLog 存储路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#storePathCommitLog=/home/rocketmq/store/commitlog")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#消费队列存储")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#storePathConsumeQueue=/home/rocketmq/store/consumequeue")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#消息索引存储路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#storePathIndex=/home/rocketmq/store/index")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#checkpoint 文件存储路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#storeCheckpoint=/home/rocketmq/store/checkpoint")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#abort 文件存储路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#abortFile=/home/rocketmq/store/abort")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#限制的消息大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("maxMessageSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("65536")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#flushCommitLogLeastPages=4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#flushConsumeQueueLeastPages=2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#flushCommitLogThoroughInterval=10000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#flushConsumeQueueThoroughInterval=60000")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Broker 的角色")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#- ASYNC_MASTER 异步复制Master")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#- SYNC_MASTER 同步双写Master")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#- SLAVE")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("brokerRole")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("ASYNC_MASTER")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刷盘方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#- ASYNC_FLUSH 异步刷盘")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#- SYNC_FLUSH 同步刷盘")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("flushDiskType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("ASYNC_FLUSH")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发消息线程池数量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sendMessageThreadPoolNums=128")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#拉消息线程池数量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#pullMessageThreadPoolNums=128")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br")])]),a("h2",{attrs:{id:"plain-acl-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plain-acl-yml"}},[s._v("#")]),s._v(" "),a("code",[s._v("plain_acl.yml")])]),s._v(" "),a("p",[s._v("如果配置了开启acl,需要配置accessKey、secretKey等")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("globalWhiteRemoteAddresses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 10.10.103.123\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("accounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("accessKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" RocketMQ\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("secretKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12345678")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("whiteRemoteAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("admin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaultTopicPerm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" DENY\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaultGroupPerm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" SUB\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("topicPerms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" topicA=DENY\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" topicB=PUB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("SUB\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" topicC=SUB\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("groupPerms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the group should convert to retry topic")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" groupA=DENY\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" groupB=PUB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("SUB\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" groupC=SUB\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("accessKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" rocketmq2\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("secretKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12345678")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("whiteRemoteAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if it is admin, it could access all resources")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("admin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[s._v("#")]),s._v(" "),a("code",[s._v("docker-compose.yml")])]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3.5"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mqnamesrv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apache/rocketmq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("4.9.3\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mqnamesrv\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 9876"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9876")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /var/data/rocketmq/namesrv/logs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/home/rocketmq/logs\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("JAVA_OPT_EXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Xms128m "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Xmx128m\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" sh mqnamesrv\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("aliases")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" mqnamesrv\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mqbroker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apache/rocketmq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("4.9.3\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mqbroker\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 10911"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10911")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 10909"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10909")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /var/data/rocketmq/broker/store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/home/rocketmq/store\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /var/data/rocketmq/broker/logs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/home/rocketmq/logs\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./conf/broker.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/local/dockerCompose/rocketmq/conf/broker.conf\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./conf/plain_acl.yml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/local/dockerCompose/rocketmq/conf/plain_acl.yml\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" mqnamesrv\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("JAVA_OPT_EXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-server -Xms128m -Xms128m -Xmn64m "')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("NAMESRV_ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mqnamesrv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9876")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" sh mqbroker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("n mqnamesrv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("9876 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c /usr/local/dockerCompose/rocketmq/conf/broker.conf\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("aliases")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" mqbroker\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rocketmq-dashboard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" rocketmq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dashboard\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apacherocketmq/rocketmq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dashboard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("JAVA_OPTS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Drocketmq.namesrv.addr=mqnamesrv:9876 -Dcom.rocketmq.sendMessageWithVIPChannel=falses -Drocketmq.config.loginRequired=true  -Drocketmq.config.accessKey=rocketmq2 -Drocketmq.config.secretKey=12345678"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 19876"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./conf/users.properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/tmp/rocketmq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("console/data/users.properties\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" mqnamesrv\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("aliases")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" dashboard\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mq\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bridge\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br")])]),a("p",[s._v("需要注意的是一定要赋予挂载目录读写权限，否则broker启动失败。")]),s._v(" "),a("h2",{attrs:{id:"users-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#users-properties"}},[s._v("#")]),s._v(" "),a("code",[s._v("users.properties")])]),s._v(" "),a("p",[s._v("设置控制台访问账户")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该文件支持热修改，即添加和修改用户时，不需要重新启动console")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式， 每行定义一个用户， username=password[,N]  #N是可选项，可以为0 (普通用户)； 1 （管理员）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义管理员")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Define Admin")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("admin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("123456Ww,1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Define Users")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#user1=user1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#user2=user2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);