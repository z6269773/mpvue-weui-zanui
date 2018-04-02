<template>
  <div class="page">
    <div class="page__bd page__bd_spacing">
      <!-- 树结构 -->
      <div class="kind-list">
        <!-- 循环list -->
        <div class="kind-list__item" v-for="(item1,index1) in list" :key="index1">
          <div :id=item1.id class="weui-flex  kind-list__item-hd" :class="[item1.open ? 'kind-list__item-hd_show' : '']" @click="kindToggle">
            <div class="weui-flex__item">{{item1.name}}</div>
            <div class="weui-cell__ft weui-cell__ft_in-access" :class="[item1.open ? 'weui-cell__ft_in-access_show' : '']"></div>
          </div>
          <div class="kind-list__item-bd" :class="[item1.open ? 'kind-list__item-bd_show' : '']">
            <div class="weui-cells" :class="[item1.open ? 'weui-cells_show' : '']">
              <navigator v-for="(item2,index2) in item1.pages" :key="index2" :id="item2" class="weui-cell weui-cell_access" bindtap='repair' :url=" '/pages/'+item2+'/'+item2 ">
                <div class="weui-cell__bd">{{item2}}</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
              </navigator>
            </div>
          </div>
        </div>
      </div>
      <!-- 循环list end-->
    </div>
    <div class="zan-panel-title">这是基于ZanUI + WeUI 用mpvue重写的一套框架。集合了我在工作中常用的功能！参考了很多大牛开源的代码！</div>
  </div>
</template>

<script>
  // Use Vuex
  export default {
    data() {
      return {
        list: [{
            id: 'form',
            name: '表单',
            open: false,
            pages: ['button', 'list', 'input', 'slider', 'uploader']
          },
          {
            id: 'widget',
            name: '基础组件',
            open: false,
            pages: ['zan_badge', 'zan_loadmore', 'zan_select', 'zan_card', 'zan_capsule', 'zan_helper', 'zan_icon', 'zan_noticebar', 'zan_stepper', 'zan_steps', 'zan_tag', 'zan_toast', 'article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress']
          },
          {
            id: 'feedback',
            name: '操作反馈',
            open: false,
            pages: ['zan_actionsheet', 'zan_dialog', 'zan_picker', 'zan_toast','zan_stepper','actionsheet', 'dialog', 'msg', 'picker', 'toast']
          },
          {
            id: 'nav',
            name: '导航相关',
            open: false,
            pages: ['navbar', 'tabbar']
          },
          {
            id: 'search',
            name: '搜索相关',
            open: false,
            pages: ['searchbar']
          }
        ]
      }
    },
    methods: {
      kindToggle: function(e) {
        console.log(e);
        var id = e.currentTarget.id,
          list = this.list;
        for (var i = 0, len = list.length; i < len; ++i) {
          if (list[i].id == id) {
            list[i].open = !list[i].open
          } else {
            list[i].open = false
          }
        }
        this.list = list
      }
    },
    mounted() {
  
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    font-size: 17px;
    color: #333;
  }
  
  .weui-flex {
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  
  .weui-cells {
    margin-top: 0;
    opacity: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
  
  .weui-cells:after,
  .weui-cells:before {
    display: none;
  }
  
  .weui-cells_show {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  
  .weui-cell:before {
    right: 15px;
  }
  
  .kind-list__item {
    margin-left: 15px;
    line-height: 25px;
    padding: 10px 10px 10px 0;
    margin: 0 0 0 15px;
    background: #FFF;
    border-bottom: 1px solid #DFDFDF;
    background-color: #fff;
    border-radius: 2px;
    overflow: hidden;
  }
  
  .kind-list__item:first-child {
    margin-top: 0;
  }
  
  .kind-list__img {
    width: 30px;
    height: 30px;
  }
  
  .kind-list__item-hd {
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }
  
  .kind-list__item-bd {
    height: 0;
    overflow: hidden;
  }
  
  // toggle css
  .kind-list__item-hd_show {
    opacity: 0.4;
  }
  
  .weui-cell__ft_in-access_show {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  
  .kind-list__item-bd_show {
    height: auto;
  }
</style>
