// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    images: [
      'https://patchwiki.biligame.com/images/umamusume/thumb/7/70/l7jnnffve8peem645eixcy7et00menx.jpg/801px-Hetu-%E4%BA%8C%E6%9C%88%E9%94%A6%E6%A0%87-2021.jpg',
      'https://patchwiki.biligame.com/images/umamusume/thumb/1/17/9w3u8t6eh3yyt4hph6m5dprfvjemp5e.jpg/801px-Hetu-%E6%A8%B1%E8%8A%B1%E8%B5%8F-2021.jpg',
      'https://patchwiki.biligame.com/images/umamusume/thumb/a/a0/8u66m4rhacnekr4uzxk5y8jbw1x3ozm.jpg/801px-Hetu-%E6%97%A5%E6%9C%AC%E5%BE%B7%E6%AF%94-2023.jpg',
    ],
    startX: 0,
    moveX: 0,
    swiper: null,
    randomImageSrc: '' // 随机图片路径
  },
// 以下为首页轮播图
  onLoad() {
    this.swiper = this.selectComponent('.swiper');
    // 图片水平翻转
    const app = getApp();
    const juese = app.data.renwu.juese;
    const randomIndex = Math.floor(Math.random() * juese.length);
    const randomObject = juese[randomIndex];
    this.setData({
      randomImageSrc: randomObject.sdimg[0]
    });
  },

  touchStart(e) {
    this.setData({
      startX: e.touches[0].clientX,
    });
  },

  touchMove(e) {
    this.setData({
      moveX: e.touches[0].clientX,
    });
  },

  touchEnd() {
    const { startX, moveX } = this.data;
    const diffX = moveX - startX;

    if (diffX > 50) {
      this.switchToPrevious();
    } else if (diffX < -50) {
      this.switchToNext();
    }
  },

  switchToPrevious() {
    this.swiper && this.swiper.previous();
  },

  switchToNext() {
    this.swiper && this.swiper.next();
  },

  swiperChange(e) {
    // console.log('Current swiper index:', e.detail.current);
  },

// 以下为角色和支援卡页面跳转
redirectToRenwu: function () {
  wx.navigateTo({
    url: '../renwu/renwu'
  })
},
redirectToZhiyuanka: function () {
  wx.navigateTo({
    url: '../zhiyuan/zhiyuan'
  })
},

})
