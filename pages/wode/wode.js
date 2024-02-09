// wode.js

Page({
  data: {
    randomImageSrc: 'https://patchwiki.biligame.com/images/umamusume/e/e3/fcu2o5y2m0v2yswdbs0f7skn5rez0wm.png' // 设置一个默认图片路径
  },
 // 图片翻转
// 首先获取随机对象的 sdimg 数组中的默认图片路径 defaultImage 和翻转后的图片路径 flippedImage
// 先将 randomImageSrc 设置为翻转后的图片路径 flippedImage，实现图片的翻转效果。接着使用 setTimeout 函数延迟一段时间（这里设定为 500 毫秒），然后再将 randomImageSrc 设置为默认图片路径 defaultImage，恢复原始状态。
// 点击随机对象的默认图片时，会先进行水平翻转，然后再切换回默认图片，实现了点击图片后进行水平翻转并切换到另一个图片的效果。
flipImage: function() {
  const app = getApp();
  const juese = app.data.renwu.juese;
  const randomIndex = Math.floor(Math.random() * juese.length);
  const randomObject = juese[randomIndex];

  const defaultImage = randomObject.sdimg[0];
  const flippedImage = randomObject.sdimg[1];

  this.setData({
    randomImageSrc: flippedImage
  });

  setTimeout(() => {
    this.setData({
      randomImageSrc: defaultImage
    });
  }, 500);
}
});
