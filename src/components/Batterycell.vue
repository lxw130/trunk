<template>
  <div class="batterypack">
    <div class="left">
      <div class="floor1">
        <dv-border-box-12>
          <div class="floor1Box">
            <p class="title">基础信息</p>
            <ul>
              <li class="clearfix">
                <span class="fl">单体编号</span>
                <span class="fr">1</span>
              </li>
              <li class="clearfix">
                <span class="fl">上线时间</span>
                <span class="fr">2010.12.10 10:20:52</span>
              </li>
              <li class="clearfix">
                <span class="fl">所属站点及电池组</span>
                <span class="fr">1站</span>
              </li>
              <li class="clearfix">
                <span class="fl">规格</span>
                <span class="fr">1022V2h</span>
              </li>
            </ul>
          </div>
        </dv-border-box-12>
      </div>
      <div class="floor2">
        <dv-border-box-12>
          <div class="floor1Box">
            <p class="title">实时数据</p>
            <ul>
              <li class="clearfix">
                <span class="fl">工作状态</span>
                <span class="fr">2</span>
              </li>
              <li class="clearfix">
                <span class="fl">单体电压均衡度</span>
                <span class="fr">0.50</span>
              </li>
              <li class="clearfix">
                <span class="fl">单体电压</span>
                <span class="fr">13.93V</span>
              </li>
              <li class="clearfix">
                <span class="fl">单体温度</span>
                <span class="fr">0</span>
              </li>
              <li class="clearfix">
                <span class="fl">单体内阻</span>
                <span class="fr">0</span>
              </li>
            </ul>
          </div>
        </dv-border-box-12>
      </div>
      <div class="floor2">
        <dv-border-box-12>
          <div class="floor1Box">
            <p class="title">告警信息</p>
          </div>
        </dv-border-box-12>
      </div>
    </div>
    <div class="right">
      <div class="floor1">
        <dv-border-box-12>
          <div class="floor1Box">
            <p class="title">单体电压趋势</p>
            <div id="trend" style="width: 100%;height:80%;"></div>
          </div>
        </dv-border-box-12>
      </div>
      <div class="floor2">
        <dv-border-box-12>
          <div class="floor2Box">
            <p class="title">单体温度趋势</p>
            <!-- <div id="alarmAll" style="width: 100%;height:80%;"></div> -->
          </div>
        </dv-border-box-12>
      </div>
      <div class="floor3">
        <dv-border-box-12>
          <div class="floor3Box">
            <p class="title">单体内阻趋势</p>
            <!-- <div id="trend" style="width: 100%;height:80%;"></div> -->
          </div>
        </dv-border-box-12>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    myEcharts1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("trend"));
      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: "value"
        },
         grid: {
          x: 55,
          y: 20,
          x2: 35,
          y2: 60,
          borderWidth: 1
        },
        series: [
          {
            data: [0, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.myEcharts1();
  }
};
</script>

<style lang="less">
.batterypack {
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
    .floor2 {
      width: 100%;
      flex: 1;
    }
    .floor1 {
      height: 160px;
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
          height: 140px;
          font-size: 12px;
          color: #525356;
          li {
            line-height: 24px;
          }
        }
      }
    }
    .floor2 {
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
          height: 140px;
          font-size: 12px;
          color: #525356;
          li {
            line-height: 24px;
          }
        }
      }
    }
  }
 
  .right {
    flex: 10;
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
}
</style>