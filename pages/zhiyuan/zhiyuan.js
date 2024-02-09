const app=getApp()
const sududata=app.data.zhiyuan.sudu;
const nailidata=app.data.zhiyuan.naili;
const liliangdata=app.data.zhiyuan.liliang;
const yilidata=app.data.zhiyuan.yili;
const zhilidata=app.data.zhiyuan.zhili;
Page({
   // 其他数据
   sudu: [], // 用于存储替换后的 src
   naili: [], // 用于存储替换后的 src
   liliang: [], // 用于存储替换后的 src
   yili: [], // 用于存储替换后的 src
   zhili: [], // 用于存储替换后的 src
 
  // 跳转
  redirectToPage() {
    wx.navigateTo({
      url: '../zhiyuanxinxi/zhiyuanxinxi', // 替换为实际的页面路径
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    currentTabId: 0, // 当前选中的标签 id，默认为 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 在页面加载时，默认选中速度标签
    this.setData({
      currentTabId: 0,
    });
      // 遍历 sududata，获取 sudu 字段
      const sudu = sududata.map(item => item.img);
      // 更新 data 中的 sudu
      this.setData({ sudu });
      // 遍历 nailidata，获取 naili 字段
      const naili = nailidata.map(item => item.img);
      // 更新 data 中的 naili
      this.setData({ naili });
      // 遍历 liliangdata，获取 liliang 字段
      const liliang = liliangdata.map(item => item.img);
      // 更新 data 中的 liliang
      this.setData({ liliang });
      // 遍历 yilidata，获取 yilidata 字段
      const yili = yilidata.map(item => item.img);
      // 更新 data 中的 yilidata
      this.setData({ yili });
      // 遍历 zhilidata，获取 zhilidata 字段
      const zhili = zhilidata.map(item => item.img);
      // 更新 data 中的 zhilidata
      this.setData({ zhili });
      
    },
// 监听标签切换事件
onTabChange(event) {
  const tabIndex = event.detail.index; // 获取用户点击的标签索引
  // 根据索引设置对应的 id
  const tabId = tabIndex.toString();
  this.setData({
    currentTabId: tabId, // 更新当前选中标签的 id
  });

  // 打印当前标签的 id 到控制台
  // console.log('当前标签的 id:', tabId);
},
redirectToPage: function (event) {
  // 获取点击的图片索引
  const index = event.currentTarget.dataset.index;

  // 检查 sududata 中的元素是否有效
  if (sududata[index]) {
    // 获取对应的 suduid
    const suduid = sududata[index].id;

    // 获取当前标签的 id
    const currentTabId = this.data.currentTabId;

    // 跳转到 zhiyuanxinxi 页面，并将 suduid 和 currentTabId 作为参数传递
    wx.navigateTo({
      url: `/pages/zhiyuanxinxi/zhiyuanxinxi?id=${suduid}&currentTabId=${currentTabId}`,
    });
  } else {
    console.error('数据不存在或不完整'); // 可以添加错误处理逻辑
  }
}

    
  },
)