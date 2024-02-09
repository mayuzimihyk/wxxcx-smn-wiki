Page({
  data: {
    value: '', // 存储搜索关键词
    searchData: [], // 存储搜索结果数据
  },

  onInput(event) {
    // 获取输入的文本内容
    const { value } = event.detail;

    // 更新页面数据中的 value
    this.setData({
      value,
    });
  },

  onSearch() {
    // 获取搜索关键词
    const { value } = this.data;

    // 获取全局数据
    const app = getApp();
    const jueseData = app.data.renwu.juese;

    // 在这里可以根据关键词搜索数据
    const searchData = jueseData.filter(item => {
      // 这里可以根据你的搜索逻辑匹配数据
      // 例如，匹配角色的中文名字
      return item.cnname.includes(value);
    });
    // console.log(value);
    // 更新页面数据，显示搜索结果
    this.setData({
      searchData,
    });
    // console.log(searchData[0].id);
   // 获取对应的 id
   const id = searchData[0].id;
    
   // 跳转到 renwuxinxi 页面，并将 id 作为参数传递
   wx.navigateTo({
     url: `/pages/renwuxinxi/renwuxinxi?id=${id}`,
   });
  },
});
