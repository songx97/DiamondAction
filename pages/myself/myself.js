const app = getApp()
var goodsData = require('../../data/goods.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    bc: 0,
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onShow: function () {
    this.setData({
      userInfo:app.globalData.userInfo
    })
  },
  
  onLoad: function () {

  },

  backdoor: function () {
    console.log(app.globalData.openId)
    var backdoorCnt = this.data.bc;
    var _this = this
    var privKey = "YmYyYjc3MWZmNzExMGFlMmE4NDhlYzVlN2YxYTZjNWQ0MDM4YjVhMTcyMmI4NWJhMjU1MWM2NTQ3Y2U4ZGYyNmFiNzdlZjQ1ZGU1ZjJiNGE2NWNkZjhmN2UyMzJiODg4OGYwMDBjYWZhMDkyOGU3ZWZhMWI4NDU5NDg3ZDQxMDk0ODIyNjk2ZGMyNzI2ODFiMmRiMTA3YzMxYzBlMDA2N2NkNDFjOWM3NDg1MGZlNjcyZDYxMzA0Y2M0MGQzNTJlNzMwMGU2YjJiMmJhZGY5OGJkZWEyZjEzNmI0YTc2MWE4NDE0NDBlMWViZGYwNGQyYWJhMzE5Y2RkNjEzOGM2ZmRiNDdlMDc5NzdmYTIxZDc5Y2ZiZDk0MGQxOWNlNjAzNjM1ZGQ2YmI4ZGVlZDkxZjk4NzE3YTI4NGVkMzQyMTA4Yzg2MjgwMmZiMTZiMTUyYjUwYjliNWU2NzM4YzhjMDYyMDJmZDI3NmUwOWI0MTFjMDc2NTBjZGI2ZGMxYWFkNDQ4MTg5N2IxMWY5MTU4MGI3NzY1OWIxYzczOWU4ZGQ2ZWNhNDViMGNkY2Q2MGRhZWI1OWNiNjM3NzEzOGNlMWY4YTA3NzI0NmIyMWJjNjIzYTNmNGMzYTg2OTNlMDE5NjA5YzUxYWI3YTdhYTdlZmRkYTAxY2Q4ZDdhMWM5ODksMTAwMDEsYjdhYzU0NDUzMzA1N2RkNmVkZTczYWFiNDQyNWE4MGUyNDYxMTgyOWE4ZGYyNjFhMDYzNzNlN2RmODkxNjlhZGU2YmI1MWZhNjg0MDNhMDBiZTM1OWFjYWQ3ZGFmMWFmY2FlZDNhNDMxN2RkMTdlOWU5ZjViYzQwNjg0NDY3ZDMzYTJhNGRlZjc2MGVhM2Y1ZDBmZGIxM2U4NWRhZjIwYWM5OGMzNzA5MzA3MzE5MmIxYWNmYjEyZjYwODI2YzIxNTdiZjdhZTgyMDhmMjliYmMwNjQ5YjljNjVjZTYyMTBmMWViZGZiNmYxMDAxMmNiMzJiYjdmNTQ2NDI1ZGUxYzA0NzQ2NzM2ZWU4MzhkYzU0YTc2ZTQ2ZWE1M2MyZTJkNGZmNWZmN2M1YWJiMWJmOGYzMTVlZjk5OGZkOGQ5YzMzMDFhYzhhYjk4MDMxMzgyMThjNGY3MDUyMWJmZDg4ZDk0OTcxMWEzYTc3OWIwZGYxNmRkZTI4Y2NlYWI5YWMwZmQyZjdkYWEwZDUzYzhjMThiZjk0NmEzNjljZjk2MmM1YzhmYzhlMWQ3MDU3OGU4N2Q2MDNlYzlhYjYwZTFiYTg1Nzg3Zjk5MzU2ZGEwMDVkZGVmNjQxMzU0Mjg2NGNiODhhMzE3OTI0YWZkMjNkZDdmOWYzYmQwYTgwNDMxNzE=";
    wx.request({
      url: 'https://diamondaction.internetapi.cn:8443/SCIDE/SCManager',
      data: {
        "action": "executeContract",
        "contractID": "DiamondOperation",
        "operation": "publish",
        "arg": "{\"num\":" + goodsData.goodsList[backdoorCnt].number + ", \"content\":\"" + encodeURIComponent(goodsData.goodsList[backdoorCnt].name) + "\", \"type\":\"" + goodsData.goodsList[backdoorCnt].type + "\", \"miner\":\"" + app.globalData.openId + "\", \"activity\":\"" + goodsData.goodsList[backdoorCnt].activity + "\", \"priceType\":\"" + goodsData.goodsList[backdoorCnt].priceType + "\", \"beginPrice\":" + goodsData.goodsList[backdoorCnt].beginPrice + ", \"priceParam\":" + goodsData.goodsList[backdoorCnt].priceParam + ", \"photoPath\":\"" + goodsData.goodsList[backdoorCnt].photopath + "\",\"photoPathAfter\":\"" + "https://6d61-master-27262a-1259058618.tcb.qcloud.la/images/Icon/hello.jpg?sign=962697fdbf63636aad12c2ced450b9db&t=1558368470" + "\",\"description\":\"" + encodeURIComponent(goodsData.goodsList[backdoorCnt].description) +"\"}",
        "privKey": privKey
      },
      dataType: "jsonp",
      success: function (res) {
        if (res.data) {
          console.log(res.data);
          wx.showToast({
            title: _this.data.bc + '/14',
          })
        } 
      }
    })
    console.log(backdoorCnt);
    this.setData({bc:backdoorCnt+1});
  }
})
