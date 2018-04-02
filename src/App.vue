<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
.btn{
  width:80px;
  height:30px;
  line-height:30px;
  margin:0 4px;
  outline:none;
  border-radius:4px;
  background-color:#6494f6;
  color:white;
  border:none;
}
button {
  position:relative;
  display:block;
  margin-left:auto;
  margin-right:auto;
  padding-left:14px;
  padding-right:14px;
  box-sizing:border-box;
  font-size:15px;
  text-align:center;
  text-decoration:none;
  line-height:2.55555556;
  border-radius:2px;
  -webkit-tap-highlight-color:transparent;
  overflow:hidden;
  color:#000000;
  background-color:#F8F8F8;
}
.page{
  padding:4px;
}

</style>
