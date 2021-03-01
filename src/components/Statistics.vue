<template>
  <div class="batterypack">
    <div class="left">
      <div class="floor1">
        <dv-border-box-12>
          <div class="floor1Box">
            <p class="title">站点信息</p>
            <div class="zdBox">
              <div class="zdBoxLi">站点1</div>
              <div class="zdBoxLi">站点2</div>
            </div>
          </div>
        </dv-border-box-12>
      </div>
      <div class="floor2">
        <dv-border-box-12>
          <div class="floor2Box">
            <div class="dcLi">电池1组</div>
            <div class="dcLi">电池1组</div>
            <div class="dcLi">电池1组</div>
            <div class="dcLi">电池1组</div>
            <div class="dcLi">电池1组</div>
            <div class="dcLi">电池1组</div>
            <div class="dcLi">电池1组</div>
            <div class="dcLi">电池1组</div>
            <div class="dcLi">电池1组</div>
          </div>
        </dv-border-box-12>
      </div>
    </div>
    <div class="right">
      <div class="floor1">
        <dv-border-box-12>
          <div class="floor1Box">
            <div class="fl1Li">环境温度过高</div>
            <div class="fl1Li">环境温度过低</div>
            <div class="fl1Li">组电压过高</div>
            <div class="fl1Li">组电压欠压</div>
            <div class="fl1Li">组电流过流</div>
            <div class="fl1Li">组机放电告警</div>
            <div class="fl1Li">组机离线告警</div>
            <div class="fl1Li">单体电压过高</div>
            <div class="fl1Li">单体电压过低</div>
            <div class="fl1Li">单体温度过高</div>
            <div class="fl1Li">单体温度过低</div>
            <div class="fl1Li">单体内阻过高</div>
            <div class="fl1Li">单体电压不平衡</div>
            <div class="fl1Li">单体离线</div>
          </div>
        </dv-border-box-12>
      </div>
      <div class="floor2">
        <dv-border-box-12>
          <div class="floor2Box">
            <div class="clearfix">
              <div class="fl">
                <span style="margin-right:60px">组</span>
                <span style="margin-right:60px">告警</span>
                <span style="margin-right:60px">电池组离线</span>
                <span>2021-02-08 11:20:20</span>
              </div>
              <span class="fr">2站六组</span>
            </div>
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
  font-size: 14px;
  .left {
    flex: 5;
    height: 100%;
    // background-color: greenyellow;
    display: flex;
    flex-direction: column;
    .floor2 {
      width: 100%;
      flex: 1;
      .floor2Box {
        padding: 20px;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        .dcLi {
          width: 25%;
          line-height: 60px;
          text-align: center;
        }
      }
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
          font-size: 16px;
        }
        .zdBox {
          display: flex;
          .zdBoxLi {
            width: 50%;
            text-align: center;
            line-height: 80px;
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
    .floor2 {
      width: 100%;
      flex: 1;
    }
    .floor1 {
      flex: 0 0 160px;
      .floor1Box {
        padding: 10px;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        .fl1Li {
          width: 14.2%;
          line-height: 70px;
        }
      }
    }
    .floor2 {
      .floor2Box {
        padding: 20px;
        height: 100%;
        box-sizing: border-box;
        color: #fff;
      }
    }
  }
}
</style>