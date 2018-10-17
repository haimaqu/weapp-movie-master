Page({
  data:{
    order:{},
    first:true //是否是第一次支付
  },
  onLoad(params){
    this.initData(params)
  },
  initData(params){
    this.setData({
      order:params
    })
  },
  //支付
  payment(){
    //避免重复支付
    if(this.data.first){
      let movieOrder = wx.getStorageSync('movieOrder') || []
      movieOrder.unshift(this.data.order)
      wx.setStorageSync('movieOrder', movieOrder)
      wx.showToast({
        title: '支付成功',
      })
      this.setData({
        first:false
      })
    } else {
      wx.showToast({
        title: '已支付',
        icon:'none'
      })
    }
  }
})