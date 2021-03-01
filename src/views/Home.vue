<template>
  <div class="home">
    <!-- head -->
    <div class="head">
      <div class="d-flex">
        <div class="headLeft">
          <dv-decoration-10 style="height:2px;" />
          <div style="line-height:30px">中国西南石油公司</div>
        </div>
        <dv-decoration-8 :color="['#568aea', 'transparent']" style="width:10%;height:40px;" />
        <div class="headTitle">
          <div class="headTitleText">电池监测系统数据展示</div>
          <dv-decoration-6
            class="title-bototm"
            :reverse="true"
            :color="['#50e3c2', '#67a1e5']"
            style="width:50%;height:10px;"
          />
        </div>
        <dv-decoration-8
          :reverse="true"
          :color="['#568aea', 'transparent']"
          style="width:10%;height:40px;"
        />
        <div class="headRight">
          <dv-decoration-10 style="height:2px; transform: rotateY(180deg);" />
          <div style="line-height:30px">
            {{nowTime}}&emsp;&emsp;
            <el-button @click="goAdd()" type="text" size="mini">维护</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <!-- <router-view/> -->
      <component :record="record" :is="currentComponet" @goBack="goBack()" @goModule="goModule"></component>
    </div>
  </div>
</template>

<script>
import Index from "@/components/Index";
import Batterycell from "@/components/Batterycell";
import Batterypack from "@/components/Batterypack";
import Site from "@/components/Site";
import Statistics from "@/components/Statistics";
import Add from "@/components/Add";
import Allocation  from "@/components/Allocation ";
export default {
  name: "Home",
  components: {
    Index,
    Batterycell,
    Batterypack,
    Site,
    Statistics,
    Add,
    Allocation 
  },
  data() {
    return {
      currentComponet: "Index",
      record: "",
      nowTime:""
    };
  },
  methods: {
    goModule(component, record) {
      this.record = record || "";
      this.currentComponet = component;
      console.log(this.currentComponet);
      
    },
    goAdd() {
      this.currentComponet = "Add";
    },
    goBack() {
      this.currentComponet = "Index";
    },
     // 获取当前时间
    getNowTime() {
      // 第一个参数为日期，第二个参数为年月日分割格式 '/'或'-'
      function format(Date, str) {
        var obj = {
          Y: Date.getFullYear(),
          M: Date.getMonth() + 1,
          D: Date.getDate(),
          H: Date.getHours(),
          Mi: Date.getMinutes(),
          S: Date.getSeconds()
        };
        // 拼接时间 hh:mm:ss
        var time =
          " " +
          supplement(obj.H) +
          ":" +
          supplement(obj.Mi) +
          ":" +
          supplement(obj.S);
        // yyyy-mm-dd
        if (str.indexOf("-") > -1) {
          return (
            obj.Y + "-" + supplement(obj.M) + "-" + supplement(obj.D) + time
          );
        }
        // yyyy/mm/dd
        if (str.indexOf("/") > -1) {
          return (
            obj.Y + "/" + supplement(obj.M) + "/" + supplement(obj.D) + time
          );
        }
      }
      // 位数不足两位补全0
      function supplement(nn) {
        return (nn = nn < 10 ? "0" + nn : nn);
      }
      var nowDate = new Date();
      this.nowTime = format(nowDate, "-");
      setInterval(()=>{
        var nowDate = new Date();
      this.nowTime = format(nowDate, "-");
      },1000)
      
    },
  },
  created(){
    this.getNowTime()
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  background: url(../assets/pageBg.png) no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 20px;
  box-sizing: border-box;
  .head {
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    .headLeft {
      color: #fff;
      width: 25%;
      text-align: center;
      font-size: 12px;
    }
    .headRight {
      color: #fff;
      width: 25%;
      text-align: center;
      font-size: 12px;
    }
    .headTitle {
      width: 30%;
      height: 40px;
      display: flex;
      justify-content: center;
      // text-align: center;
      flex-direction: column;
      align-items: center;
      .headTitleText {
        color: #fff;
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
  .center {
    width: 100%;
    height: 94%;
  }
}
.d-flex {
  display: flex;
}
</style>
