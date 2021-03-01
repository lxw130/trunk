<template>
  <div class="add">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="address" label="站点名称" width="180"></el-table-column>
      <el-table-column prop="stationCode" label="站点编号" width="180"></el-table-column>
      <el-table-column prop="batteryCode" label="电池组编号"></el-table-column>
      <el-table-column prop="batteryType" label="电池组规格"></el-table-column>
      <el-table-column prop="cellCount" label="电池单体数量"></el-table-column>
      <el-table-column prop="cellType" label="单体规格"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="clearfix" style="width:100%;margin-top:20px">
      <el-button @click="goBack()" class="fr" style="margin-left:10px">返回</el-button>
      <el-button @click="Addedit()" class="fr" type="primary">新增</el-button>
    </div>
    <el-dialog title="修改电池组" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="站点名称" label-width="120px">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="站点所在地" label-width="120px">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="站点编号" label-width="120px">
          <el-input v-model="form.stationCode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电池组编号" label-width="120px">
          <el-input v-model="form.batteryCode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电池组规格" label-width="120px">
          <el-input v-model="form.batteryType" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电池单体数量" label-width="120px">
          <el-input v-model="form.cellCount" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="单体规格" label-width="120px">
          <el-input v-model="form.cellType" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="makeEdit()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="新增电池组" :visible.sync="dialogFormVisible1">
      <el-form :model="form">
        <el-form-item label="站点名称" label-width="120px">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="站点所在地" label-width="120px">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="站点编号" label-width="120px">
          <el-input v-model="form.stationCode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电池组编号" label-width="120px">
          <el-input v-model="form.batteryCode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电池组规格" label-width="120px">
          <el-input v-model="form.batteryType" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电池单体数量" label-width="120px">
          <el-input v-model="form.cellCount" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="单体规格" label-width="120px">
          <el-input v-model="form.cellType" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addstation()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { station } from "@/api/index.js";
import { addstation, updatestation } from "@/api/add.js";
export default {
  data() {
    return {
      tableData: [],
      input: "",
      form: {},
      dialogFormVisible: false,
      dialogFormVisible1: false
    };
  },
  methods: {
    edit(row) {
      this.form = JSON.parse(JSON.stringify(row));
      this.dialogFormVisible = true;
    },
    makeEdit() {
      updatestation(this.form)
        .then(res => {
          if (res.status == 200) {
            this.station();
          }
        })
        .catch(error => {
          console.log(error);
        });
      this.dialogFormVisible = false;
    },
    Addedit() {
      this.dialogFormVisible1 = true;
      this.form = {};
    },
    addstation() {
      addstation(this.form)
        .then(res => {
          if (res.status == 200) {
            this.station();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    goBack() {
      this.$emit("goBack");
    },
    // 查询所有的电池组
    station() {
      station()
        .then(res => {
      this.tableData = res.data.data;

        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    // 查询所有的电池组
    this.station();
  }
};
</script>

<style lang="less" scoped>
</style>