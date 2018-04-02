import Vue from 'vue'
import App from './index'
import store from '@/store'
const app = new Vue({
  store,
  ...App
}).$mount()

export default {
  config: {
    navigationBarTitleText: '我的订单'
  }
}
