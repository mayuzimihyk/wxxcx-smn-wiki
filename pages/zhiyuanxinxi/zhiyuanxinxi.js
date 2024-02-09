const app = getApp();
const sududata = app.data.zhiyuan.sudu;
const nailidata = app.data.zhiyuan.naili;
const liliangdata = app.data.zhiyuan.liliang;
const yiliata = app.data.zhiyuan.yili;
const zhilidata = app.data.zhiyuan.zhili;

Page({
  data: {
    bodyimg: [], // 存储全身图的地址数组
    cnname: [],
    jpname: [],
    gushi: [], 
  },

  onLoad: function (options) {
    const currentTabId = parseInt(options.currentTabId); // 获取传递的 currentTabId 参数

    let matchedData = null;

    switch (currentTabId) {
      case 0:
        matchedData = sududata.find(item => item.id === parseInt(options.id));
        break;
      case 1:
        matchedData = nailidata.find(item => item.id === parseInt(options.id));
        break;
      case 2:
        matchedData = liliangdata.find(item => item.id === parseInt(options.id));
        break;
      case 3:
        matchedData = yiliata.find(item => item.id === parseInt(options.id));
        break;
      case 4:
        matchedData = zhilidata.find(item => item.id === parseInt(options.id));
        break;
      default:
        console.error('未知的 currentTabId');
        break;
    }

    if (matchedData) {
      // 提取数据
      const bodyimg = matchedData.img || '';
      const cnname=matchedData.cnname || '';
      const jpname=matchedData.jpname || '';
      const gushi=matchedData.gushi || '';
      this.setData({
        bodyimg, // 将提取出的数据存储在 bodyimg 中
        cnname,
        jpname,
        gushi, 
      });

      // console.log(matchedData); // 打印匹配的数据到控制台
    } else {
      console.error('未找到匹配的数据');
    }
  },
});
