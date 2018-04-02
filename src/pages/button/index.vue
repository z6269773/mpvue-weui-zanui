<template>
  <div class="page">
      <div class="page">
        <div class="page__hd">
          <div class="page__title">Button</div>
          <div class="page__desc">按钮，WeUI采用小程序原生的按钮为主体，加入一些间距的样式。</div>
        </div>
        <div class="page__bd page__bd_spacing">
          <button class="weui-btn" type="primary">页面主操作 Normal</button>
          <button class="weui-btn" type="primary" disabled="true">页面主操作 Disabled</button>

          <button class="weui-btn" type="default">页面次要操作 Normal</button>
          <button class="weui-btn" type="default" disabled="true">页面次要操作 Disabled</button>

          <button class="weui-btn" type="warn">警告类操作 Normal</button>
          <button class="weui-btn" type="warn" disabled="true">警告类操作 Disabled</button>

          <div class="button-sp-area">
            <button class="weui-btn" type="primary" plain="true">按钮</button>
            <button class="weui-btn" type="primary" disabled="true" plain="true">按钮</button>

            <button class="weui-btn" type="default" plain="true">按钮</button>
            <button class="weui-btn" type="default" disabled="true" plain="true">按钮</button>

            <button class="weui-btn mini-btn" type="primary" size="mini">按钮</button>
            <button class="weui-btn mini-btn" type="default" size="mini">按钮</button>
            <button class="weui-btn mini-btn" type="warn" size="mini">按钮</button>
          </div>
        </div>
        <div class="zan-panel-title">迷你按钮</div>
          <div class="zan-panel" style="padding: 15px;">
            <button class="zan-btn zan-btn--mini zan-btn--plain">取消订单</button>
            <button class="zan-btn zan-btn--mini zan-btn--primary zan-btn--plain">确认付款</button>
            <button class="zan-btn zan-btn--mini zan-btn--warn zan-btn--plain">确认付款</button>
            <button class="zan-btn zan-btn--mini zan-btn--danger zan-btn--plain">确认付款</button>
          </div>

          <div class="zan-panel-title">Loading</div>
          <div class="zan-panel">
            <div class="zan-btns">
              <button class="zan-btn zan-btn--mini zan-btn--loading">取消订单</button>
              <button class="zan-btn zan-btn--loading zan-btn--primary">确认付款</button>
              <button class="zan-btn zan-btn--loading zan-btn--danger">确认付款</button>
              <button class="zan-btn zan-btn--loading zan-btn--warn">确认付款</button>
            </div>
          </div>

          <!-- end -->
      </div>
    </div>
</template>

<script>
// Use Vuex
export default {
  methods: {
  }
}
</script>
<style>
.page__desc{
font-size:12px;
color:#ddd;  
}

</style>