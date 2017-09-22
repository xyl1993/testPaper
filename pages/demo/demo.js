//index.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    /** 
        * 页面配置 
        */
    userInfo: {},
    hasUserInfo: false
  },
  onLoad: function () {
    var that = this;
    if (app.globalData.userInfo) {
      that.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },
  tabMenu: function (e) {
    var type = e.currentTarget.dataset.type;
    switch (type) {
      case 'share':
        wx.navigateTo({
          url: '../share/share'
        })
        break;
      default: break;
    }
  }
})  