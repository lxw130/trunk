<template>
  <div class="index">
    <div class="left">
      <div class="floor1">
        <dv-border-box-12>
          <div class="floor1Box">
            <p class="title">基础信息</p>
            <ul>
              <li class="clearfix">
                <span class="fl">站点名称</span>
                <span class="fr">蓄电池再平衡系统</span>
              </li>
              <li class="clearfix">
                <span class="fl">站点所在地</span>
                <span class="fr">四川成都</span>
              </li>
              <li class="clearfix">
                <span class="fl">站点数</span>
                <span class="fr">{{stationData.length}}个</span>
              </li>
              <li class="clearfix">
                <span class="fl">电池组数</span>
                <span class="fr">13组</span>
              </li>
              <li class="clearfix">
                <span class="fl">单体电池数</span>
                <span class="fr">{{cellNum}}个</span>
              </li>
            </ul>
          </div>
        </dv-border-box-12>
      </div>
      <div class="floor2">
        <dv-border-box-12>
          <div class="floor2Box">
            <p class="title">告警总览</p>
            <div id="alarmAll" style="width: 100%;height:80%;"></div>
          </div>
        </dv-border-box-12>
      </div>
      <div class="floor3">
        <dv-border-box-12>
          <div class="floor3Box">
            <p class="title">告警趋势</p>
            <div id="trend" style="width: 100%;height:80%;"></div>
          </div>
        </dv-border-box-12>
      </div>
    </div>
    <div class="center">
      <div class="floor1">
        <div
          class="centerLi"
          @click="goSite()"
          v-for="(item,i) in stationData"
          :key="i"
        >{{item.address}}({{item.name}})</div>
      </div>
      <div class="floor2">
        <dv-border-box-6>
          <div class="floor2Box">
            <div class="floor2Li">
              <p class="floor2LiTitle" @click="goStatistics()">总告警数</p>
              <p class="floor2LiNum">{{gjAll}}</p>
            </div>
            <div class="floor2Li">
              <p class="floor2LiTitle">当前告警数</p>
              <p class="floor2LiNum">0</p>
            </div>
            <div class="clearfix">
              <el-button class="fr" type="text"  style="font-size:12px" @click="goModule()">下发指令</el-button>
            </div>
          </div>
        </dv-border-box-6>
      </div>
    </div>
    <div class="right">
      <dv-border-box-12>
        <div class="rightBox">
          <p class="title">待用</p>
        </div>
      </dv-border-box-12>
    </div>
  </div>
</template>

