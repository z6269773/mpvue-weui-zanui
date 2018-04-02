import Vue from 'vue'
// 使用vuex管理状态
import store from '@/store'
import App from './App'


// import Fly from 'flyio'

// Vue.prototype.$http = Fly;//将Fly挂载到Vue实例中的$http上面,在项目中的任何位置通过this.$http使用

Vue.config.productionTip = false
App.mpType = 'app'

import './assets/weui.css'
import './assets/zanui.css'

const app = new Vue({
  store,
  ...App
}).$mount()


export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/order/order', 'pages/index/index','^pages/tree/tree'],
    "window":{
      "navigationBarTextStyle": "#FFF",
      "backgroundTextStyle": "#FFF",
      "navigationBarTitleText": "ZanUI + WeUI for mpvue",
      "navigationBarBackgroundColor": "#6494F6",
      "backgroundColor": "#EEEEEE",
      "enablePullDownRefresh": true
    },
    // "tabBar": {
    //   "color": "#000",
    //   "selectedColor": "#009cff",
    //   "borderStyle":"white",
    //   "backgroundColor": "#ffffff",
    //   "list": [
    //     {
    //       "pagePath": "pages/index/index",
    //       "text":"首页",
    //       "iconPath": "static/images/icon_SY.png",
    //       "selectedIconPath": "static/images/icon_zy2.png"
    //     },
    //     {
    //       "pagePath": "pages/tree/tree",
    //       "text": "列表功能",
    //       "iconPath": "static/images/icon_DD.png",
    //       "selectedIconPath": "static/images/icon_lb.png"
    //     }
       
    //   ]
    // }
  }
}
