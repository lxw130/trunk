<template>
  <div class="site">
    <div class="left">
      <div class="floor1">
        <dv-border-box-12>
          <div class="floor1Box">
            <p class="title">基础信息</p>
            <ul>
              <li class="clearfix">
                <span class="fl">站点地址</span>
                <span class="fr">华阳机房电池A/b室</span>
              </li>
              <li class="clearfix">
                <span class="fl">经纬度</span>
                <span class="fr">104.12554 100.354545</span>
              </li>
              <li class="clearfix">
                <span class="fl">站点编号</span>
                <span class="fr">2</span>
              </li>
              <li class="clearfix">
                <span class="fl">电池编号</span>
                <span class="fr">0002</span>
              </li>
            </ul>
          </div>
        </dv-border-box-12>
      </div>
      <div class="floor2">
        <dv-border-box-12>
          <div class="floor1Box">
            <p class="title">站点情况</p>
            <ul>
              <li class="clearfix">
                <span class="fl">电池组在线数量</span>
                <span class="fr">2</span>
              </li>
              <li class="clearfix">
                <span class="fl">电池组在线数量</span>
                <span class="fr">2</span>
              </li>
              <li class="clearfix">
                <span class="fl">电池组在线数量</span>
                <span class="fr">2</span>
              </li>
              <li class="clearfix">
                <span class="fl">电池组在线数量</span>
                <span class="fr">2</span>
              </li>
              <li class="clearfix">
                <span class="fl">电池组在线数量</span>
                <span class="fr">2</span>
              </li>
              <li class="clearfix">
                <span class="fl">电池组在线数量</span>
                <span class="fr">2</span>
              </li>
              <li class="clearfix">
                <span class="fl">经纬度</span>
                <span class="fr">104.12554 100.354545</span>
              </li>
              <li class="clearfix">
                <span class="fl">站点编号</span>
                <span class="fr">2</span>
              </li>
              <li class="clearfix">
                <span class="fl">电池编号</span>
                <span class="fr">0002</span>
              </li>
            </ul>
          </div>
        </dv-border-box-12>
      </div>
    </div>
    <div class="center">
      <div class="floor1">
        <div class="centerLi" @click="goBP()">电池</div>
        <div class="centerLi" @click="goBP()">电池</div>
        <div class="centerLi" @click="goBP()">电池</div>
        <div class="centerLi" @click="goBP()">电池</div>
        <div class="centerLi" @click="goBP()">电池</div>
        <div class="centerLi" @click="goBP()">电池</div>
        <div class="centerLi" @click="goBP()">电池</div>
        <div class="centerLi" @click="goBP()">电池</div>
      </div>
      <div class="floor2">
        <dv-border-box-6>
          <div class="floor2Box">
            <p class="title">站点情况</p>
            <ul>
              <li class="clearfix">
                <div class="fl">
                  <span style="margin-right:60px">6组</span>
                  <span style="margin-right:60px">告警</span>
                  <span>电池组离线</span>
                </div>
                <span class="fr">10:49:42</span>
              </li>
              <li class="clearfix">
                <div class="fl">
                  <span style="margin-right:60px">6组</span>
                  <span style="margin-right:60px">告警</span>
                  <span>电池组离线</span>
                </div>
                <span class="fr">10:49:42</span>
              </li>
              <li class="clearfix">
                <div class="fl">
                  <span style="margin-right:60px">6组</span>
                  <span style="margin-right:60px">告警</span>
                  <span>电池组离线</span>
                </div>
                <span class="fr">10:49:42</span>
              </li>
              <li class="clearfix">
                <div class="fl">
                  <span style="margin-right:60px">6组</span>
                  <span style="margin-right:60px">告警</span>
                  <span>电池组离线</span>
                </div>
                <span class="fr">10:49:42</span>
              </li>
              <li class="clearfix">
                <div class="fl">
                  <span style="margin-right:60px">6组</span>
                  <span style="margin-right:60px">告警</span>
                  <span>电池组离线</span>
                </div>
                <span class="fr">10:49:42</span>
              </li>
              <li class="clearfix">
                <div class="fl">
                  <span style="margin-right:60px">6组</span>
                  <span style="margin-right:60px">告警</span>
                  <span>电池组离线</span>
                </div>
                <span class="fr">10:49:42</span>
              </li>
            </ul>
          </div>
        </dv-border-box-6>
      </div>
    </div>
    <div class="right">
      <div class="floor1">
        <dv-border-box-12>
          <div class="floor1Box">
            <p class="title">总告警数趋势分析</p>
            <div id="trend" style="width: 100%;height:80%;"></div>
          </div>
        </dv-border-box-12>
      </div>
      <div class="floor2">
        <dv-border-box-12>
          <div class="floor2Box">
            <p class="title">环境告警趋势分析</p>
            <!-- <div id="alarmAll" style="width: 100%;height:80%;"></div> -->
          </div>
        </dv-border-box-12>
      </div>
      <div class="floor3">
        <dv-border-box-12>
          <div class="floor3Box">
            <p class="title">电池组电压电流</p>
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
    },
    goBP(){
      this.$emit("goModule",'Batterypack')
    }
  },
  mounted() {
    this.myEcharts1();
  }
};
</script>

<style lang="less">
.site {
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
        flex: 0 0 25%;
        line-height: 100px;
        cursor: pointer;
        text-align: center;
      }
    }
    .floor2 {
      flex: 4;
      // background:#ccc;
      width: 100%;
      box-sizing: border-box;
      .floor2Box {
        padding: 10px 20px;
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
          color: #fff;
          li {
            line-height: 20px;
          }
        }
      }
    }
  }
  .right {
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
}
</style>