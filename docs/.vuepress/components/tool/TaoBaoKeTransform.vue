<template>
  <div>
    <h2><font color="#00bfff"> 商品分享链接：</font></h2>
    <el-input
      type="textarea"
      :rows="4"
      :cols="80"
      style="font-size: 20px"
      placeholder="请输入内容"
      v-model="goodsSharStr"
    >
    </el-input>

    <div>
      <el-button type="primary" @click="clearLog" plain>清空</el-button>
      <el-button type="primary" @click="transform" plain>获取优惠</el-button>
    </div>
    <div v-if="respBody.code === '200'">
                
          <h4><el-link :href="respBody.data.couponClickUrl" type="success">点击跳转到领券页面</el-link></h4>
          <h4>领券码：{{respBody.data.mode}}<el-button slot="reference" class="popoverBtn"   @click="copyToClipboard(respBody.data.mode)">点击复制，然后去淘宝打开</el-button></h4>
          <h4>优惠券面额：{{respBody.data.couponInfo}}</h4>
          <h4>活动时间：{{respBody.data.couponStartTime}}    ~    {{respBody.data.couponEndTime}}</h4>
    </div>
    <div v-if="respBody.code &&respBody.code != '200'">
  未找到该商品优惠券
</div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsSharStr: "",
      respBody: {},

    };
  },
  methods: {
    clearLog() {
      this.goodsSharStr = "";
    },

    transform() {
      //发送post请求 
      this.$http
        .post(
          "/taoBaoKeApiTest/taobaoke/taobaoke/get/share/coupons",
          {
            shareInfo:this.goodsSharStr,
          },
          {
            heads: {
              "content-type": "application/json",
            },
          }
        )
        .then(
          function (res) {
           this.respBody = res.body;
          },
          function (res) {
            console.log(res.status);
          }
        );
    },
    copyToClipboard(content){
          //window.clipboardData的作用是在页面上将需要的东西复制到剪贴板上，
          //提供了对于预定义的剪贴板格式的访问，以便在编辑操作中使用。
      if (window.clipboardData) {
          /*
          window.clipboardData有三个方法:
        （1）clearData(sDataFormat) 删除剪贴板中指定格式的数据。sDataFormat:"text","url"
        （2）getData(sDataFormat) 从剪贴板获取指定格式的数据。 sDataFormat:"text","url"
        （3）setData(sDataFormat, sData) 给剪贴板赋予指定格式的数据。返回 true 表示操作成功。
          */
        window.clipboardData.setData('text', content);
      } else {
        (function (content) {
          //oncopy 事件在用户拷贝元素上的内容时触发。
          document.oncopy = function (e) {
            e.clipboardData.setData('text', content);
            e.preventDefault(); //取消事件的默认动作
            document.oncopy = null;
          }
        })(content);
        //execCommand方法是执行一个对当前文档/当前选择/给出范围的命令。
        //'Copy':将当前选中区复制到剪贴板。 
        document.execCommand('Copy');
      }
      }
  },
};
</script>