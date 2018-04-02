<template>
  <div class="containers">
    <image class='logo' @click="scanCode" src='https://res.fuyitianjian.net/images/wxml/icon_SM.png' />

    <div class='ub'>
      <image class='icon_SP' @click='chooseVideo' src='https://res.fuyitianjian.net/images/wxml/icon_SP.png' />


      <image class='icon_YY' bindtap='chooseAudio' src='https://res.fuyitianjian.net/images/wxml/icon_YY.png' />

    </div>
   
     
</div>

</template>

<script>
import card from '@/components/card'
import api from '@/utils/api'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    scanCode: function () {
    var _this = this ;
    wx.scanCode({
      success: (res) => {
        console.log(res)
        wx.setStorageSync('result', res.result)
        api.getReperi();
      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 1000
        })
      }, 
    })
  },
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.ub {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: box;
    position:relative;
}
.containers{
  width: 100vw;
  height: 100vh;
  background: url(https://res.fuyitianjian.net/images/wxml/IMG_BG.jpg) no-repeat;
  background-size: 100% 100%;
}

.logo{
  display: block;
  width: 40vw;
  height: 40vw;
  padding-top: 20vh;
  margin: auto;
}


.icon_SP{
  display: block;
  width: 45vw;
  height: 17vw; 
  padding-top: 10vh;
  margin: auto;
}
.icon_YY{
  display: block;
  width: 45vw;
  height: 17vw; 
  padding-top: 10vh;
  margin: auto;
}
</style>
