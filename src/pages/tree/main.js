import Vue from 'vue'
import store from '@/store'
import App from './index'
const app = new Vue({
    store,
    ...App
}).$mount()

// export default {
//     // config: {
//     //   navigationBarTitleText: ''
//     // }
//   }