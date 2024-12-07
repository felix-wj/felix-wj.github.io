<template>
    <div style="width: 100%; ">
        <div style="width: 100%; height: 30%; display: flex;">
            <div style="width: 45%; ">
                <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="originText">
                </el-input>
            </div>
            <div style="width: 10%;">

            </div>
            <div style=" width: 45%; ">
                <el-divider>包装</el-divider>
                <el-row>
                    <el-button size="medium" plain @click="appendComma">行尾逗号</el-button>
                    <el-divider direction="vertical"></el-divider>
                    <el-button size="medium" plain @click="appendSpace">行尾空格</el-button>
                    <el-divider direction="vertical"></el-divider>
                    <el-button size="medium" plain @click="wrapWithQuotes">引号包裹</el-button>       
                    <el-divider direction="vertical"></el-divider>
                    <el-button size="medium" plain @click="deduplication">去重</el-button>
                </el-row>
                <el-divider>转换</el-divider>
                <el-button size="medium" plain @click="transposeColumnsToRows">列转行</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button size="medium" plain @click="resetText">还原</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button size="medium" plain @click="clearText">清空</el-button>

            </div>
        </div>
        <div style=" display: flex; justify-content: center;">

        </div>

        <el-divider>结果</el-divider>
        <div style="height: 70%;">

            <el-input style="margin-bottom: 10px;" type="textarea" :rows="10" placeholder="转换结果" v-model="targetText">
            </el-input>
            <el-row style="display: flex;">
                <el-button size="medium" plain style="margin-right: 5px;" @click="copy">复制</el-button>
                <el-button size="medium" plain style="margin-right: 5px;" @click="wrapWithBrackets">括号包裹</el-button>
                <el-button size="medium" plain style="margin-right: 5px;" @click="tailSemicolon">行尾分号</el-button>
                <el-button size="medium" plain style="margin-right: 5px;" @click="tailDel">行尾删除</el-button>
                <div style="display: flex;" @mouseover="showInputPerNumFocus" @mouseleave="hideInput">
                    <transition name="fade">
                        <div style="display: flex; align-items: center; margin-left: 5px;" v-if="showInputPerNum">

                            每行数量：<el-input size="medium" style="width: 80px; margin-right: 5px;" v-model="inputPerNum"
                                placeholder="每行数量"></el-input>
                        </div>
                    </transition>

                    <el-button size="medium" style="margin-left: 5px;" plain @click="groupItems">分组</el-button>

                </div>


            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            originText: '',
            originTextCopy: '',
            targetText: '',
            inputPerNum: 500,
            showInputPerNum: false,
        }
    },
    methods: {
        backup() {
            if (this.originTextCopy == '') {
                this.originTextCopy = this.originText;
            }
        },
        appendComma() {
            this.backup();
            this.originText = this.originText.replace(/\n/g, ',\n');
        },
        appendSpace() {
            this.backup();
            this.originText = this.originText.replace(/\n/g, ' \n');
        },
        wrapWithQuotes() {
            this.backup();
            this.originText = this.originText.replace(/(.+)/g, "'$1'");
        },
        deduplication() {
            this.backup();
            let arr = this.originText.split('\n');
            let set = new Set(arr);
            this.originText = Array.from(set).join('\n');
        },
        transposeColumnsToRows() {
            this.backup();
            this.targetText = this.originText.replace(/\n/g, '') + '\n';
        },
        resetText() {
            this.originText = this.originTextCopy;
        },
        clearText() {
            this.originText = '';
            this.targetText = '';
        },
        showInputPerNumFocus() {
            console.log('showInputPerNumFocus');
            this.showInputPerNum = true;
        },
        hideInput() {
            // 延迟隐藏输入框，以便用户有时间点击输入框
            this.showInputPerNum = false;
        },
        groupItems() {
            if (this.inputPerNum == '') {
                this.$message.error('请输入每行数量');
                return;
            }
            let perNum = this.inputPerNum;
            let text = this.originText;
            let result = '';
            let arr = text.split('\n');
            let len = arr.length;
            for (let i = 0; i < len; i++) {
                if (i % perNum == 0) {
                    result += '\n';
                }
                result += arr[i];
            }
            this.targetText = result + '\n';
        },
        copy() {
            this.$copyText(this.targetText).then(() => {
                this.$message({
                    message: '复制成功',
                    type: 'success'
                });
            }, () => {
                this.$message.error('复制失败');
            });
        },
        tailSemicolon() {
            //每行末尾加一个分号
            this.targetText = this.targetText.replace(/\n/g, ';\n');
        },
        wrapWithBrackets() {
            //每行包裹括号
            this.targetText = this.targetText.replace(/(.+)/g, "($1)\n");
        },
        tailDel() {
            //每行删除一个字符
            this.targetText = this.targetText.replace(/.\n/g, '\n');

        }


    }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0.5;
}
</style>