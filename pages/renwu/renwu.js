const app=getApp()
const juesedata=app.data.renwu.juese;
Page({
   // 其他数据
   avatarUrls: [], // 用于存储替换后的 src
   value: '', // 存储搜索关键词
  // 跳转
  redirectToPage() {
    wx.navigateTo({
      url: '../renwuxinxi/renwuxinxi', // 替换为实际的页面路径
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    
  },


  onLoad(options) {
      // 遍历 juesedata，获取 avatar 字段
      const avatarUrls = juesedata.map(item => item.avatar);
    
      // 更新 data 中的 avatarUrls
      this.setData({ avatarUrls });
      
    },
  
    redirectToPage: function (event) {
      // 获取点击的图片索引
      const index = event.currentTarget.dataset.index;
    
      // 获取对应的 id
      const id = juesedata[index].id;
    
      // 跳转到 renwuxinxi 页面，并将 id 作为参数传递
      wx.navigateTo({
        url: `/pages/renwuxinxi/renwuxinxi?id=${id}`,
      });
    }
  


  },



)