<script>
import { station, packdata, warningcount, latestwarning } from "@/api/index.js";
// import format from "@/utils/time";
export default {
  data() {
    return {
      stationData: [],
      packdataN: {},
      starttime: "",
      endtime: "",
      zeroTime: "",
      stationLiInfo: {},
      gjAll: 0,
      cellGroup: 0,
      cellNum: 0
    };
  },
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("alarmAll"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "item"
        },
        legend: {
          top: "5%",
          left: "center"
        },
        series: [
          {
            name: "告警",
            // center:['25%','35%'],
            type: "pie",
            radius: ["40%", "50%"],
            avoidLabelOverlap: false,
            label: {
              alignTo: "edge",
              // formatter: '{name|{b}}\n{time|{c} 小时}',
              minMargin: 5,
              edgeDistance: 10,
              lineHeight: 15,
              rich: {
                time: {
                  fontSize: 10,
                  color: "#999"
                }
              }
            },
            labelLine: {
              length: 15,
              length2: 0,
              maxSurfaceAngle: 80
            },
            // labelLine: {
            //     show: false
            // },
            data: [{ value: 1048, name: "告警" }]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    trendEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("trend"));
      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        grid: {
          x: 35,
          y: 20,
          x2: 35,
          y2: 60,
          borderWidth: 1
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line"
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
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
      this.endtime = format(nowDate, "-");

      var startDate = nowDate.setTime(nowDate.getTime() - 6 * 60 * 60 * 1000);
      var startTime = new Date(startDate);
      this.starttime = format(startTime, "-");

      var zeroTime = new Date(new Date().setHours(0, 0, 0, 0));
      this.zeroTime = format(startTime, "-");
    },
    // 查询所有的电池组
    station() {
      station()
        .then(res => {
          this.stationData = res.data.data;
          this.stationData.forEach(e => {
            this.cellNum += e.cellCount;
          });
          if (this.stationData.length != 0) {
            this.stationLiInfo = this.stationData[0];
          }
          this.packdata();
          this.warningcount();
          this.latestwarning();

          console.log(this.stationData, "this.stationData");
          console.log(this.stationLiInfo, "this.stationLiInfo");
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 总告警数
    warningcount() {
      var msg = {
        starttime: this.zeroTime,
        batteryCode: this.stationLiInfo.batteryCode,
        stationCode: this.stationLiInfo.stationCode
      };
      warningcount(msg)
        .then(res => {
          this.gjAll = res.data.data;
          console.log(res, "告警");
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 当前告警数
    latestwarning() {
      var msg = {
        // batteryCode: this.stationLiInfo.batteryCode,
        // stationCode: this.stationLiInfo.stationCode
        batteryCode: this.stationLiInfo.batteryCode,
        stationCode: this.stationLiInfo.stationCode
      };
      latestwarning(msg)
        .then(res => console.log(res, "当前告警数"))
        .catch(error => {
          console.log(error);
        });
    },
    // 查询所有的电池组
    packdata() {
      let params = {
        // batteryCode: this.stationLiInfo.batteryCode,
        // stationCode: this.stationLiInfo.stationCode
        // starttime: this.starttime,
        // endtime: this.endtime,
        batteryCode: "2",
        stationCode: "1"
      };
      packdata(params)
        .then(res => {
          console.log(res, "看哈");
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 跳转到站点页面
    goSite() {
      this.$emit("goModule",'Site')
    },
    goStatistics() {
      this.$router.push("/statistics");
    },
    goModule(){
      this.$emit("goModule","Allocation")
    }
  },
  created() {
    // 查询所有的电池组
    this.getNowTime();
    this.station();
    // this.packdata();
  },
  mounted() {
    this.myEcharts();
    this.trendEcharts();
  }
};
</script>

<style lang="less">
.index {
  // background-color: #ccc;
  height: 100%;
  width: 100%;
  display: flex;
  .left {
    flex: 5;
    height: 100%;
    // background-color: greenyellow;
    display: flex;
    flex-direction: column;
    .floor1,
    .floor2,
    .floor3 {
      width: 100%;
      flex: 1;
    }
    .floor1Box {
      padding: 10px;
      height: 100%;
      box-sizing: border-box;
      .title {
        color: #9e9e9f;
        line-height: 40px;
        font-size: 12px;
      }
      ul {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // align-items: center;
        font-size: 12px;
        // line-height: 20px;
        color: #525356;
      }
    }
    .floor2 {
      .floor2Box {
        padding: 10px;
        height: 100%;
        box-sizing: border-box;
        .title {
          color: #9e9e9f;
          line-height: 40px;
          font-size: 12px;
        }
      }
    }
    .floor3 {
      .floor3Box {
        padding: 10px;
        height: 100%;
        box-sizing: border-box;
        .title {
          color: #9e9e9f;
          line-height: 40px;
          font-size: 12px;
        }
      }
    }
  }
  .center {
    flex: 10;
    height: 100%;
    display: flex;
    flex-direction: column;
    .floor1 {
      flex: 9;
      width: 100%;
      padding-top: 40px;
      display: flex;
      flex-wrap: wrap;
      .centerLi {
        flex: 0 0 50%;
        line-height: 100px;
        cursor: pointer;
        text-align: center;
      }
    }
    .floor2 {
      flex: 2;
      // background:#ccc;
      width: 100%;
      box-sizing: border-box;
      .floor2Box {
        padding: 10px;
        display: flex;
        .floor2Li {
          flex: 1;
          text-align: center;
          height: 100%;
          .floor2LiTitle {
            font-size: 12px;
            color: #66686d;
            margin-top: 5%;
            margin-bottom: 10%;
          }
          .floor2LiNum {
            font-size: 16px;
            margin-bottom: 5%;
            color: #fffe14;
          }
        }
      }
    }
  }
  .right {
    flex: 5;
    height: 100%;
    .rightBox {
      padding: 10px;
      .title {
        color: #9e9e9f;
        line-height: 40px;
        font-size: 12px;
      }
    }
  }
}
</style>