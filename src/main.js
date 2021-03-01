import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import echarts from 'echarts'
import * as echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

// css 重置样式
import "./assets/css/reset.css"
import "./assets/css/component.css"
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
