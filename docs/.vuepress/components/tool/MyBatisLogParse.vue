<template>
  <div>
    <h2><font color="#00bfff"> 输入Mybatis SQL日志：</font></h2>
    <el-input
      type="textarea"
      :rows="6"
      :cols="80"
      style="font-size: 20px"
      placeholder="请输入内容"
      v-model="sqlLog"
    >
    </el-input>

    <div>
      <el-button type="primary" @click="clearLog" plain>清空</el-button>
      <el-button type="primary" @click="parseSql" plain>解析SQL</el-button>
    </div>
    <h2><font color="#32cd32">解析为可执行SQL：</font></h2>
    <el-input id="sqlText" type="textarea" :rows="6" v-model="sql"> </el-input>
    <el-button type="primary" @click="copySql" plain>复制SQL</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sqlLog: "",
      sql: "",
    };
  },
  methods: {
    clearLog() {
      this.sqlLog = "";
    },
    parseSql() {
      let textVa = this.sqlLog;
      // 获取带问号的SQL语句
      let statementStartIndex = textVa.indexOf("Preparing: ");
      let statementEndIndex = textVa.length - 1;
      for (let i = statementStartIndex; i < textVa.length; i++) {
        if (textVa[i] == "\n") {
          statementEndIndex = i;
          break;
        }
      }
      let statementStr = textVa.substring(
        statementStartIndex + "Preparing: ".length,
        statementEndIndex
      );
      console.log(statementStr);
      //获取参数
      let parametersStartIndex = textVa.indexOf("Parameters: ");
      let parametersEndIndex = textVa.length - 1;
      for (let i = parametersStartIndex; i < textVa.length; i++) {
        if (textVa[i] == "\n") {
          parametersEndIndex = i;
          break;
        } else {
          console.log(textVa[i]);
        }
      }
      let parametersStr = textVa.substring(
        parametersStartIndex + "Parameters: ".length,
        parametersEndIndex
      );
      parametersStr = parametersStr.split(",");
      console.log(parametersStr);
      for (let i = 0; i < parametersStr.length; i++) {
        // 如果数据中带括号将使用其他逻辑
        let tempStr = parametersStr[i].substring(
          0,
          parametersStr[i].indexOf("(")
        );
        // 获取括号中内容
        let typeStr = parametersStr[i].substring(
          parametersStr[i].indexOf("(") + 1,
          parametersStr[i].indexOf(")")
        );
        // 如果为字符类型
        if (typeStr == "String" || typeStr == "Timestamp") {
          statementStr = statementStr.replace("?", "'" + tempStr.trim() + "'");
        } else {
          // 数值类型
          statementStr = statementStr.replace("?", tempStr.trim());
        }
      }
      console.log(statementStr);
      this.sql = statementStr;
    },

    copySql() {
      var SQL = document.getElementById("sqlText");
      SQL.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      var msg = document.getElementById("msg");
      msg.innerHTML = "已复制到剪切板";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
    },
  },
};
</script>