<template>
    <div class="page">
        <div class="page__bd">
            <div class="weui-tab">
                <div class="weui-navbar">
                    <block v-for="(item,index) in tabs" :key="index">
                        <div :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item" @click="tabClick">
                            <div class="weui-navbar__title">{{item}}</div>
                        </div>
                    </block>
                    <div class="weui-navbar__slider" :style="{width:sliderWidth+'px',left:sliderLeft+'px', transform:'translateX('+sliderOffset +'px)'}" :class="navbarSliderClass"></div>
                </div>
                <div class="weui-tab__panel">
                    <div class="weui-tab__content" :hidden="activeIndex != 0">选项一的内容</div>
                    <div class="weui-tab__content" :hidden="activeIndex != 1">选项二的内容</div>
                    <div class="weui-tab__content" :hidden="activeIndex != 2">选项三的内容</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                tabs: ["选项一", "选项二", "选项三"],
                activeIndex: 0,
                sliderOffset:0,
                sliderLeft: 0,
                sliderWidth:0,
            }
        },
        computed: {
            navbarSliderClass() {
            var that = this;
                wx.getSystemInfo({
                    success: function(res) {
                            //计算slider的宽度
                            that.sliderWidth = res.windowWidth * 0.9/ that.tabs.length,
                            //计算slider的间距
                            // that.sliderLeft = (res.windowWidth / that.tabs.length - that.sliderWidth) / that.tabs.length-1,
                            // 计算slider距离左边的额位置
                            that.sliderOffset = res.windowWidth / that.tabs.length * that.activeIndex
                    }
                });
            },
            // navbarSliderClass() {
            //     if (this.activeIndex == 0) {
            //         return 'weui-navbar__slider_0'
            //     }
            //     if (this.activeIndex == 1) {
            //         return 'weui-navbar__slider_1'
            //     }
            //     if (this.activeIndex == 2) {
            //         return 'weui-navbar__slider_2'
            //     }
            // }
        },
        methods: {
            tabClick(e) {
                console.log(e);
                this.activeIndex = e.currentTarget.id;
                this.sliderOffset = e.currentTarget.offsetLeft;
            }
        }
    }
</script>

<style scoped>
    page,
    .page,
    .page__bd {
        height: 100%;
    }
    
    .page__bd {
        padding-bottom: 0;
    }
    
    .weui-tab__content {
        padding-top: 60px;
        text-align: center;
    }
    
    .weui-navbar__slider_0 {
        left: 29rpx;
        transform: translateX(0);
    }
    
    .weui-navbar__slider_1 {
        left: 29rpx;
        transform: translateX(250rpx);
    }
    
    .weui-navbar__slider_2 {
        left: 29rpx;
        transform: translateX(500rpx);
    }
</style>