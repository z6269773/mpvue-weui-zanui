var Fly=require("flyio/dist/npm/wx") //npm引入方式
var fly=new Fly(); //创建fly实例

//添加拦截器
fly.interceptors.request.use((config,promise)=>{
  //给所有请求添加自定义header
  config.headers["User2-Agent"]="wechat.com";
  return config;
})

const api = {
    getReperi:(r) =>{
      fly.post('https://test.fuyitianjian.net/repiar/scan/code?id=52400195d5bb11e7b93f00163e1a45b9', {})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

}

export default api