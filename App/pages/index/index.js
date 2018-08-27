//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/dist/images/index/banner.png',
      '/dist/images/index/banner.png',
      '/dist/images/index/banner.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicatorColor: "#FFF",
    indicatorActiveColor: "#FD8101",
    // 下拉面板交互属性
    sortSelectPanelIndex: 0,
    activeIndex: 0,
    toView: 'red',
    // 底部弹窗交互属性
    msgDisplay: "block",
    // 收藏栏目交互属性
    isCollect: false
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  /**
   * 展开排序下拉框
   */
  sortDropdown: function(){
    var that = this;
    if (that.data.sortSelectPanelIndex != 1){
      this.setData({
        sortSelectPanelIndex: 1,
        activeIndex: 1
      })
    }else{
      this.setData({
        sortSelectPanelIndex: 0,
        activeIndex: 0
      })
    }
  },
  /**
   * 展开门店下拉框
   */
  shopDropdown: function () {
    var that = this;
    if (that.data.sortSelectPanelIndex != 2) {
      this.setData({
        sortSelectPanelIndex: 2,
        activeIndex: 2
      })
    }else{
      this.setData({
        sortSelectPanelIndex: 0,
        activeIndex: 0
      })
    }
  },
  /**
   * 关闭底部弹窗
   */
  closeMsg: function(){
    this.setData({
      msgDisplay: "none",
    })
  },
  /**
   * 收藏栏目
   */
  collect: function(){
    // TODO 实际接入数据后请根据list中的值进行双向绑定
    var that = this;
    if (that.data.isCollect == false){
      this.setData({
        isCollect: true
      })
    }else{
      this.setData({
        isCollect: false
      })
    }
    
  }
})