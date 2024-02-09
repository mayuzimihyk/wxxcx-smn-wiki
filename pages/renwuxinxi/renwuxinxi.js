const app = getApp(); // 获取全局的 App 实例
const juesedata = app.data.renwu.juese; // 获取角色数据

Page({
  data: {
    fullBodyImage: [], // 存储全身图的地址数组
    avatarImage: '', // 存储角色头像的地址
    Cnname: '', // 存储角色中文名的地址
    Jpname: '', // 存储角色日文名的地址
    Nicheng: '', // 存储角色日文名的地址
    Star: '', // 存储角色日文名的地址
    Birthday: '', // 存储角色日文名的地址
    Height: '', // 存储角色日文名的地址
    Weight: '', // 存储角色日文名的地址
    MEasurements: [], // 存储角色日文名的地址
    Cv: '', // 存储角色日文名的地址
    INtroduction: '', // 存储角色日文名的地址
    Propertiespanel: [], // 存储角色日文名的地址
    Rolecnname: [], // 存储角色日文名的地址
    Ziwojieshao: '', // 存储角色日文名的地址
    Xuenian: '', // 存储角色日文名的地址
    Suoshusushe: '', // 存储角色日文名的地址
    Shanchang: '', // 存储角色日文名的地址
    Noshanchang: '', // 存储角色日文名的地址
    Erduo: '', // 存储角色日文名的地址
    Weiba: '', // 存储角色日文名的地址
    Xiema: '', // 存储角色日文名的地址
    Jiaren: '', // 存储角色日文名的地址
  },

  onLoad: function (options) {
    
    const id = options.id; // 获取传递的 id 参数

    // 根据 id 查找匹配的数据
    const matchedData = juesedata.find(item => item.id === parseInt(id));

    if (matchedData) {
      // 提取 fullbodyimg 数据
      const fullBodyImage = matchedData.fullbodyimg || [];
      // 从数据中获取图片地址
      const avatarImage = matchedData.avatar || ''; 
       // 从数据中获取中文名地址
      const Cnname = matchedData.cnname || ''; 
       // 从数据中获取日文名地址
      const Jpname = matchedData.jpname || ''; 
       // 从数据中获取日文名地址
      const Nicheng = matchedData.nicheng || ''; 
       // 从数据中获取日文名地址
      const Star = matchedData.star || ''; 
       // 从数据中获取日文名地址
      const Birthday = matchedData.birthday || ''; 
       // 从数据中获取日文名地址
      const Height = matchedData.height || ''; 
       // 从数据中获取日文名地址
      const Weight = matchedData.weight || ''; 
       // 提取 fullbodyimg 数据
       const MEasurements = matchedData.Measurements || [];
       // 从数据中获取日文名地址
      const Cv = matchedData.cv || '';
       // 从数据中获取日文名地址
      const INtroduction = matchedData.Introduction || '';
       // 提取 fullbodyimg 数据
       const Propertiespanel = matchedData.propertiespanel || [];       
       // 提取 fullbodyimg 数据
       const Rolecnname = matchedData.rolecnname || []; 
      // 从数据中获取日文名地址
      const Ziwojieshao = matchedData.characterprofile[0].ziwojieshao|| '';             
      // 从数据中获取日文名地址
      const Xuenian = matchedData.characterprofile[0].xuenian|| '';             
      // 从数据中获取日文名地址
      const Suoshusushe = matchedData.characterprofile[0].suoshusushe|| '';             
      // 从数据中获取日文名地址
      const Shanchang = matchedData.characterprofile[1].shanchang|| '';             
      // 从数据中获取日文名地址
      const Noshanchang = matchedData.characterprofile[1].noshanchang|| '';             
      // 从数据中获取日文名地址
      const Erduo = matchedData.characterprofile[2].erduo|| '';             
      // 从数据中获取日文名地址
      const Weiba = matchedData.characterprofile[2].weiba|| '';             
      // 从数据中获取日文名地址
      const Xiema = matchedData.characterprofile[3].xiema|| '';             
      // 从数据中获取日文名地址
      const Jiaren = matchedData.characterprofile[4].jiaren|| '';             
      
      this.setData({
        fullBodyImage, // 将提取出的数据存储在 fullBodyImage 中
        avatarImage, // 将头像地址存储在 avatarImage 中
        Cnname,// 将头像地址存储在 Cnname 中
        Jpname,// 将头像地址存储在 Jpname 中
        Nicheng,// 将头像地址存储在 Jpname 中
        Star,// 将头像地址存储在 Jpname 中
        Birthday,// 将头像地址存储在 Jpname 中
        Height,// 将头像地址存储在 Jpname 中
        Weight,// 将头像地址存储在 Jpname 中
        MEasurements,// 将头像地址存储在 Jpname 中
        Cv,// 将头像地址存储在 Jpname 中
        INtroduction,// 将头像地址存储在 Jpname 中
        Propertiespanel,// 将头像地址存储在 Jpname 中
        Rolecnname,// 将头像地址存储在 Jpname 中
        Ziwojieshao,// 将头像地址存储在 Jpname 中
        Xuenian,// 将头像地址存储在 Jpname 中
        Suoshusushe,// 将头像地址存储在 Jpname 中
        Shanchang,// 将头像地址存储在 Jpname 中
        Noshanchang,// 将头像地址存储在 Jpname 中
        Erduo,// 将头像地址存储在 Jpname 中
        Weiba,// 将头像地址存储在 Jpname 中
        Xiema,// 将头像地址存储在 Jpname 中
        Jiaren,// 将头像地址存储在 Jpname 中
      });

    } else {
      console.error('未找到匹配的数据');
    }
    console.log(matchedData.id); // 打印匹配的数据到控制台

  }
});
