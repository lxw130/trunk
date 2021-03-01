<template>
  <div class="allocation">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="gprsId" label="gprsId"></el-table-column>
      <el-table-column prop="sendData" label="发送数据"></el-table-column>
      <el-table-column prop="sendDone" label="发送完成"></el-table-column>
      <el-table-column prop="insertTime" label="发送时间"></el-table-column>
    </el-table>
    <el-row style="margin-top:20px" :gutter="30">
      <el-col :span="6">
        <el-form :model="form" label-width="80px">
          <el-form-item label="gprsId:">
            <el-input v-model="form.gprsId"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form :model="form" label-width="80px">
          <el-form-item label="发送数据:">
            <el-input v-model="form.sendData"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
      <el-button type="primary" @click="send()">发送</el-button>
      <el-button @click="goBack()"  style="margin-left:10px">返回</el-button>

      </el-col>
      <!-- <el-col :span="6">
        <el-form :model="form" label-width="80px">
          <el-form-item label="发送完成:">
            <el-input v-model="form.sendDone"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form :model="form" label-width="80px">
          <el-form-item label="发送时间:">
            <el-input v-model="form.insertTime"></el-input>
          </el-form-item>
        </el-form>
      </el-col> -->
    </el-row>
    <!-- <div class="clearfix" style="width:100%;margin-top:20px">
      <el-button class="fr" style="margin-left:10px" type="primary" @click="send()">发送</el-button>
    </div> -->
  </div>
</template>

<script>
import { send, configack } from "@/api/Allocation.js";
export default {
  data() {
    return {
      tableData: [],
      input: "",
      form: {
        gprsId: "",
        sendData: "",
        // sendDone: "",
        // insertTime: ""
      }
    };
  },
  methods: {
     goBack() {
      this.$emit("goBack");
    },
    send() {
      send(this.form)
        .then(res => {
          if (res.status==200) {
            this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
          }
          console.log(res, "res");
        })
        .catch(error => {
          console.log(error);
        });
    },
    configack() {
      var msg = {
        gprsId: "1-7"
      };
      configack(msg)
        .then(res => {
          this.tableData = res.data.data;
          console.log(res, "configack");
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    // this.send();
    this.configack();
  }
};
</script>

<style lang="less" scoped>
.allocation {
  margin-top: 20px;
}
</style>