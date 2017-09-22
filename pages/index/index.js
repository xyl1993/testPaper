//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else{
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  tabMenu: function (e) {
    var type = e.currentTarget.dataset.type;
    console.log(e);
    switch (type){
      case 'home':
        wx.navigateTo({
          url: '../home/home'
        })
      break;
      case 'tixian':
        wx.navigateTo({
          url: '../tixian/tixian'
        })
      break;
      case 'question':
        wx.navigateTo({
          url: '../question/question'
        })
      break;
      case 'demo':
        wx.navigateTo({
          url: '../demo/demo'
        })
        break;
      default: break;
    }
  }
})
