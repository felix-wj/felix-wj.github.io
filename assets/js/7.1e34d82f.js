(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{483:function(e,t,l){"use strict";l.r(t);var n={data:()=>({sqlLog:"",sql:""}),methods:{clearLog(){this.sqlLog=""},parseSql(){let e=this.sqlLog,t=e.indexOf("Preparing: "),l=e.length-1;for(let n=t;n<e.length;n++)if("\n"==e[n]){l=n;break}let n=e.substring(t+"Preparing: ".length,l);console.log(n);let o=e.indexOf("Parameters: "),s=e.length-1;for(let t=o;t<e.length;t++){if("\n"==e[t]){s=t;break}console.log(e[t])}let r=e.substring(o+"Parameters: ".length,s);r=r.split(","),console.log(r);for(let e=0;e<r.length;e++){let t=r[e].substring(0,r[e].indexOf("(")),l=r[e].substring(r[e].indexOf("(")+1,r[e].indexOf(")"));n="String"==l||"Timestamp"==l?n.replace("?","'"+t.trim()+"'"):n.replace("?",t.trim())}console.log(n),this.sql=n},copySql(){document.getElementById("sqlText").select(),document.execCommand("Copy");var e=document.getElementById("msg");e.innerHTML="已复制到剪切板",setTimeout((function(){e.innerHTML=""}),3e3)}}},o=l(10),s=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("h2",[t("font",{attrs:{color:"#00bfff"}},[e._v(" 输入Mybatis SQL日志：")])],1),e._v(" "),t("el-input",{staticStyle:{"font-size":"20px"},attrs:{type:"textarea",rows:6,cols:80,placeholder:"请输入内容"},model:{value:e.sqlLog,callback:function(t){e.sqlLog=t},expression:"sqlLog"}}),e._v(" "),t("div",[t("el-button",{attrs:{type:"primary",plain:""},on:{click:e.clearLog}},[e._v("清空")]),e._v(" "),t("el-button",{attrs:{type:"primary",plain:""},on:{click:e.parseSql}},[e._v("解析SQL")])],1),e._v(" "),t("h2",[t("font",{attrs:{color:"#32cd32"}},[e._v("解析为可执行SQL：")])],1),e._v(" "),t("el-input",{attrs:{id:"sqlText",type:"textarea",rows:6},model:{value:e.sql,callback:function(t){e.sql=t},expression:"sql"}}),e._v(" "),t("el-button",{attrs:{type:"primary",plain:""},on:{click:e.copySql}},[e._v("复制SQL")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);