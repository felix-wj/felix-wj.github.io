(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{562:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repository"}},[s._v("#")]),s._v(" Repository")]),s._v(" "),a("p",[a("code",[s._v("Repository")]),s._v("是"),a("code",[s._v("Spring Data Commons")]),s._v("的核心接口，它不提供任何方法，只是一个标识，表明任何继承它的接口都是"),a("code",[s._v("Repository")]),s._v("接口。")]),s._v(" "),a("h3",{attrs:{id:"crudrepository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crudrepository"}},[s._v("#")]),s._v(" CrudRepository")]),s._v(" "),a("p",[s._v("简单的"),a("code",[s._v("CRUD")]),s._v("操作")]),s._v(" "),a("h3",{attrs:{id:"pagingandsortingrepository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagingandsortingrepository"}},[s._v("#")]),s._v(" PagingAndSortingRepository")]),s._v(" "),a("p",[s._v("继承了CrudRepository，并提供了分页和排序操作")]),s._v(" "),a("h3",{attrs:{id:"querybyexampleexecutor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querybyexampleexecutor"}},[s._v("#")]),s._v(" QueryByExampleExecutor")]),s._v(" "),a("p",[s._v("简单的"),a("code",[s._v("Example")]),s._v("查询")]),s._v(" "),a("h3",{attrs:{id:"jparepository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jparepository"}},[s._v("#")]),s._v(" JpaRepository")]),s._v(" "),a("p",[s._v("继承了"),a("code",[s._v("PagingAndSortingRepository")]),s._v("、"),a("code",[s._v("QueryByExampleExecutor")])]),s._v(" "),a("h3",{attrs:{id:"jpaspecificationexecutor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jpaspecificationexecutor"}},[s._v("#")]),s._v(" JpaSpecificationExecutor")]),s._v(" "),a("p",[s._v("提供了多条件查询的支持，并且可以在查询中添加分页和排序。")]),s._v(" "),a("h4",{attrs:{id:"simplejparepository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simplejparepository"}},[s._v("#")]),s._v(" SimpleJpaRepository")]),s._v(" "),a("p",[a("code",[s._v("JpaSpecificationExecutor")]),s._v("的实现类，有"),a("code",[s._v("JPA")]),s._v("所有接口的默认实现")]),s._v(" "),a("h3",{attrs:{id:"querydslpredicateexecutor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querydslpredicateexecutor"}},[s._v("#")]),s._v(" QuerydslPredicateExecutor")]),s._v(" "),a("p",[s._v("提供了"),a("code",[s._v("QueryDsl")]),s._v("的支持，可以通过"),a("code",[s._v("Predicate")]),s._v("来查询。")]),s._v(" "),a("p",[a("code",[s._v("QuerydslJpaPredicateExecutor")]),s._v("为其默认实现类")]),s._v(" "),a("h2",{attrs:{id:"查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[s._v("#")]),s._v(" 查询")]),s._v(" "),a("h3",{attrs:{id:"根据方法名查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据方法名查询"}},[s._v("#")]),s._v(" 根据方法名查询")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-JAVA line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findByName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findByNameAndAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findByNameAndAgeGreaterThan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[s._v("#")]),s._v(" 排序")]),s._v(" "),a("div",{staticClass:"language-JAVA line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findFrirstByOrderByAgeDesc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findTopByOrderByAgeDesc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findFirst10ByOrderByAgeDesc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findDistinctUserTop3ByAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findByName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sort")]),s._v(" sort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"分页查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页查询"}},[s._v("#")]),s._v(" 分页查询")]),s._v(" "),a("div",{staticClass:"language-JAVA line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Page")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findByName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Pageable")]),s._v(" pageable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findByName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Pageable")]),s._v(" pageable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"遇到的一些问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遇到的一些问题"}},[s._v("#")]),s._v(" 遇到的一些问题")]),s._v(" "),a("h3",{attrs:{id:"jpa初始化数据库表乱码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jpa初始化数据库表乱码"}},[s._v("#")]),s._v(" JPA初始化数据库表乱码")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("application.yml")]),s._v("中修改数据库连接的url，添加"),a("code",[s._v("useUnicode=true&characterEncoding=utf8")])])])}),[],!1,null,null,null);a.default=e.exports}}]);