<template>
    <div class="container">
        <div class="news-wrap">
          <a href="/pages/select/main" class="news-item" v-for="key in 6" :key="key">
            <div class="news-header">
              <img src="/static/images/icon_lb.png" alt="图片"  class="news-img" mode="aspectFill">
              <div class="news-text">
                <div class="news-title">文章标题 </div>
                <div class="news-tag">已读</div>
                <div class="news-info">2012</div>
              </div>
            </div>
            <div class="news-footer">
              <div class="news-footer-lf">重点</div>
              <div class="news-footer-ri">2018年8月</div>
            </div>
        </a>
        </div>
    </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: []
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style lang="scss" scoped>
.news-wrap {
  padding: 0 10px;
  width: 100%;
}
.news-item {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  flex-direction: column;
  height:110px;
  margin: 10px;
  padding: 5px;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  border:1px solid #eee;
  border-radius:4px;
  background: rgba(247, 238, 247, 0.356);
  -moz-box-shadow: 2px 2px 5px #888888; /* 老的 Firefox */
  box-shadow: 2px 2px 5px #888888;
}
.news-header{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width: 100%;
  height:90px;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  border-bottom:1px solid #eee;
}
.news-img {
  width: 100px;
  height: 72px;
  margin-right: 10px;
  img{
    width: 100%;
    height: 100%;
  }
}
.news-text {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.news-title {
  font-size: 15px;
}
.news-info {
  color: #aaa;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
.news-footer{
  display:flex;
  color: #aaa;
  font-size: 12px;
  align-items:center;
  width: 100%;
  height: 40px;
  
}
.news-footer-lf{
  flex:1;
}
</style>
