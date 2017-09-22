// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  tabList:function(e){
    var index = e.currentTarget.dataset.index;
    console.log(index);
    this.setData({
      selIndex: this.data.selIndex == index ? 0 : index
    });
    console.log(this.data.selIndex);
  }
})