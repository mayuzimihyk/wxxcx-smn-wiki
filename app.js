App({

  eventBus: {
    listeners: {},
    subscribe: function(event, callback) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(callback);
    },
    publish: function(event, data) {
      if (this.listeners[event]) {
        this.listeners[event].forEach(callback => {
          callback(data);
        });
      }
    }
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  data:{

    renwu:{
      juese:[
        {
          nicheng:"スペシャルドリーマー",
          jpname:"スペシャルウィーク",
          cnname:"特别周",
          id:100001,
          // 头像图
          avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/3/38/48av6cwfvk6b2c3anpnxlh29410sel3.png/200px-Chr_icon_1001_100101_01.png",
          // sd小人模型
          sdimg:["https://patchwiki.biligame.com/images/umamusume/e/e3/fcu2o5y2m0v2yswdbs0f7skn5rez0wm.png","https://patchwiki.biligame.com/images/umamusume/d/d9/88j4th1up40u5gpqhkcbxxpaaistrux.png"],
          // 全身图
          fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/9/9d/o3ivnswzb0n2jum5rh2h4qvmmhn5b58.png",],
          // 初始星级
          star:3,
          // 生日
          birthday:"5月2日",
          // 身高
          height:158,
          // 体重
          weight:"微减（比赛前有点紧张）",
          // 三围
          Measurements:["B81","W56","H81"],
          // 声优
          cv:"和气杏未",
          // 简介
          Introduction:"加油！坚持梦想的纯洁少女。",
          // 属性面板
          propertiespanel:[102	,108	,120	,110	,110],
          // 角色别称
          rolecnname:["日本的总大将","日本の総大将","在人气第一的情况下以领先5马身差以上获得東京優駿（日本ダービー）的胜利，并在天皇賞（春）、天皇賞（秋）、ジャパンカップ中取胜"],
          // 视频
          mv:"https://youtu.be/nvgPuMdUiwE?t=14",
          // 角色档案
          characterprofile:[
            {
            ziwojieshao:"我的名字叫特别周！梦想是成为日本第一的赛马娘！为了让妈妈们感到欣慰，我会加油的！",
            xuenian:"中等部",
            suoshusushe:"栗东宿舍"
            },
            {
              shanchang:"仿佛身临其境的食评",
              noshanchang:"通过检票口"
            },
            {
              erduo:"对做料理的声音非常敏感，稍不注意就会全神贯注去听",
              weiba:"由于尾巴会按照心情摆动所以不擅长打扑克"
            },
            {
              xiema:"左23.5cm 右23.0cm"
            },
            {
              jiaren:"眼睛的颜色继承于生母"
            }
          ]
        },
        {
          nicheng:"【サイレントイノセンス】",
          jpname:"サイレンススズカ",
          cnname:"无声铃鹿",
          id:100002,
          // 头像图
          avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/9/9d/13btkb976rxbih850vgfptuq721tfg0.png/200px-Chr_icon_1002_100201_01.png",
          // sd小人模型
          sdimg:["https://patchwiki.biligame.com/images/umamusume/e/ee/3pc16f29t2vnk12aquulg2mg2qxqzv3.png","https://patchwiki.biligame.com/images/umamusume/9/9e/92xf5aem6471m92u2d5a59ds2uhm9sv.png"],
          // 全身图
          fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/d/de/p8wpeflmbey917r8dhh6ixdt4ftew5w.png",],
            // 初始星级
                   star:3,
            // 生日
                    birthday:"5月1日",
             // 身高
                    height:"161㎝",
            // 体重
                    weight:"无增减",
            // 三围
                    Measurements:["B70","W53","H79"],
             // 声优
                    cv:"高野麻里佳",
            // 简介
                    Introduction:"无声的疾驰者。以音速为目标。",
            // 属性面板
                    propertiespanel:[124,102,94,122,108],
            // 角色别称
                    rolecnname:["異次元の逃亡者","异次元的逃亡者","在人气第一的情况下使用作战'逃げ'在重赏赛事中取得6连胜，其中需要包括宝塚記念，并且在该赛事中从起跑200m开始一直第一位领先直到比赛结束"],
          //角色档案
          characterprofile:[
          {
          ziwojieshao:"我的名字是无声铃鹿。喜欢的事情是奔跑。那前方的景色，不会让给任何人。嗯……那个，就是这样。",xuenian:"高等部",
          suoshusushe:"栗东宿舍"
            },
          {
          shanchang:"持续不断的奔跑",
          noshanchang:"人多的地方"
            },
          {
          erduo:"在想跑步的事的时候，偶尔不会留意其他声音",
          weiba:"为了减少空气阻力，经常保养尾巴"
            },
          {
          xiema:"左23.5cm 右23.0cm"
            },
          {
           jiaren:"增加了买鞋用的零花钱"
          }
          ]
        },
        {
  nicheng:"【トップ・オブ・ジョイフル】",
  jpname:"トウカイテイオー",
  cnname:"东海帝皇",
  id:100003,
   // 头像图
   avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/c/c5/j31sncm1p7k4fq4hvafnbk0k6gx3omg.png/200px-Chr_icon_1003_100301_01.png",
   // sd小人模型
   sdimg:["https://patchwiki.biligame.com/images/umamusume/9/92/c8ul8ft7et1skdx4154znelbap26mpo.png","https://patchwiki.biligame.com/images/umamusume/2/2b/or8qokb1fhccjw6f35nxw3uswmkmgk4.png"],
   // 全身图
   fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/c/cb/8t3365ah78gmacwpj1ql4t5l41898zl.png",],
    // 初始星级
           star:3,
    // 生日
            birthday:"4月20日",
     // 身高
            height:"150㎝",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B77","W54","H76"],
     // 声优
            cv:"Machico",
    // 简介
            Introduction:"无敌的可爱！天真烂漫的少女。",
    // 属性面板
            propertiespanel:[118,84,105,122,121],
    // 角色别称
            rolecnname:["帝王","帝王","继承马取得过7次以上G1赛事的胜利；在G1赛事中有4次以上是人气第一；在无败的情况下获得皐月賞、東京優駿（日本ダービー）的胜利；取得有馬記念(第三年)的胜利 (只要完成皐月賞和東京優駿（日本ダービー）时没输过就可以 之后随便输 )"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"Yahoo，我是东海帝王！事关不败的三冠赛马娘，我绝对不会错过！",xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"无论和谁都能交朋友",
  noshanchang:"医生"
    },
  {
  erduo:"不会漏听赞赏和会长的声音",
  weiba:"被关注的话，尾巴会兴奋地摇晃"
    },
  {
  xiema:"左右都是22.0cm"
    },
  {
   jiaren:"试着不叫爸爸妈妈结果哭了"
  }
  ]
        },
        {
          nicheng:"【フォーミュラオブルージュ】",
          jpname:"マルゼンスキー",
          cnname:"丸善斯基",
          id:100004,
           // 头像图
   avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/f/f0/53g7dkqgaum6wcij02pme4qvqz6ists.png/200px-Chr_icon_1004_100401_01.png",
   // sd小人模型
   sdimg:["https://patchwiki.biligame.com/images/umamusume/e/ec/5b7ntickvro2hiafou9y37kr43vglb0.png","https://patchwiki.biligame.com/images/umamusume/2/23/58kvkcmc4ak7gfqpopsx2jp6w7lac7x.png"],
   // 全身图
   fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/c/cb/8t3365ah78gmacwpj1ql4t5l41898zl.png",],
            // 初始星级
                   star:3,
            // 生日
                    birthday:"5月19日",
             // 身高
                    height:"164㎝",
            // 体重
                    weight:"理想的完美状态",
            // 三围
                    Measurements:["B93","W58","H88"],
             // 声优
                    cv:"Lynn",
            // 简介
                    Introduction:"昭和时期复古超级跑车一样的大姐姐。",
            // 属性面板
                    propertiespanel:[118,84,105,122,121],
            // 角色别称
                    rolecnname:["スーパーカー","Super Car","无败的情况下获得8连胜，且胜利时达成平均7马身差以上"],
          //角色档案
          characterprofile:[
          {
          ziwojieshao:"Hi~是丸善斯基哟！你也是来看的吧？我那异次元般的跑法。哼哼♪被迷的神魂颠倒的话…我可不管哦♪",xuenian:"高等部",suoshusushe:"独居"
            },
          {
          shanchang:"漂移",
          noshanchang:"低速行驶"
            },
          {
          erduo:"听到欧洲节拍[1]的话就会想飞奔起来",
          weiba:"起床后唰啦唰啦地洗头是自己的最爱"
            },
          {
          xiema:"左右都是26.0cm"
            },
          {
           jiaren:"赤红色的超级跑车为父亲的旧车",
          }
          ] 
        }, 
        {
  nicheng:"【シューティンスタァ・ルヴュ】",
  jpname:"フジキセキ",
  cnname:"富士奇迹",
  id:100005,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/f/f1/401ez4dqmogz7qbiyouqyr4ytjxgcdl.png/200px-Chr_icon_1005_100501_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/4/44/5g55wu4irr7t94hx53z8nuq8zxd5kxf.png","https://patchwiki.biligame.com/images/umamusume/3/38/oomqypqlz6dyp4zulm5pxkhe078lz4g.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/c/c5/e95azzbrahn53uqfjkrll57a7a60x9u.png",],
    // 初始星级
           star:3,
    // 生日
            birthday:"4月15日",
     // 身高
            height:"168cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B84","W58","H82"],
     // 声优
            cv:"松井惠理子",
    // 简介
            Introduction:"护卫就交给我吧！华丽又绅士的少女。",
    // 属性面板
            propertiespanel:[117,107,118,100,108],
    // 角色别称
            rolecnname:["麗しの三冠ウマ娘","华丽的三冠赛马娘","出道战以8马身差以上获胜；以第一人气取得朝日杯フューチュリティステークス、皐月賞、菊花賞、東京優駿（日本ダービー）的胜利"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"让客人们都欢笑的漆黑的艺人就是我富士奇石！用最棒的'奇迹'，必定夺得你的笑容！",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"让他人大吃一惊",
  noshanchang:"甜的东西"
    },
  {
  erduo:"有着绝对音感",
  weiba:"像歌剧中的大羽根[1]般优雅的摇动"
    },
  {
  xiema:"左右都是26.0cm"
    },
  {
   jiaren:"出身于舞台家族，双亲时常全国巡演"
  }
        ]
        },
        {
  nicheng:"【スターライトビート】",
  jpname:"オグリキャップ",
  cnname:"小栗帽",
  id:100006,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/5/5b/bsuemdprsucf8ichj8tis2r5vrnoz0m.png/200px-Chr_icon_1006_100601_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/6/6e/crh88jdhd2z39382k9n70tu1fpyp1st.png","https://patchwiki.biligame.com/images/umamusume/2/29/o067slnjwblu1h5fpe8pcw2npn6rc4z.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/2/26/nuxxpjyalotjc9z88uw6fy7g290vsop.png",],
  // 初始星级
           star:3,
    // 生日
            birthday:"3月27日",
     // 身高
            height:"167㎝",
    // 体重
            weight:"微增（吃多了）",
    // 三围
            Measurements:["B82","W57","H82"],
     // 声优
            cv:"高柳知叶",
    // 简介
            Introduction:"出生在地方的，朴素单纯的梦想家。",
    // 属性面板
            propertiespanel:[124,81,130,103,112],
    // 角色别称
            rolecnname:["アイドルウマ娘","在G1赛事中有6次以上是人气第一；取得マイルチャンピオンシップ、安田記念、有馬記念的胜利并达到24w以上粉丝"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是小栗帽。为了让故乡支持我的大家都能够开心，我会全力以赴的。请多关照",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"好好吃饭",
  noshanchang:"游泳"
    },
  {
  erduo:"能在全场的欢呼声中分辨认出家乡的人",
  weiba:"由于身体很柔软所以尾巴没有梳理不到的地方"
    },
  {
  xiema:"左右都是27.0cm"
    },
  {
   jiaren:"说到家族旅行就是去温泉，全家都是某个秘汤的常客"
  }
]
        },
        {
  nicheng:"【レッドストライフ】",
  jpname:"ゴールドシップ",
  cnname:"黄金船",
  id:100007,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/7/7a/tbd5pfhsruxk07vhx771x1xiukdcnif.png/200px-Chr_icon_1007_100701_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/c/cb/e3j300ag04ccn1lrz79x762uw3fbh2n.png","https://patchwiki.biligame.com/images/umamusume/1/12/lozwd3wp0vixzyxwc2g3a0ovteaowgo.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/9/9f/tsp3wjq1vhsdl31yao9p4240883z5b2.png"],
   // 初始星级
           star:2,
    // 生日
            birthday:"3月6日",
     // 身高
            height:"170㎝",
    // 体重
            weight:"无法测定",
    // 三围
            Measurements:["B88","W55","H88"],
     // 声优
            cv:"上田瞳",
    // 简介
            Introduction:"粗暴、奔放！　性格像谜一样的黄金电波少女。",
    // 属性面板
            propertiespanel:[106,124,129,99,92],
    // 角色别称
            rolecnname:[" 破天荒"," 破天荒","在包括皐月賞、菊花賞、宝塚記念的G1赛事中取得6次以上的胜利；粉丝数达到48w以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"哟，是我黄金船大人！在火焰中、草地中！或是宇宙的尽头都无所谓！无论身处何处我都要探寻有趣的东西☆",
  xuenian:"？？？",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"灵活使用表情肌",
  noshanchang:"老实待着"
    },
  {
  erduo:"会突然捂住别人的耳朵然后问'我是谁~'",
  weiba:"有时候会忘在宿舍（本人表示）"
    },
  {
  xiema:"左右都是26.5cm"
    },
  {
   jiaren:"好像是国家级的机密事项"
  }
  ]
        },
        {
  nicheng:"【不凍のアクア・ウィタエ】",
  jpname:"ウオッカ",
  cnname:"伏特加",
  id:100008,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/b/bd/iu317chs3yh8e1jw76sotm9s2dwcfw6.png/200px-Chr_icon_1008_100801_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/4/41/8g8cw4r4rqfrvjc4lkwwkdy2xz2fncp.png","https://patchwiki.biligame.com/images/umamusume/6/64/kj4velxvmh8pcz7dq1o16iaxz523pwr.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/1/1f/dhvxzl089d2ltw5i3c5e6ii5on3jeyv.png"],
    // 初始星级
           star:2,
    // 生日
            birthday:"4月4日",
     // 身高
            height:"165cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B76","W55","H78"],
     // 声优
            cv:"大桥彩香",
    // 简介
            Introduction:"驰骋着的青春！纯情不良的roadster。",
    // 属性面板
            propertiespanel:[124,79,136,97,114],
    // 角色别称
            rolecnname:["常識破りの女帝","打破常识的女帝","在包括東京優駿（日本ダービー）、安田記念、ジャパンカップ、天皇賞（秋）、ヴィクトリアマイル的G1赛事中取得7次以上胜利"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"哦斯！我是伏特加！我的原则就是做一个比谁都要帅气的赛马娘！逊爆了的事情是不会做的。给我记好了！",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"假装开摩托",
  noshanchang:"恋爱话题"
    },
  {
  erduo:"碰到的话就会异常害羞",
  weiba:"练习着帅气晃动尾巴的方法"
    },
  {
  xiema:"左24.5cm 右24.0cm"
    },
  {
   jiaren:"经常和父亲一起皮，一起被母亲说教"
  }
  ]
        },
        {
  nicheng:"【トップ・オブ・ブルー】",
  jpname:"ダイワスカーレット",
  cnname:"大和赤骥",
  id:100009,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/1/15/ggqhn7h7b0r5skkgq6ziuahtu71bybs.png/200px-Chr_icon_1009_100901_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/4/41/8g8cw4r4rqfrvjc4lkwwkdy2xz2fncp.png","https://patchwiki.biligame.com/images/umamusume/6/64/kj4velxvmh8pcz7dq1o16iaxz523pwr.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/4/4c/dfrtgxdzmf6n81xhyt1t68c31g85m0b.png"],
   // 初始星级
           star:2,
    // 生日
            birthday:"5月13日",
     // 身高
            height:"163cm",
    // 体重
            weight:"未知(拒绝测量)",
    // 三围
            Measurements:["B93","W56","H82"],
     // 声优
            cv:"木村千咲",
    // 简介
            Introduction:"唯我独尊！好强的傲娇少女。",
    // 属性面板
            propertiespanel:[109,99,103,122,117],
    // 角色别称
            rolecnname:["ミスパーフェクト","Miss.Perfect","继承马获取过皐月賞的胜利；所有比赛都是前2名，取得包括桜花賞、秋華賞、エリザベス女王杯在内的重赏赛事(G1、G2和G3)10次胜利"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"你好，我叫大和赤骥！做什么事情都要竭尽全力……嗯？你就是我的训练员吗。哼！我的目标只有第一名。除此之外别无他物！",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"学习、一切家务事",
  noshanchang:"妥协"
    },
  {
  erduo:"会无意间暴露心里话",
  weiba:"每天早上都为了能够梳好尾巴而战斗着"
    },
  {
  xiema:"左右都是24.5cm"
    },
  {
   jiaren:"憧憬并挂念着对工作热心的母亲"
  }
  ]
        },
        {
  nicheng:"【ワイルド・フロンティア】",
  jpname:"タイキシャトル",
  cnname:"大树快车",
  id:100010,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/7/72/nr52qx8dhij8cvtn796laltguikz45x.png/200px-Chr_icon_1010_101001_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/a/af/ewe712772y9y8d3ra8y3r2jnwk8ttm3.png","https://patchwiki.biligame.com/images/umamusume/7/7f/q58jcav1k5s7nij1ir730e7x759ge0q.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/1/15/mjg7yhtyn27xzv33pt9jb7iloe21ztv.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月23日",
     // 身高
            height:"172㎝",
    // 体重
            weight:"微增（「但是No problem！」）",
    // 三围
            Measurements:["B94","W59","H90"],
     // 声优
            cv:"大坪由佳",
    // 简介
            Introduction:"出生于美国的Friendly少女！",
    // 属性面板
            propertiespanel:[118,87,119,113,113],
    // 角色别称
            rolecnname:["最強マイラー","最强英里跑者","在包含ユニコーンステークス、安田記念的英里重赏比赛中取得5次以上胜利，其中有1次以上是雨天；并在マイルチャンピオンシップ中以5马身差以上取胜"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"Howdy！我叫大树快车！我要用我充满力量感的赛跑给大家带来Happy！",
  xuenian:"高等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"正向思考",
  noshanchang:"独处"
    },
  {
  erduo:"听到有派对的话不管身处何处都会赶到现场",
  weiba:"顺毛喷雾与生活费一同收到"
    },
  {
  xiema:"左右都是25.0cm（特别订购）"
    },
  {
   jiaren:"老家时常准备着欢迎用烟花"
  }
  ]
        },
        {
  nicheng:"【岩穿つ青】",
  jpname:"グラスワンダー",
  cnname:"草上飞",
  id:100011,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/c/c1/2inx6mxlk1nazcqd0ebscww6zus2mh9.png/200px-Chr_icon_1011_101101_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/2/27/20eu0b5wptejuf0rskz9v9abq8b0h5c.png","https://patchwiki.biligame.com/images/umamusume/0/01/4rtcztcdidfwsgn99tfc3oc50ks1g6q.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/9/99/o1lvk46u9d5qkl5bt7e0rf1pbt984zc.png"],
  // 初始星级
           star:3,
    // 生日
            birthday:"32月18日",
     // 身高
            height:"152㎝",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B78","W53","H84"],
     // 声优
            cv:"前田玲奈",
    // 简介
            Introduction:"楚楚可怜。美国归国的大和抚子。",
    // 属性面板
            propertiespanel:[111,101,119,96,123],
    // 角色别称
            rolecnname:["不死鳥","不死鸟","以干劲'好调'以下的状态取得朝日杯フューチュリティステークス、有馬記念(第二年)、宝塚記念(第三年)、有馬記念(第三年)的胜利"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我的名字叫草上飞。正因以赛马娘的姿态存在于此才想在这条'道路”上穷尽一切，直至尽头。呼呼♪",
  xuenian:"中等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"和果子、日本文化、竞技歌牌",
  noshanchang:"昆虫、轻视历史和传统的行为"
    },
  {
  erduo:"沏抹茶时连耳朵都纹丝不动",
  weiba:"不用回头就可以将身后的虫子扫落"
    },
  {
  xiema:"左：23.0cm 右23.5cm"
    },
  {
   jiaren:"性格受喜欢日本文化的双亲影响。在老家也有和室"
  }
  ]
        },
        {
  nicheng:"【アマゾネス・ラピス】",
  jpname:"ヒシアマゾン",
  cnname:"菱亚马逊",
  id:100012,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/f/fd/oz26wc32ivsu9sc2rr5zzkqtj21kmwk.png/200px-Chr_icon_1012_101201_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/f/fb/h6hpg8p6659ifxyn55l80l6xam0b2sx.png","https://patchwiki.biligame.com/images/umamusume/6/6a/5p99qcagct4llghq2qb1nujfna2cjqv.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/8/8c/fkgzupisst4nvs09mghpl5ijryul0ek.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月26日",
     // 身高
            height:"160㎝",
    // 体重
            weight:"微增（无可奉告）",
    // 三围
            Measurements:["B92","W59","H89"],
     // 声优
            cv:"巽悠衣子",
    // 简介
            Introduction:"要单挑的话正合我意！大家伙们值得信赖的大姐头舍长。",
    // 属性面板
            propertiespanel:[113,103,129,100,105],
    // 角色别称
            rolecnname:["女傑","女杰","使用作战'追込'在人气第一的情况下取得重赏6连胜以上，其中2胜以上需要达成在最终直线超越五人以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"有很多架势不错的家伙在嘛...嘿嘿，全部由我菱亚马逊大姐头来做你们的对手！撒！来单挑吧！",
  xuenian:"高等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"亲手制作料理",
  noshanchang:"动脑"
    },
  {
  erduo:"对'单挑'一词十分敏感",
  weiba:"许多学生憧憬着那抹艳黑色的尾巴"
    },
  {
  xiema:"左右都是24.0cm"
    },
  {
   jiaren:"大姐头气质遗传自母亲，但其实是家中老幺"
  }
  ]
        },
        {
  nicheng:"【エレガンス・ライン】",
  jpname:"メジロマックイーン",
  cnname:"目白麦昆",
  id:100013,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/e/ea/6ych9zrm8w3gloe7fbnoerfgtgwfd9r.png/200px-Chr_icon_1013_101301_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/8/84/pd6ibv8zm2i3kqi75q5tnqkn25jm5se.png","https://patchwiki.biligame.com/images/umamusume/c/c7/qeqcmqluoi1un9zxke6fr2lhzsw50tr.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/5/5b/3oadcb68sq1wig0a1okksy4jkcii2zw.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"4月3日",
     // 身高
            height:"159㎝",
    // 体重
            weight:"微增（现在拼命调整中！）",
    // 三围
            Measurements:["B71","W54","H76"],
     // 声优
            cv:"大西沙织",
    // 简介
            Introduction:"名门目白家的至宝。优雅而专一的大小姐。",
    // 属性面板
            propertiespanel:[87,136,87,125,115],
    // 角色别称
            rolecnname:["名優","名优","取得菊花賞、天皇賞（春）的胜利；基础能力'耐力'达到1200以上；粉丝数32w以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我的名字叫目白麦昆。我的家族，目白家夙愿的'天皇赏'制霸——必定用我这双脚实现。",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"餐桌礼仪",
  noshanchang:"忍耐甜品的诱惑"
    },
  {
  erduo:"在他人面前耳朵常常高高立起",
  weiba:"提到运动话题的话尾巴会摇晃的很激烈"
    },
  {
  xiema:"左右都是22.5cm"
    },
  {
   jiaren:"双亲以'麦酱'称呼自己"
  }
  ]
        },
        {
  nicheng:"【エル☆Número 1】",
  jpname:"エルコンドルパサー",
  cnname:"神鹰",
  id:100014,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/1/17/bqnr4h48tm894trf0x84hz92oi2t6ha.png/200px-Chr_icon_1014_101401_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/f/f4/opdrhxr0fwk91kqzbgtz9wdmv0343ts.png","https://patchwiki.biligame.com/images/umamusume/8/83/dheedpajbe1mava8iz9e231116f7ek8.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/6/60/kxzbqnpl4iwoektx10ydtv3t9ig2qff.png"],
    // 初始星级
           star:2,
    // 生日
            birthday:"3月17日",
     // 身高
            height:"163cm",
    // 体重
            weight:"微增（锻炼肌肉的效果）",
    // 三围
            Measurements:["B89","W58","H86"],
     // 声优
            cv:"高桥未奈美",
    // 简介
            Introduction:"北美的怪鸟！活泼奇特的变奏曲。",
    // 属性面板
            propertiespanel:[110,98,103,121,118],
    // 角色别称
            rolecnname:["怪鳥","怪鸟","全部比赛都在前二；使用作战'先行'取得ジャパンカップ(第二年)的胜利；粉丝数达到32w以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"疾驰在赛场上的深红色怪鸟！神鹰参·上·Desu！以世界为目标，奋勇前进吧！",
  xuenian:"中等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"职业摔跤",
  noshanchang:"保持安静"
    },
  {
  erduo:"听到读秒声身体就做好了准备",
  weiba:"抓尾巴似乎是犯规行为"
    },
  {
  xiema:"左右都是24.0cm"
    },
  {
   jiaren:"与名为'曼波'的老鹰如姐弟般一同长大"
  }
  ]
        },
        {
  nicheng:"【オー・ソレ・スーオ！】",
  jpname:"テイエムオペラオー",
  cnname:"好歌剧",
  id:100015,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/c/cd/i4ydfkexm7ztxqc5jr2wdtxvyxb7loo.png/200px-Chr_icon_1015_101501_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/1/1c/az9frj788psyg5u6zzc3ye8i9h59jnv.png","https://patchwiki.biligame.com/images/umamusume/3/3b/duet2im5vzf0qwx4h0u2h4mcsr2y456.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/5/50/9tvos6497hrhuu30mnvsn8e3qej3894.png"],
   // 初始星级
           star:2,
    // 生日
            birthday:"3月13日",
     // 身高
            height:"156cm",
    // 体重
            weight:"总是很完美（自称）",
    // 三围
            Measurements:["B76","W55","H80"],
     // 声优
            cv:"德井青空",
    // 简介
            Introduction:"华丽的歌剧之王。笑声很响亮！",
    // 属性面板
            propertiespanel:[91,132,91,125,111],
    // 角色别称
            rolecnname:["世紀末覇王","世纪末霸王","在包含天皇賞（春）、宝塚記念、天皇賞（秋）、ジャパンカップ、有馬記念的重赏(G1、G2和G3)中取得8次以上连胜"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"哈——哈哈哈！我就是最强、最美丽的'霸王'好歌剧！来吧！让我们开始传说之路吧",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"表演即兴歌剧",
  noshanchang:"普通的工作"
    },
  {
  erduo:"无论什么话在耳中都是赞美",
  weiba:"被光照射的话就会熠熠生辉"
    },
  {
  xiema:"左右都是23.0cm"
    },
  {
   jiaren:"尊敬着生下并养育了美丽自己的双亲"
  }
  ]
        },
        {
  nicheng:"【Maverick】",
  jpname:"ナリタブライアン",
  cnname:"成田白仁",
  id:100016,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/9/90/bue89r5a3yqfl7bnq4dcfnyj2au9jm1.png/200px-Chr_icon_1016_101601_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/e/ed/jmbg4k8vbduf940hezn2kjh4grx8l83.png","https://patchwiki.biligame.com/images/umamusume/1/1e/t894zw8wibudu0h0gm70xus7asbya3f.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/5/59/4ydwvypyvxo1uueuzhnesvvjsri4q3j.png"],
   // 初始星级
           star:3,
    // 生日
            birthday:"5月3日",
     // 身高
            height:"160cm",
    // 体重
            weight:"不会影响比赛",
    // 三围
            Measurements:["B91","W58","H85"],
     // 声优
            cv:"衣川里佳",
    // 简介
            Introduction:"多行少言！硬派又顽固的独行者。",
    // 属性面板
            propertiespanel:[113,109,122,108,98],
    // 角色别称
            rolecnname:["影をも恐れぬ怪物","不惧暗影的怪物","皋月赏以3又1/2马身差以上、東京優駿（日本ダービー）以5马身差以上、菊花賞以7马身差以上获得胜利，有馬記念获得两连霸（第二年和第三年均取得优胜）"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"……我叫成田白仁我没有需要特地说给别人听的话。只需奔跑、击溃敌人并夺得胜利，这就够了。",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"砸核桃",
  noshanchang:"触摸小生物"
    },
  {
  erduo:"听到比赛前的号角声就会热血沸腾",
  weiba:"既不在意也不保养"
    },
  {
  xiema:"左右都是24.5cm"
    },
  {
   jiaren:"双亲以及姐姐都表示'沉默寡言是她温柔的证据'"
  }
  ]
        },
        {
  nicheng:"【ロード・オブ・エンペラー】",
  jpname:"シンボリルドルフ",
  cnname:"鲁道夫象征",
  id:100017,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/6/69/0pnn1xr57ihug69i8xpn2a8dcxw48qk.png/200px-Chr_icon_1017_101701_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/0/08/cr427wkroa7dp33hcuipi4aq15fbt5w.png","https://patchwiki.biligame.com/images/umamusume/b/b4/c6jypxhbl196q7pkq69uuqgudjoohmh.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/9/9f/hoddyzth4qg0ai2ujoasxk7kqpr8rr6.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月13日",
     // 身高
            height:"165㎝",
    // 体重
            weight:"十分理想",
    // 三围
            Measurements:["B86","W59","H85"],
     // 声优
            cv:"田所梓",
    // 简介
            Introduction:"君临天下的'皇帝'。其权威不容动摇！",
    // 属性面板
            propertiespanel:[101,107,110,110,122],
    // 角色别称
            rolecnname:["皇帝","皇帝","在无败的情况下取得皐月賞、東京優駿（日本ダービー）、菊花賞的胜利( 和东海帝王一样拿到这三胜以后就可以随便输了 )；取得ジャパンカップ、天皇賞（春）的胜利；取得两次有馬記念的胜利"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是鲁道夫象征。是站在所有赛马娘顶点并指引她们前进，被称为'皇帝'的人。志同道合的训练员啊，一起勇往直前，征服一切吧。",
  xuenian:"高等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"国际象棋",
  noshanchang:"随意的交谈"
    },
  {
  erduo:"在想到冷笑话时，会'噗嗤'的大幅移动",
  weiba:"在发表演讲时每一根毛都充满着魄力"
    },
  {
  xiema:"左右都是25.0cm"
    },
  {
   jiaren:"自幼就被双亲传授帝王学"
  }
  ]
        },
        {
  nicheng:"【エンプレスロード】",
  jpname:"エアグルーヴ",
  cnname:"气槽",
  id:100018,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/e/ef/201e08salbfb5hjb2f3stglhdtmdtb7.png/200px-Chr_icon_1018_101801_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/7/7b/5f53vg91zv8uw29fb9b9vkbbn900iop.png","https://patchwiki.biligame.com/images/umamusume/e/eb/4jqnc36jvudgk6kktehk96re3ep0xho.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/c/cc/ael6acw1c1dn6s76t2j09budmi5gj29.png"],
    // 初始星级
           star:2,
    // 生日
            birthday:"4月6日",
     // 身高
            height:"165cm",
    // 体重
            weight:"出色的完美状态",
    // 三围
            Measurements:["B90","W57","H86"],
     // 声优
            cv:"青木瑠璃子",
    // 简介
            Introduction:"冷酷无情的'女帝'。才貌双全的职场女性。",
    // 属性面板
            propertiespanel:[111,105,105,112,117],
    // 角色别称
            rolecnname:["女帝","女帝","继承马取得过オークス的胜利；取得オークス、天皇賞（秋）的胜利，粉丝数达到32w以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我叫气槽。只要坚持信念，理想就一定能够生根发芽。为了证明这一点，我会以'女帝'身份指导大家。",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"养花",
  noshanchang:"会突然发光的东西、会突然动起来的东西"
    },
  {
  erduo:"照料花朵时会温柔地微微下垂",
  weiba:"使用着与母亲相同的尾部护理油"
    },
  {
  xiema:"左右都是24.5cm"
    },
  {
   jiaren:"为了母亲的生日会精心策划了1整年"
  }
  ]
        },
        {
  nicheng:"【超特急！フルカラー特殊PP】",
  jpname:"アグネスデジタル",
  cnname:"爱丽数码",
  id:100019,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/6/62/qqv1s8ycmat3ftde786ph8ny5jxbc76.png/200px-Chr_icon_1019_101901_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/f/fa/s2rh67nmutgp0jmepp66udq6dmffe52.png","https://patchwiki.biligame.com/images/umamusume/e/e9/nrqc8l15qooohmdoh30swo1601pu7he.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/b/b5/8fg5plq33hlelb41vhs463656a6jwbq.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"5月15日",
     // 身高
            height:"143cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B74","W51","H75"],
     // 声优
            cv:"铃木实里",
    // 简介
            Introduction:"最喜欢赛马娘了！超级万能的宅女。",
    // 属性面板
            propertiespanel:[111,105,105,112,117],
    // 角色别称
            rolecnname:["万能オタク娘","万能宅马娘","赢得ジャパンダートダービー、マイルチャンピオンシップ、フェブラリーステークス、安田記念、天皇賞（秋）和有馬記念（第三年）"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"您辛苦了！这里是数码碳！我在推着闪闪发光的赛马娘们！每天都很幸福！作为宅宅出生真是太好了～♪",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"按摩技术已达出神入化之境",
  noshanchang:"掐cp"
    },
  {
  erduo:"耳朵捕捉到萌波动时就会毛发皆竖",
  weiba:"在live前会去理发店梳理尾巴"
    },
  {
  xiema:"左右都是21.5cm"
    },
  {
   jiaren:"家人的兴趣是野营！节日！BBQ！"
  }
  ]
        },
        {
  nicheng:"【あおぐもサミング】",
  jpname:"セイウンスカイ",
  cnname:"青云天空",
  id:100020,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/0/05/hszyi47dk7e6siuuowg1g2qu2sa0eni.png/200px-Chr_icon_1020_102001_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/5/59/i66nvlirrzonsrsxkuipz7zc7s1vyq8.png","https://patchwiki.biligame.com/images/umamusume/0/0b/o0u4lg0q2dqt0qyxtwciolx9qpnw46e.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/6/63/o0w59tjdh7yxhpg67bbwdy8tk621j5w.png"],
   // 初始星级
           star:3,
    // 生日
            birthday:"4月26日",
     // 身高
            height:"155cm",
    // 体重
            weight:"漏报",
    // 三围
            Measurements:["B77","W55","H80"],
     // 声优
            cv:"鬼头明里",
    // 简介
            Introduction:"我的步调，我的生活。像那漂游的云……",
    // 属性面板
            propertiespanel:[120,120,108,101,101],
    // 角色别称
            rolecnname:["トリックスター","诡术之星","皐月賞、菊花賞、有馬記念(第二年)、天皇賞（春）使用作战'逃げ'取胜；其中菊花賞需要从起跑200m后保持第一，直到终点"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"呀吼~是青云天空哦。现在就适度的放松一下吧。……因为想要钓大鱼的话，放长线是很重要的对吧？",
  xuenian:"中等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"睡午觉、钓鱼",
  noshanchang:"狭窄的地方（也就是闸门啊，闸门！）"
    },
  {
  erduo:"有时，耳朵会意味深长地竖立起来",
  weiba:"就算不梳理也会自然而然的顺直"
    },
  {
  xiema:"左右都是22.5cm"
    },
  {
   jiaren:"回老家时，会与作为钓鱼伙伴的祖父一起去钓鱼"
  }
  ]
        },
        {
  nicheng:"【疾風迅雷】",
  jpname:"タマモクロス",
  cnname:"玉藻十字",
  id:100021,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/4/47/b7u73dv56mbizwu1ckp2tj73i166xxm.png/200px-Chr_icon_1021_102101_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/2/2c/cxbvkkwtfuzgort27oq1lhy3a36i48x.png","https://patchwiki.biligame.com/images/umamusume/9/91/4o2xte05zh3m0rla6wx2scmtwfu7no6.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/3/31/bncv8wgp0ux3yxn90b1axf9wlelw51n.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"5月23日",
     // 身高
            height:"140cm",
    // 体重
            weight:"无法测量",
    // 三围
            Measurements:["B71","W52","H73"],
     // 声优
            cv:"大空直美",
    // 简介
            Introduction:"话语如同闪电般的坚韧，浪花少女。",
    // 属性面板
            propertiespanel:[101,116,129,102,102],
    // 角色别称
            rolecnname:["白い稲妻","白色闪电","赢得包含天皇賞（春）、宝塚記念（第三年）和天皇賞（秋）（第三年）在内的重赏比赛8场以上；且粉丝数240000人以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是玉藻十字！我们呢，只要比赛一直赢啊赢啊赢啊就能够出名了！说什么个子小啊，可别小看我啊！",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"心算（仅限于计算价格）",
  noshanchang:"被炉"
    },
  {
  erduo:"一听到'大减价'、'大甩卖'之类的词就会突然立起",
  weiba:"生气了的话，就会像闪电一般抖动"
    },
  {
  xiema:"左：19.5cm 右：20.0cm"
    },
  {
   jiaren:"和弟弟妹妹在一起的时候就会变成'玉藻姐'"
  }
  ]
        },
        {
  nicheng:"【Noble Seamair】",
  jpname:"ファインモーション",
  cnname:"美妙姿势",
  id:100022,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/4/41/8txgqk9a2589qcw98rpb1d1un2woc4k.png/200px-Chr_icon_1022_102201_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/e/ea/liu5i36624uxnd7tm756dlkd3ovs63f.png","https://patchwiki.biligame.com/images/umamusume/d/dd/5hwlyun1te6kofqctqbdaqfpctqpve6.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/9/93/avf82b3hdr5vohrd90uv8og7run5msk.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"1月27日",
     // 身高
            height:"158cm",
    // 体重
            weight:"微增（拉面吃太多了？）",
    // 三围
            Measurements:["B79","W56","H83"],
     // 声优
            cv:"桥本千波",
    // 简介
            Introduction:"留下自由奔放的回忆！掌上明珠般的皇家淑女。",
    // 属性面板
            propertiespanel:[117,102,116,108,107],
    // 角色别称
            rolecnname:["気ままなお姫様","任性的公主殿下","之前无败且人气第一的状态下赢得秋華賞、エリザベス女王杯和有馬記念（第二年）；其中秋華賞需以3又1/2以上的马身差获胜"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"您好，我叫美妙姿势！我想在这个国家留下许多美好的回忆！那么，首先请告诉我好吃的拉面店吧♪",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"劝架",
  noshanchang:"怀疑他人"
    },
  {
  erduo:"对庶民文化的话题十分感兴趣",
  weiba:"拥有着王族特有的发质。俗称'皇家·尾巴'"
    },
  {
  xiema:"左右都是23.0cm"
    },
  {
   jiaren:"比双亲更擅长对付自由奔放的姐姐"
  }
  ]
        },
        {
  nicheng:"【pf.Victory formula...】",
  jpname:"ビワハヤヒデ",
  cnname:"琵琶晨光",
  id:100023,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/9/96/ifcsfqhks547wcv21tfb1hmpxxfq3k9.png/200px-Chr_icon_1023_102301_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/f/fc/mkp6aywux7s55esany9vtxcczoqbny7.png","https://patchwiki.biligame.com/images/umamusume/4/42/756idraq5woogh8lc7bqzy9uzyyisf6.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/a/a6/1uk6y38yizv2jku12ip6yj42qoy9gzl.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月10日",
     // 身高
            height:"171cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B93","W61","H88"],
     // 声优
            cv:"近藤唯",
    // 简介
            Introduction:"热情的知性派。以逻辑为武器！",
    // 属性面板
            propertiespanel:[104,114,101,114,117],
    // 角色别称
            rolecnname:["勝利の探究者","胜利的探索者","全部比赛都取得前两名；取得菊花賞、天皇賞（春）、宝塚記念的胜利；完成所有育成目标"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是琵琶晨光。我的目的是创造完美的胜利方程式。……还有，我的头是普通大小！",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"收拾",
  noshanchang:"梅雨季节"
    },
  {
  erduo:"小时候就对声音十分敏感，经常被吓到",
  weiba:"倘若有湿气的话，会陷入将尾巴塞入衣服上的尾巴孔的苦战"
    },
  {
  xiema:"左右都是25.0cm"
    },
  {
   jiaren:"以前和妈妈、妹妹留着一样的发型"
  }
  ]
        },
        {
  nicheng:"【すくらんぶる☆ゾーン】",
  jpname:"マヤノトップガン",
  cnname:"摩耶重炮",
  id:100024,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/9/91/badq9lg7b8omkw3si7yc9udxeel83xu.png/200px-Chr_icon_1024_102401_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/a/ac/2sfrb0fcdgw66z119ki906rh4blrt4w.png","https://patchwiki.biligame.com/images/umamusume/3/39/bo8ynlqeu7jfzbb9omg30ccn6d7209s.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/6/60/1g3ns13f5oifugp0403ee7aqwl77tdz.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月24日",
     // 身高
            height:"143㎝",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B75","W51","H73"],
     // 声优
            cv:"星谷美绪",
    // 简介
            Introduction:"天真的少女。想快点长大！",
    // 属性面板
            propertiespanel:[94,130,86,123,117],
    // 角色别称
            rolecnname:["変幻自在","千变万化","使用作战逃げ、先行、差し、追込分别取得G1的胜利"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"诶嘿嘿，是Maya亲哟—☆最喜欢心动不已，和刺激的事情啦♪请多指教！",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"基本上是任何事",
  noshanchang:"隐藏"
    },
  {
  erduo:"非常擅长塞住耳朵",
  weiba:"说谎时会摇的很厉害"
    },
  {
  xiema:"左右都是20.5cm"
    },
  {
   jiaren:"机场曾是和飞行员父亲的游乐场"
  }
  ]
        },
        {
  nicheng:"【Creeping Black】",
  jpname:"マンハッタンカフェ",
  cnname:"曼城茶座",
  id:100025,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/3/3e/qfqhxw60oxmp0mgzewb19awwpwumv13.png/200px-Chr_icon_1025_102501_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/e/ed/amkbauktpcxmcfkg540f605jybctbmk.png","https://patchwiki.biligame.com/images/umamusume/5/51/n0a3vxnu3rmfcfiif2e1i2ungyzbi0x.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/2/26/nidx2of0ob254y4m4krj410iyh1obnr.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月5日",
     // 身高
            height:"155cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B73","W54","H78"],
     // 声优
            cv:"小仓唯",
    // 简介
            Introduction:"追逐着无形身影的神秘少女。",
    // 属性面板
            propertiespanel:[101,120,115,105,109],
    // 角色别称
            rolecnname:["漆黒の幻影","漆黑的幻影","以差行策略赢下菊花賞、天皇賞（春）、两场有馬記念；基础能力耐力达到1200以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"……我叫，曼城茶座。我……有一个想追上的朋友……。一个总是跑在我前面的孩子……看，她就在那里……",
  xuenian:"高等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"冲泡咖啡",
  noshanchang:"晴天"
    },
  {
  erduo:"好像能听到只有自己才听得到的声音",
  weiba:"即使不做任何保养，尾巴也十分光亮润泽"
    },
  {
  xiema:"左右都是22.0cm"
    },
  {
   jiaren:"家人们为了作为咖啡爱好者的自己而购买直接进口的咖啡豆"
  }
  ]
        },
        {
  nicheng:"【MB-19890425】",
  jpname:"ミホノブルボン",
  cnname:"美浦波旁",
  id:100026,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/b/b8/dsltkw93lxhfu30gmlqdfk0293ragml.png/200px-Chr_icon_1026_102601_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/e/e2/8dw5owc6fd5zciwak2dk83brtvkodcw.png","https://patchwiki.biligame.com/images/umamusume/3/31/ch53ve9el5w6g0c26v7skulkazjtktn.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/d/d9/llyv07gubh4yzjjd6ecr2a53wiicb2x.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"4月25日",
     // 身高
            height:"160cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B86","W54","H87"],
     // 声优
            cv:"长谷川育美",
    // 简介
            Introduction:"绝对严守指示！赛博格·赛马娘。",
    // 属性面板
            propertiespanel:[117,88,112,124,109],
    // 角色别称
            rolecnname:["坂路の申し子","坡道奇才","使用作战逃げ、无败且人气第一的状态下赢得朝日杯フューチュリティステークス、皐月賞、東京優駿（日本ダービー）；耐力达到1200以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我的名字叫美浦波'。目标设定为'成为三冠赛马娘'。脚质等资料请参考其他数据。",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"鬼脸游戏[1]",
  noshanchang:"操作电器"
    },
  {
  erduo:"即使睡着了，一听到命令就会立刻起来",
  weiba:"有着能够依靠尾巴来支撑自己的力量……据说"
    },
  {
  xiema:"左右都是24.0cm"
    },
  {
   jiaren:"由于电器经常损坏所以全家目前过着乡村生活[2]"
  }
  ]
        },
        {
  nicheng:"【ストレート・ライン】",
  jpname:"メジロライアン",
  cnname:"目白赖恩",
  id:100027,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/d/d1/bvniaq0nwo565lwr8ctiaexapxjk0xr.png/200px-Chr_icon_1027_102701_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/8/84/1nljb157r0fug8mmf442wc2e7ud4q2n.png","https://patchwiki.biligame.com/images/umamusume/2/28/9wsyf1bwpa5j5hs10073polm5bjlbjy.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/f/f1/k047yw3r4b181md986inlprjtx8mkn0.png"],
    // 初始星级
           star:1,
    // 生日
            birthday:"4月11日",
     // 身高
            height:"163㎝",
    // 体重
            weight:"微增（锻炼肌肉的效果）",
    // 三围
            Measurements:["B87","W57","H86"],
     // 声优
            cv:"土师亚文",
    // 简介
            Introduction:"运动让人心情舒爽！闪耀的汗水也很纯净。",
    // 属性面板
            propertiespanel:[120,91,130,98,111],
    // 角色别称
            rolecnname:["麗しき実力者","华丽强者","在有'目白'冠名的赛马娘(目白多伯、目白赖恩等)参赛的G1赛事中至少胜利一次；取得菊花賞、宝塚記念、有馬記念的胜利；粉丝数达到24w以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我的名字叫目白赖恩！锻炼身体能够精神饱满！肌肉增长能够保持健康！让我们一鼓作气的上吧！",
  xuenian:"高等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"锻炼肌肉",
  noshanchang:"胆固醇"
    },
  {
  erduo:"阅读少女漫画时会动个不停",
  weiba:"因为经常出汗所以常备尾巴用汗巾"
    },
  {
  xiema:"左右都是24.5cm"
    },
  {
   jiaren:"父亲长的十分年轻，经常被误认为兄妹"
  }
  ]
        },
        {
  nicheng:"【ボーノ☆アラモーダ】",
  jpname:"ヒシアケボノ",
  cnname:"菱曙",
  id:100028,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/3/37/0bfib4tg0sf2ua7zcrryzwq5f840u1i.png/200px-Chr_icon_1028_102801_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/b/bb/j330d08y08evnkbo916j2sh4z8qy5o4.png","https://patchwiki.biligame.com/images/umamusume/9/99/5wny87awiu5j3nmpm284mmr1m09nc3c.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/0/0d/0hlnvaapw3utqy2z94jvrcwehvtrzln.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"2月27日",
     // 身高
            height:"180",
    // 体重
            weight:"超大幅增加",
    // 三围
            Measurements:["B99","W64","H88"],
     // 声优
            cv:"松嵜丽",
    // 简介
            Introduction:"很巨大！很开朗！大……盘子？请吃料理吧♪",
    // 属性面板
            propertiespanel:[120,74,132,111,113],
    // 角色别称
            rolecnname:["超大型ウマ娘","超大型赛马娘","赢得安田記念和マイルチャンピオンシップ；获得スプリンターズステークス二连霸（两年连冠）；且能力值'力量'达到1200以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"BonoB-ono♪这里是菱曙～☆无论是料理还是赛跑，我都会将大大的爱情传达给大家！请多关照～♪",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"制作点心、相扑",
  noshanchang:"火锅奉行[1]"
    },
  {
  erduo:"无论多么微弱的肚子饿的咕噜声都不会听漏",
  weiba:"打发的时候尾巴也会跟着一齐旋转"
    },
  {
  xiema:"左右都是28.0cm"
    },
  {
   jiaren:"父亲是料理师傅，母亲是西式点心教师"
  }
  ]
        },
        {
  nicheng:"【めんこいめんこいむつのはな】",
  jpname:"ユキノビジン",
  cnname:"雪之美人",
  id:100029,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/f/f3/80kt9i01riq11vm62bkdkacqtf0x1ll.png/200px-Chr_icon_1029_102901_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/9/92/0fre1nlg0kke8t2y1gpao39d68eung8.png","https://patchwiki.biligame.com/images/umamusume/0/0a/p9pvac6xpt9reurly5amjsij9t1ob2x.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/1/1a/3pn8uenl707pz4prnnxwote71wwmaus.png"],
  
    // 初始星级
           star:3,
    // 生日
            birthday:"3月10日",
     // 身高
            height:"156cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B80","W55","H80"],
     // 声优
            cv:"山本希望",
    // 简介
            Introduction:"目标是城市女孩！地方出身的勤奋之人。",
    // 属性面板
            propertiespanel:[117,106,102,117,108],
    // 角色别称
            rolecnname:["岩手の純朴美人","岩手的纯朴美人","	赢得盛冈竞马场的重赏比赛；赢得桜花賞、オークス、秋華賞；粉丝数达到320000以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我，我叫雪之美人！在闪光系列赛中大放光彩，成为憧憬的城市女孩这就是我的梦想！呼……好好的说出来了……",
  xuenian:"中等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"锅料理、打雪仗",
  noshanchang:"炎热的天气"
    },
  {
  erduo:"有很多可爱的耳罩",
  weiba:"正在挑战买到便宜实惠的尾部护理用品"
    },
  {
  xiema:"左右都是22.5cm"
    },
  {
   jiaren:"对于上京后还保留着方言的女儿，双亲稍微感到安心"
  }
  ]
        },
        {
  nicheng:"【ローゼスドリーム】",
  jpname:"ライスシャワー",
  cnname:"米浴",
  id:100030,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/8/89/c6heaf8m1rm5k1r0rsdaerf4r9vwjn6.png/200px-Chr_icon_1030_103001_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/8/8e/imlg1kge9hectrwownd05vg2xoy3pw0.png","https://patchwiki.biligame.com/images/umamusume/7/7c/f85w3myggfhn5zofipxjlgasvg3948b.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/a/a9/m4z2f34jabhbgkjvel0i25tsc3m6di4.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月5日",
     // 身高
            height:"145㎝",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B75","W51","H76"],
     // 声优
            cv:"石见舞菜香",
    // 简介
            Introduction:"不幸体质？坚强生活着的不幸少女。",
    // 属性面板
            propertiespanel:[87,143,86,125,109],
    // 角色别称
            rolecnname:["黒い刺客","漆黑刺客","重赏比赛出战23次以上，其中在人气第二以上的情况下取得 菊花賞 、 天皇賞（春） 的胜利；粉丝数达到32w以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我叫……米浴。那，那个……？米浴，会让大家陷入不幸……是没用的孩子……但，但是为了能够改变……我会加油的！",
  xuenian:"高等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"绘画",
  noshanchang:"他人的不幸、幽灵桑"
    },
  {
  erduo:"听到关于他人的不幸的话题耳朵就会无力的垂下",
  weiba:"为了不撞到他人而小心翼翼地注意着"
    },
  {
  xiema:"左右都是21.0cm"
    },
  {
   jiaren:"曾经父母会在睡前给自己朗读绘本故事"
  }
  ]
        },
        {
  nicheng:"【オールタイム・フィーバー】",
  jpname:"アイネスフウジン",
  cnname:"艾尼斯风神",
  id:100031,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/d/d6/grr55i21i3k7x4zepgpxd5sx038o8is.png/200px-Chr_icon_1031_103101_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/9/9f/43wpqmo4sb8xpqrfelhhufvyetzks6p.png","https://patchwiki.biligame.com/images/umamusume/a/ab/mb0h0r48m9ylcz9byiwrxciyj6v8y96.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/1/1a/97yn20goxnmrvqi7j9bf41uks60x1oi.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"4月10日",
     // 身高
            height:"167cm",
    // 体重
            weight:"微增（稍微吃多了点？）",
    // 三围
            Measurements:["B88","W58","H84"],
     // 声优
            cv:"岭内知美[1]→长江里加",
    // 简介
            Introduction:"元气满满！为家人着想的勤劳者。",
    // 属性面板
            propertiespanel:[122,117,88,120,103],
    // 角色别称
            rolecnname:["風神","风神","以逃马策略赢得朝日杯フューチュリティステークス、皐月賞、東京優駿（日本ダービー）和ジャパンカップ（第三年）；基础能力速度和根性分别1200以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"Hello Hello~!我是艾尼斯风神！为了让家人们都感到高兴无论是比赛还是打工我都会全力以赴～！",
  xuenian:"高等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"快手菜",
  noshanchang:"铺张浪费、他人的请求（因为没法拒绝）"
    },
  {
  erduo:"会不由自主地对小孩子的声音起反应",
  weiba:"习惯于被妹妹们捉弄、即使被突然抓住也不会被吓到"
    },
  {
  xiema:"左：24.0cm 右：24.5cm"
    },
  {
   jiaren:"'出门的时候要紧牵着手'是家庭准则"
  }
  ]
        },
        {
  nicheng:"【tach-nology】",
  jpname:"アグネスタキオン",
  cnname:"爱丽速子",
  id:100032,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/2/2f/abf6v7frvljsrokp9vto07wkgbrti4a.png/200px-Chr_icon_1032_103201_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/f/fb/ac8z2i6zey9c542ah8q3nzy7wgta3lr.png","https://patchwiki.biligame.com/images/umamusume/b/b3/qp50k5g2d19u3sabkyye6pf0nwv1a7u.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/2/26/7m5tip6zz49xkk4flhcxqi1glftadgj.png"],
    // 初始星级
           star:1,
    // 生日
            birthday:"4月13日",
     // 身高
            height:"159cm",
    // 体重
            weight:"拒绝测量",
    // 三围
            Measurements:["B83","W55","H81"],
     // 声优
            cv:"上坂堇",
    // 简介
            Introduction:"禁断的疯狂科学家。肉体研究才是一切！",
    // 属性面板
            propertiespanel:[112,104,104,108,122],
    // 角色别称
            rolecnname:["超光速のプリンセス","超光速公主","继承马评级S级以上；在无败的情况下取得ホープフルステークス、弥生賞、皐月賞的胜利；基础能力速度达到1200以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"你对赛马娘的速度究竟能快到什么程度也不感兴趣吗。但如果你对此有兴趣的话...就请成为我，爱丽速子的豚鼠实验对象吧。",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"研究、甜的东西和红茶",
  noshanchang:"研究受阻、苦的东西"
    },
  {
  erduo:"坚决不让碰耳朵和额头",
  weiba:"灵光一闪时就会毛发皆竖"
    },
  {
  xiema:"左右都是22.5cm"
    },
  {
   jiaren:"自己是在赛马娘界声名显赫的家族中的特立独行者"
  }
  ]
        },
        {
  nicheng:"【Starry Nocturne】",
  jpname:"アドマイヤベガ",
  cnname:"爱慕织姬",
  id:100033,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/d/dd/qbqowwstr3s6tq9q4v1xky6vqtpwvwf.png/200px-Chr_icon_1033_103301_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/2/20/o9e5yn4nvsm4lf8zon22bin9l7rrauk.png","https://patchwiki.biligame.com/images/umamusume/0/08/7u6ud327zarqitc9i49ftudknxzw674.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/b/b3/mdnvl811jzwxw6etamcsoyj2dgvktxd.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月12日",
     // 身高
            height:"157cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B85","W57","H82"],
     // 声优
            cv:"咲咲木瞳",
    // 简介
            Introduction:"背负着觉悟。贯彻孤高的一等星。",
    // 属性面板
            propertiespanel:[118,96,132,85,119],
    // 角色别称
            rolecnname:["煌めく一等星","闪耀的一等星","在人气第一的状态下赢得皐月賞、東京優駿（日本ダービー）、宝塚記念；战胜好歌剧、成田路、名将怒涛各三次以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是爱慕织姬……我可以回去了吗？我必须得多加训练，赢得比赛绝对要成为那闪耀的一等星。",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"朗读、寒冷",
  noshanchang:"热闹的地方"
    },
  {
  erduo:"听到'姐姐'的叫声的话会无意识地抖动",
  weiba:"在睡觉时有着会无意识抓住尾巴的习惯"
    },
  {
  xiema:"左右都是23.0cm"
    },
  {
   jiaren:"每年的生日蛋糕都会准备两个"
  }
  ]
        },
        {
  nicheng:"【稲荷所縁江戸紫】",
  jpname:"イナリワン",
  cnname:"稻荷一",
  id:100034,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/3/3f/916h3hbymr2wfwpd3dvhtfv0y7lwimh.png/200px-Chr_icon_1034_103401_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/c/c0/3r929y8ygw8wgb8e72076jz9chg4r3l.png","https://patchwiki.biligame.com/images/umamusume/b/bf/ew0lygrdz02lg0fktbnbp0xmzbx4mt3.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/f/f4/qq088uatdaxnr5di7etk05fsd4hvvw0.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"5月7日",
     // 身高
            height:"139cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B85","W51","H74"],
     // 声优
            cv:"井上遥乃",
    // 简介
            Introduction:"你说啥呢！电光石火的自称・江户人属性面板",
    // 属性面板
            propertiespanel:[108,122,133,90,97],
    // 角色别称
            rolecnname:["大井から来た天下人","大井出身的平天下之人","分别在草地和泥地赢得4场以上GⅠ级比赛；其中，以先行策略赢得東京大賞典、宝塚記念（第三年）；以差行或追马策略赢得天皇賞（春）、有馬記念"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"说啥呢你！我是稻荷一！如你所见，是如假包换的江户之子！我要成为比谁都了不起的赛马娘！",
  xuenian:"高等部",
  suoshusushe:"美浦寮"
    },
  {
  shanchang:"射击、抠糖饼、捞金鱼",
  noshanchang:"排队、说奉承的话"
    },
  {
  erduo:"只要一听到祭典的声音，就会像跳舞一般抖动",
  weiba:"在保养方面十分讲究，即使是在大夏天也要用热水来清洗"
    },
  {
  xiema:"左右都是19.0cm"
    },
  {
   jiaren:"用拍洋画来决定洗澡的先后顺序是不成文的家规"
  }
  ]
        },
        {
  nicheng:"【Go To Winning!】",
  jpname:"ウイニングチケット",
  cnname:"胜利奖券",
  id:100035,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/1/15/3ylq1he3l76mm595xsf5oozg3zb7gpu.png/200px-Chr_icon_1035_103501_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/4/49/0wrdsa64jlbbeyggu2vhhjopk9c5cp2.png","https://patchwiki.biligame.com/images/umamusume/c/c8/724b90tx3gi48ht9fp7n2ewevfc22nh.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/9/95/64uifx7r8vm90ssx581dfmcvfgw3rju.png"],
    // 初始星级
           star:1,
    // 生日
            birthday:"3月21日",
     // 身高
            height:"157cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B88","W57","H85"],
     // 声优
            cv:"渡部优衣",
    // 简介
            Introduction:"尽情地笑着哭吧！感情全开的正直少女。",
    // 属性面板
            propertiespanel:[120,93,125,101,111],
    // 角色别称
            rolecnname:["新時代の旗手","新时代的旗手","在人气第一的情况下取得弥生賞、皐月賞、東京優駿（日本ダービー）、菊花賞的胜利；取得有馬記念(第二年)的胜利；粉丝数达到24w以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我，我！我的梦想是成为德比赛马娘！还有就是……啊！！名字！！！！我叫胜利奖券！请多关照！",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"全力应援、全力感动",
  noshanchang:"不全力以赴！！！！！！"
    },
  {
  erduo:"挚友表示'就连耳朵也动的好烦人'",
  weiba:"有着可以看出喜怒哀乐的表现力"
    },
  {
  xiema:"左右都是21.5cm"
    },
  {
   jiaren:"观战德比是比什么都要重要的家庭活动"
  }
  ]
        },
        {
  nicheng:"【unsigned】",
  jpname:"エアシャカール",
  cnname:"空中神宫",
  id:100036,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/9/99/afd1z7hknmbwkl4iz3vhkzyv2cbe7gi.png/200px-Chr_icon_1036_103601_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/a/aa/osyhfq4jmqlo5lgiv050g609bkbm25k.png","https://patchwiki.biligame.com/images/umamusume/1/16/mzgbg60s1skzt7m7hddro4iswrgnhwy.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/1/17/jkayfkyrn2xm3k0f692bigkmg88mivi.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"2月26日",
     // 身高
            height:"168cm",
    // 体重
            weight:"无法测量",
    // 三围
            Measurements:["B77","W56","H85"],
     // 声优
            cv:"津田美波",
    // 简介
            Introduction:"该逻辑推理了！超越常识的天才少女。",
    // 属性面板
            propertiespanel:[120,104,116,84,126],
    // 角色别称
            rolecnname:["壁を超えた天才","跨越高墙的天才","赢得皐月賞、東京優駿（日本ダービー）、菊花賞；在第三年赢得天皇賞（春）、宝塚記念、天皇賞（秋）、有馬記念；基础能力智力1200以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我叫空中神宫。无论什么比赛数据都是关键。模拟推导没有问题的话，就能够制服对手。在逻辑上来说啦！",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"编程",
  noshanchang:"知了"
    },
  {
  erduo:"在进行逻辑思考的时候会竖起来",
  weiba:"计算并维持着最适合奔跑的长度"
    },
  {
  xiema:"左：26.0cm 右：25.5cm"
    },
  {
   jiaren:"从没拆过母亲寄来的包裹"
  }
  ]
        },
        {
  nicheng:"【Meisterschaft】",
  jpname:"エイシンフラッシュ",
  cnname:"荣进闪耀",
  id:100037,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/4/4f/982fg1lydco9xvb7grszxpz20qzsusw.png/200px-Chr_icon_1037_103701_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/b/bb/8gqnje5e4n7lhq8w7d0lz5bpdti8eoc.png","https://patchwiki.biligame.com/images/umamusume/f/fc/selsabu8slckdo01kvij44x7vdn1h54.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/1/19/2232mnjw0255wxxexlcltovgkbbap48.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月27日",
     // 身高
            height:"160cm",
    // 体重
            weight:"无增减（1g的误差都没有）",
    // 三围
            Measurements:["B88","W58","H86"],
     // 声优
            cv:"藤野彩水",
    // 简介
            Introduction:"一切都按照计划进行。严谨耿直的少女。",
    // 属性面板
            propertiespanel:[122,101,113,100,114],
    // 角色别称
            rolecnname:["閃光の切れ味","锋芒一闪","使用作战差し赢得東京優駿（日本ダービー）和天皇賞（秋）；并且在育成结束时拥有切れ者(能人)育成状态"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我的名字叫荣进闪耀。为了守护赛马娘的传统，我会继续奔跑。无论是任何比赛都会按日程表定下的节奏完美进行。",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"临摹",
  noshanchang:"临摹以外的其他画法"
    },
  {
  erduo:"听到节拍器的声音的话会被治愈",
  weiba:"连0.1毫米的误差都无法接受，整齐的修剪好"
    },
  {
  xiema:"左右都是23.0cm"
    },
  {
   jiaren:"家里经营着蛋糕店。其招牌出品是年轮蛋糕"
  }
  ]
        },
        {
  nicheng:"【フィーユ・エクレール】",
  jpname:"カレンチャン",
  cnname:"真机伶",
  id:100038,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/2/21/lnb5w1ae8uacozj5wlqz4moobej1qt3.png/200px-Chr_icon_1038_103801_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/9/92/piql59ryz8d7x6yvvtgx96muraeyjti.png","https://patchwiki.biligame.com/images/umamusume/3/34/q6488urebo1axpxefbp2l3t38ir06dg.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/7/7d/r9gtq1guv36dhgcrsr0afygtqfaie7a.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月31日",
     // 身高
            height:"155㎝",
    // 体重
            weight:"秘・密・哦",
    // 三围
            Measurements:["B83","W55","H79"],
     // 声优
            cv:"篠原侑",
    // 简介
            Introduction:"卡哇伊的闪光奔跑！请多多爱着我哦♪",
    // 属性面板
            propertiespanel:[119,71,130,111,119],
    // 角色别称
            rolecnname:["閃光乙女","闪光女孩","在包含スプリンターズステークス和高松宮記念在内的1200m短跑比赛中取得九次胜利，且粉丝数达到24w人"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"Curren可愛的，真机伶De-su！整个世界都被可爱所包围着☆东张西望是不行的，只能好好注视着机伶哟♪",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"自拍、弹钢琴",
  noshanchang:"饮茶[1]"
    },
  {
  erduo:"想撒娇时，耳朵会像招手般摇动",
  weiba:"有着触摸的话就会被其俘获的柔软手感"
    },
  {
  xiema:"左右都是22.0cm"
    },
  {
   jiaren:"女儿离家后，思女心切的家人选择应聘学院工作人员岗位"
  }
  ]
        },
        {
  nicheng:"【プリンセス・オブ・ピンク】",
  jpname:"カワカミプリンセス",
  cnname:"川上公主",
  id:100039,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/d/d7/t1sm6ccg76f4z1t9w3imii46tmvqd0g.png/200px-Chr_icon_1039_103901_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/5/56/6z4112pn06dtiuzck03919b3terrr1c.png","https://patchwiki.biligame.com/images/umamusume/a/a7/hsmopoyld2osrlwkjgr0f8ito0ewg0m.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/9/98/d01rejy2occhry448zkgsgmi70316e0.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"6月5日",
     // 身高
            height:"154cm",
    // 体重
            weight:"无增减（一定是这样！）",
    // 三围
            Measurements:["B91","W57","H87"],
     // 声优
            cv:"高桥花林",
    // 简介
            Introduction:"目标是公主！豪爽的假小子赛马娘。",
    // 属性面板
            propertiespanel:[122,87,131,101,109],
    // 角色别称
            rolecnname:["おませな姫君","懂事的公主","育成中父母马一方赢得过高松宮記念；保持无败且オークス、秋華賞、エリザベス女王杯夺冠"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"哦一一吼吼！我叫川上公主……没错，是气质高雅，公主中的公主！就算在比赛中，也会华丽的揍飞一切敌人，为你献上胜利！",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"驱除G[1]（物理）",
  noshanchang:"浪费"
    },
  {
  erduo:"自认为拥有在赛马娘中最适合皇冠的耳朵",
  weiba:"自称为'公主尾巴'"
    },
  {
  xiema:"左右都是21.5cm"
    },
  {
   jiaren:"为其选择了既可爱又结实的衣服"
  }
  ]
        },
        {
  nicheng:"【オーセンティック/1928】",
  jpname:"ゴールドシチー",
  cnname:"黄金城",
  id:100040,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/f/fa/pxlndiv4bbdjqppe904ly0sirb9xxal.png/200px-Chr_icon_1040_104001_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/3/33/srx2hmhy4gryfjiqvv25nfcr6yk2l2m.png","https://patchwiki.biligame.com/images/umamusume/e/e4/e8dg7z9paguce7mpsji2wehen2x99ry.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/f/fd/ezk0atehaxilv001y0g3j5n8qkn3axo.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"4月16日",
     // 身高
            height:"158cm",
    // 体重
            weight:"没有出现在测量地点",
    // 三围
            Measurements:["B85","W58","H82"],
     // 声优
            cv:"香坂沙希",
    // 简介
            Introduction:"百年难得一遇的高人气・美少女。",
    // 属性面板
            propertiespanel:[109,113,114,112,102],
    // 角色别称
            rolecnname:["百年に一人の美少女","百年一遇的美少女","取得阪神ジュベナイルフィリーズ的胜利；所有比赛都以干劲绝好调出战；在没有过太り気味(肥胖)、肌あれ(皮肤粗糙)、なまけ癖(怠惰)的情况下，并且所有训练设施达到LV3以上完成育成"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是黄金城市。……事先说好，如果你只是把我当成一个漂亮人偶来对待的话，我是不会原谅你的。不要靠外表去判断我，而是靠跑法来判断。",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"走猫步",
  noshanchang:"早起"
    },
  {
  erduo:"想要赢过闹钟继续睡",
  weiba:"被拍照片时尾巴会无意识地静止不动"
    },
  {
  xiema:"左右都是23.0cm"
    },
  {
   jiaren:"吹弹可破的肌肤来自母亲，闪耀的金发则来自父亲"
  }
  ]
        },
        {
  nicheng:"【サクラ、すすめ！】",
  jpname:"サクラバクシンオー",
  cnname:"樱花进王",
  id:100041,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/6/64/eatkvvxofj7u3hiuhg62gv35nc62i0w.png/200px-Chr_icon_1041_104101_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/b/b7/nxhran79ze5205iqu7bokyzojb2d4dl.png","https://patchwiki.biligame.com/images/umamusume/a/ae/2iqym4cucy3073t6p3bfvntvex1a69n.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/a/ad/kizt6l10imcn1mh13b7vhlwhggeps7f.png"],
   // 初始星级
           star:3,
    // 生日
            birthday:"4月14日",
     // 身高
            height:"158cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B83","W55","H83"],
     // 声优
            cv:"三泽纱千香",
    // 简介
            Introduction:"大暴走?学级委员长。无论何时都要爆进！",
    // 属性面板
            propertiespanel:[131,74,114,117,114],
    // 角色别称
            rolecnname:["驀進王","爆进王","取得1400m以下赛事的胜利11次以上；在スプリンターズステークス(第三年)中以人气第一，以4马身差以上取得胜利"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"你好！我叫樱花进王！正如你所见，是一位出色的委员长！为了作为大家的榜样，上吧！爆进！",
  xuenian:"高等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"被依靠、帮助他人",
  noshanchang:"步骤很多（3步以上）的事情"
    },
  {
  erduo:"他人的话只能听进去一半",
  weiba:"倘若爆进起来的话，连一根发梢都抓不住"
    },
  {
  xiema:"左右都是24.0cm"
    },
  {
   jiaren:"家训为'表扬我表扬我表扬我，想被表扬！'"
  }
  ]
        },
        {
  nicheng:"【Rocket☆Star】",
  jpname:"シーキングザパール",
  cnname:"采珠",
  id:100042,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/4/48/nhu57vnlwk3yy8y6pk2w3as5kfn7xo2.png/200px-Chr_icon_1042_104201_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/2/25/qxpbi56utrs5z7n8wqkvr2bk9lb2uap.png","https://patchwiki.biligame.com/images/umamusume/6/65/4m93c1iywfilb9k6d0d37ekjj4mk7p6.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/0/0d/m92p71eooxtzusvwbcqdshe9r4bbkbb.png"], 
    // 初始星级
           star:3,
    // 生日
            birthday:"4月16日",
     // 身高
            height:"168cm",
    // 体重
            weight:"世界级的完美",
    // 三围
            Measurements:["B91","W57","H87"],
     // 声优
            cv:"福原绫香",
    // 简介
            Introduction:"挑战世界！把不可能当作珍珠的大姐姐。",
    // 属性面板
            propertiespanel:[121,79,127,114,109],
    // 角色别称
            rolecnname:["真珠の煌めき","珍珠的光辉","文	赢得桜花賞、NHKマイルカップ、オークス、秋華賞、高松宮記念、スプリンターズステークス（第三年）"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"哈一一哈哈哈！我叫采珠！你知道吗？世界充满了无尽的可能性。而这一结论就由我来证明！",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"表演哑剧、自我介绍",
  noshanchang:"漱口"
    },
  {
  erduo:"能用感觉来理解各种语言的意思",
  weiba:"为了在海外表演而学习了用尾巴写字"
    },
  {
  xiema:"左右都是24.5cm"
    },
  {
   jiaren:"全家人都有一样的墨镜"
  }
  ]
        },
        {
  nicheng:"【Wicked Punk】",
  jpname:"シンコウウインディ",
  cnname:"新光风",
  id:100043,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/c/cd/h7z4tkdt3zjcmup9ltv569y7t29mr7b.png/200px-Chr_icon_1043_104301_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/1/1c/l7mi475edu0ldfz3ixo5zspzkotb073.png","https://patchwiki.biligame.com/images/umamusume/a/ad/mzafn4xms0aom6ppomp3b9iykvqt1js.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/1/13/rx77x5a0h2wkls2ad0ikn1qctv4kbcw.png"],
   // 初始星级
           star:3,
    // 生日
            birthday:"4月14日",
     // 身高
            height:"152cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B77","W57","H88"],
     // 声优
            cv:"高田忧希",
    // 简介
            Introduction:"最喜欢恶作剧了！不理她的话会咬你！",
    // 属性面板
            propertiespanel:[121,93,131,98,107],
    // 角色别称
            rolecnname:["噛みつきイタズラ娘","紧咬不放的淘气马娘","赢得二月锦标赛，并赢下2场以上有焦躁状态的比赛，且力量数值达到1200以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"嘎~嗷！我是新光风！害怕了吗？老实说，很可怕对不对~！……喂！不要无视我！我咬！",
  xuenian:"高等部",
  suoshusushe:"美浦寮"
    },
  {
  shanchang:"恶作剧、挖洞、爬屋顶",
  noshanchang:"棉花糖"
    },
  {
  erduo:"一想到新的恶作剧点子耳朵就会微微晃动",
  weiba:"有时候早上起来尾巴上会有口水"
    },
  {
  xiema:"左右都是22.5cm"
    },
  {
   jiaren:"父亲公司的CM是全家一起唱的"
  }
  ]
        },
        {
  nicheng:"【プラタナス・ウィッチ】",
  jpname:"スイープトウショウ",
  cnname:"东商变革",
  id:100044,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/1/12/9hxqri25y9qihyim1ipxi0ap1qksqaa.png/200px-Chr_icon_1044_104401_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/6/68/77xmntgebmgee9prcs96buhwce5ikx5.png","https://patchwiki.biligame.com/images/umamusume/a/a8/qvtdfjfj49f9e3cw5jza7uhar6b4nz7.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/1/11/chkly17jpsi2t81pfpv07vjpk54gh5z.png"],
   // 初始星级
           star:3,
    // 生日
            birthday:"5月9日",
     // 身高
            height:"139cm",
    // 体重
            weight:"坚决拒绝测量",
    // 三围
            Measurements:["B72","W53","H73"],
     // 声优
            cv:"杉浦栞",
    // 简介
            Introduction:"纯粹的笨蛋！绝对要成为魔女！",
    // 属性面板
            propertiespanel:[123,104,135,79,109],
    // 角色别称
            rolecnname:["ワガママ魔法少女","任性的魔法少女","以追马策略赢得チューリップ賞、秋華賞；以差行或追马策略在第三年赢得宝塚記念、エリザベス女王杯、有馬記念"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"东商变革只是变身前的名字罢了！我的真身为魔法少女Sweepy！这就是魔法哟！诶！（哐）",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"认出花的名字（偶尔会自创）",
  noshanchang:"扫帚以外的坐骑"
    },
  {
  erduo:"会把不认识的单词都听成咒语",
  weiba:"被自己想要驯服的那只黑猫当成了玩具"
    },
  {
  xiema:"左右都是19.0cm"
    },
  {
   jiaren:"和爸爸通电话时，到要挂断的时候就一定会哭"
  }
  ]
        },
        {
  nicheng:"【マーマリングストリーム】",
  jpname:"スーパークリーク",
  cnname:"超级小海湾",
  id:100045,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/5/53/okodnpzzr8tqbjl5tqi1bkz6az7ps63.png/200px-Chr_icon_1045_104501_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/f/fe/eqvu38vll2t19l3m5xypyeyis268kts.png","https://patchwiki.biligame.com/images/umamusume/e/ec/snhcjomi4oxnxxs3nlaxok73v0he2hr.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/5/53/bq2809gt7c3bhjp4mwn38dgh2ajr828.png"],
   // 初始星级
           star:2,
    // 生日
            birthday:"5月27日",
     // 身高
            height:"168cm",
    // 体重
            weight:"微增（理由是秘密的呦）",
    // 三围
            Measurements:["B97","W61","H91"],
     // 声优
            cv:"优木加奈",
    // 简介
            Introduction:"用温柔的母性治愈别人的温柔大姐姐。",
    // 属性面板
            propertiespanel:[84,129,92,129,116],
    // 角色别称
            rolecnname:["高速ステイヤー","高速Stayer","以5马身差以上取得菊花賞的胜利；在包含天皇賞（春）的2400m以上的重赏(G1、G2和G3)中取得6次胜利"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"呼呼~我是超级溪流哟~为了大家的笑容，我会非~常努力的。就交给我吧♪",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"照顾",
  noshanchang:"绘画"
    },
  {
  erduo:"擅长掏耳朵，但不擅长被掏耳朵",
  weiba:"能够灵巧的哄小孩子"
    },
  {
  xiema:"左右都是25.5cm"
    },
  {
   jiaren:"老家开的托儿所，因如家一般温馨而闻名"
  }
  ]
        },
        {
  nicheng:"【あぶそりゅーと☆LOVE】",
  jpname:"スマートファルコン",
  cnname:"醒目飞鹰",
  id:100046,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/c/c5/6fg7ibrzmxi3azpweibt8zjp8hi91tr.png/200px-Chr_icon_1046_104601_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/9/94/nw3ee9qpqth1srngshshuy5im19rjql.png","https://patchwiki.biligame.com/images/umamusume/f/f7/bclijsjqxp97ynuoe3wadehfp53leh3.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/7/74/j6jiznqklb8sjihhkmk53jhfq9zbz76.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"4月4日",
     // 身高
            height:"156cm",
    // 体重
            weight:"微减（生活稍微有点拮据）",
    // 三围
            Measurements:["B78","W55","H80"],
     // 声优
            cv:"大和田仁美",
    // 简介
            Introduction:"跟粉丝们的互动就交给我吧！未来的顶级偶像马娘。",
    // 属性面板
            propertiespanel:[115,104,104,122,105],
    // 角色别称
            rolecnname:["砂のハヤブサ","沙地之隼","使用作战逃げ在包含JBCクラシック、帝王賞、東京大賞典的泥地重赏赛事(G1、G2和G3)中取得至少九次连胜"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是醒目飞鹰！请叫我飞鹰子吧！我的梦想是成为马娘偶像！要签名的话一直都欢迎哟☆",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"记住他人的名字和相貌",
  noshanchang:"学习"
    },
  {
  erduo:"不会漏听任何一位粉丝的声音",
  weiba:"为了不养成习惯，注意着坐的方法"
    },
  {
  xiema:"左右都是23.0cm"
    },
  {
   jiaren:"发饰是母亲亲手制作的第1号偶像服"
  }
  ]
        },
        {
  nicheng:"【Heroic Author】",
  jpname:"ゼンノロブロイ",
  cnname:"荒漠英雄",
  id:100047,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/1/1f/exdyiv3wlj61d5lsv0p6ni9buxr41km.png/200px-Chr_icon_1047_104701_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/5/51/jd3486c2owlsj8b7185myvziiam5pxn.png","https://patchwiki.biligame.com/images/umamusume/8/87/c9xw2uu4hi2nu6b2f3cp8lj0txq4yin.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/7/7d/iqb37kaowvfjc69xok6n1e1qt6afzog.png"],
  // 初始星级
           star:3,
    // 生日
            birthday:"3月27日",
     // 身高
            height:"140cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B89","W56","H78"],
     // 声优
            cv:"照井春佳",
    // 简介
            Introduction:"总有一天会书写出英雄传说。想象力丰富的读书家。",
    // 属性面板
            propertiespanel:[108,118,111,91,122],
    // 角色别称
            rolecnname:["大器の英雄","大器之英雄","在人气第一的情况下赢得第三年的天皇賞（秋）、ジャパンカップ、有馬記念，粉丝数达到320000人以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我的名字叫荒漠英雄。那个……别看我这个样子，但我一直憧憬着英雄传记里的故事……总有一天，我也想在比赛中书写属于我自己的故事……！",
  xuenian:"中等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"精准的道路向导",
  noshanchang:"湿气、山羊"
    },
  {
  erduo:"听到故事的高潮部分会'pin'地竖起来",
  weiba:"人多的时候会紧张到不敢动"
    },
  {
  xiema:"左右都是21.0cm"
    },
  {
   jiaren:"父母只要一聊起最新款的家电就能聊到天黑"
  }
  ]
        },
        {
  nicheng:"【ポップス☆ジョーカー】",
  jpname:"トーセンジョーダン",
  cnname:"东瀛佐敦",
  id:100048,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/9/99/l658v1e2t6ypndexheiru5m0gtiybgk.png/200px-Chr_icon_1048_104801_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/d/d3/0934wil8m62bzltegg1kf2qh3636xal.png","https://patchwiki.biligame.com/images/umamusume/f/fb/gp1xab74dzsy1bze0sgps1yyraax481.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/6/6a/q3jges7xyx0ewges6b0v8zk33lhemvq.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"2月4日",
     // 身高
            height:"157cm",
    // 体重
            weight:"无可奉告",
    // 三围
            Measurements:["B82","W56","H84"],
     // 声优
            cv:"铃木绘理",
    // 简介
            Introduction:"土气的佐敦！现在的辣妹☆",
    // 属性面板
            propertiespanel:[109,120,92,123,106],
    // 角色别称
            rolecnname:["負けず嫌いのギャル","不服输的女孩","赢得ジャパンカップ、天皇賞（春）；以干劲绝好调取得天皇賞（秋）二连胜；战胜黄金船三次以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是东瀛佐敦。梦想是……说这种话感觉太生硬了所以NG，多指教～☆总之看看我的美甲？很不错吧？",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"美甲、篮球",
  noshanchang:"健康食品、葡萄籽"
    },
  {
  erduo:"希望能流行叠起双耳的拍照方式",
  weiba:"因为笨拙而无法检查尾毛是否分叉，为此烦恼着"
    },
  {
  xiema:"左：23.0cm 右：22.5cm"
    },
  {
   jiaren:"'从蔬菜开始吃吧'是最让人生气的回忆"
  }
  ]
        },
        {
  nicheng:"【死中求活】",
  jpname:"ナカヤマフェスタ",
  cnname:"中山庆典",
  id:100049,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/b/b2/o57sanmajgfk3jrexmjhh9cz22iuql8.png/200px-Chr_icon_1049_104901_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/2/2f/nef4wa84npoq0ggymp6e4hvv9jsaxhz.png","https://patchwiki.biligame.com/images/umamusume/0/08/dc5jgd9ddxkrvgml84690dj0p7ipb7y.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/5/52/pg5mvfgcahpzmbyxpmjzeqi4vbgnxci.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"4月5日",
     // 身高
            height:"159cm",
    // 体重
            weight:"不会影响比赛",
    // 三围
            Measurements:["B78","W54","H79"],
     // 声优
            cv:"下地紫野",
    // 简介
            Introduction:"孤注一掷！追求高风险高回报的狂人胜负师",
    // 属性面板
            propertiespanel:[119,113,121,92,105],
    // 角色别称
            rolecnname:["生粋のギャンブラー","纯粹的赌徒","赢得第三年的宝塚記念、ジャパンカップ；在失败率30%以上情况下训练成功；且以没有训练失败过的状态完成育成"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是中山庆典。半温不火的比赛可感觉不到刺激啊。喂，让我更加沸腾起来吧...！",
  xuenian:"高等部",
  suoshusushe:"美浦寮"
    },
  {
  shanchang:"植物和小动物护理",
  noshanchang:"鱿鱼干"
    },
  {
  erduo:"帽子上的耳朵孔是自己剪裁和缝制的。",
  weiba:"下注的时候利用尾巴的动作来虚张声势"
    },
  {
  xiema:"左右都是24.0cm"
    },
  {
   jiaren:"全家人的睡相都不好"
  }
  ]
        },
        {
  nicheng:"【Nevertheless】",
  jpname:"ナリタタイシン",
  cnname:"成田大进",
  id:100050,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/9/9e/ge52o4hxomi8vb02nm9whqjhiyo33s7.png/200px-Chr_icon_1050_105001_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/1/1b/gp0zh6phel5dj4tun8al5k6oqqopidq.png","https://patchwiki.biligame.com/images/umamusume/e/e8/sx0yueeq487jgarkknhl9s7sougka5j.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/8/8e/acacgmt048hsys12ar7q10x1nfr3c93.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"6月10日",
     // 身高
            height:"145cm",
    // 体重
            weight:"拒绝测量",
    // 三围
            Measurements:["B69","W50","H73"],
     // 声优
            cv:"渡部惠子",
    // 简介
            Introduction:"冷酷又干练！用娇小的身体赢得胜利。",
    // 属性面板
            propertiespanel:[118,100,121,97,114],
    // 角色别称
            rolecnname:["逆転のウマ娘","逆转的赛马娘","使用作战追込在皐月賞的最终直线超越四人以上取得胜利，使用作战追込取得天皇賞（春）胜利，基础属性根性在1200以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"成田大进。就这些。我只想赢下比赛，让那些看不起我的家伙好好看着。……不要管我。",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"游戏、家务事",
  noshanchang:"人群"
    },
  {
  erduo:"就算听到感兴趣的话题也只有耳朵会转向这边",
  weiba:"除了知心好友外的其他人倘若摸了就会被踹飞"
    },
  {
  xiema:"左右都是20.5cm"
    },
  {
   jiaren:"有着会秒读妈妈、朋友以及BNW讯息的传闻"
  }
  ]
        },
        {
  nicheng:"【ティアード・ペタル】",
  jpname:"ニシノフラワー",
  cnname:"西野花",
  id:100051,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/7/7c/7zipbyvsopzlsbeazfka5pk06rr6m66.png/200px-Chr_icon_1051_105101_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/c/cc/32sg3emy01x7i8h18xz0aepamr0qcre.png","https://patchwiki.biligame.com/images/umamusume/b/bb/dd6m9301k4uisf91v830msms1t4h37v.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/1/11/si0tmzvzw8oopkaz4h2w9xttq264oqz.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"4月19日",
     // 身高
            height:"135cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B67","W48","H70"],
     // 声优
            cv:"河井晴菜",
    // 简介
            Introduction:"如花般绽放的笑容♪善解人意的赛马娘。",
    // 属性面板
            propertiespanel:[113,99,116,105,117],
    // 角色别称
            rolecnname:["小さな天才少女","小小天才少女","任一父辈马娘未赢得过GI比赛；赢得桜花賞、阪神ジュベナイルフィリーズ，スプリンターズステークス两连冠；第二年内粉丝数达到100000以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"你好，我叫西野花。我想成为大家都信赖着的优秀姐姐赛马娘...！",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"一切家务事、园艺",
  noshanchang:"碳酸果汁"
    },
  {
  erduo:"触摸的话就会被安心感所包裹，因为十分治愈而饱受好评",
  weiba:"有着太阳以及应季花朵的香味"
    },
  {
  xiema:"左右都是18.5cm"
    },
  {
   jiaren:"从双亲那收到的洒水壶至今仍被当为宝物而爱惜着"
  }
  ]
        },
        {
  nicheng:"【うららん一等賞♪】",
  jpname:"ハルウララ",
  cnname:"春乌拉拉",
  id:100052,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/9/90/dy0adbddbeplz74mqo2p9fn9qcv9x98.png/200px-Chr_icon_1052_105201_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/9/94/s43cy7gnoymewz6pbu0bmwjjagha9nf.png","https://patchwiki.biligame.com/images/umamusume/a/a8/qfqe820p8r6ya3k0b0tnf8ugkw1y2ah.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/f/fe/0sjwaxtkfibu9hbxkby4e5rc1n6igv8.png"],
    // 初始星级
           star:1,
    // 生日
            birthday:"2月27日",
     // 身高
            height:"140cm",
    // 体重
            weight:"微增（但是并不在意）",
    // 三围
            Measurements:["B74","W51","H73"],
     // 声优
            cv:"首藤志奈",
    // 简介
            Introduction:"即使连败也不气馁！百折不挠的少女。",
    // 属性面板
            propertiespanel:[115,79,123,119,114],
    // 角色别称
            rolecnname:["ハルウララがんばる","春丽加油","粉丝数达到55w以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是春丽！喜欢的东西是胡萝卜还有因为奔跑很开心所以也最~喜欢了♪以第一名为目标，我会努力的！",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"拼命努力",
  noshanchang:"很难的汉字"
    },
  {
  erduo:"很难懂的话就会右耳进左耳出",
  weiba:"认为只要能够旋转着甩动尾巴就能变得更快"
    },
  {
  xiema:"左右都是20.0cm"
    },
  {
   jiaren:"最喜欢料理是母亲做的胡萝卜饭"
  }
  ]
        },
        {
  nicheng:"【黒鉄の大志】",
  jpname:"バンブーメモリー",
  cnname:"青竹回忆",
  id:100053,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/1/11/q703pn0y576wn4cywt06c2o82qwrez1.png/200px-Chr_icon_1053_105301_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/6/68/9f17y2za9fk2lvocd9wx92hh2nx4as7.png","https://patchwiki.biligame.com/images/umamusume/5/55/ang20n3ukfxi0nzpppvccphsbuc1kyh.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/8/89/r7zm6xz6p6p1hmtro4485veho8vo280.png"],
   // 初始星级
           star:3,
    // 生日
            birthday:"5月14日",
     // 身高
            height:"157cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B77","W57","H81"],
     // 声优
            cv:"蓝原琴美",
    // 简介
            Introduction:"追求真刀真枪的较量！热血・风纪委员长！",
    // 属性面板
            propertiespanel:[119,90,127,112,102],
    // 角色别称
            rolecnname:["夢の体現者","梦想的化身","参加重赏比赛23回以上；赢得第三年的安田記念、宝塚記念、スプリンターズステークス、マイルチャンピオンシップ"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"押忍！我是青竹回忆！以鬼之风纪委员之名痛快的跑起来——！",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"早睡早起、果断决定！",
  noshanchang:"细嚼慢咽"
    },
  {
  erduo:"摘下头巾的话耳朵就会垂下来",
  weiba:"总之也有在每天锻炼尾巴"
    },
  {
  xiema:"左：22.5cm 右：23.0cm"
    },
  {
   jiaren:"热血系体育老师的父亲对她而言亦师亦父，是她成长的起点"
  }
  ]
        },
        {
  nicheng:"【☆キラ★ドキ☆ワク∞マベ∞】",
  jpname:"マーベラスサンデー",
  cnname:"美丽周日",
  id:100054,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/9/9b/o5vrmt0knjrpnxu5zy9semkx1nmnxkq.png/200px-Chr_icon_1055_105501_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/c/c5/doy3d9h6qvsryd2lpxtrz2s1k5z7fcg.png","https://patchwiki.biligame.com/images/umamusume/a/aa/mmnldes56b7m7g4y5xetz0w24hvx0z3.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/a/a0/szi27uvf21a3dj63oa6wrgpp73txepj.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"5月31日",
     // 身高
            height:"145cm",
    // 体重
            weight:"Marvelous！",
    // 三围
            Measurements:["B87","W52","H77"],
     // 声优
            cv:"三宅麻理惠",
    // 简介
            Introduction:"Marvelous！元气无敌地改变世界！",
    // 属性面板
            propertiespanel:[115,100,121,93,121],
    // 角色别称
            rolecnname:["マーベラスの伝道師","无","无"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"嗨嗨，我是美丽周日！向全世界传递Marvelous的感觉！那么，大家也一起，Marvelous！",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"同时听很多人说话",
  noshanchang:"喝茶和喝咖啡"
    },
  {
  erduo:"可以听到Marvelous☆的声音",
  weiba:"是发现Marvelous☆事物的天线"
    },
  {
  xiema:"左右都是22.0cm"
    },
  {
   jiaren:"和祖母一起欣赏秋天的红叶"
  }
  ]
        },
        {
  nicheng:"【運気上昇☆幸福万来】",
  jpname:"マチカネフクキタル",
  cnname:"待兼福来",
  id:100055,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/6/61/q3xabiyieplbbtiqm0xm0ezsr0mfcm2.png/200px-Chr_icon_1056_105601_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/6/6c/45f45jazey94cqmwk75xbqjz2togfhk.png","https://patchwiki.biligame.com/images/umamusume/1/1e/ovbtqgv4nt33xd1e8f2jr9stm2qqyeh.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/5/59/hse3g4eyc8eywnx0mdxeomm0cmnh8jz.png"],
    // 初始星级
           star:1,
    // 生日
            birthday:"5月22日",
     // 身高
            height:"158cm",
    // 体重
            weight:"今日因「凶」而微减",
    // 三围
            Measurements:["B84","W59","H83"],
     // 声优
            cv:"新田日和",
    // 简介
            Introduction:"福啊来吧！热爱占卜的福运祈愿少女。",
    // 属性面板
            propertiespanel:[106,111,121,111,101],
    // 角色别称
            rolecnname:["笑門来福","笑门来福","维持干劲在绝好调出战G2或G1赛事15次以上；在包含菊花賞的G2以上赛事中取得3连胜"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"你好，我叫待兼福来！相信着白兴大人的神启，等待着福到来的日子……无论日夜都努力占卜着！",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"占卜",
  noshanchang:"不吉利的东西"
    },
  {
  erduo:"偶尔用于占卜方位",
  weiba:"在占卜时尾巴会突然停住"
    },
  {
  xiema:"左右都是23.5cm"
    },
  {
   jiaren:"优秀的姐姐憧憬着作为妹妹的自己的开朗"
  }
  ]
        },
        {
  nicheng:"【Clear Bliss】",
  jpname:"ミスターシービー",
  cnname:"千明代表",
  id:100056,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/c/c2/6ckqexbqwx0g4q2wl8r0kje6s3vqr5y.png/200px-Chr_icon_1057_105701_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/a/a0/ltir0v2jq176oqs6frbp9md19t3em8l.png","https://patchwiki.biligame.com/images/umamusume/6/6a/8lqm6gh1wk0tf378956l5cn33pfnl50.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/7/79/miyqac27rp85z4ijjbvmi75pjloi8uu.png"],
   // 初始星级
           star:3,
    // 生日
            birthday:"4月7日",
     // 身高
            height:"166cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B84","W55","H80"],
     // 声优
            cv:"天海由梨奈",
    // 简介
            Introduction:"不受任何束缚！天衣无缝的爽朗赛马娘",
    // 属性面板
            propertiespanel:[123,105,113,102,107],
    // 角色别称
            rolecnname:["ターフの演出家","草场演奏家","使用追马战术在人气第一的情况下赢得皐月賞、日本达比、菊花赏、天皇赏春，其中菊花赏需要领先3个马身获胜，且粉丝达到32万以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"这世上有着只能在赛场上才能感受到的风哦。那风温柔、清澈……且无比自由。——我是千明代表。请多关照。",
  xuenian:"高等部",
  suoshusushe:"独居"
    },
  {
  shanchang:"创作短歌、自由旅行、打扑克",
  noshanchang:"对齐、谎言与欺骗"
    },
  {
  erduo:"可以用脚摸到自己的耳朵",
  weiba:"尾巴用的护理方式会随时间改变"
    },
  {
  xiema:"左右都是25.0cm"
    },
  {
   jiaren:"父母是在半私奔的状态下结婚的[1]"
  }
  ]
        },
        {
  nicheng:"【ブルー/レイジング】",
  jpname:"メイショウドトウ",
  cnname:"名将怒涛",
  id:100057,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/e/eb/fnpk915lxul0o6at3wvk2asm2o5ft42.png/200px-Chr_icon_1058_105801_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/2/22/6dllcgm717rwe9z3ukgxz85sb6rfput.png","https://patchwiki.biligame.com/images/umamusume/1/16/ssmwlyh8eluhvaj4dchopsxxi0r5v4k.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/9/9a/aicixjasc1fzq1sd8ut2mfkp83bbrr1.png"],
   // 初始星级
           star:3,
    // 生日
            birthday:"3月25日",
     // 身高
            height:"164cm",
    // 体重
            weight:"局部微增",
    // 三围
            Measurements:["B99","W61","H89"],
     // 声优
            cv:"和多田美咲",
    // 简介
            Introduction:"想要变得积极！消极但努力的人。",
    // 属性面板
            propertiespanel:[113,116,104,118,99],
    // 角色别称
            rolecnname:["不屈の挑戦者","不屈的挑战者","包含天皇賞（春）、宝塚記念、有馬記念在内的重赏(G1、G2和G3)9连胜以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我，我叫名将怒涛……~这个、那个，我、我想变得对自己有自信我会尽我所能，努李（力）……咬、咬到舌头了！",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"不放弃、演歌",
  noshanchang:"绕口令"
    },
  {
  erduo:"经常微微颤抖",
  weiba:"由于烦恼时习惯于摆弄尾巴，所以经常打结"
    },
  {
  xiema:"左右都是25.0cm"
    },
  {
   jiaren:"家人由于频繁调动工作所以擅长外语。作为女儿也当然不在话下。"
  }
  ]
        },
        {
  nicheng:"【ツイステッド・ライン】",
  jpname:"メジロドーベル",
  cnname:"目白多伯",
  id:100058,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/d/d5/99ni3yb0tiro2hflxez8jb017tmtv8b.png/200px-Chr_icon_1059_105901_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/c/c9/0kto3ogc331ejjcom490vkpi39deyb8.png","https://patchwiki.biligame.com/images/umamusume/3/39/orzevdr8tnmxmix16xojcywca4q2kzb.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/9/92/2t0z416spzbkcmw6i5mwczxn0c4iup0.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"5月6日",
     // 身高
            height:"157cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B83","W57","H81"],
     // 声优
            cv:"久保田光",
    // 简介
            Introduction:"很想改变！怀抱着过去的伤痕奔跑的大小姐。",
    // 属性面板
            propertiespanel:[117,104,119,92,118],
    // 角色别称
            rolecnname:["クールビューティー","高冷的美人","以差马策略且人气第一的状态下赢得阪神ジュベナイルフィリーズ、桜花賞、オークス、秋華賞；赢得エリザベス女王杯两连冠；粉丝数24万人以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"你好……那个，我是目白多伯。我也是目白家的赛马娘，正因如此要做到无愧于目白之名的奔跑……我是这么想的",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"精通红茶的品种",
  noshanchang:"男性、打雷"
    },
  {
  erduo:"一听到男性的声音就会愣住",
  weiba:"比起名牌更喜欢适合发质的产品"
    },
  {
  xiema:"左右都是22.0cm"
    },
  {
   jiaren:"因为被禁止叫她'多伯酱'，父亲甚是伤心"
  }
  ]
        },
        {
  nicheng:"【ポインセチア・リボン】",
  jpname:"ナイスネイチャ",
  cnname:"优秀素质",
  id:100059,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/7/75/1y2kxy3in8ohtwp74ryrawv48tdlyf0.png/200px-Chr_icon_1060_106001_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/c/c4/0vhcm62hh77pnam39coibrkadzwrua6.png","https://patchwiki.biligame.com/images/umamusume/f/f7/4wvns1jh3qam3lun9wh0b7b1v671jbp.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/d/d3/i57skn5faca8yqzjk0muxef08gegk0k.png"],
  // 初始星级
           star:1,
    // 生日
            birthday:"4月16日",
     // 身高
            height:"157cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B79","W56","H80"],
     // 声优
            cv:"前田佳织里",
    // 简介
            Introduction:"没有什么期待吗？害羞社恐的少女。",
    // 属性面板
            propertiespanel:[118,99,123,96,114],
    // 角色别称
            rolecnname:["愛しき名脇役","可爱的名配角","G1比赛中取得三次第三名(控分达人）；粉丝数达到32w以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"啊……我是优秀素质。啊哈哈，果然'优秀素质'这名字名过其实了吧……嘛，就一点一点的来吧？",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"乒乓球、寻找好吃的小吃",
  noshanchang:"社交媒体"
    },
  {
  erduo:"一听到'内恰酱'的称呼身体就会不自觉的起反应",
  weiba:"在夜里偷偷的梳理"
    },
  {
  xiema:"左右都是22.0cm"
    },
  {
   jiaren:"老家的小吃店内装饰着关于女儿的报道"
  }
  ]
        },
        {
  nicheng:"【キング・オブ・エメラルド】",
  jpname:"キングヘイロー",
  cnname:"帝王光辉",
  id:100060,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/5/56/jv77cwr30vbiwkuudui4f5097ievpep.png/200px-Chr_icon_1061_106101_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/e/e7/dcfkc7tcu51qtlpev3q72fvn2dedd8n.png","https://patchwiki.biligame.com/images/umamusume/1/1f/01wdyidrgjpau9uhfvlb6bbokwrx102.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/7/70/lh5efubj9t5f7xgf3vam5qnqqhd4hrg.png"],
    // 初始星级
           star:1,
    // 生日
            birthday:"4月28日",
     // 身高
            height:"159cm",
    // 体重
            weight:"完美",
    // 三围
            Measurements:["B85","W60","H85"],
     // 声优
            cv:"佐伯伊织",
    // 简介
            Introduction:"高傲的大小姐。自尊心比天空还高！",
    // 属性面板
            propertiespanel:[120,82,127,100,121],
    // 角色别称
            rolecnname:["世代のキング","世代之王","两只父辈继承马合计取得过G1胜利11次以上；战胜过特别周、青云天空、草上飞、神鹰各三次以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"哦——吼吼吼！我的名字是圣王光环。作为一流的赛马娘，我会在赛场上留下最棒的结果！……为了向全世界展现我的才能！",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"与设计或时尚相关的事情",
  noshanchang:"人山人海或酷热等不与王相称的事情"
    },
  {
  erduo:"除了一流的话题以外什么也不想听",
  weiba:"常常保持着一流的摇动尾巴的方式"
    },
  {
  xiema:"左右都是23.0cm"
    },
  {
   jiaren:"母亲在家务方面灾难性的不行，因此家中雇有佣人"
  }
  ]
        },
        {
  nicheng:"【ぱんぱかティルトット】",
  jpname:"マチカネタンホイザ",
  cnname:"待兼诗歌剧",
  id:100061,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/1/14/iu42g0zutj88ag33biseori7ojpy24b.png/200px-Chr_icon_1062_106201_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/9/92/rsrbzr0a864o60glnb9yc68v0lkenkf.png","https://patchwiki.biligame.com/images/umamusume/f/ff/f0e3c8pz2kn3srbn1g0jsm59mkz2zuy.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/7/7b/lmw26fjdrjfbvf1h38biwlsn5sck9rk.png"],
  // 初始星级
           star:2,
    // 生日
            birthday:"5月7日",
     // 身高
            height:"155cm",
    // 体重
            weight:"微增（吃多了）",
    // 三围
            Measurements:["B80","W55","H80"],
     // 声优
            cv:"远野光",
    // 简介
            Introduction:"备受期待的璞玉。今天也要大获全胜！",
    // 属性面板
            propertiespanel:[103,117,106,114,110],
    // 角色别称
            rolecnname:["大器晩成","大器晚成","参加12次以上GⅠ比赛；赢得包含菊花賞、有馬記念(第三年)在内，长度2500m以上的重赏比赛4场以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"呀吼！我是待兼诗歌剧哟！为了不输给努力的大家，我也得一鼓作气的努力练习……诶，今天是休息日！？",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"拔河、恋爱建议（本人表示）",
  noshanchang:"真正的蜘蛛、番茄汁"
    },
  {
  erduo:"即使周围很吵也可以不受影响",
  weiba:"如果自己修剪的话就会果断地斜剪一刀"
    },
  {
  xiema:"左24.5cm 右25.5cm"
    },
  {
   jiaren:"每次回老家的时候，老家的定食屋就会挂上欢迎的横幅"
  }
  ]
        },
        {
  nicheng:"【Line Breakthrough】",
  jpname:"メジロパーマー",
  cnname:"目白善信",
  id:100062,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/2/23/lel1cnsmadb3et3y95b07j4xyiyosls.png/200px-Chr_icon_1064_106401_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/9/9a/fjmwoef01x4hqb2jgydml4at2gx33fj.png","https://patchwiki.biligame.com/images/umamusume/3/35/7qpfmbtkukdr9w3reprxm2twd3umz2f.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/9/90/gejfkvgd7rcdjcoj8wns3upk2hoqi6k.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月21日",
     // 身高
            height:"160cm",
    // 体重
            weight:"微减",
    // 三围
            Measurements:["B84","W57","H86"],
     // 声优
            cv:"野口百合",
    // 简介
            Introduction:"放轻松点吧。值得信赖的乐观少女。",
    // 属性面板
            propertiespanel:[112,126,93,111,108],
    // 角色别称
            rolecnname:["波乱の逃げウマ娘","变化不定的逃马娘","以逃马策略且人气第四以下赢得（一场）GⅠ；以逃马策略赢得第三年的天皇賞（春）、宝塚記念、有馬記念；逃马适应性S以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是目白善信！你好吗~？嘛，有什么事的话随时都可以找我聊哦。不用太拘谨哟♪",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"高尔夫、挖洞",
  noshanchang:"障碍跑"
    },
  {
  erduo:"能够感受到风向和风的强度",
  weiba:"有时会用尾巴对别人的脚进行挠痒痒攻击"
    },
  {
  xiema:"左右都是24.0cm"
    },
  {
   jiaren:"虽然父亲是高尔夫的老师、但女儿已经开始超越自己了"
  }
  ]
        },
        {
  nicheng:"【Fun☆Fun☆ぱりない】",
  jpname:"ダイタクヘリオス",
  cnname:"大拓太阳神",
  id:100063,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/5/5b/tlicih76lx147birzj6nhsfbb2musg9.png/200px-Chr_icon_1065_106501_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/f/f6/f3b415sl9nig594qz5ku8r43jilzo0h.png","https://patchwiki.biligame.com/images/umamusume/e/ec/4ii7mvlpw4icr7omvtw0ephzq0568ck.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/3/39/8w9gpw88vp1jyuw8hpgov1179xeddk9.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"4月10日",
     // 身高
            height:"156cm",
    // 体重
            weight:"喂！",
    // 三围
            Measurements:["B82","W53","H85"],
     // 声优
            cv:"山根绮",
    // 简介
            Introduction:"嗨起来笑起来超级开心☆Everyday・Party People！",
    // 属性面板
            propertiespanel:[122,108,119,106,95],
    // 角色别称
            rolecnname:["爆アゲパリピウマ娘","兴致爆高派对咖马娘","赢得英里赛马杯，英里冠军杯二连霸，并所有比赛里的干劲为绝好调，力量数值达到1200以上完成育成"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"We——i！大拓太阳神哟！燃起来的比赛要冲击各位，所以史上第一的call拜托了☆",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"抽鬼牌巨强无比[1]、炒气氛High翻全场",
  noshanchang:"面对安静的场合想哭哭[2]、提起敬语就爆哭啦[3]"
    },
  {
  erduo:"晴天的时候动的可厉害了，笑死[4]",
  weiba:"和好姬友[5]一起拍用尾巴比心的照片真的超激动的[6]"
    },
  {
  xiema:"左右都是23.5cm"
    },
  {
   jiaren:"爸爸妈妈总是会被自己装死的样子骗到，笑死"
  }
  ]
        },
        {
  nicheng:"【爆走！ターボエンジン】",
  jpname:"ツインターボ",
  cnname:"双涡轮",
  id:100064,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/8/82/ikyhej9vn8dnv4ma9lpmgh1myp8av56.png/200px-Chr_icon_1066_106601_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/3/33/9h2m68cu5xyl8m3kin23rjxeg1inajx.png","https://patchwiki.biligame.com/images/umamusume/d/dd/5qvhmxw9nqsz6herns2ec7i8sbuplj0.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/b/b9/8qyeyo17snkr5tznmx64uwy1bnjcnzr.png"],
    // 初始星级
           star:1,
    // 生日
            birthday:"4月13日",
     // 身高
            height:"146cm",
    // 体重
            weight:"无法测量",
    // 三围
            Measurements:["B72","W51","H74"],
     // 声优
            cv:"花井美春",
    // 简介
            Introduction:"涡轮引擎全开！不知极限的暴走赛马娘！",
    // 属性面板
            propertiespanel:[137,98,107,119,89],
    // 角色别称
            rolecnname:["全力大逃げ娘","全力大逃马娘","使用大逃战术在有马纪念赛（第三年）中从200米开始领跑到最后，且速度达到1200以上yy"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是双涡轮哒！涡轮会拿下第一的，绝对会拿下的！要上了，涡轮引擎全——开！！",
  xuenian:"中等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"突破限制",
  noshanchang:"汉字"
    },
  {
  erduo:"越是陷入绝境，耳朵摇的越开心",
  weiba:"躁动不安的时候会蹭来蹭去"
    },
  {
  xiema:"左：20.0cm 右：19.5cm"
    },
  {
   jiaren:"父母认为体弱多病的女儿变得鲁莽是成长的标志"
  }
  ]
        },
        {
  nicheng:"【Natural Brilliance】",
  jpname:"サトノダイヤモンド",
  cnname:"里见光钻",
  id:100065,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/f/f4/cqx7dfpkzks9zxgdwvrfo3y2vyfghbo.png/200px-Chr_icon_1067_106701_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/8/83/5eftvt2erjar0ozman7f724m1dh6ze1.png","https://patchwiki.biligame.com/images/umamusume/d/d1/m1ox9zitlglucjqtxzjutmzz3v6jvyv.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/b/b4/ctfmoe84abtuqlv03x6941chcvsuv5z.png"],
   // 初始星级
           star:3,
    // 生日
            birthday:"1月30日",
     // 身高
            height:"158cm",
    // 体重
            weight:"没有增减呦？",
    // 三围
            Measurements:["B87","W54","H84"],
     // 声优
            cv:"立花日菜",
    // 简介
            Introduction:"内心是钻石级的意志！向厄运挑战的大小姐。",
    // 属性面板
            propertiespanel:[111,108,113,101,117],
    // 角色别称
            rolecnname:["願い叶える宝石","实现愿望的宝石","任一父辈马娘育成评价S以上；赢得菊花賞、天皇賞（春）、ジャパンカップ（第三年），有馬記念两连胜"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我的名字是里见光钻。这个世上从来没有天注定的命运。未来，会因为我的奔跑而闪耀！",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"不会忘记约定、夹娃娃机",
  noshanchang:"雨、在人群中行走"
    },
  {
  erduo:"耳朵上的毛发总是包裹着有透明感的光泽",
  weiba:"有着最棒的触感（评价・来自北部玄驹）"
    },
  {
  xiema:"左右都是21.0cm"
    },
  {
   jiaren:"父亲即是知名的绅士，也是赛马娘界里的慈善家"
  }
  ]
        },
        {
  nicheng:"【錦上・大判御輿】",
  jpname:"キタサンブラック",
  cnname:"北部玄驹",
  id:100066,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/a/ab/au2pzmlspa8gdfq9xqwqi1is73glrcg.png/200px-Chr_icon_1068_106801_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/c/c6/j3wjs0ifukqcy2q0iarosi57ew4m0oa.png","https://patchwiki.biligame.com/images/umamusume/f/fa/ptvbzuewe9z3zg0fbc1873saotmrr8d.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/2/2b/ihd2tbdli1t9d08sq2wgo5e8ysfavli.png"],
  // 初始星级
           star:3,
    // 生日
            birthday:"3月10日",
     // 身高
            height:"162cm",
    // 体重
            weight:"迅猛成长中！",
    // 三围
            Measurements:["B85","W56","H88"],
     // 声优
            cv:"矢野妃菜喜",
    // 简介
            Introduction:"照亮大家的心！开朗活泼的祭典少女!",
    // 属性面板
            propertiespanel:[119,122,97,105,107],
    // 角色别称
            rolecnname:["お祭り娘","祭典少女","赢得包含菊花賞、天皇賞（春）、宝塚記念、天皇賞（秋）(第三年)、有馬記念(第三年)在内的GⅠ比赛7场以上；粉丝数48w人以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是北部玄驹！以带来像祭典般能让观众们热情高涨的比赛为目标我会全力以赴的奔跑！",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"按摩",
  noshanchang:"视而不见"
    },
  {
  erduo:"耳朵的音感很好",
  weiba:"尾巴也能拎起重物"
    },
  {
  xiema:"左右都是23.0cm"
    },
  {
   jiaren:"父亲的弟子们也同吃同住，是个30人的大家庭"
  }
  ]
        },
        {
  nicheng:"【日下開山・花あかり】",
  jpname:"サクラチヨノオー",
  cnname:"樱花千代王",
  id:100067,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/7/7c/me6eusmfnphdlc051uq60fxuss75gqi.png/200px-Chr_icon_1069_106901_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/1/1f/dlzo0d96jkqp6hcz0mz41zl8ha03zu7.png","https://patchwiki.biligame.com/images/umamusume/c/c8/4rahudf6v12un97qcjbl7zxu0qepk16.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/0/07/48iakco8pmqi3qo9kujjzi37xmh7e3r.png"],
   // 初始星级
           star:3,
    // 生日
            birthday:"2月19日",
     // 身高
            height:"156cm",
    // 体重
            weight:"微减",
    // 三围
            Measurements:["B80","W55","H83"],
     // 声优
            cv:"野口瑠璃子",
    // 简介
            Introduction:"追寻憧憬！坦率的努力家马娘。",
    // 属性面板
            propertiespanel:[114,117,95,114,110],
    // 角色别称
            rolecnname:["花開くサクラ","盛开的樱花","育成中父母马中任一速度能力值1200以上，且赢得过朝日杯フューチュリティステークス；赢得朝日杯フューチュリティステークス、皐月賞、東京優駿（日本ダービー）、ジャパンカップ"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我、我叫樱花千代王！与憧憬的那个人一起，站在梦寐以求的舞台上这个梦想——我一定会将其实现！",
  xuenian:"高等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"制作和果子、整理整顿",
  noshanchang:"汽车和飞机（容易晕车/机）"
    },
  {
  erduo:"想到好的格言的话耳朵就会猛而立起",
  weiba:"使用着与丸善斯基同款的尾部护理油"
    },
  {
  xiema:"左右都是22.0cm"
    },
  {
   jiaren:"经常选择能够围在一起吃的锅料理作为晚饭"
  }
  ]
        },
        {
  nicheng:"【クリノクロア・ライン】",
  jpname:"メジロアルダン",
  cnname:"目白阿尔丹",
  id:100068,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/a/ac/7h6g69j2vtm5iokx5kuheatyykwdq69.png/200px-Chr_icon_1071_107101_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/f/ff/oil204zyw3c0zbmpbfj3mwzt884k29x.png","https://patchwiki.biligame.com/images/umamusume/e/e2/4xooloyushm4e8672l38l1r8gufh6r2.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/8/88/gjvzc2tx0gwlbb3jagh3scg0u43c1kk.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月28日",
     // 身高
            height:"162cm",
    // 体重
            weight:"秘密♪",
    // 三围
            Measurements:["B87","W56","H85"],
     // 声优
            cv:"会泽纱弥",
    // 简介
            Introduction:"即使身体虚弱也要坚强地绽放光芒。天生一双玻璃脚的闺秀。",
    // 属性面板
            propertiespanel:[114,117,95,114,110],
    // 角色别称
            rolecnname:["割れないガラス","不碎的玻璃","東京優駿（日本ダービー）夺冠、天皇賞（秋）二连冠；所有参加的比赛都以干劲绝好调完成；所有训练没有一次失败且完成育成"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我的名字是目白阿尔丹。即使这双脚脆弱不堪，我也要骄傲地奔跑下去......哪怕只有一瞬也好，我也想在比赛中大放光彩。",
  xuenian:"高等部",
  suoshusushe:"美浦寮"
    },
  {
  shanchang:"漂亮地缠紧绷带",
  noshanchang:"争吵、纠纷、樱桃"
    },
  {
  erduo:"倘若听到玻璃碎裂的声音就会堵住耳朵",
  weiba:"喜欢使用特别订购的有机营养护理液来护理尾巴"
    },
  {
  xiema:"左右都是22.5cm"
    },
  {
   jiaren:"其母亲想把女儿在学校里的朋友都请到家里做客"
  }
  ]
        },
        {
  nicheng:"【四白流星の襲】",
  jpname:"ヤエノムテキ",
  cnname:"八重无敌",
  id:100069,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/5/5b/q5din7qegraqkzpeqok6n1ftxg4tuqs.png/200px-Chr_icon_1072_107201_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/5/53/rjpuq5sa7ifqowu4401pbhfy5chzli6.png","https://patchwiki.biligame.com/images/umamusume/8/84/m0fwoty7za8bm43sqk1t5o0loml5zrd.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/0/0c/ms63c54vyoorzhaaiir3j7du9eh0rdw.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"4月11日",
     // 身高
            height:"159cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B78","W54","H81"],
     // 声优
            cv:"日原步美",
    // 简介
            Introduction:"以武成礼、奔跑。粗犷的赛马娘。",
    // 属性面板
            propertiespanel:[113,99,119,119,100],
    // 角色别称
            rolecnname:["剛毅果断","刚毅果断","草地GⅠ级比赛未取得胜利的条件下，赢得皐月賞；赢得大阪杯（第三年），安田記念、宝塚記念和有馬記念；基础能力力量数值1200以上 "],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是八重无敌。作为金刚八重垣流的弟子，我渴望与强者对决的比赛。来吧，堂堂正正的，决胜负！",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"裁缝、用抹布打扫",
  noshanchang:"正坐、自己买零食吃"
    },
  {
  erduo:"听到可爱的声音的话耳朵就会微微泛红",
  weiba:"强韧到能够将飞过来的物体击落"
    },
  {
  xiema:"左右都是24.0cm"
    },
  {
   jiaren:"回老家时一定会给祖父锤肩"
  }
  ]
        },
        {
  nicheng:"【ブリュニサージュ・ライン】",
  jpname:"メジロブライト",
  cnname:"目白光明",
  id:100070,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/3/3d/s983wgl7q0cclfuqhbmrtnou8y9ckye.png/200px-Chr_icon_1074_107401_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/1/13/n192rveii6yt7bmxkql1tej3cpgdig9.png","https://patchwiki.biligame.com/images/umamusume/f/f9/6f7kj5wtpsu43kdj79t7ktjl039v2qw.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/8/8e/ivoyx1mp4yn04todp31pjb0zoyo8hbs.png"],
  // 初始星级
           star:3,
    // 生日
            birthday:"4月19日",
     // 身高
            height:"157cm",
    // 体重
            weight:"微增（嘛，吃多了~）",
    // 三围
            Measurements:["B84","W59","H81"],
     // 声优
            cv:"大西绮华",
    // 简介
            Introduction:"意志坚定，步伐放缓！悠闲的大小姐。",
    // 属性面板
            propertiespanel:[109,130,106,92,113],
    // 角色别称
            rolecnname:["のんびりステイヤー","绰有余力的Stayer","任一父辈马娘具有目白冠名赢得包括天皇賞（春）在内的3000米以上G1或G2比赛4场以上；粉丝数达到240000以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"………嘛啊？到了自我介绍的时间了吗？呼呼，我的名字是目白光明。作为目白家的一员，我会努力的。",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"制作玩偶的服装",
  noshanchang:"在融化之前吃完冰淇淋"
    },
  {
  erduo:"一被掏耳朵的话，就会很快地睡着",
  weiba:"坐着的时候即使尾巴被垫在屁股下面也不在意"
    },
  {
  xiema:"左右都是23.0cm"
    },
  {
   jiaren:"到回乡季[2]时家族成员就会全体出动来接自己"
  }
  ]
        },
        {
  nicheng:"【Saisir le rêve】",
  jpname:"サクラローレル",
  cnname:"樱花桂冠",
  id:100071,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/b/be/1n0v2xgds56s8241vncpub97lybcaj6.png/200px-Chr_icon_1076_107601_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/3/35/d2ti0mau55l7wqr7zoq0l5b2b3mxin9.png","https://patchwiki.biligame.com/images/umamusume/7/7e/5q7zvk5ghatlmobz39m3t7cwmqlen0k.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/c/c5/82n64rd9yztc8w4jk2ofhtlhwf1o48r.png"],
  // 初始星级
           star:3,
    // 生日
            birthday:"5月8日",
     // 身高
            height:"162cm",
    // 体重
            weight:"很理想",
    // 三围
            Measurements:["B78","W54","H80"],
     // 声优
            cv:"真野美月",
    // 简介
            Introduction:"沉稳而不屈。越过深冬而满绽的残樱",
    // 属性面板
            propertiespanel:[101,123,106,120,100],
    // 角色别称
            rolecnname:["大輪の遅咲き桜","晚熟的大朵樱花","天皇賞（春）中以2又1/2马身以上的差距取胜;有馬記念（第三年）获胜;基础能力耐力达到1200以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是樱花桂冠。目标是、踏上世界的舞台也就是凯旋门赏！——呵呵，虽然现在还仅仅只是梦想……不过总有一天会实现的。",
  xuenian:"高等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"像吃小碗荞麦面一样吃沙拉",
  noshanchang:"飞机起飞时的瞬间（除此之外都没问题）"
    },
  {
  erduo:"一听到喇叭的声音就会不自觉地挺起腰板",
  weiba:"和母亲的发质一样，摸起来非常柔软"
    },
  {
  xiema:"左右都是23.0cm"
    },
  {
   jiaren:"煎蛋饼和格雷派饼的做法是从父亲亲自研究的菜谱中学到的"
  }
  ]
        },
        {
  nicheng:"【Fluttertail Spirit】",
  jpname:"ヤマニンゼファー",
  cnname:"也文摄辉",
  id:100072,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/1/14/r4oe6dz6w03wwey738ocgr376vnq3uw.png/200px-Chr_icon_1078_107801_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/f/f5/m74wvllty7rhzzu3n9xnuqai6kgd3vx.png","https://patchwiki.biligame.com/images/umamusume/f/f5/9owkto9dgfxuj4ld5dx5k4p8thw3ep1.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/a/a6/2lr706sn4u2j9omcej5mclj63vgm2qe.png"],
  // 初始星级
           star:3,
    // 生日
            birthday:"5月27日",
     // 身高
            height:"154cm",
    // 体重
            weight:"轻盈",
    // 三围
            Measurements:["B85","W52","H77"],
     // 声优
            cv:"今泉梨央奈",
    // 简介
            Introduction:"自然派微风系赛马娘。然其灵魂如同烈风。",
    // 属性面板
            propertiespanel:[119,101,99,118,113],
    // 角色别称
            rolecnname:["風の化身","风的化身","安田記念二连胜、赢得スプリンターズステークス、天皇賞（秋）（第二年）基础能力速度”1200以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"……我是也文摄辉。我所追求的，是风……比一切都要更快的风，自由地奔驰——想要，化作风。",
  xuenian:"中等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"舌奏、放风筝、即兴歌舞",
  noshanchang:"吹空调"
    },
  {
  erduo:"蝴蝶和小鸟们栖息的地方",
  weiba:"自然干燥派"
    },
  {
  xiema:"左右都是22.0cm"
    },
  {
   jiaren:"老家作为住着妖精的神奇家庭而出名"
  }
  ]
        },
        {
  nicheng:"【Onyx Soldier】",
  jpname:"シンボリクリスエス",
  cnname:"吉兆",
  id:100073,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/1/14/4xm4ww9jk385x0qtjhzpm7fh6iyyphl.png/200px-Chr_icon_1083_108301_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/8/86/ox259k2q4a8omozvhc8phif689keh3e.png","https://patchwiki.biligame.com/images/umamusume/8/87/0j4kdsuqxcxo4w975xwup4ujyv3guuu.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/4/44/o15izavm1muyntlrl2g6too6t4d08qe.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"1月21日",
     // 身高
            height:"170cm",
    // 体重
            weight:"出色",
    // 三围
            Measurements:["B91","W58","H88"],
     // 声优
            cv:"春川芽生",
    // 简介
            Introduction:"出生于海外的，沉默寡言的任务执行者",
    // 属性面板
            propertiespanel:[104,117,125,102,102],
    // 角色别称
            rolecnname:["漆黒の帝王","漆黑的帝王","天皇賞（秋）获胜、有馬記念二连霸，其中有馬記念（第三年）以9马身以上的差距获胜；基础能力力量达到1200以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"——我是吉兆。象征家对我有恩。作为其中的一员，对于所揭示的目标以及被赋予的Mission——只需执行便是。",
  xuenian:"高等部",
  suoshusushe:"美浦宿舍"
    },
  {
  shanchang:"制作蛋白饮料",
  noshanchang:"光脚"
    },
  {
  erduo:"会盯着耳朵和自己长得很像的马娘",
  weiba:"用专用的洗发水刷刷地洗"
    },
  {
  xiema:"左右都是27.5cm"
    },
  {
   jiaren:"全家起床后都会喝黑咖啡"
  }
  ]
        },
        {
  nicheng:"【身に纏うケラヴノス】",
  jpname:"タニノギムレット",
  cnname:"谷水琴蕾",
  id:100074,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/b/b0/8dj1skmxiu5i8hj87k2wix2s4c2pgf5.png/200px-Chr_icon_1084_108401_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/e/e3/q4yihkxodyjbpeyuwem53rb1lgzw597.png","https://patchwiki.biligame.com/images/umamusume/0/0f/jijrnr9k2gbytp2vrh8y6xy5krky6uu.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/f/fc/9sercgtf40a1jxtfwfq5xv5h3wnztiv.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"5月4日",
     // 身高
            height:"166cm",
    // 体重
            weight:"パーフェクト",
    // 三围
            Measurements:["B77","W56","H79"],
     // 声优
            cv:"松冈美里",
    // 简介
            Introduction:"可不要被这种美学迷倒了！最强的耽美系破坏神",
    // 属性面板
            propertiespanel:[121,101,125,100,103],
    // 角色别称
            rolecnname:["耽美系破壊神","唯美系破坏神","使用追马策略且无败；赢得比赛皐月賞、NHKマイルC、日本ダービー；基础能力力量达到1200以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我叫谷野美酒！所追求的是理想中的我。我可没打算欺骗潜藏于心中的自己。破坏吧、踢毁吧——然后前进吧，向着那终焉！",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"神话、哲学、Vu行[1]的发音、业余木工",
  noshanchang:"预定調和[2]、半熟蛋、苹果"
    },
  {
  erduo:"能够讴歌我的只有我——（※容易无视采访团）",
  weiba:"反抗着概念——（※即使是尾巴也想要破坏栅栏）"
    },
  {
  xiema:"左24.5cm 右24.0cm"
    },
  {
   jiaren:"家里的门牌是用损坏的栅栏做成的（由母亲亲手制作）"
  }
  ]
        },
        {
  nicheng:"【華麗なる紅玉】",
  jpname:"ダイイチルビー",
  cnname:"第一红宝石",
  id:100075,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/2/25/2yu11t47hkyi7mbwb0tsof6qzq2y6yp.png/200px-Chr_icon_1085_108501_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/0/0c/rz4bbmw2ewyxoc8ax0s8lq86fsa5z9x.png","https://patchwiki.biligame.com/images/umamusume/b/bd/j2cl0d7n1re4ssj3z7wlvg7rav5ofjt.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/a/ad/jmqnstaupi2nfivvqpqf5di4xgse62l.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"4月15日",
     // 身高
            height:"141cm",
    // 体重
            weight:"华丽地维持着",
    // 三围
            Measurements:["B77","W53","H76"],
     // 声优
            cv:"礒部花凛",
    // 简介
            Introduction:"必定会胜利。华丽一族的赛马娘",
    // 属性面板
            propertiespanel:[121,82,132,101,114],
    // 角色别称
            rolecnname:["華麗なる令嬢","华丽的千金","继承曾赢得樱花赏、伊丽莎白二世女皇杯的马娘的意志，赢得安田纪念（第三年）和短途马锦标（第三年）"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是第一红宝石。成为至高无上的马娘，是我们家族的责任所在。我将努力履行属于我的这份责任。",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"操作钢笔、下国际象棋",
  noshanchang:"下雨天、不合身的衣服"
    },
  {
  erduo:"在听到音乐的时候会仔细倾听",
  weiba:"尾巴的末端自然地卷成高贵的形状"
    },
  {
  xiema:"左：19.0cm 右：18.5cm"
    },
  {
   jiaren:"家中挂着母亲和祖母家族的照片"
  }
  ]
        },
        {
  nicheng:"【Flare】",
  jpname:"アストンマーチャン",
  cnname:"真弓快车",
  id:100076,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/2/2c/7tcezf5gjotfmw2hw92bc0dtvyw6vou.png/200px-Chr_icon_1087_108701_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/5/5e/tw6t7sura7bu2axgdfyp4tknol0sk2f.png","https://patchwiki.biligame.com/images/umamusume/1/15/o2tkwbj704m667cvmxtfn7tx0k5v5pk.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/4/49/tf8026c7y1bpcl5bqmqyoiy3ifyvkwn.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月5日",
     // 身高
            height:"152cm",
    // 体重
            weight:"○根胡萝卜的重量",
    // 三围
            Measurements:["B86","W55","H80"],
     // 声优
            cv:"井上穗乃花",
    // 简介
            Introduction:"目标是吉祥物。有着这样不可思议的梦想。",
    // 属性面板
            propertiespanel:[121,89,118,120,102],
    // 角色别称
            rolecnname:["不滅のマーちゃん","不灭的小真","赢得スプリンターズステークス，分别战胜大和赤骥、伏特加2次以上，粉丝数达到320000以上，达成所有育成目标完成育成"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是小真。真弓快车。总有一天我会成为世界的吉祥物。请用你的那双眼一直看着我吧",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"生物观察、缝衣服",
  noshanchang:"吹口哨"
    },
  {
  erduo:"经常弄丢耳环，现在戴着的是第九只",
  weiba:"正摸索着在自己商品化时能让尾巴更加漂亮的打理方法"
    },
  {
  xiema:"左右都是22.0cm"
    },
  {
   jiaren:"自己负责把睡在沙发上的母亲搬到床上去"
  }
  ]
        },
        {
  nicheng:"【陰陽八卦☆開運衣】",
  jpname:"コパノリッキー",
  cnname:"小林历奇",
  id:100077,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/c/c1/cubqidbgc4hml4tfob74vibwdrirmtl.png/200px-Chr_icon_1098_109801_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/5/50/h8thhsir5kyem6ro5llt1taeft2gszc.png","https://patchwiki.biligame.com/images/umamusume/4/42/3wrq43yqokb4v5ybsrnuwyeo1raq4t0.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/6/6a/8ghmekvla8s4gctkpfu2j60ozyeq14p.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月24日",
     // 身高
            height:"165cm",
    // 体重
            weight:"秘密☆",
    // 三围
            Measurements:["B83","W55","H87"],
     // 声优
            cv:"稻垣好",
    // 简介
            Introduction:"历奇☆幸运☆好管闲事系・风水少女☆",
    // 属性面板
            propertiespanel:[114,107,113,106,110],
    // 角色别称
            rolecnname:["勝利を呼ぶ縁起者","胜利的幸运符","泥地GⅠ比赛11胜以上；参加的全部比赛中干劲都为绝好调；完成育成"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"Rickey☆Lucky☆大吉祥☆这里是小林历奇！借助风水之力我也会给你带来幸福♪",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"扫除、断舍离、植物护理",
  noshanchang:"尘土飞扬的地方"
    },
  {
  erduo:"两只耳朵上的耳罩都是爸爸手工制作的",
  weiba:"会向当天的吉方向轻轻拍动"
    },
  {
  xiema:"左右都是25.0cm"
    },
  {
   jiaren:"有很多兄弟姐妹，所以家里很热闹☆"
  }
  ]
        },
        {
  nicheng:"【スター・ライト・シップ】",
  jpname:"ホッコータルマエ",
  cnname:"北港火山",
  id:100078,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/b/bb/99cqj8522z6pxeuuyqykdrozgnmocsp.png/200px-Chr_icon_1099_109901_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/7/7a/f1lemstjtdof7q0ujczai9hsczv95z6.png","https://patchwiki.biligame.com/images/umamusume/b/b0/bt0wmnoly6e82cihiwwkhmfkomxde8p.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/b/bb/ptg70yxu15zgpf50f9le7cv96zfqf31.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"5月26日",
     // 身高
            height:"162cm",
    // 体重
            weight:"无增减",
    // 三围
            Measurements:["B86","W56","H85"],
     // 声优
            cv:"菊池纱矢香",
    // 简介
            Introduction:"背负着苫小牧之名奔跑着现实主义的地方偶像",
    // 属性面板
            propertiespanel:[111,118,97,105,119],
    // 角色别称
            rolecnname:["苫小牧の星","苫小牧之星","泥地GⅠ比赛10胜以上，粉丝数达到320","000人以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"从北港翱翔而来、洁白的纸翼候鸟♪苫小牧地方偶像、北港火山哒呗！……嗯，脑袋再稍微歪一些的话会比较好吧？",
  xuenian:"中等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"苫小牧知识问答、爬山",
  noshanchang:"依靠运气、坐船"
    },
  {
  erduo:"绝对不会忘记戴耳罩",
  weiba:"进入地方偶像模式时尾巴会动的更厉害"
    },
  {
  xiema:"左右都是24.5cm"
    },
  {
   jiaren:"寄钱的时候一定会放入苫小牧特产的糖果"
  }
  ]
        },
        {
  nicheng:"【Butterfly Sting】",
  jpname:"ワンダーアキュート",
  cnname:"奇锐骏",
  id:100079,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/1/12/6kkenjdmgix43noamdz1vzcmkdcyf85.png/200px-Chr_icon_1100_110001_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/1/1b/i37brtr8kom87ym3jue5lqglwibfmdf.png","https://patchwiki.biligame.com/images/umamusume/d/d6/tctkt3fhfuryw688ckjgkpfkmkbcosq.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/d/de/lu7gqx2eahsy7hmyu2bhjaphbwoeonr.png"],
   // 初始星级
           star:3,
    // 生日
            birthday:"3月14日",
     // 身高
            height:"159cm",
    // 体重
            weight:"不稳定",
    // 三围
            Measurements:["B75","W52","H78"],
     // 声优
            cv:"须藤叶希",
    // 简介
            Introduction:"悠然自得且耐心十足。永不放弃，铁骨不屈的赛马娘。",
    // 属性面板
            propertiespanel:[102,100,103,123,122],
    // 角色别称
            rolecnname:["堅忍不抜のいぶし銀","坚韧不拔的熏银","赢得東京大賞典（第二年）、かしわ記念；帝王賞、JBCクラシック；基础能力根性1200以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"我是奇锐骏哟。虽然看起来有点散漫，但其实很擅长脚踏实地地做事呢。多关照了吶",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"串珠、白萝卜花刀",
  noshanchang:"流行的外来语、高科技机器"
    },
  {
  erduo:"对锣声反应很灵敏",
  weiba:"快被碰到的时候会华丽的躲开"
    },
  {
  xiema:"左右都是24.5cm"
    },
  {
   jiaren:"母亲是家中最放松的人"
  }
  ]
        },
        {
  nicheng:"【Universe-Naut】",
  jpname:"ネオユニヴァース",
  cnname:"新宇宙",
  id:100080,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/e/e8/906duo40f95i0awsj2dt3g497a9afft.png/200px-Chr_icon_1105_110501_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/7/7b/ibceich4ku7gim7hs2uddxu0ajq0kdg.png","https://patchwiki.biligame.com/images/umamusume/9/94/0jozfu70o17gc6ad4bfd1h2b7u4aeso.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/4/40/thf7ocj8astyodyt992i49wwu7l96pb.png"],
   // 初始星级
           star:3,
    // 生日
            birthday:"5月21日",
     // 身高
            height:"160cm",
    // 体重
            weight:"如宇宙般神秘",
    // 三围
            Measurements:["B79","W52","H77"],
     // 声优
            cv:"白石晴香",
    // 简介
            Introduction:"有点不可思议？非常不可思议？宇宙的赛马娘",
    // 属性面板
            propertiespanel:[112,102,113,96,127],
    // 角色别称
            rolecnname:["コズミックヴァース","宇宙诗篇","比赛 皐月賞、日本ダービー、宝塚記念（第二年）、菊花賞、ジャパンC（第二年）、大阪杯、天皇賞（春）获胜；基础能力“智力”达到1200以上"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"新宇宙我，向你提出友好的“接触”方案。换言之——『请多指教』",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"天气预报、落下型益智游戏[1]",
  noshanchang:"『普通』的对话、芥末"
    },
  {
  erduo:"保持着最适合接收“信号”的抛物线幅度",
  weiba:"状态不好的时候似乎尾巴就会变成“尘埃彗尾[2]”的样子"
    },
  {
  xiema:"左右都是23.5cm"
    },
  {
   jiaren:"和爸爸对话时大概有54%的概率能把意思传达到"
  }
  ]
        },
        {
  nicheng:"【みらくるめーくあっぷ！】",
  jpname:"ヒシミラクル",
  cnname:"菱钻奇宝",
  id:100081,
  // 头像图
  avatar:"https://patchwiki.biligame.com/images/umamusume/thumb/b/be/nl0bo9ahk4o0x8mfzyhqjayeiga4wv8.png/200px-Chr_icon_1106_110601_01.png",
  // sd小人模型
  sdimg:["https://patchwiki.biligame.com/images/umamusume/6/60/rhf3hhyj18xu7weofrr13w8eeywcq78.png","https://patchwiki.biligame.com/images/umamusume/e/e1/muisg6hhscra0coag6mqnqhykcrn3nv.png"],
  // 全身图
  fullbodyimg:["https://patchwiki.biligame.com/images/umamusume/c/c4/6ww302apcyd0k8dibz6xe5qmovkf956.png"],
    // 初始星级
           star:3,
    // 生日
            birthday:"3月31日",
     // 身高
            height:"156cm",
    // 体重
            weight:"普通",
    // 三围
            Measurements:["B85","W62","H88"],
     // 声优
            cv:"春日樱",
    // 简介
            Introduction:"悠悠闲闲的赛马娘。今天也是～和平常一样运转",
    // 属性面板
            propertiespanel:[110,116,113,107,104],
    // 角色别称
            rolecnname:["のんびり癒しウマ娘","悠闲舒适的治愈系马娘","菊花賞、天皇賞（春）、宝塚記念（第三年）获胜；休息7回以上；没有得到过状态「夜ふかし気味」的情况下完成育成"],
  //角色档案
  characterprofile:[
  {
  ziwojieshao:"是，我是菱钻奇宝。总觉得？要是自己能好好地努力，什么的就好了啊，请多指教～",
  xuenian:"高等部",
  suoshusushe:"栗东宿舍"
    },
  {
  shanchang:"寻找森林浴的地点、在课堂上不被点名",
  noshanchang:"游泳…………"
    },
  {
  erduo:"醒来后需要一段时间才能立起来",
  weiba:"要不给尾巴染个发吧…有过这样的想法"
    },
  {
  xiema:"左右都是22.0cm"
    },
  {
   jiaren:"向学园提交入学申请表的想法反而被父母抢先说出来了"
  }
  ]
        }
      ]
    },
     zhiyuan:{
    sudu:[
  
{
    id:1001,
    cnname:"飞向宏图大志",
    jpname:"大望は飛んでいく",
    img:"https://patchwiki.biligame.com/images/umamusume/5/56/i09z082u3nqj8874t1xfgm1yioych52.png",
    gushi:"抬头望去，头顶上的天空万里无云。虽然脚底所踏的地面十分沉重，但这些无关紧要。我想在今天这个地方，在天空翱翔。站上起跑线，心情自然而然地平静了下来。我回忆着。来到这里的种种。那些让我站在这里的人们……。——只为了那唯一的荣冠而前进。这份梦想已经不光是我一个人的了。我想站在任何人的前方。谁也追不上的地方。朝着未曾有人到达过的高峰迈进——今天在此时此地，试着展翅翱翔。"
},

{
    id:1002,
    cnname:"Seaside Bloom",
    jpname:"Seaside Bloom",
    img:"https://patchwiki.biligame.com/images/umamusume/9/91/754lxd6fonitym4drv5azhzv6lo7zr7.png",
    gushi:"啊啊，辛苦了。有好好享受吗？……我吗？呵，如你所见。说实话我也没想到，自己能放得这么开。遇见不曾知晓的自己。遇见无可替代的某人。这种奇迹般的事或许只有在『这个季节』，才能简单地发生吧。对了，差点忘了干杯呢。为了这个季节……这份相遇，干杯。"
},

{
    id:1003,
    cnname:"就像海鸥一样",
    jpname:"カモメのように",
    img:"https://patchwiki.biligame.com/images/umamusume/c/cf/3fp5vuy8ipic3f6bs39493f07uag9rl.png",
    gushi:"嘛，是去海边的照片！一起去乘了滑翔伞呢。看起来真是好开心哇。对对！大海是透明的而且从空中看到的鱼儿们也漂亮地仿佛宝石一样呢！海豚也仿佛要碰到滑翔机一样高高地跃起呢！太阳神大吵大闹地，把海鸥都引来了撒。唔呼呼，话说回来……你看起来真是非常开心呢，善信。天真无邪地，仿佛是忘了重力飞舞的海鸥一样自由自在的笑容……。啊哈哈……嗯，拿出勇气飞上天空的话自由也仿佛逐渐展开了。哼哼，话说回来这张照片，到底是怎么拍下来的？太阳神被海鸥偷走了手机呀～不过太阳神不是跟谁都能搞好关系嘛？最后让海鸥把手机还回来啦～然后就拍了很多这种照片在里面。她们到底是什么人！？不管是海鸥还是太阳神小姐……！？"
},

{
    id:1004,
    cnname:"The frontier",
    jpname:"The frontier",
    img:"https://patchwiki.biligame.com/images/umamusume/5/5b/6bxqjtd5aivbwhwhjg6397zpwz985dn.png",
    gushi:"（哇啊啊啊啊啊啊ーー！！）仿佛足以驱散今天的阴霾的欢呼声，倾泻在了她的身上――那并不是想雨那样温柔的东西，这会场的激情全部化为了声音，仿佛要殴打站在草地上的她一样。这和以往的比赛有些许不同，是像斗争一样狂热激烈的比赛。一直追求着最强，一直追逐着憧憬的森林宝穴证明了自己。能得到最强称号的，是一直站到最后的人――「唔噢噢噢噢噢ーーー！！」她一边沐浴着喝彩声，一边仿佛要撕裂天空一般的大喊着。（哇啊啊啊啊啊ーーーーー！！！！）欢呼声，还没有停止。撬开了新时代大门的她所创造的比赛过于强烈地吸引住了人们的心――"
},
{
    id:1005,
    cnname:"比翼的华尔兹",
    jpname:"比翼のワルツ",
    img:"https://patchwiki.biligame.com/images/umamusume/0/0b/aw3ml2jsjkju907fbu7q1mxmu9mmfmc.png",
    gushi:"行云流水般的舞步。如此纤细……优雅……。但是、我是知道的。你那独占了欢呼声的柔韧的双脚、可不会就满足于此。「麦昆、不错啊！对手们投来的视线很热烈哦～！哼哼、Best Date非我们莫属啊！」「就已经那么兴奋了呢。你的拍子变快了哦」「因为啊、这样下去的话——」「“不可能”拿不下Best Date。你想这么说对吧？」「嘿嘿、就是这样！所以我们不朝着更高的目标前进可不行啊！好啦、可要跟上哦……！」呼吸的节奏都形同一体、柔美、优雅。宛如在天空飞舞的翅膀一般。不过——「——还不够。我心中也有着骄傲……有着那必须作为目标的顶点。要再进一步、踏上更高峰了哦……！」「啊哈哈！　这才像是麦昆——这样才是我的舞伴啊！一起证明吧！　我们二人可是“史上最棒的Date”啊！」"
},
{
    id:1006,
    cnname:"挂起吧，高燃的灯火",
    jpname:"掲げよ、燃え盛る灯を",
    img:"https://patchwiki.biligame.com/images/umamusume/e/e7/rfucczru5w6i71or4vajsr73ty9zu9v.png",
    gushi:"很多人都会这么说。「那么高的墙壁怎么可能越的过去」「总有一天会有人帮我们越过去的」「肯定，总有一天，会有谁来……」但是――不是那么回事的吧？如果谁都不来做的话就用自己的脚来前进！把那些害怕的、想放弃的心情，全部置于脑后就好了！即使如此也无法向前迈进的时候――就看向我吧！　让我来继续！道路由我来开拓！这才是，赛马娘们的王牌！葛城王牌啊！！"
},

{
    id:1007,
    cnname:"Marvelous☆巧克力SHOW",
    jpname:"マーベラス☆ショコラSHOW",
    img:"https://patchwiki.biligame.com/images/umamusume/a/ab/llkh75t6drjbkvtk32fvzk5c9z0256e.png",
    gushi:"～Marvelous☆Chocolate～到底会出现什么呢敬请期待☆让你也变成Marvelous一样的气氛哦★「哎，我还是第一次尝到这种枫叶形状的巧克力！　感觉可能很像枫糖浆一样。像花蜜一样甜美美味呢……！」「这、这个还原了跑车样子的巧克力看起来很厉害但是吃起来有点……。不、怎么回事这独特的口感。特别是这个后视镜，简直是极品！」「呼、呼哦哦哦哦哦！　这个天鹅湖造型的巧克力，丑小鸭的悲伤简直都流进嘴里来了！？　简直就像是在吞噬艺术本身一样！」啊哈哈哈哈☆　是不是很不可思议，奇怪的巧克力们也是不尝一下的话可不知道到底好不好吃呢★简直就像是人生一样！尝试之前完全不知道，到底会发生些什么，正是因为不知道所以Marvelous☆撒，尽情享用Marvelous吧★"
},

{
    id:1008,
    cnname:"万分感激",
    jpname:"Danke schön",
    img:"https://patchwiki.biligame.com/images/umamusume/5/53/ffr9nnleugwekhm6cwodi73ee7fyizz.png",
    gushi:"1、2、345、67、8、910……。节拍器一旦紊乱，就无法完成它的使命。流逝，流逝——时间毫无例外地流逝。那份美丽是我的向导。用耳朵倾听，保持平衡。然而——123、4、567、89、10……。我却没有纠正紊乱的节拍器，而是保持这样直接把它塞进了忘却的盒子里。感动、昔日、喜悦、乡愁、羡慕、泪水、执念、萦绕……！他们现在，正向着我蜂拥而来！就像不正常工作的铁皮玩具一样，无法压制住跳动的节奏！「Danke！　Danke！……Danke！！」只剩下了欢喜的漩涡……Danke！　现在只能寻到此物了！"
},

{
    id:1009,
    cnname:"U & Me",
    jpname:"U & Me",
    img:"https://patchwiki.biligame.com/images/umamusume/e/e8/lx9grwxofq9x6e1wbm0ur6bm424o9a5.png",
    gushi:"粉丝感谢企划的邀请函感谢您一直以来，对赛马娘的应援。我是作为执行委员的美浦波旁。我们只是，一心一意地以终点为目标走到了现在。但是——无论是被梦见的景色吸引住的时候还是被仿佛不可逾越的高墙折磨得仿佛心都要碎的时候我们都，不曾是一个人。你的声援，就存在于那里。当我们每次听到的时候、都能站起来重绘新的梦想。大家留下的蹄痕，也马上就要到第二弯道前了。用比赛来比喻的话，就是做完了准备活动……把积蓄的力量注入双脚中，跑出去的时候。因此，虽然是很微不足道的包含着我们平日的感谢和今后奋起的决心实行粉丝感谢企划。请一定，要踊跃参加。从今以后，我们也会继续走下去。无可替代，与你同在。「……好！　就这种感觉怎么样？」「好厉害……不仅保持了原有内容，还把文章中生硬的部分消除了……！」「我也同意铃鹿说的。如果有这份邀请函的话，预计粉丝们也可以轻松愉快地来参加了。也就是说……『非常棒』呢」「哎嘿嘿～！　但是呢，我觉得正因为波旁你的那份思念，我才能在原来那篇文章的基础上改成现在这样哦♪只剩下，开心的等待那天到来了呢☆」「是的。……那一天是……『盼望已久』的吧」"
},

{
    id:1010,
    cnname:"夜风中飞舞的祈祷之花",
    jpname:"夜風に舞うは祈りの花",
    img:"https://patchwiki.biligame.com/images/umamusume/e/e6/ctp8uvf28xf1pnxvhf6i20ss3i88gia.png",
    gushi:"在那里的有悔恨。有哀叹。还有遗憾。但是，与此同时一定也有对未来的马娘的祈祷――多么高尚、伟大的前辈们啊。多么伟大的思想啊。「总有一天——总有一天我一定，会去证明」希望所有的祈祷都会推着此刻向着未来奔去的我们。"
},

{
    id:1011,
    cnname:"太阳天使酱♪",
    jpname:"お日さま天使ちゃん♪",
    img:"https://patchwiki.biligame.com/images/umamusume/4/4d/kvpudaj45hbpwtql284tud29gcw9o1a.png",
    gushi:"Halloween摄影会！要拍超上镜的太阳神了哟！「耶~耶！　Halloween♪咋？　扮成天使的人家，合适吗？」「哼哼，超合适的！　果然太阳神就适合明快的装扮！」一直耶耶地追求着快乐，就这样甚至让周围人都变开心了。从太阳神那儿获得的元气，简直感觉就像……天使的恩惠？「好嘞，太阳神就随自己喜欢地摆姿势吧！我会边追着你边随心拍照的！」「真！？　这样的话人家，就去玩糖果天女散花咯！」「耶耶☆就表现得~像一只天使小姐一样！给大家献上糖果呼~呦~♪」不愧是太阳神的糖果配送！不断地给大家增添元气开启party模式的太阳神……嗯，这应该就是best shot了吧。——太阳之下的，光辉天使！这就是Halloween Party的开始了！"
},

{
    id:1012,
    cnname:"感伤预报♪",
    jpname:"おセンチ注意報♪",
    img:"https://patchwiki.biligame.com/images/umamusume/3/32/mrnkh261ahrw9dob0oke6gj4zmes3sr.png",
    gushi:"very good姐姐的天气预报♪今天的我是万里无云的晴天☆让与炎炎盛夏相称的耀眼阳光直击大家的心吧！在海里啪地玩水是流行趋势哟♪但是快乐的时光一眨眼就……到了傍晚的话可能会感到有点冷呢？傍晚可能会变得稍稍有一点难过感到了局地的感伤预警。但是，没关——系的！照亮我的不只是太阳……还有一种散发着炎热温度的耀眼的存在♪如果稍微沉浸在这感伤的气氛中的话明天又会是一个，温柔的晴天吧♪"
},

{
    id:1013,
    cnname:"Q≠0",
    jpname:"Q≠0",
    img:"https://patchwiki.biligame.com/images/umamusume/8/80/6n2xo5rdap3gavksq7egqrq0yohsqp2.png",
    gushi:"——太无谋了。这种仿佛要超越光一般的速度，在到达终点前就会被燃烧殆尽吧。当所有人都这么想的时候，只有她在忘我的笑着。「啊啊，太棒了……太棒了……！　实在是愉快！」用理论将鲁莽贯彻，使其屈服。连世界的饱和度都高涨了，那种感觉是——「呼呼……那么，下次的实验……到底还有何种乐趣在等着我呢……！」——只有她才知道。"
},

{
    id:1014,
    cnname:"這個聲援改變了世界",
    jpname:"そのエールは世界を変えた",
    img:"https://patchwiki.biligame.com/images/umamusume/b/b2/9juroeeozv6woerjs8yqa2k2yzrbmw5.png",
    gushi:"从观众席上俯瞰惊心动魄的比赛。赛马娘们以惊人的速度在赛道上游泳。一个丝毫不输给那种气势的，响亮的声援响彻会场。「Nice折返——！　但是后面的人追上来了！这么下去的话……啊！」是因为她也有偏爱的选手吗。从心底感到遗憾……正这么想的时候——「Goodjob！　真是漂亮的超越！训练的成果出来了呢！就这样冲吧！GO！！」「哎……！？　刚才不是在为最前面的选手加油吗……？」面对着想都没想就脱口而出的我她……采珠莞然一笑。「所谓比赛，就是决出胜者和败者的事。那光和影必会互相轮回」「……但是呢，全力战斗的姿态没有上下，也没有胜负之分。都是值得赞颂的光辉！」「献给全赛马娘加油！为全赛马娘喝彩！我会，继续为所有的赛马娘应援的！」不知阴霾，简直宛如珍珠般的纯真。仿佛被那光芒吸入……我的世界的所映出的颜色发生了变化。"
},

{
    id:1015,
    cnname:"mag!c number",
    jpname:"mag!c number",
    img:"https://patchwiki.biligame.com/images/umamusume/d/d2/eb9ze70sb9k3ilocyesz9z1kefda9xu.png",
    gushi:"Energie（能量）＝质量×光速的二次方。无论在哪都是等价交换。付出多少就会回报多少。换句话说就是，在这之上的回报反而得不到么……这样就好。『讲真，真是不爽——！monad（一种函数编程）赛高吗——！？呼哦————！！』但是，如果夹杂了噪音，等式就会被一头扎进混沌了吧……！所以说，老子是――「上等。光是这样才不够。灌醉到不省人事为止吧……！」在这充满不确定因素的cache（缓存）中，老子是――「欧拉，跟好了……！哈……哈哈……！」为什么要拼命压制笑容呢？……切，被邀请舞动的原来是老子吗。解出来了……我就认同了吧。所以――「……在老子的节拍衰退之前，把灯给我往这儿照好了」"
},

{
    id:1016,
    cnname:"桃色的背影照",
    jpname:"桃色のバックショット",
    img:"https://patchwiki.biligame.com/images/umamusume/5/55/07nr85aql0gk81ctabnewuf1f93bc8l.png",
    gushi:"3000m的持久战。从第三弯道开始延伸的，又长又陡的坡道。只靠“努力”二字的话是无法跨越的，遥远的路途。额头上流淌着仿佛永远流不干的汗水，奋力想遮住她的视线。跳动的心跳声也变成了悲鸣，粗暴的叹息灼烧着喉咙。她抿心自问。为什么要抱着痛苦跑步呢。为什么要把沉重的脚向前再向前挪呢。在得到答案之前先传到耳中的是，惊天动地一样的欢呼声……是期待的声调。她把这一切都咬住咽下，把一切辛苦都抹尽。回过神来，被视为宿敌的强大影子，已经威胁到了背后。不会原谅回头。也不会原谅放弃。这就是通往顶端的，唯一的道路。……那一天，最永不放弃的赛马娘，也成了无与伦比的强大赛马娘。"
},



{
    id:1017,
    cnname:"In my way",
    jpname:"In my way",
    img:"https://patchwiki.biligame.com/images/umamusume/3/35/gji84f6tl3hvdnlusjyp5h5gmt83pgg.png",
    gushi:"「那个，是把手……像这样吗？」「嗯，感觉不错。那，保持这样稍微等我一下——」虽然我不知道对花酱用这种方法，到底合不合适呢。基本上，我总是劲头满满，说不出来什么好的安慰的话，也不知道怎么鼓励人比较好。但是啊，果然还是无法放着不管嘛。……总想做点什么。所以就用我的方式。如果能行得通那就超Lucky啦。「哇，好漂亮……！好像稍微变得大姐姐的感觉一些了……！」「……真的？　中意吗？」「嗯，太好看了！」――嘻。人家，不错嘛。想做不就能做得到吗？虽然是不擅长思考吧，嘛总之，船到桥头自然直啦！"
},

{
    id:1018,
    cnname:"相逢就是福♪",
    jpname:"袖振り合えば福となる♪",
    img:"https://patchwiki.biligame.com/images/umamusume/2/29/ltcdb7thpf3el39se3qhol7ah5oqx13.png",
    gushi:"「歌，歌牌大会就要开始了！哈哇哇哇……！？　颤、颤抖停不下来～～！怎怎怎、怎么办！」「担心是没有用的哦，怒涛小姐！只要边唱着白兴大人所创作的『新春HappyCome领唱』边跳舞的话就能运气上升・万事解决！」「HappyComeCome　吉出现啦～♪绚烂夺目的　新年日出♪富士山也莞尔一笑　染红了脸颊♪呼喵　哈喵　福来啦～♪」「呼喵咔　哈喵咔～……哎嘿嘿。情、情不自禁的唱起来了～」「喔喔，就是那种感觉！来来来，我们一起继续～！」「Lucky期待期待　门松～♪大家齐聚一堂　来玩蒙眼摸像♪鹰唳一声　告知美梦成真♪呼喵咔　哈喵咔　福来啦～♪」「财富兴隆年夜菜　咂咂嘴～♪幸福全开　呼唤胜利♪茄子不要烤　收入口袋中♪呼喵咔　哈喵咔　福来啦～♪」「这样一来白兴大人的加护也完美了！大船……不，就当做是乘着宝船一同前来吧～～！！」"
},

{
    id:1019,
    cnname:"尋覓不曾見過的景色",
    jpname:"まだ見ぬ景色を求めて",
    img:"https://patchwiki.biligame.com/images/umamusume/f/f2/d90wkhy6ts533jax9ibu0e08lp634k3.png",
    gushi:"闭上眼眸，景色就会浮现出来。在眩目的夕阳中，那些影子向着光的方向渐行渐远。始终站立不动的我，好像听到了远处谁传来的声音――这样的景色。好像在哪见过……。我追寻着记忆，却没有机会想起……。所以……这是梦。我不想这样，无意识下在心中描绘的噩梦。为什么，能如此断言呢――？因为，只要睁开眼眸的话，无论何时都能看到不同的景色――「再一次，无声铃鹿！堂堂正正地在第一名冲线了！！」我想看到的，并不是梦。更何况是噩梦……。我——想继续看没见过的景色。从现在开始，直到未来，一直……！"
},

{
    id:1020,
    cnname:"陣形：PARTY",
    jpname:"フォーメーション：PARTY",
    img:"https://patchwiki.biligame.com/images/umamusume/3/30/f3bvz8264amee7thg7jrtbfpsgiqk7v.png",
    gushi:"今天是特别快乐的日子！就像是把大家砰砰的心跳装进礼物盒，并系上闪闪发光的丝带一样的日子。「训练员酱，这边这边！Maya和朋友们的party，厉害吧！」连寒冷都能吹散的笑容！把下雪的静寂根本不放在眼里的欢声笑语！不输给星空，闪闪发光的party！――多么美妙又特别的景色！「很愉快吧？　很喜悦吧？所以我才想让训练员酱看看的！」希望你来看。希望被夸奖。希望一起高兴。这可十分孩子气，也许和『成熟的女人』有一点点不同哦。……但是，不管怎么说，今天可是圣诞节！特别的日子里，最顶级的特别……来给特别的你，系上珍藏已久的丝带。作为礼物送给你，可以的吧？"
},

{
    id:1021,
    cnname:"天授魔力的英雄",
    jpname:"魔力授かりし英雄",
    img:"https://patchwiki.biligame.com/images/umamusume/f/f7/99zwl206nrivvs3ywy4qzmlj1442qm8.png",
    gushi:"在万圣节的妖气弥漫之时。一位少女独自拜访了传说中的魔女。魔女像是在试探她似的，微微一笑。「我的修行可不简单哦？」「就算这样，我也有一个无论如何，都想要实现的愿望……！」魔女本以为她会很快忍受不住痛苦而放弃，可少女却并没有气馁。不久之后魔女便认同了她，并授予了她魔杖……。「请等一下。这次轮到我，成为你的力量了——」对朋友的思念，打动魔女之心的那份勇敢。她才不愧被称作小小的英雄。"
},

{
    id:1022,
    cnname:"UMA王傳說．登峰造極",
    jpname:"ウマ王伝説・最強になった件",
    img:"https://patchwiki.biligame.com/images/umamusume/f/f3/pgt9octb38ku02523qkx3ot22ozbfqi.png",
    gushi:"世纪末美食！　稻种烩饭的制作方法「首先让NPC把稻种拿过来！就是所谓的年贡什么的吧。去测试之前先做个记号吧！」「然后赋予稻种【Flame】（火焰）进行翻炒！赛马娘之王的魔力的话，低级魔术也不过就是将万物化为灰烬的业火罢了！」「啧，喂！　材料没了啊！？自己的火力也太可怕了吧······真是的。把新材料拿来重新开始！」「用适当的火力炒一下，然后放入高汤炖煮21分钟左右。这样就完成啦！根据自己的喜好追加稻种也可以哦！」「哈——！　充满ウマネスト的未来和希望之味的，稻种烩饭 完成～！」「喂，吃吃看吧。吃精米什么的根本提不起干劲儿吧？嘎——哈哈哈哈哈！这样一来你也是魔王军了！」"
},

{
    id:1023,
    cnname:"Hands up, crook!",
    jpname:"Hands up, crook!",
    img:"https://patchwiki.biligame.com/images/umamusume/6/6a/klw1q4r729gxu0bbucpfipk79tihrr6.png",
    gushi:"昼日下尘土飞扬的决斗场。以手臂……非也，以腿为傲的异乡人们互相瞪视。就在这时 终于，又来了一位坏蛋。「Oops ！大家看起来都好强de——su！」一个爽朗到令人扫兴的声音，响彻荒野。——这个孩子，也没什么了不起的。每个人都在心中如此确信着，与此同时。「But……胜利者将会是我。一枪就能搞定给你们看♪——……Are you ready？」如同速射一样的，宣战布告。被击穿的对手们终于醒悟了。制霸着这片荒野的……是她才对。"
},

{
    id:1024,
    cnname:"冰冰涼涼由我獨占？",
    jpname:"ツメたいヒトリジメ？",
    img:"https://patchwiki.biligame.com/images/umamusume/d/d8/krxgupu3infm9mnfoqvy2drpric3ehk.png",
    gushi:"（吸溜吸溜吸溜……）「嗯～♪　这个果汁，气泡好多又甜又好喝♪」（哐啦……）「哼哼，你也想喝吧？但是绝——对不会给你的♪」（吸溜吸溜，吸溜……）「……啊～，已经喝光了！你不能品尝到真是太可惜了呢！」（吸溜，吸溜……）「……呐，想要吧？那就直说啊！」（…………）「……哼哼，真拿你没办法呢♪那，你的吸管在这里」（噗滋……咔啦）「加油喝哦？不过只剩冰块了呢！　噗噗♪」"
},

{
    id:1025,
    cnname:"Two Pieces",
    jpname:"Two Pieces",
    img:"https://patchwiki.biligame.com/images/umamusume/3/3e/ayybxlvqx9l41kv8ewjijkaph7az3t8.png",
    gushi:"欢呼声消失了……很安静。什么声音也听不到了。『姐——姐，等等我呀！』刚才跑过去的那个是……？这样啊……是那时候的我吗。那么，让我跑得更快点吧。一心一意地前进，直到追上为止。『姐——姐，已经跑不动了吗？』尽管如此你也要跑。不顾一切的，只看着前方，相信着自己前进吧。那样的话――『呐，2个人再一起……』「……走吧，大姐」「啊，是啊。白仁！」「那么，各位赛马娘都已经入闸完毕了，现在…………比赛开始！！」"
},

{
    id:1026,
    cnname:"身為新娘！！",
    jpname:"花嫁たるもの！！",
    img:"https://patchwiki.biligame.com/images/umamusume/3/30/h166ej05wfquicmx45yyw827i5a4ukt.png",
    gushi:"这里是梦之国度，赛马（Umanda）王国。我是这个国家的公主的说。今天终于到了我和王子结婚的日子。国民们也都气氛热烈地为我庆祝着。王子慢慢地走近身着礼服站在礼拜堂中的我。然后，就在我要抓住王子手的——那个刹那！敌人的干部和仆人们突然出现了。当然，公主和王子要一起把坏蛋们dangdang地打倒哇！作为公主，并且作为新娘！！不论多少，幸福都要用腕力【自己的力量】来夺取的说~！！！"
},

{
    id:1027,
    cnname:"被逼近的熱情推著",
    jpname:"迫る熱に押されて",
    img:"https://patchwiki.biligame.com/images/umamusume/0/0c/5safianp2unhg76l3m38blcu2hz9b8l.png",
    gushi:"(我就知道你差不多该追上了，光钻！)——啊，果然好强。能听到你的喘息声。踏地的声响近在咫尺。闪亮得像耀眼的宝石一样,蒙蔽了我向前的双眼。像这样，让我从来没有放松的余地。（....甩不开)因为，你照亮了我的道路。以些许之差输掉比赛的痛苦回忆,至今还刻在我的脑海当中。全力奔跑，一起竭尽所有向终点冲去。很痛苦、很不甘——但也很快乐。所以，我已经不会输了。我不想输。(但是，果然)追上来了啊。「想要赢」的执念,正从后面向我逼近。我的后背感受到了,这份如此强烈的情感化作的热量。(嗯,好开心。好开心啊，光钻)差不多要冲上来了吧。你肯定又在笑了对吧？我明白的。因为，我也在笑啊。因为是这么地令人愉快啊。想要这样一直，笑到最后。所以——「从现在开始决一胜负...... ！这次赢的，会是我！」"
},

{
    id:1028,
    cnname:"渦輪引擎全開宣言！",
    jpname:"ターボエンジン全開宣言！",
    img:"https://patchwiki.biligame.com/images/umamusume/e/e3/3vwxx0q48hm8wpcamgco6421evg13k4.png",
    gushi:"镜头里飞进来了一个少女。「喂、大家！　是双涡轮哦！呐呐、这个好好有录进去吗？？……这样啊！　录进去了的话就好——了！！那个、这次的比赛很特别啊——！」这么说着，少女把脸凑近相机。闪闪发光的眼睛还眨了几下。「所以说、今天也要一逃到底！！绝对的、绝——对！　必须的！一逃到底直到胜利！！」让无数人回头看向这里的少女，高声宣布着。这是让人感不到比赛的紧张，充满希望的声音。「因为双涡轮很强，所以无论何时，从出发到终点，双涡轮引擎一直全——开！！永远都跑在第一，最前面！」是因为那不懂得放弃的幼稚吗？从少女口中说出的是天真——可以说是有点无谋的话。「我是不会输的！！」但这话其实是为了鼓舞自己而发出的，并且像不停推着背部那样有力——「所以，要看啊！！」这声音一直，甚至传到了屏幕的另一边。"
},

{
    id:1029,
    cnname:"晚霞是令人向往的颜色",
    jpname:"夕焼けはあこがれの色",
    img:"https://patchwiki.biligame.com/images/umamusume/c/cb/1rqix966n3a2fj7mbnk2t7ry15b0f9t.png",
    gushi:"小特、谢谢你的来信。没想到小特这么快就迷路了，我被吓了一跳。真不知道小特的路痴到底像谁呢……要好好的向铃鹿小姐道谢哦。你能遇到温柔的赛马娘真是太好了呢。虽然在同一个寝室，但是不要睡懒觉或者乱丢东西，给她添麻烦哦！直到现在我才敢说出来，我一直担心在没有马娘的土地上，小特会不会寂寞。所以，能交到铃鹿小姐这样的朋友，妈妈真的很高兴！也要好好享受和朋友们的校园生活哦。我给你寄去了小特你最喜欢的胡萝卜。别忘了也要分一些给铃鹿小姐吃。祝小特，永远幸福。"
},

{
    id:1030,
    cnname:"必殺！雙胡蘿蔔拳！",
    jpname:"必殺！Wキャロットパンチ！",
    img:"https://patchwiki.biligame.com/images/umamusume/9/96/4vaim8ki45apzahpfr6zcotbp3unehg.png",
    gushi:"「嗯嗯，LIVE的气氛还没有热烈起来？看来正义的伙伴是时候出场了！」「——请一定,让我也来协助你！」「！　这个声音是……！」「营养满分！　正义满分！胡萝卜素变身、Carrot MAN！接下来——」「用正义之翼打击邪恶！　飞奔着振翅拯救世界！　响彻天际的，微光飞驹！最强的英雄搭档、在此参上！」——哆啊啊啊啊！！「为了守护大家的笑容！来吧，是时候开始正义的ShowTime了！！」"
},

{
    id:1031,
    cnname:"雖然還只是個小小花苞",
    jpname:"まだ小さな蕾でも",
    img:"https://patchwiki.biligame.com/images/umamusume/8/80/p6zl0kp54ji8qglbvdw5eqf0bndvcqe.png",
    gushi:"「今、今天、我有话对大家说……！」那紧紧抓住话筒的手还很稚嫩。大家一直以来对我的支持，真的非常感谢。虽然我还很不成熟，但是……！」——那小小的花朵，绽放开了。「总有一天，我一定会成为一个优秀的成熟女性的！请永远的地守护着我吧！」那天的LIVE后、会场各处都有人在『长寿下去吧』的窃窃私语……。"
},

{
    id:1032,
    cnname:"好快！好吃！好快！",
    jpname:"はやい！うまい！はやい！",
    img:"https://patchwiki.biligame.com/images/umamusume/7/7d/8ubpg2vc6fzox0obyixm4mu121mfkba.png",
    gushi:"「请看！　这就是 THE·学级委员长的便当！」樱花进王的自信，好像也从便当盒里溢出来了……不，已经溢出来了。「野餐时三明治是最王道的！营养和色彩都很好吧！？」随着她的话语，面包摇晃，黄瓜跳着舞，火腿也在舞动……。「那就一口吃下去吧！毕竟野餐才刚刚开始！快吃！干脆边吃边跑！？」注意到的时候——樱色的瞳孔已经逼近眼前。「来吧！　爆进地享用吧！！」"
},

{
    id:1033,
    cnname:"Run(my)way",
    jpname:"Run(my)way",
    img:"https://patchwiki.biligame.com/images/umamusume/c/c2/tk9dho7u280wbqezmocybevl5rgvxq1.png",
    gushi:"金色的头发随风飘动，雨点也在上面飘动。远远望去，美丽得让人窒息，但黄金城——却满身是泥。「还有、一……点点了……！」只要能逃着甩开对手就能获胜的最后冲刺。但是，就在她身边有一股气息扑面而来，被踢上去的泥土毫不留情地向她扑了上去。（啊好脏，还有腿也！但是坚持！只要坚持下去，我就能赢……！）在一刻也不能松懈的攻防战中，但是她的表情却很愉快。（我现在、状态达到了巅峰……！）――雨水、泥土、汗水都是装饰品。让我闪耀的跑道，就是这里！"
},

{
    id:1034,
    cnname:"夢想就是要大聲說出來！",
    jpname:"夢は掲げるものなのだっ！",
    img:"https://patchwiki.biligame.com/images/umamusume/d/dd/0qe38ubn6pyxulnsmdlqf89d7cddb1p.png",
    gushi:"「Hi，H——i，虽然在曲子的中途，大家都在好好的看着帝王吗？」在舞台一端与粉丝互动的东海帝王，以轻快的舞步正确地“跳”出了C位。「今天我跑了第一、而且还是C位！不管是比赛还是LIVE，我都是最强的♪——今后也，一~~直是哦！」耀眼的聚光灯也聚集在她的身边，她举起了三根手指的招牌动作。「如果是我的话，“不败的三冠赛马娘”也不只是个梦！ 所以大家、不要犹豫，跟我来吧♪」"
},

{
    id:1035,
    cnname:"闪耀的景色、在那前方",
    jpname:"輝く景色の、その先に",
    img:"https://patchwiki.biligame.com/images/umamusume/6/6c/ma28rwfh6vvk4m9hgvc73bvaknaa1ii.png",
    gushi:"「其实……我有点害怕，不知道该向大家传达什么。」LIVE会场一片寂静。这是为了不漏听哪怕一句，那位站在舞台中心的少女的话语。「我……只是、喜欢跑步而已。因为我对这以外的任何事，都没有兴趣」她一边思考、迷茫，一边编织着语言——「但现在我只想把歌曲传达给大家。只要跑过这个舞台的话，就会变得怦然心动的理由……我觉得我能理解。」——乐曲响起。深呼吸后，她伸出手去的地方——答案就在那里等着她。"
}


    ],
    naili:[
      {
    id:1001,
    cnname:"Precious☆Moments",
    jpname:"Precious☆Moments",
    img:"https://patchwiki.biligame.com/images/umamusume/b/b1/9vg2a1ank2a3g7b76ubz8o0utxvfawc.png",
    gushi:"Party的会场吵吵闹闹的。我一个人也完全没问题，所以我想在角落那里安静地呆着——「织～姬！可以的话，一起去四处转转吧？一定要来呀！　球球你啦！」明明不该是这样的……。被总是像北极星一样正确闪耀着的她拉着我的手，来到了明亮又闪耀的会场中央。回想起来，这个学院总是这样。明朗、热闹到让人觉得有点吵，不知不觉中身边就聚集了一些人。「拍一张大家的笑容……的纪念照片！啊哈哈，大家都挤得紧紧地！痒不痒呀？织姬也这么觉得？我也是呢，嘿嘿！」这座学园总是洋溢着笑容。今后一定也会永远一直如此吧——"
},

{
    id:1002,
    cnname:"Heart・点火！！",
    jpname:"ハート・イグニッション！！",
    img:"https://patchwiki.biligame.com/images/umamusume/d/d7/db8mpm9eugs1k3k9xvh6n0tz8ey6fqf.png",
    gushi:"「啊——啊,如果这家伙能咣地飞起来的话我就没什么可抱怨的就是了」伏特加仿佛憎恨着一般望着碧蓝的天空。引擎看起来早就暖起来了，她却并没有一副要狠狠踩踏踏板的样子。「……嘿嘿，就这么奔出去吧！只穿着身上这身，什么都不带的这种感觉撒！」「有时跑过连接着沿海，测流过去的水平线。有时在夜空之下，只让排气声轰轰作响无论何地都能勇往直前地奔向——」那个时候，教会的钟在附近一带响彻。那是告知梦想之旅终结的音色。伏特加把视线从空中移开，咧嘴一笑。「——嘛，这就是所谓的梦之物语吧。现在有太多要追寻的东西了，还是在现实【这边】尽全力吧」「……好嘞，决定了！总有一天要和现在一样一成不变的我们一起」「在平淡无奇的日子里，一起去平淡无奇的地方——像傻子一样笑着。……约好了啊！」"
},

{
    id:1003,
    cnname:"刻下、樱花烂漫",
    jpname:"刻下、桜花爛漫",
    img:"https://patchwiki.biligame.com/images/umamusume/2/27/fyfyr4a43eq9kkjnf1x9qkf5yv2kbfa.png",
    gushi:"樱花桂冠在接到传球的刹那，回想起了她的幼年时期。身体虚弱的她从来不和任何运动有所交集，总是在一旁参观学习。每天都在场地界外，把滚过来的球面带笑容的交还给对方。一直，都憧憬着能和大家一起跑来跑去。而如今，她终于知道了。和互相信赖的同伴一起打球，竟然是这么让人欢欣雀跃的一件事。樱花桂冠用脚蹬着地面，在空中高高跃起。「我想以这个队伍――来获胜！！」"
},

{
    id:1004,
    cnname:"心、被夜风掳去",
    jpname:"心、夜風にさらわれて",
    img:"https://patchwiki.biligame.com/images/umamusume/c/c6/1msp1rfs2dz2xorfu5iqiiqorfcm065.png",
    gushi:"不曾习惯的舞会让人有些发窘、于是只得将脚步移向阳台。……正好与抢先一步享受着夜风的目白麦昆对上了眼神。「您也是来这里休息片刻的吗」我找不到舞伴、自然也无法踏入跳舞圈[1]内。如果能这样坦率地表达出来就好了、但作为回应的却只有苦笑。「……难道……您也是、为了躲避众多邀请而逃到这里来的吗……？」顺水推舟地用力点了点头。不想在她的面前露出窘迫的样子。我被那不知从何而来的虚荣心所支配、忍不住移开了视线。「……我要回去了哦——」「——回来的时候、记得邀请我跳一曲」不等回复、目白麦昆就踏出了返回舞会的脚步。唯一一次回头时、被她那锐利的眼神注视着。我慌忙地小跑追赶着。她的脚步却又稍稍加快了些、并似乎在欢快地轻轻跃动着。"
},

{
    id:1005,
    cnname:"向羽毛祈愿驱魔",
    jpname:"ハネ退け魔を退け願い込め",
    img:"https://patchwiki.biligame.com/images/umamusume/7/71/q5gjy8pqq5516oo9g7j337we0c79dg8.png",
    gushi:"「斯佩酱知道（日式）羽毛毽子球所包含的祈愿吗？」在她把用来在脸上涂画的毛笔递给我的时候，意外地小草问我了这个问题。「包含于羽毛毽子中的愿望……？」　　「这羽毛毽子末端的植物种子包含着，『希望你能一直健康』这样的愿望……羽子板是包含着，『摆脱各种厄运，希望你能健康美丽地成长』的美好愿望是用来作为正月礼物赠送的哦」「嘿诶~！」「所以在最一开始，毽子并不是一种比赛，而是为了祈愿彼此健康才长久打下去的」「 诶诶，原来是这样啊！那下面可得尽量长时间坚持打下去才行！……啊，那么提问！　小草老师！难不成作为惩罚游戏的往脸上涂墨也是有什么理由在里面吗？」「好问题，特别周同学。有一种说法认为墨的黑色是可以除魔的，好像是觉得如果把它涂在脸上的话就可以辟邪、保护自己哦」「所以，就算万一羽毛毽不小心掉到了地上，把墨涂到脸上就没事了，就是这么回事哦」「还真不光只是个惩罚游戏呢！――真好呢！」握着从小草那里收到的笔用力做了一个深呼吸。「希望小草在这一年里跑步能不受伤」在右边的眼睛那里，画了一个大大的圈。「这是希望你不要感冒或生病」在左边脸颊，画了一道斜线。「希望你能吃很多好吃的东西，收获很多欢声笑语」在左边脸颊又画了一笔、斜着的线。这每一笔都包含了美好的思念。不管是作为朋友还是对手希望我们不论何时不论何地都能一直在一起奔跑――「……谢谢你为我祈愿了这么多呢，斯佩酱。但是，呼呼，是不是有点涂过头了呢？」「哎？　哇！？　对不起！！！！」"
},

{
    id:1006,
    cnname:"从现在开始Don't stop!",
    jpname:"ここからはDon&#39;t stop!",
    img:"https://patchwiki.biligame.com/images/umamusume/5/54/hbbja9v6y49n5jnftsvntufo9e6nrf3.png",
    gushi:"怎么样？　什么的我才不会问哦。因为我把这些全都寄托在了舞台上。放声高歌直到喉咙干涸。抱着踩穿地板的心情跳出强劲的舞步。希望你一定要注意到我，所以我把我的全部都拿了出来。这就是我所传达的信息。这就是我现在全部的，真实的感情。所以呢，白仁酱――「希望你下次也能唱歌啊。……在我的身旁」"
},

{
    id:1007,
    cnname:"A Win Foreshadowed",
    jpname:"A Win Foreshadowed",
    img:"https://patchwiki.biligame.com/images/umamusume/d/dc/hrk3h8nagbneg31gdqok4840zpsaadw.png",
    gushi:"到时间了。每走一步欢呼声、马蹄声、心跳声——全部远去。但是——只有灵魂，猛然咆哮。苦涩已经，咬碎嚼尽。既然如此。「咬碎嚼尽便是」"
},

{
    id:1008,
    cnname:"月下恶魔酱♪",
    jpname:"月下の悪魔ちゃん♪",
    img:"https://patchwiki.biligame.com/images/umamusume/6/61/3relowdpj6jjgw1q4c551kl107vb27n.png",
    gushi:"Halloween摄影会～耶☆人家要拍超上镜的帕玛亲了哦！「喔～不论是衣装还是搭配都是超正统的！感觉气氛要嗨起来了呢～」「就是这个！　帕玛亲，恶魔cos超适合你的嘛！　1亿分！」这衣服的感觉该怎么说来着，yaoyan？果然帕玛亲，和这种大姐姐风格很衬很衬呢♪「嗯那，那就照一张看看~！帕玛亲，变成恶魔呀~！」「哎哎，变成恶魔吗……稍微有点羞耻啊，这个」「没~事儿的！贪~得无厌恶魔～的感觉，全部夺走吧！」「原来如此，夺取……OK，我试试看！」「——你，身上有一股甜甜的味道呢……好像比糖果还要好吃呢……♪」哦哇~鬼心动！帕玛的话就算被吃了也没关系！感动感动超绝的照片，爆诞哇咦！——在月夜之下，微笑绽放的恶魔！Halloween Night 就这么～开始啦！"
},

{
    id:1009,
    cnname:"乌托时・设计师",
    jpname:"ユークロニア・アーキテクト",
    img:"https://patchwiki.biligame.com/images/umamusume/9/9c/jdcmipl80eumfhg9380jg6rnrr98huh.png",
    gushi:"坐铁制飞机翻山越岭——这是在现实中理所当然的景象。只要看了符合航空力学原理的设计图把零件组装起来就好了……但这里却不一样。见所未见的材料，闻所未闻的原理……。为了实现计划，果然还是应该读一读这个世界的事儿吧……。「呼姆……这东西就是在我们的世界被称之为钛的东西吧？然后这边就是蒸汽机关最初的发明……」「唔……？　这是通信器吗？也就是用电磁波覆盖地表的输电系统？还有蒸汽压缩的半永动机？」「等等，难道早就开发出了能承受这么大压力的合金吗！？强度甚至远远超过钨！？」「……因为这个，本来就是幻想世界吧。要是一直吐槽的话可会没完没了吧」"
},

{
    id:1010,
    cnname:"It's on the house.",
    jpname:"It&#39;s on the house.",
    img:"https://patchwiki.biligame.com/images/umamusume/e/e2/jkvly4sptritzl1puxdyla1hvkywbbw.png",
    gushi:"……欢迎光临。今天……你也，来了呢。……是的……暂时先在这边，给父亲帮忙……。您要点的是……嗯嗯，和往常一样的黑咖啡呢。马上就为您拿来——…………多放一点牛奶，是吗？不……没有问题。虽然是没问题……但还挺少见的呢，嗯……。……原来如此，那还真是够忙的……呢。…………。……。——那个，……虽然这么说有点突然……能稍微，占用您一点时间吗？『为客人您，敬一杯』……父亲就是这样教我的。也稍微，努力着……有所创新……。会变成，什么样呢？那就是——……之后的乐趣了。"
},

{
    id:1011,
    cnname:"「羅德奈特與夢之石」",
    jpname:"『ロードナイトと夢の石』",
    img:"https://patchwiki.biligame.com/images/umamusume/e/e4/fkwvrrsr376ufhuxlyh2xnmojwvt6bx.png",
    gushi:"『水魔引诱之岸，妖精引导之庭，星星指示之门……克服了无数考验，终于到达目的地的村民们，在那地方迎接他们的是，世界上最美的光景——』「Amazing……！真的，墙壁真的正在发出蓝色的光masu！」「真的，就像身处另一个世界一样……。居然还有这种地方……！」『面对这如梦似幻的场景，村民们不自觉地赞叹了出来――』啊啊，啊啊——！我们现在，真的就身在那个故事之中！"
},

{
    id:1012,
    cnname:"可愛的金蘭之交們",
    jpname:"愛すべき金蘭のつどい",
    img:"https://patchwiki.biligame.com/images/umamusume/d/dc/g0k09k9x8y4omyt1rq1mylv236giue0.png",
    gushi:"「呼啊啊～……生野小姐，真的好漂亮啊……就像是真的新娘一样……！」「十分感谢，米浴小姐」穿着这么漂亮的衣服被大家注视着……好像有一种说不上来的羞耻。但是，这也是难得的经验。得好好地对待拍摄——「哎！？　生野，要成新娘了吗！？呀哒呀哒（不嘛不嘛）！　Yadayo——（不要呀）！不要嫁人呀——！！」「哎，等下，你在干什么呢双涡轮！？不要妨碍摄——影！」「不——嘛————！不要离开我啊—————！」……因为双涡轮擅自的误解，拍摄现场似乎变成了有点混乱的状态。在比赛中总是抛下所有人大逃的双涡轮，却在大吵大闹地说『不要抛下我』，反倒让人觉得很有意思。「涡轮，请冷静一下。我哪也不会去的」我们是不可能分开的。因为我们还在，比赛的途中啊。――暂且，在这个拍摄结束后就陪涡轮他们一起去训练吧"
},

{
    id:1013,
    cnname:"Enchaînement（连步）",
    jpname:"Enchaînement",
    img:"https://patchwiki.biligame.com/images/umamusume/1/12/jb8rb4tc94pcmumew4hzyz40olj8gb2.png",
    gushi:"你的舞步就像獠牙一样张狂。那灵活的体态，仿佛一头瞄准猎物脖颈的野兽映入眼帘。「看样子真是一点都没变迟钝啊。暗自锻炼这点兴许也值得嘉奖吧」「正如您所说。我想守护那没有准备就不能飞翔的你，避开大家的目光。只会被奉承的“皇帝”大人」「那么，这次就让你来『讲述』吧。如果不是临渴掘井的话，我打算洗耳恭听，把一切委任于你」你的转身打破了【寂静】。嘲讽也化为叹息，额头上的水珠骤然闪耀起了光辉。「如你所望的话，就让我带你去吧。但你可别忘了。挑起诱因可是要偿还的！」「慢着！　真是危险的步法。重要的是对伙伴的信赖。为了让你再也无法忘记，天狼星……上课的时间到了」追逐你所追逐的。我能看到那种起伏是对支配的渴望。……那样的话就全身全灵（全身心）地接受吧。“皇帝”鲁道夫象征正屹立于此。"
},

{
    id:1014,
    cnname:"一小步・接着・一小步",
    jpname:"リトル・バイ・リトル",
    img:"https://patchwiki.biligame.com/images/umamusume/b/ba/h2yjh2yjxo53arpyvryb117d3tgkxls.png",
    gushi:"「啊咧……啊，光明！Stop，Stop！　到此为止！抱歉，计时的显示屏坏了！」「哈啊、哈啊……呼～～。这么说来，确实还真是好长的一组啊～」「大概，相当于三组的运动量哦！还、还好吗……？」「嗯嗯，没事的哦～」「一口气做了这么多还没累，是踏实反复不断训练的成果啊！难道说，如果我没说停下的话还完全可以继续……！？」「呼呼呼，说不定呢。一定，会注意不到还在继续吧～」「啊哈哈哈哈！　真像是光明！虽然还有一些没变的地方……哎嘿嘿，因为从小就看着你了，所以就像是自己的事情一样高兴啊！」「您对我这样说的话……作为目白家的人被这么激励着，我一定更能昂首挺胸了」「从今以后也会一点一点地向前，向前方不断迈进哦～」"
},

{
    id:1015,
    cnname:"想飛奔出去的心情",
    jpname:"飛びも出でぬべき心地すれ",
    img:"https://patchwiki.biligame.com/images/umamusume/8/88/9zczzw1kosef2dud5rs33dvoyy62jiw.png",
    gushi:"够不到的东西有很多。憧憬着又大又炫目的……遥远又遥远的顶上……昂首挺胸着的自己。如果能挣扎着到达的话，也许自己就会重生吧。我明明知道的……完全到不了的。所以，稍微伸个懒腰吧。就一下下，谁也不会注意到的。这么做的话……却有人推了我的后背一把。虽然想回头，却并没有回头。取而代之，我又稍稍伸了一下懒腰。后背非常非常的温暖。……不知何时，发出了声音。「到到到，要到达啊啊啊啊～～！！」"
},

{
    id:1016,
    cnname:"獨奏螺旋卡農曲",
    jpname:"独奏・螺旋追走曲",
    img:"https://patchwiki.biligame.com/images/umamusume/0/02/ipxbjcn9llluedfkseufdzv53686cyn.png",
    gushi:"奔跑。奔跑。奔跑。还不够，还没能追上她。还不够，还没能超越一切。转动。转动。转动。上升着。下降着。我的思绪不停地循环着，不知不觉，我已置身于五彩缤纷的齿轮之上。优美的歌曲已然结束。这并不是为我而唱的歌。只有向前的意志已然消逝，我只能望其项背而看不到前方。啊啊，只能看到她的背影。已经，除了她的背影再也看不到别的东西了。只能不顾一切地奔跑。对着那摇晃的背影。我这样的一只生物被搅拌，被稀释，被重构，变成了目的仅仅是追赶上她的一个齿轮。自己到底是什么人，也渐渐地变得模糊了。喧嚣遥远。也不知是欢呼声还是怒吼声。在被搅得乱七八糟的世界里，只有追赶她这一条如丝般的小路上，寂静无声。(我在追赶你。一直，仅仅是你——!)黄金齿轮在转动着。我像是能触碰到她一样伸出双手。——那个瞬间，的的确确，我把全世界都抛在了抛在了脑后。"
},

{
    id:1017,
    cnname:"傲天響箭",
    jpname:"天嗤う鏑矢",
    img:"https://patchwiki.biligame.com/images/umamusume/6/63/cz6ofaqidhb4tr0791xln1ujxj3pv9n.png",
    gushi:"被点燃的小小的火光摇曳着，使人情绪激昂。沸腾的热血，让一切杂音和思考都停止了。能感受到的只有那被拘束着的，剧烈的心跳。如果想要尝试压抑它的话，转眼间就会被窒息感所折磨。既然如此，那就任由其跳动、任由其所欲、任由其期望、任由其渴求――那么唯有让身体烧焦，吞噬吧……！「时间到了。走吧，白仁」「啊啊……猎物已然收入囊中」"
},

{
    id:1018,
    cnname:"WINNING DREAM",
    jpname:"WINNING DREAM",
    img:"https://patchwiki.biligame.com/images/umamusume/5/52/c78v9bnvbjuml43hqjr5um19dm69w2c.png",
    gushi:"「嗅嗅······哇······，好香的味道。这就是传说中的便当吗，胡萝卜盒饭······」「小特，便当等排练结束后再吃吧」「铃鹿——!　看到我的手套了吗——?」「刚才没拜托服装师帮你调整衣服吗······?」后台热闹非凡，完全没有让心平静下来的时间。但是————就算是我也有感到这很棒的自己。「······可能是因为和你们一起吧」「铃——鹿——小——姐——!」「我听到了哦——小特。······哼哼，真是的。这次又怎么啦?」来吧，为了把许许多多祝福的心情融入到舞台中，让我们开始准备吧。"
},

{
    id:1019,
    cnname:"祝福就像賦格曲",
    jpname:"祝福はフーガ",
    img:"https://patchwiki.biligame.com/images/umamusume/7/7e/ez454i7zni0gpbrolnf8vd627orqln4.png",
    gushi:"如果对某人来说那是祝福的话，那么对某人来说那就是悲叹。「呜呜呜～……怎，怎，怎么办呢。看摄像机的话，忍不住紧张……发抖……」「那么、请接触我的背部。……『温暖』会使人缓和紧张的情绪，以前，输入过这样的数据」「但是……如果和米（浴）粘在一起，可能会发生不好的事情……」「否定。除了电子设备以外，随时都可以和我接触。因此……为了完成拍摄订单，转移到说服模式。请参照说服模式手册，实行开始——」「——米浴小姐。『别啰嗦了，我们靠在一起吧！』」「咿呀！　……哎、哎、哎嗯！…………哇……波旁小姐好温暖。哎嘿嘿……发抖，真的停止了呢」「……米浴小姐，也很温暖。因为热量，已经传导到了身体深部」尽管如此 还是让我们一起说。挑战者的勋章，让我们一起背负。"
},

{
    id:1020,
    cnname:"全力！翻轉！",
    jpname:"全力！タントラムッッ！",
    img:"https://patchwiki.biligame.com/images/umamusume/2/25/pm1q7ixoku4zrj5ip1e7sruemsmy12v.png",
    gushi:"*注：标题的Tantrum特指滑水运动中一个动作的名称「呀 吼哦哦哦！！！！」操纵着滑水板，轻盈地在空中飞舞的奖券，使得船上跟着摇晃起来。「超，超级（北海道方言）厉害啊……！」「那个技巧，你说过初学者做不到的吧？不愧是奖券！」「姆，是野生的直觉吧……」「最 棒了～！再来一次！！」「啊啦！　景色真好♪奖券酱，翻三次跟头GOGO♪」「交给我吧！上吧，这就是我的——！！」——闪亮亮的欢呼声从船上升起，就像滑水板上溅起的水花一样。"
},

{
    id:1021,
    cnname:"43、8、1",
    jpname:"43、8、1",
    img:"https://patchwiki.biligame.com/images/umamusume/8/8a/7la7agfwev051efqci7jpvpksld7cl4.png",
    gushi:"是白，还是黑？是胜利，还是败北？如果掷硬币的话，正和反面都有可能掷出。同理，闸门打开后，就会决出胜者和败者的即为比赛。但是如果是在这样的大舞台的话，好像会有很多很多有点麻烦的要素与之密切联系。希望谁能获胜，到底谁才是第一的赛马娘。我听到了一阵又一阵的喧闹声。因为是人气第一，因为有可爱之处。因为谁相信着她会取得胜利。——喂喂，等等唷。难以决出第一名的才叫比赛吧？已经把比赛丢到脑后了。胜利的女神到底会像谁微笑？剩下的时间只有两分些许。这时开始的就只有，愉快的激烈对抗了。那么······只集中于眼前的东西吧。号角声马上，就要长鸣了喔？"
},

{
    id:1022,
    cnname:"正值盛開的櫻花",
    jpname:"今ぞ盛りのさくら花",
    img:"https://patchwiki.biligame.com/images/umamusume/2/20/h16x2esz5jh2r1i4bdpum9hitprqenm.png",
    gushi:"只有胜者才能站上的地方——Venus·Club[賞典台（颁奖台）]。前往颁奖台路上的少女瞠目结舌。意外的相遇。那个憧憬着的存在，就在眼前。被无与伦比的骏足所吸引，决心要与其并驾齐驱的那天。专心，呼唤着今天的胜利。在万千思念中失声的少女。那憧憬之人，如梦似幻地走近了——带着温柔的笑容。是胜利的余韵让她大意了吗？手，缓缓地整理着她松弛的腰带。距离缩短，少女的脸颊染上了淡淡的红晕。在盛放的大轮花旁——小小的樱花并列着悄然绽放。"
},

{
    id:1023,
    cnname:"超越那個背影",
    jpname:"その背中を越えて",
    img:"https://patchwiki.biligame.com/images/umamusume/5/57/h6bo5ojhz9pux8klida2uouslvz0kja.png",
    gushi:"赛，我拿下了！」"
},

{
    id:1024,
    cnname:"『幸福』舞落時",
    jpname:"『幸せ』が舞う時",
    img:"https://patchwiki.biligame.com/images/umamusume/8/83/s3nmeabyslk6qy1h9a7npixi2ofxywq.png",
    gushi:"（加油啊米浴。加油……！）祈祷着她胜利的，只有一个人。只有她自己一个人，少女这么认定着。——米浴、米浴、米浴、米浴……！但是，迎接全力奔跑完的少女的，就像从那高高的蓝天上飘落一般，很多很多的声援。「那……那个、那个」少女既惊讶又感到困惑……但尽管如此。那身形娇小的少女，也迈出了一大步。「十……十分感谢、大家……！」那对着少女的声援，直到永远、直到永远，也不会停下来——"
},

{
    id:1025,
    cnname:"身為『王牌』",
    jpname:"『エース』として",
    img:"https://patchwiki.biligame.com/images/umamusume/f/f1/722r2v5buugf6f34l1hfp5wwkpts7rp.png",
    gushi:"「谢谢大家的支持！」那是优雅地挥着手的目白麦昆。只有额头上流着的汗水，才能看出她的激战刚刚结束。「但是这次夺得的第一，还是我梦想的途中。我要以目白家的骄傲为怀，今后也要不断华丽地取得胜利！」高贵的宣誓，让欢呼声达到最高潮。当她以千金小姐般的举止，转过身后——（决定了，作为今天的奖励，我要去吃蛋糕。吃哪种呢……）——那高兴而烦恼着的背影，还是个稚气未脱的少女。"
},

{
    id:1026,
    cnname:"一粒的安宁",
    jpname:"一粒の安らぎ",
    img:"https://patchwiki.biligame.com/images/umamusume/0/08/f06jlftupuc8je53b1rpctq9glv8uk0.png",
    gushi:"来，请吃这颗糖～。……没错，就是你哦。亲·爱·的♪给正在凝视着我的你哦～。呼呼、你看起来很不安的样子呢～。你在担心我能不能赢吗？没事的、没事的。确实呢，小栗帽酱、稻禾酱、还有其他的孩子们……都很强呢、都是好孩子呢————但我一定会赢给你看的。 所以请悠闲地注视着我吧～那么，我会加油的～。像好孩子一样在这里等着我的话……好了好了，会给你做的哦♪"
},

{
    id:1027,
    cnname:"劈開天際的閃電娘！",
    jpname:"天をも切り裂くイナズマ娘！",
    img:"https://patchwiki.biligame.com/images/umamusume/5/54/tp11xs15z3un1r2g3dwtvu4hqtk55bz.png",
    gushi:"「怎么样，我现在状态极佳哦——！！……喂喂喂，你们在看哪里啊！」边这么说着边蹦蹦跳跳的小小赛马娘。在赛马娘展示舞台上的她，无论是跳向空中，还是大声喊叫，都好像没那么显眼。「喂喂，大家都往这边看啊！不要因为个子小就看不起我！！」全力飞向天空，好不容易吸引了人们的目光的她——「哎哎，你们这些人，做好觉悟吧！让我的奔跑吓得你们胆战心惊！」微笑着围观她吼叫的观众，离被闪电击中还差一点点。"
},

{
    id:1028,
    cnname:"等待已久的大計謀",
    jpname:"待望の大謀",
    img:"https://patchwiki.biligame.com/images/umamusume/0/03/qbfntycvl8j3hgih2hbxczhq5890s8u.png",
    gushi:"等我意识到一切都是她的计谋时，已经晚了。「喵哈哈～！　超越第一了？」面对紧追不舍的对手，青云天空也以最快的速度奔跑着。“逃马策略”的赛马娘“已经在最终直线上了”「『赶紧逃走然后休息』作战大成功♪这样最后悠闲地跑也可以了——」「星云酱……我一定要抓住你给你看……！」「——就不能不这么说吗。切！」（不过，我从一开始就没想轻易赢下比赛。即使是我……也想赢啊）「如果你能抓住的话就来抓吧。云可是没有形状的吧？」"
},

{
    id:1029,
    cnname:"不沉舰的进击",
    jpname:"不沈艦の進撃",
    img:"https://patchwiki.biligame.com/images/umamusume/6/69/0knkbbya13167yxoahp4mncu5wf08ys.png",
    gushi:"——黄金舰才不需要燃料。觉得有趣的话就会自己跑起来。厌倦了就会懂了吧。黄 · 金＝ 船 1 世。（詩人、超哲学家、鬼冒险家/？？？？～）「碍事儿碍事儿！　让开让开——！！」最终直线，本应该在跑在最后方那个可恶家伙的银发在飞舞着！「呀吼啦！　超越吧超越吧～！」大胆无畏，运用超乎想象的瞬间移动――穿过终点板，那里已经是北极了。「哎哟，不小心越过了K点！，真是的～黄金船酱也没注意☆」下回、『关东煮！』绝对要看啊！"
}


    ],
    liliang:[
      {
    id:1001,
    cnname:"终生的奇迹",
    jpname:"ライフロング・ワンダー",
    img:"https://patchwiki.biligame.com/images/umamusume/a/a6/4sxhpr8low73urm9z6zlslaynjhxadc.png",
    gushi:"……的确并不全都是开心的事情呢。但是，也不可能一直都能遇到让人开心的事情吧？不论是被超越也好，被比较也好……。如果想把一件事做到极致的话，不论有多喜欢这件事都难免会遇上困难。但如果让步的话，好，那一切就结束了。但是，那样一来就没意思了吧。最重要的是，坚持做下去。只要能够坚持下去，一定会有好事发生的。总会有开心的事和有趣的事的，那样一来也就会变得有趣起来了吧。只要不放弃地奔跑下去。即便沾上满身泥巴，只要坚持跑下去。就算有4个弯道，也不会输。在最后的直线时，一定会获胜的。看呀，就像今天的我一样。"
},

{
    id:1002,
    cnname:"Chill chill night*",
    jpname:"Chill chill night*",
    img:"https://patchwiki.biligame.com/images/umamusume/a/a7/80j99vg7wk0lojzntlstzez5s5ozhz6.png",
    gushi:"因为呀，真的一直很期待嘛。只要一抬起头，就能看到他（她）在身旁。对他（她）笑的话，他（她）也会回以笑容。高兴地拉起了手，眼皮却无奈的垂了下去。还想再多看看。还想再多玩一玩。但是呢，眼皮……好重啊……。「Maya，下次呢……一定会做……熬夜的练习的……所以……」……约会，在梦中延续。"
},

{
    id:1003,
    cnname:"Welcome to Umayuru",
    jpname:"Welcome to Umayuru",
    img:"https://patchwiki.biligame.com/images/umamusume/3/31/mmlh8hdl6w9mil9qa19o3djx9faux20.png",
    gushi:"这里是特雷森学园——有时候，呆呆地（ぱか）有时候，拥有着悠哉（ゆる）的历史与其他世界之名共生，并继承其灵魂悠闲地奔跑挥洒青春······这就是，她们的日常吗？不管是落雷的日子、超越人类常识事件发生的日子、还是无事发生的日子可能都是如此。这就是——她们的日常吗！？撒，今天又会是怎样的一天呢？"
},

{
    id:1004,
    cnname:"终于到达的景色",
    jpname:"たどり着いた景色",
    img:"https://patchwiki.biligame.com/images/umamusume/a/a2/6o4nsxlslqb9xhdt2z1iwt321cr9nvd.png",
    gushi:"我亲爱的伙伴――小时候，我总是和你在一起呢。你总是把因为生病而，无法奔跑的我带向远方。用自己的力量可以去往任何地方而感到高兴，沉迷地踩着踏板的那个时候……。有一次，我们一起挑战了被称为无法登上的高台呢。我登上了曾经认为永远都走不完的，无数次都差点挫败放弃的坡道之后，从上面向下望去的大海多么美丽啊……。那份经验至今都在支持着我。而今天。因为我和伙伴们不断努力，也让我看到了美丽的景色。被照明灯照亮的舞台。大幅摇摆的荧光棒。许多的笑容和欢呼声。都和我与你一同看过的高台上的景色同样绚丽夺目。不管哪个，都是我一个人无法到达的景色。把我送到这里的，毫无疑问就是你啊。下次我们再一起，去旅行，去追寻那些未曾见过的景色吧。"
},

{
    id:1005,
    cnname:"此刻请不要闭上双眼",
    jpname:"今は瞳を閉じないで",
    img:"https://patchwiki.biligame.com/images/umamusume/0/04/9daa73yny7do3kcub9ngxw7g0mtcp6q.png",
    gushi:"v>"
},

{
    id:1006,
    cnname:"变身！青年形态！",
    jpname:"変身！ギャルソンフォーム！",
    img:"https://patchwiki.biligame.com/images/umamusume/d/dc/awgoatg6cu83esy2m43jaxuz7zf0v6d.png",
    gushi:"「欢迎光临！客人们，我带你们就坐！」「嗯嗯，拜托你了微光酱♪」「啊，菱曙！　因为是预先练习，所以拜托像客人一样哦！那么，请来这边！」「是阿萨姆红茶哦！　……啊不对，这是您的阿萨姆红茶。因为浓郁的香味更能体现甜点的甜味所以，请您也，和，这个一起……！」「没，没问题吗～！？　这么多甜点，不用两只手来端很危险哦？」「勇、勇敢面对困难才是英雄！就像赖恩和艾尼斯前辈一样我也要堂堂正正地试试看！」（然后――就像正义的伙伴一样，成为能让大家依靠的我！）「～～！　您久等啦！终极・极限・天马甜点天国来咯！！」「哇，一个都没洒呢！好厉害呀好厉害呀，居然把这么满满一盘都运过来了呢！就像英雄一样很帅哦～！」「是、是吗？　……嘿嘿♪――那么，客人。请您慢慢享用！」"
},

{
    id:1007,
    cnname:"源远流长冬夏青青",
    jpname:"遥か流るる冬夏青青",
    img:"https://patchwiki.biligame.com/images/umamusume/1/12/kolzynmnvl1idz3ns2fiznki53oke0v.png",
    gushi:"寄托了马娘巫女们思念的手提灯。在黎明前的神社境内，接二连三地增加着。相信着是她们、就一定能做到的火焰逐渐蔓延。「……真漂亮呢」那是能够消融隆冬之夜寒冷的，柔和的灯光。谁又在思念着谁的直率的心。思念着远处昏暗的山影。望着灯火阑珊的山峦。为了她们能够注意到。为了能传达给她们。这份温暖的美丽。点燃这纸罩蜡灯的每一个人，都还没有放弃那两人。"
},

{
    id:1008,
    cnname:"GLAD TIDINGS",
    jpname:"GLAD TIDINGS",
    img:"https://patchwiki.biligame.com/images/umamusume/7/79/lttd63ci6u0w58fcbw0p6b8w2cge5ez.png",
    gushi:"「原来你也会，露出这样的表情啊」听了气槽的话，成田白仁的耳朵立马动了一下。然后瞥了一眼，仿佛在说「你有什么不满吗」「我只是想说，这张照片拍得真好而已。因为在圣诞夜，就应该是这样的。我还觉得你会不怎么喜欢圣诞节呢……真让人出乎意料哦？」「嘛，因为不管吃多少肉都不会被姐姐说」「哈哈哈，那可真不错啊。就算是晨光也不会在圣诞夜泼冷水的吧」「还有……」白仁一边这么说着，一边抬头望向灯火辉煌的浪之塔。「偶尔这样也不错呢」「难得和你这么合得来啊……我也是这么想的」浪之塔反复闪烁着耀眼的光芒。成田白仁和气槽，又稍微眺望了一会儿那光芒……。"
},

{
    id:1009,
    cnname:"啊啊，多么华丽的一族",
    jpname:"嗚呼華麗ナル一族",
    img:"https://patchwiki.biligame.com/images/umamusume/6/62/51bdgxdt8j0m4lshlul6y10o0bbh1ae.png",
    gushi:"「这些肖像画都是我们家族的骄傲。是铭刻在历史上的功绩和奢华的荣耀」在高雅格调的楼梯上，响彻洪亮的声音的。站在满墙肖像画前的是一位少女。她的眼神给人一种奢华梦幻，但又玲珑凛然的感觉。「我的母亲和祖母也在这边。在无数比赛中获胜，并赢得URA赏。在我们家族也是杰出的光辉」白瓷般的指尖迅速在空中划过。那婀娜的右手附在红丝带舞动的胸前。「凡是一族之人，无人能够例外」这句话如风般刮过响彻整个楼梯。墙上那无数双眼，都注视着少女的背影——"
},

{
    id:1010,
    cnname:"邁向理想的薰風",
    jpname:"理想へ向かう青嵐",
    img:"https://patchwiki.biligame.com/images/umamusume/1/1e/dprk22socijsq8gy1vl1mkykstqoe9v.png",
    gushi:"这是一场关系到母女称霸橡树赏历史纪录的比赛。会场里充满了无数谈论，双肩上承担着巨大的压力。但是，“女帝”的身姿现身的瞬间一阵熏风仿佛要横扫所有喧嚣般吹过。她就连那狂风也置于自己的支配之下，迈着威风凛凛的步伐走向起跑点。亮着仿佛能令万物跪伏的锐利目光。仿佛要刺进皮肤一般紧握的五指。追求的是理想。想要的是胜利武器就是作为“女帝”的矜持。「——必定获胜」"
},

{
    id:1011,
    cnname:"烏菈菈之歌．Passion♪",
    jpname:"うららか・ぱっしょん♪",
    img:"https://patchwiki.biligame.com/images/umamusume/e/e6/s6y1vyjt42yx6it1xrct5g92pp9fm9e.png",
    gushi:"「全～新～的～胜负服～♪目标就是比赛一等赏～！」「wakuwaku～穿上胜负服～♪wakuwaku满满地跑呀～♪」「piu piu♪　biu biu♪下定决～心　ba biu——！」同一个班级的她，好像在唱着什么。虽然已经是每天司空见惯的光景了，但今天却十分在意那样的她。「……那个是，什么歌？」回过神来的时候已经在和她说话了。太过于高兴了，使得胸口深处隐隐作痛。「这个啊～是胜负服之歌哦！伴随着这首歌一起跑步，特别让人期待呢！下定决～心　ba biu——！」跑步是，令人期待的。因为快乐，所以就唱。多么单纯——直接的想法啊。「——真好啊」快乐的心情，我明明不知何时早已忘记了。「那，一起来唱吧？1，2 就要开始咯！」「哎……那个、」「1，2！　piu piu♪biu biu♪　下定决～心」「ba，ba biu——……」「ba biu——！哎嘿嘿，下次的比赛也好期待呢！」——真不可思议。和她一起试着唱起来的话，愉快的心情如泉水般涌出。是啊，比赛是一件让人期待的事情。不要想得那么复杂，我也，试着单纯享受比赛吧！"
},

{
    id:1012,
    cnname:"Hurray Hurray☆Princess！",
    jpname:"フレフレ☆プリンセス！",
    img:"https://patchwiki.biligame.com/images/umamusume/b/be/poukstq2zs1ztc1di223pxjb8zuxuut.png",
    gushi:"只要有一瞬间露出破绽就会陷入大危机。在强敌的逼迫中，突然传来的声援……！这简直，就像是——『Prinfigh！　别输啊！』小时候，把我在电视机前的加油声化为力量与恶势力对抗的她——『就是那里——！　上啊——！Prinfigh）——！』展示了闪耀希望公主的身姿的那个……！『去吧——！　Prinfigh——！』那么答案只有一个。作为公主，绝对的……绝对——「会输……怎么可能啊啊啊——！！」"
},

{
    id:1013,
    cnname:"Outfit as No.1(No.1的衣装)",
    jpname:"Outfit as No.1",
    img:"https://patchwiki.biligame.com/images/umamusume/7/7a/kcu2vog109zjxyyfyvk8n2dvnwq7o6b.png",
    gushi:"喜欢蓝色和白色。既清爽，又鲜艳。不但有气质，而又不做作。是我最想让我成为的色彩——「嗯，果然这个组合是最棒的」服装搭配好了。褶边整理好了。裙褶也打理好了。蝴蝶结两侧的比例也达到完美平衡。姿势好了，笑容也好了！无可挑剔的『休息日的优等生』！「重要的出行……不穿最有气势的『胜负服』去可不行呢，对吧♪」"
},

{
    id:1014,
    cnname:"同處的幸福",
    jpname:"そこに“いる”幸せ",
    img:"https://patchwiki.biligame.com/images/umamusume/0/09/fbgz671txn5gt9b2iruplijha8ba1g1.png",
    gushi:"某人气赛马娘偶像的签名会现场。手里握着新出的专辑，爱丽数码排在队伍的最后尾……。「等，等一下，糟了！看不到现实的光晕（身后散发的佛光那种）了……！？咿呀哦哦哦哦～～！！」「我，正在同一个空间呼吸着同样的空气！？感激不尽呀，感激不尽呀～！」「发啊啊啊～～！？等，我的位置正在一点点接近！啊哇哇，比穿夹克的时候还要唔（美）丽……！」「……咕那！　正处于升天五秒前！什么叫“尊之领域”！的存在啊……我的推她就在那里……！」「……哈！　冷静下来数码炭！这是让你神游的场合吗！不好好模拟一下怎么行！」「若无其事，不留印象，深藏功与名……请签名→『一直都在为你应援』→迅速离场……好了！」「如果在这里违反了礼仪，签名会的存续将会受到威胁……！为你存在于那里献上最大的感谢！……我去了！」飒爽出席了签名会的爱丽数码。那个背影，感觉，看上去比任何时候都要高大，有力……"
},

{
    id:1015,
    cnname:"夜之曙光、天之祥星",
    jpname:"夜に暁、空に瑞星",
    img:"https://patchwiki.biligame.com/images/umamusume/d/dc/k156sjvrvcm1ji6jydjzpccqd3vilzv.png",
    gushi:"「喔喔，多么让人欲罢不能啊！这份打动我的美丽！也许你就是我的莱波雷诺吧！」「姆姆！　织姬小姐现在正穿着的振袖和服！和我预知梦中看到的图案一样！好运的大吉福神！　白兴大人的指引！」「啊哈哈哈——！　织姬小姐真漂亮啊！我知道了，你肯定你吃了很多年糕吧！？肌肤都是软软儒儒的呢！待会儿要一起吃年——糕——哦！」「新年这么快就变得吵吵闹闹了啊……。……哈，今年的未来也好让人担心」「哈哇哇哇哇！　对、对不起～～！摔倒了变得停不下来了～！让一下!让一下!～～～！！」「哎！？　别、别过来……！」"
},

{
    id:1016,
    cnname:"雪晶之日",
    jpname:"スノウクリスタル・デイ",
    img:"https://patchwiki.biligame.com/images/umamusume/5/58/j2zkpbiqa2mehb9s0obm9b80yuia7hp.png",
    gushi:"「是雪呀～～っ☆★看呀看呀Maya，纯白的哦～！」「呀～～っ♡厉害了呢Mabe酱，来玩些什么吧！？」「首先当然是一起打雪仗啦☆yeah yea～h★」「咿呀，好凉！好—— Maya也要反击了哦☆」「我可不会输呢～っ！看招看招，arve——lous——☆★」～3小时后～「呼～☆超级marvelous地战斗了呢……★」「是呢，Mabe酱！但是，是不是有一点点～玩过头了呢～……」「玩『过头了』……？那种事不存在的不存在的！」「哎哎～已经玩了好久了吧？」「因为因为，雪是会消失的东西吧！」「嗯，春天到了就会融化消失了吧」「那就要，现在、现在、现在……！『现在』不玩不行！这marvelous的一瞬，一直一直延伸……更加更——加变得marvelous ☆★」「好像确实是，这样……！？好～！Maya也要更多更多地玩☆」「啊哈哈哈哈！直到雪融化之前，marvelous☆这样的话一定，就算雪融化了世界上的春夏秋冬也会变得marvelous★！扩散吧！marvelous☆★☆」"
},

{
    id:1017,
    cnname:"跳吧、叫吧、嗨起來吧！",
    jpname:"おどれ・さわげ・フェスれ！",
    img:"https://patchwiki.biligame.com/images/umamusume/5/53/1ojv6ag03e7vhzu8xu53eztaqfbvuny.png",
    gushi:"「Thankyou 来到这里！D——J————就是……人————家——————！！」＼ yeaaaaaah！！／「牙白～☆　就是现在，优胜之时！真的大家都来了呢、燃起来！？那么，像往常一样的这个…………来了哦？做了哦！？神了哦～～！？」＼神了哦～！／「OK ○(maru）～～♪燃起来燃起来燃起来～～！来吧右边……哟一啾（感觉很爽）——！？」＼哟一啾——！／「左边的座位～！　哟一啾～！？」＼哟一啾——！！／「中间！　哟一啾～～☆」＼哟一啾——！！／「这里的全员！哟一啾哦哦～～～～！？」＼哟一啾哦————！！！！／「好耶～☆　好耶好耶的好耶过头了！真是的～人家，变得最喜欢大家了♪话——说，什么“变得”！　早就最喜欢了！嗯那,今天大家要一起到最后哦！最强最棒的Live、START拜托～☆」"
},

{
    id:1018,
    cnname:"萬聖夜大鬧一場吧！",
    jpname:"やったれハロウィンナイト！",
    img:"https://patchwiki.biligame.com/images/umamusume/0/02/olw3dfqchd0wvwxwdgvt11t8llqunam.png",
    gushi:"bububu～～～～～！！终于醒来了……。3只可怕的木乃伊……！《韦驮天的祭祀娘》！——扯啥呢木乃伊・稻荷一！《用绷带把全部都包起来的溺爱沼泽》！——木乃伊・The・小海湾！然后是我！　《浪速之最速》！——白色闪电・玉藻木乃伊！因为速度太快，飘动的绷带看起来就像闪电一样就是由来！咋样？　很帅吧！那么……能赢过我们吗？“木乃伊猎人・小栗帽”！……喂 在那里悠闲的吃个啥南瓜派呢！？有没有在听哇！明明好不容易才有人来玩……啥？　想听我再说一遍？我才不说呢！　多羞耻啊！"
},

{
    id:1019,
    cnname:"兩道高貴之光",
    jpname:"ふたつのノーブルライト",
    img:"https://patchwiki.biligame.com/images/umamusume/0/0a/sm19z38vj6ux9xvuoya6yrscck8j74x.png",
    gushi:"直到天涯海角，直到穹顶尽头。「我不会输给任何人」「我必将获得胜利」无论何处都能飞往，无论何处都能跑向。「我将会抛开你向前去」「我会一直注视着终点」——这就是。「我会让你在我身后伴舞」「就算输了，也请你不要哭」以光辉为目标的，赛马娘们的故事。"
},

{
    id:1020,
    cnname:"今晚隨華爾滋起舞",
    jpname:"今宵、円舞曲にのせて",
    img:"https://patchwiki.biligame.com/images/umamusume/4/4a/p8yji1mt5ibgwjm23n6vndls7bmwqb4.png",
    gushi:"「光辉灿烂的舞会吊灯。镶嵌着金丝刺绣的绒毯。绚烂至极的装饰。这些全都是荣华富贵的象征啊······但是，这个舞会是一流之由来却另有所指」「那是不死鸟的羽毛？　黄金蟹的标本？天马座的天顶画？　太阳的雕像？不，无论哪个都不是。让这舞会的会场变得一流的······那就是——」「「King Of Gorgeous！」」「只要是我在的地方、就会成为一流的空间！」「「King Of Magic！」」「响彻世界尽头的名声！那就是我――！！」「「King Of Kings！！」」「哦——吼吼吼吼！感谢王之存在吧！！」"
},

{
    id:1021,
    cnname:"三倍甜蜜☆假期",
    jpname:"トライフル☆バケーション",
    img:"https://patchwiki.biligame.com/images/umamusume/2/2e/qn0xtf9szfj8spuxl9uypxpjakpf57h.png",
    gushi:"？哎？哎哎哎！？为什么我在第一个啊啊啊！？」（第一当然是我的习惯，但这次不按我习惯也没关系吧……！）「等一下，特别周！　那是尾巴！别揪啊……啊啊啊啊阿！！」「哎哎哎哎，丸善小姐，怎么摆好了pose……难道你们这是在拍照！？」（哇哇哇，别呀，这种姿势，被那家伙看到的话……！）「啊……啊啊啊啊……第一名忍耐不了了啊——」（咔嚓☆）「啊啊啊啊っ！！」"
},

{
    id:1022,
    cnname:"Head-on fight！",
    jpname:"Head-on fight！",
    img:"https://patchwiki.biligame.com/images/umamusume/0/03/j7br0d4jjytr9ok8vwqnk9uckvtzus4.png",
    gushi:"甩开甩开，比赛的胜者由我决定——什么的，这种天真的想法，本来不可能存在的。「哈……！　我就知道你会来的！」一种无法控制的压迫感从身体内侧袭来，我的后背微微颤抖。但，这是。（只是单纯的兴奋哦！！）谁也无法妨碍我的，最棒的瞬间。等的就是这一刻。不需要任何小动作，1对1对决——力量与力量的正面对撞。这怎么可能让人不燃起来呢。「……上了喔」这句连低语都算不上的嘟囔，让我不由得吸了一口气。……来吧，好戏刚刚开始。堂堂 正正。「—— 一决胜负！！」"
},

{
    id:1023,
    cnname:"走過轉角就是幸福",
    jpname:"幸せは曲がり角の向こう",
    img:"https://patchwiki.biligame.com/images/umamusume/4/44/5ziuse31eqyzojydayksa6l6og8ej3c.png",
    gushi:"「——那，那个。我们从不同的入口进去，在里面汇合的话怎么样……？」接着二人便兵分两路，向着那散发着甘甜香气，仿佛在向她们招手一样的蔷薇迷宫深处前进……。——这就是十分钟之前发生的事……。少女气喘吁吁地小跑着。不断寻找着，寻找着，却怎么也找不到。但是……。（加油……加油米浴……！绝对会是米浴找到的……）（就像那天，米浴所找到的那样……！）（我一定，会去找到的……！）经过转角的瞬间，少女兴奋的脸上绽放开了笑容。「……！　找到啦……！」"
},

{
    id:1024,
    cnname:"夢想真的會實現！",
    jpname:"夢はホントに叶うんだ！",
    img:"https://patchwiki.biligame.com/images/umamusume/4/4f/6dt9bwzbi7jxtstbxn7ukankec6bl5j.png",
    gushi:"绝对！绝～对要哭了。因为每当小时候想象这个场景时就要哭了啊。日本德比的，胜者的采访。但真是不可思议。真正站到这里的时候，眼泪却一滴也流不出来。因为，我不想忘记。蔚蓝的天空。满是客人的笑容和欢呼声。和最喜欢的朋友们全力竞争的，这些景色的——全部！如果流泪了的话就太可惜了。三人约好一起奔跑，互相鼓励，谁也不想输，硬是跑到了终点……跑到了梦的那边嘛！「我就是，在这场最棒的德比中获胜的赛马娘，胜利奖券！！」并且，梦的前方，还在一直延伸到很远的地方——！"
},

{
    id:1025,
    cnname:"令我靜靜燃燒努力的事物",
    jpname:"押して忍べど燃ゆるもの",
    img:"https://patchwiki.biligame.com/images/umamusume/a/ab/hcqwcin78nvxn616bwtrtk1avilcwi5.png",
    gushi:"身体的练习不仅只是练武之道，更是通达所有之道。跑步、跳舞、唱歌，再加上礼仪。物皆不练而无优也。那一天，在众多强敌中获得了一等的荣耀。站在舞台中央，既是胜者的荣耀也是责任。应该用心去对待。发声的基础在腹部。把力量藏在丹田之中，脚心踏立于地面之上。观众们也气势万丈沸腾起来。在落幕之际，握紧双拳大呼。「——押忍！！」我的朋友・樱花千代王，吓得身子一缩，但，观众、表演者、大家皆为喜笑颜开。经过一番深深的行礼之后，离开了舞台。"
},

{
    id:1026,
    cnname:"「要獲得疼愛唷」",
    jpname:"『愛してもらうんだぞ』",
    img:"https://patchwiki.biligame.com/images/umamusume/3/34/d3sy0g3mhgkkgrs228vv21icyvwbyei.png",
    gushi:"盯——…………。「……嗯。这个以我的样子做成的玩偶、看起来真惹人怜爱啊」是这样吧。不管怎么说，『我』，是为了得到许多的爱，才被生下来的啊。「从现在开始 你们要去有许多许多人的地方呢。为了被珍惜着，爱着哦」「妈妈～、小栗帽很可爱哦。好想来抱抱啊～！」「啊……好像马上要出场了。拜托了呢、『我』。连我的份也一起，要好好地被爱着啊」——拜托了！"
},

{
    id:1027,
    cnname:"這就是我的賽馬娘偶像之道☆",
    jpname:"これが私のウマドル道☆",
    img:"https://patchwiki.biligame.com/images/umamusume/1/1c/44qco7ki6ore8hc2f1y44d0m43a2doa.png",
    gushi:"「大家，一起发出你们的声音～！让先让我听听飞鹰子的优点吧？」Lovely！　Smart！　可怕的毅力～！　「喂喂 最后那个！嘛，算了☆，接下来告诉我飞鹰子的名字吧！」即使逃跑也很可爱，啊～飞鹰子！「昂～、感觉不错☆　那么最后！向飞鹰子☆啾地示爱吧！」L · O · V · E！LOVE啾飞鹰子！！！！「谢谢大家！　飞鹰子、绝对会逃到赛马娘偶像的顶端大家看的！你们要尽全力追上来哦☆？（飞吻）♪」"
},

{
    id:1028,
    cnname:"狂熱冠軍！",
    jpname:"パッションチャンピオーナ！",
    img:"https://patchwiki.biligame.com/images/umamusume/7/7f/2z90dwtkyuvl7o68eljbmtv4nl5vdke.png",
    gushi:" ——神——鹰！　神——鹰！　神——鹰！！在像是怒号的叫喊声中迎接的，是舞台上一个晃动的影子。「红色拐角！　唔喔喔喔美国！身长163厘米、体重“秘密”磅！降落在擂台上的蒙面人，其真身是！」把大衣翻起……那个影子举起了拳头！「“怪鸟”！！神————鹰————！！」――哇！！！！「Are？ You？ Ready！？　你们是蓝色拐角！准备好舞蹈了吗！？来吧！　让心一起！　颤抖起来吧！！」"
},

{
    id:1029,
    cnname:"伏特加之道",
    jpname:"ロード·オブ·ウオッカ",
    img:"https://patchwiki.biligame.com/images/umamusume/2/21/phpbehb3yghcvrrnhjfv2t1icdbjjah.png",
    gushi:"——这么说来，“她”在哪里？ 在朝向直线的激烈赛跑中，当谁正在这么嘟囔着的时候， 档位（gear）已经提上去了。  「嘿呀！！　胜负才刚刚开始！」  她从后方的人群中飞快地飞奔出来，轻快地向前跑去。 像是在赛道滑行一样，超过了一个又一个的对手。  「嘿嘿！　我才是顶点……！」  忍耐着忍耐着，慢慢升温的引擎在绝佳状态下继续加速，然后——  「这就是我伏特加大人、给我好好记住了！」  引擎不停地、不停地、不停地转，直至胜利。 能成为传说的，总是能贯彻自己的帅气之道的人。"
}
    ],
    yili:[
     {
    id:1001,
    cnname:"起飞吧这个盛夏！",
    jpname:"トばすぜホットサマー！",
    img:"https://patchwiki.biligame.com/images/umamusume/e/e9/ob3ntla985igga3uny6ner6ktlzh8ke.png",
    gushi:"嗯？　看什么呢？啊！　这不是开沙滩派对那会儿的照片嘛！真够开心的啊～！！热火朝天地打沙滩排球、狂吃BBQ烤肉、看着夕阳沉入大海后尽情放了烟花！最后大家还一起仰望星空！速子和茶座也笑得特别开心呢。啊~真好想再去一次！……嗯？啊哈哈哈！　别摆出那种表情嘛～！虽然沙滩派对是已经结束了啊。但是我们创造的美好回忆可不会就这样结束吧？一起期待未来吧！！不只是夏天，还有春天，秋天和冬天！从现在开始，期待每一个季节吧！！"
},

{
    id:1002,
    cnname:"温柔的月亮",
    jpname:"優しい月",
    img:"https://patchwiki.biligame.com/images/umamusume/7/7e/i8836ebn2ydwtnqt8tusmb77xfhtfmi.png",
    gushi:"如果这个夜晚能持续一生该多好。被海浪抚平的沙滩一闪一闪地发着光，仿佛和白天的沙滩根本就不是同一个地方一样。就像是大海和星星一样，没有交集的蓝色和黄色，就像是，从这个夜晚捧来的一杯饮料一样。两杯勾勒出二人印象的无酒精调饮，气泡啪啦啪啦地弹跳着――原本热闹喧哗的大海，现在也像是在哄着落下的月光一样摇晃着波浪。我总是，觉得自己要比任何人都要闪耀才行。但是，如果是和你在一起的话，我也许保持真实的我就可以吧……。在海潮声中，映入眼帘的亲友的笑容看起来比什么都要温柔。这一夜的月亮，就像是太阳一般温暖着二人。"
},


{
    id:1003,
    cnname:"Something Blue",
    jpname:"Something Blue",
    img:"https://patchwiki.biligame.com/images/umamusume/5/52/pzkrcmljyubihj7hqcyk9t6r8q0tstj.png",
    gushi:"良辰吉日，良辰吉时。她摸了摸集束着色彩的缎带，把它们在手指上绕圈圈 仿佛在等待着谁。传来的脚步声，仿佛比平时都要开心，却又更要奇怪。「你到底在闹什么呢。真的是……笨蛋呢」透过面纱的缝隙间看到的是，喜悦满面绽放的笑脸……。「真是的，为什么你比我还高兴呀？……明明只是和胜负服结合了一下而已……哼哼」不过我能理解她的心情。因为今天的我是最闪亮的嘛。不过，你应该是知道的哦。……光是这样，还完全完全不够的。是的……今天是良辰吉日，良辰吉时。奶霜色的翻飞只有一瞬。「请保留最美好的笑容吧。……我们的终点还在前方呢」"
},


{
    id:1004,
    cnname:"Unyielding resolve",
    jpname:"Unyielding resolve",
    img:"https://patchwiki.biligame.com/images/umamusume/9/99/8vjnnni8cruzrm0zjwpmrpt8ylfs1oq.png",
    gushi:"深深回响的蹄铁之音。仿佛在周围回荡着一样，包裹着全身。……吵嚷声――慢慢地变得，热烈起来。目标、想要得到东西、想要到达的地方。眼瞳中寄宿的火焰，怀抱的斗志都没有差异，那就一起在这绿色中奔跑吧？「No way」谁也……不会让给――谁也不想让给。能够站在那个地方的只有一个人。奔跑吧，奔跑吧，奔跑吧。和了不起的我们跑到底吧。这样才能让这个地方、甚至这个世界，高涨起来吧。"
},



{
    id:1005,
    cnname:"凯斯奇迹",
    jpname:"ケイエスミラクル",
    img:"https://patchwiki.biligame.com/images/umamusume/1/1e/gwggozrgb1s2fg5bfdfiy11hlyrnuue.png",
    gushi:"「那么，下一首吧。这首歌……大家，听过吗？」「嗯！生日时唱的歌—！」「嗯，是庆祝生日的曲子呢。表达恭喜，表达谢意。但是，最初的时候其实好像不是这样的曲子。并不是为了某个特别的一天、而是歌颂『早上好』」「是那样的吗—？」「奇迹姐姐，早上好—！」「啊哈哈。嗯，早上好啊。那么这次就来试着跟着钢琴声来打招呼吧」「——无论你我，都一定能够迎来崭新的早晨的。所以呢，夜晚在床上睡觉时如果感到寂寞的话，大家就想起来我们曾经唱过这首歌吧。接着，试着这么想『睡觉并不是因为黑夜来了。而是为了在早晨喊出早上好』」黑夜只是暂时的。因为等待着你们的、应该是温暖的未来。"
},

{
    id:1006,
    cnname:"向着那谁也不曾知晓的风",
    jpname:"誰も知らない風へ",
    img:"https://patchwiki.biligame.com/images/umamusume/5/5d/tuk1f1zzmvr0blhcpti0ctt7gq918ml.png",
    gushi:"曾制霸过G1的众多强者集结于今日的比赛。而另一方面。也文摄辉还没有过什么特别突出的成绩。这时并没有太多人注意到她，也不是没有理由。但是，人们很快就会知道。轻视微风【Zephyr】是多么错误的一件事。「――哈啊啊啊啊啊！」也文摄辉稍早的开始了冲刺。她的样子，简直就如同疾风一样。在第四弯道的时候，她排到了第三顺位。之后进入直道的她一马当先地冲在最前面。自由的、比任何东西都要快的风在驰骋着。就像那一天，眼中所饱含的憧憬一样。――烈风不曾允许任何人靠近。「……这就是，那阵清风所看到的景色。多么舒爽的一阵清风啊」「但是，我还只是在风道的途中。这里今后也不可能是风平浪静的吧」「真风就在这前方。我要比任何人都快地，速度吹过」回到终点板前面的她，将右臂伸向天空。――风吹过草地。那是祝福的青风。"
},

{
    id:1007,
    cnname:"天まで焦がせ祈りの火",
    jpname:"天まで焦がせ祈りの火",
    img:"https://patchwiki.biligame.com/images/umamusume/4/49/a6yn3asdxpjwh6o9mcyuvtru6clbxa0.png",
    gushi:"神马们的『想撚』的一幕练习风景――「八重无敌简直就像没有温度的火焰一样……在堂堂起舞着……太精彩了。我也特别想向你学学看有没有什么秘诀呢？」「没有，我如此经验尚浅难以能称之为秘诀――只是，在舞动之间我能感到一股不可思议的热量……」「原来如此。……简直就像是『灭却心头火自凉』一样吗」「如果能达到这种境界那真就太荣幸了。……哈哈，我就是一投入进去就会变成那样的性格――我一直以为这是坏习惯但如果能利用这点的话说不定会成为我的武器呢」「嗯嗯，一定……」「那么，在这名为八重无敌的熊熊燃烧的烈火面前我发誓一定会以不动如山般的心去完成使命……！就算烈火烧焦我身到恰到好处我也定会一刻不停地舞动到底的……！！」「哼哼哼，真是了不起的气魄。但是，如果被烧焦到恰到好处的话就麻烦了呢……我们来练习不会变成那样的安全的跳舞方法吧」「……押忍！！」"
},

{
    id:1008,
    cnname:"蹦出来啦！恐怖的魔王军",
    jpname:"とびだせ！恐怖の魔王軍",
    img:"https://patchwiki.biligame.com/images/umamusume/e/ea/bhig5fenx4b729au4o10rn95kd4e92h.png",
    gushi:"『Windy酱的魔王城计划书』＜魔王城的设定＞魔王Windy酱的恐怖魔王城！踏足于城堡者とん会遭遇到恐怖到不得了的事情，而且会陷入恐怖的zundoko（neta出自无敌超人扎博特3）！！＜形象＞・使用1间教室！！・全部陷入黑暗！　在墙壁上张开黑幕布！　→暗黑的魔王之城又黑又恐怖！・最终boss★★Windy酱魔王★★・不跨越诸多试炼的话　就到不了魔王大人所在之地！・通往魔王的道路错综复杂　完全变得不知道身处何地！・试炼的种类　→从装满可怕陷阱的箱子里寻找钥匙　→和妖怪们战斗＜怪物候选！＞・巨大的妖怪　※总之就是大得可怕！・南瓜幽灵　※漂浮・恶魔　※被抓到的话就会被紧紧束缚！・僵尸　※被咬的话就会被变成同伴大家陷入恐怖的zundoko的魔王军的统治开始了！！"
},

{
    id:1009,
    cnname:"TT Ignition!",
    jpname:"TT Ignition!",
    img:"https://patchwiki.biligame.com/images/umamusume/b/b6/k7nybsoug0tgw98ufyrtggwckistxki.png",
    gushi:"双涡轮今天也在训练路线上全力奔跑。「唔……呼……哈……」但是，一直这样全力奔跑的话。每绕一圈，跑步速度就渐渐慢下来。「喂，双助推器！稍微休息一下吧？」「是双涡轮！比起那个我去再跑一圈帮我好好计一下时，帝王！」「游戏里也是这样的吧。努力的话，只有努力了才能变得更快吧！放弃什么的，绝对不要！」「又要使出像游戏一样的技能了吧！要上了，涡轮全开啊啊啊！！」双涡轮再次气势汹汹地开始加速。但是，马上就开始失速，在那摇摇晃晃地尽管如此，那还是一个劲地向前跑的样子——「……果然，还是很帅呢」"
},

{
    id:1010,
    cnname:"超very good若有心，则为樱心",
    jpname:"チョベリグ心あれば桜心",
    img:"https://patchwiki.biligame.com/images/umamusume/b/b3/4z96jj0wdxbivyz62u3ftnmsw5gj9ep.png",
    gushi:"『超very good若有心，则为樱心』（出自「一场白热化的战斗」）就像有些人因为憧憬着最强的精神和生活方式而跑步一样、想成为憧憬之人那样的力量的心情认真对待的话就会结果就是这样的意思。（解说）正因为有憧憬的存在我才能坚持努力到现在。所以，这次轮到我成为憧憬的力量了！为了能尽情地享受热情――我，要认真地去打倒憧憬！"
},

{
    id:1011,
    cnname:"和我們一起抓住夢想吧！",
    jpname:"私たちと夢、掴みましょう！",
    img:"https://patchwiki.biligame.com/images/umamusume/a/a0/m6fke6odunjciivko1rtrdzcpbhnavg.png",
    gushi:"『成为日本第一的赛马娘』是我的梦想。这是我和妈妈约好的，重要的梦想。但是，我的梦想就像寒冷的晨雾一样。成不了清晰的形状，仿佛只是一种无法实现的憧憬一样。一直在拼命地，试图抓住那些无法抓住的东西。——但是。许许多多的相遇，让我的梦想逐渐变得清晰可见了！与对手的热血比赛，不得不跨越的障碍。痛苦的事，悲伤的事。高兴的事，开心的事。这一切的一切，都让我的梦想逐渐具象化了！你也有憧憬着的东西吗？有不能让步的愿望吗？一起去追寻吧！好好地，去抓住你的梦想吧！"
},

{
    id:1012,
    cnname:"闪闪发光的奔跑∞",
    jpname:"キラキラカケル∞",
    img:"https://patchwiki.biligame.com/images/umamusume/4/49/p1zlqgvxhwm9xsnqmtw74mgmwxwyzie.png",
    gushi:"因为多伯前辈太过温柔了，所以想了太多烦恼了太多吧？——为什么你会知道？那是因为神鹰被前辈的温柔为别人面面俱到考虑的这些地方所帮助了很多啊！！「——既然如此，比赛开始de——su！」红色场角，入场。特雷森学园的怪鸟，蒙面・神鹰！对战对手，蓝色场角。目白家的大小姐，正在烦恼中的・多伯前辈！规则很简单！倾听多伯前辈倾诉，和多伯聊天，让多伯前辈展露出笑容的话就大・胜・利！……哼哼哼，我可一点都不觉得自己会输de——su！「要问原因的话，神鹰只要带上面具的话就充满了元气、勇气、无敌！　所以说……！」"
},

{
    id:1013,
    cnname:"把這股意志傳出去吧！",
    jpname:"届け、このオモイ！",
    img:"https://patchwiki.biligame.com/images/umamusume/3/32/3h391u70iazd56rjx5nsoppknf2rfmv.png",
    gushi:"时而责骂，时而鼓励、分担。就像是这样，你总是支持着谁。就算是今天，你也在为了帮谁一把而站在观众席上俯瞰着世界。挥动着超过10kg的团旗,不论嗓音有多么粗暴大家的视线始终都注视着比赛。你所在的地方，是光照不到的阴影。但即便如此也不管不顾地用尽全力，始终尽好自己的职责。因为你坚信着这就是正确的。因为你把那个作为骄傲高举着。「加油啊」猛然，脱口而出的话语。那几乎就像是要被日常所淹没的，细小的声音。传达不到任何人的 渐渐消失的声音。就算这样……你依然回首。挥旗的手臂，鼓励的声音都没有停止。仅仅是一瞬间，像摇晃的火炎般的笑容……浮现于你的脸庞。"
},

{
    id:1014,
    cnname:"讓世界更加☆美麗",
    jpname:"世界にもっと☆マーベラス",
    img:"https://patchwiki.biligame.com/images/umamusume/b/b9/oplhzre7oqsroo9d2vnvkt2xrclsst5.png",
    gushi:"兴奋地沸腾起来的观众席中，有一位男子，用颤抖的声音自言自语着。真的，等了好久啊……明明是被期待的，也获得了加油助威，却没有取得结果……和我那么像。但是，那个孩子赢了……正因为她相信自己，没有放弃啊……“——传达到了吧，我的不可思议（marvelous）☆今天的你也非~常棒（marvelous）哦★☆★”男子的脸上，热泪盈眶。他终于注意到了，从一开始就存在于此的真实——“原来我，也很棒（marvelous）啊……”就这样，世界上又点亮了一盏美丽（marvelous）的灯。"
},

{
    id:1015,
    cnname:"爆快！最快！花之風暴！",
    jpname:"爆速！最速！花あらし！",
    img:"https://patchwiki.biligame.com/images/umamusume/5/58/f56hnzc2k2197ljrcmohcv5rmkzbg4s.png",
    gushi:"「面粉！！　黄油！！　面粉！！黄油！！　奶油！！　奶油！！」菜谱也是，温度也是，那算什么。这些东西在她面前都毫无意义。有的只是，爆速，爆速。「呜啊，奶油粘得鼻子眼睛嘴里到处都是！！……嗯——非常的美味！！」「那么这就是最后的配料了！！！樱花、樱花、樱花ーーーー！！！」豪放飞舞的花之风暴。爆速地盛开，整个厨房都染成了樱色。「――好！！　这就完成了！！这简直正是爆进！！世界最速甜点！！」如果她一脸满足的递过来的话，谁都会忍不住露出笑脸接过来吧。手上沾着奶油，衣服上也沾满了樱花瓣……这也是一种可爱吧。「哈——哈哈哈！！　那个表情！！嗯嗯，嗯嗯，我懂的！！这就是大满足对吧！！」"
},

{
    id:1016,
    cnname:"照亮夜晚的酬神舞",
    jpname:"宵照らす奉納舞",
    img:"https://patchwiki.biligame.com/images/umamusume/7/7a/eqbgywlmxpmnu0ovdkeqpjesso8qrxj.png",
    gushi:"轻妙的旋律为舞者们热情伴奏。乘着琴声回转扇子，夜空中的月亮随之映出缺口。「哈，哈啊！」灯笼的光亮辉煌炫目。观客们的眼睛闪闪发光。然而表演舞蹈的那位少女，却在望着比那更远的远方。（好好地完成了呢。……但是，这样的话就和至今为止的我没什么不同了！）「更加……更加！」「雪之美人酱，飞舞起来了呢♪好——可怜也要！」「两人都逐渐升温了呢——嗯，我也要……！」追赶，赶超，伴奏也在继续着。随着少女的舞动流转，晃荡的祭典趣味浮现而出。「从现在才刚刚开始！我才是，祭典的主角呢！」无论是谁都在笑着，无论是谁都在继续。今宵庆祝舞台久久持续。繁华程度连华都不相让……。"
},

{
    id:1017,
    cnname:"內心與雙腳都溫暖",
    jpname:"心と足元は温かく",
    img:"https://patchwiki.biligame.com/images/umamusume/7/77/5jie04ocajpaiijlfic61cwwaw7pq2z.png",
    gushi:"蹄铁订单表・订单 No.0723586———————————『姓名』目白麦昆『尺寸』根据测量值0.1毫米单位调整『理想材质』株式会社UMAGANE制铝合金『其他要求』比样品75g更重 希望有80g。由于想增加负荷的关系，请对铁头厚度进行设置调节。这只蹄铁在日常训练中会经常使用，所以我想请您准备一打儿同样的蹄铁。完成品将在今天内再次拜访并领取。「……完成了。麦昆小姐的蹄铁，这么下单也许最佳吧」「嗯，十分感谢！为了配合我而调整重量什么的，你观察的真仔细啊」「我让他们去精心制作了呢。因为用蹄铁也可以改变未来。而且对赛马娘来说，它是不可或缺的伙伴」「嗯嗯，我有种它会成为一双好蹄铁的预感。哼哼……真让人期待它完成啊！」「我也很期待……特别地」"
},

{
    id:1018,
    cnname:"眾星齊聚",
    jpname:"集まってコンステレーション",
    img:"https://patchwiki.biligame.com/images/umamusume/b/b6/q30uf827x9r1m9efst4lgbl356ad44e.png",
    gushi:"是裙子上装点的装饰品，还是聚光灯？让她们最闪耀的是——「……嗯，很可爱嘛♪涡轮，给你戴上胸花哦～」「哦哦！　天资，加油了！」「两位，都准备的……很完美呢。差不多摄影该开始了」「噢噢～！　诗歌剧和狄杜斯，都很适合穿礼服呢……呼姆呼姆♪」「嘿嘿～♪　天资也很漂亮哦！」「漂……！？　不、不要恭维我了！来吧，准备好要拍了哦！」「好了！　大家，集——合——！」——星星们一颗，又一颗地连了起来。看啊，如果把她们连在一起的话，会比任何东西都闪耀。"
},

{
    id:1019,
    cnname:"痛快！決勝球！",
    jpname:"爽快！ウイニングショット！",
    img:"https://patchwiki.biligame.com/images/umamusume/9/9e/2oxdl4siluw52fzxkzczjvji66svv94.png",
    gushi:"「最后一枚是……外角偏低的7号屏。剩下了不擅长的路线啊。……不过只要放松，正确地活动肌肉的话……能行！」「听好了，三角肌？　要放松多余的力量，在释放之前积累能量。为了使身体中心轴不移位，也要拉伸比目鱼肌！好了……拜托了，大家！！」「就是那里！！」（嘶砰————！！）（噼咯哩咯哩～～♪噔，噔蹬，蹬，蹬，蹬蹬蹬，蹬～～♪♪♪）「成功了——！　Perfect！我的肌肉！感谢你们按我所想的用力了！　之后喝点儿蛋白粉吧！」Welcome to 2nd stage！…………Are You Ready？「哎？还没结束吗！？……哼哼，不这样不行呢！继续接着上吧，大家！！」"
},

{
    id:1020,
    cnname:"敬請享用第一口！",
    jpname:"召しませふぁーすとBite!",
    img:"https://patchwiki.biligame.com/images/umamusume/b/b1/n8sddnqx01rln6nsb8zlfumi1kjg4eb.png",
    gushi:"♪buono（好吃）的胡萝卜婚礼蛋糕♪＜材料＞面团······胡萝卜  60根低筋面粉  9kg鸡蛋  120个砂糖  4.5kg黄油  6kg料理发酵粉  12大汤匙奶油······奶油芝士  7.5kg牛奶  600ml砂糖  2kg♪来招待很多～朋友们吧♪「因为加入了很多～的爱情，所以会特别好吃哦，训练员也吃吧也吃吧～！」「······呐、川上。那个，难道你觉得那是一人份？」「当然啦！　不愧是菱曙小姐，那种豪爽，作为公主都想学习哇～～！」"
},

{
    id:1021,
    cnname:"绝对皇帝",
    jpname:"絶対皇帝",
    img:"https://patchwiki.biligame.com/images/umamusume/1/19/fxvmsrc0n9fb52xo49a4k7fbkyycb81.png",
    gushi:"这条称帝之道的第一步，是奇迹么，还是说是必然吗――场上响起了震耳欲聋般的掌声。她从容不迫地站到了优胜者圈之中。瞬间响起了仿佛发狂一般的快门声。但她还是依旧，和往常一样摆出了堂堂正正的姿势。简直就像是，这次的优胜是约定俗成好的一样――她笔直地，用一根手指指向天空。「――首先拿下，一冠」这句低语，被欢呼声所淹没。传说，现在从这里开始――"
},

{
    id:1022,
    cnname:"Just keep going.",
    jpname:"Just keep going.",
    img:"https://patchwiki.biligame.com/images/umamusume/7/78/785ukrek7rmgoiysgcdc3akxe61wexv.png",
    gushi:"（——啊，肩膀开始变重了？腿也开始有点酸痛了。这样啊，是时候冲刺了呢！）在别人看来，她经过不寻常的努力，正在挑战着比赛。话虽如此，但她还是（两人的跑法，我看过很多了。跑法、习惯、冲刺时机，全都调查过。但，那是因为——）或许这就是被称为『普通的努力』吧。因为只是想战胜跑在前面的背影，所以大概这就是『普通』吧。（但要想获胜，光有这些还不够吧？必须要更用力地迈开腿——！）早就知道比赛很艰难。也体会到了胜利的不易。但是，这些都是理所当然的吧？所以用脚踢开泥土。为了胜利，追逐两个背影。「好——嘞！！　从现在开始、我也要开始“bang bang”的跑了哦！！」"
},

{
    id:1023,
    cnname:"與笨蛋一起笑",
    jpname:"バカと笑え",
    img:"https://patchwiki.biligame.com/images/umamusume/6/6a/fggivjcwkz8c7sf8ldalhxzvtpz85ta.png",
    gushi:"「啊 哈哈哈！！　紧张起来了！没准儿只有这次机会了！？」欢呼声夹杂着笑声，还有「又是那俩家伙吗」的温暖视线。这是常有的事，我也早习惯了——（……是啊。不管是我们还是谁也好，都有机会和可能）这么想着，脚尖用力了一下。……不可思议。全身上下都像是在告诉着我，我还能跑。这种叫什么来着。到底怎么能更好的利用跑鞋呢。「喔喔！？　善信、太棒太棒的太棒了！气氛超级炒热起来了！」啊，就是那个。……嗯，现在正是这种心情。就连观众席上的喧闹声也让人心情舒畅。能赢，向前跑，不要停下。尽全力跑吧！我对自己叫着。但是，说不定中途就会筋疲力尽——会让人感觉到这种不安。「善————信————！！！！要赢啊——————！！！」刚才的不安，被从背后传来的声音一瞬打消。竟然为竞争对手加油，你疯了吗。（谢谢你，太阳神）……啊，燃起来了。我的腿还能动。无论向着哪里，去吧，升档，升档，直到极限——！！「看吧，这就是我的大逃亡！！」"
},

{
    id:1024,
    cnname:"烏菈菈～的假日",
    jpname:"うらら～な休日",
    img:"https://patchwiki.biligame.com/images/umamusume/a/ad/72odynluobknxozj1qaobpvbvxnbtyg.png",
    gushi:"冰激凌之歌　　　　　演唱者·春丽乌拉拉冰激凌　冰激凌　冰激凌真是太棒了！冰淇淋玩偶　   更棒了！用爪子爪上来　摇摇晃晃但不会掉下去吃了硬币后　长大了些吗？强壮又　无敌的　超级冰激凌！冰淇淋使劲挤就会化哦但是玩偶就能变得软绵绵！（咬了 舔了 也没有味道！）冰激凌　冰激凌哪里都很棒！草莓和橘子味儿　蜜瓜、葡萄味儿　还有——「哎嘿嘿、变得想吃好多好多冰激凌了！一起——去买吧？」"
},

{
    id:1025,
    cnname:"B．N．Winner!!",
    jpname:"B·N·Winner!!",
    img:"https://patchwiki.biligame.com/images/umamusume/b/bd/ez8isgn9tpzae31oq4asv0f1jlrgftt.png",
    gushi:"剩余200米，正好过了开始的地点，亲友们再次集合。使用先行战术的胜利奖券，即使不回头也能感受到后方追赶的热情。「哈……哈……！　可恶……！」「呼……奖券……！」（开心！开心！好开心啊！想和大进和晨光，一起跑得更多！）但她为了甩开这两个好朋友，使出浑身力气，拼命喊叫。「呜噢噢噢噢啊啊啊啊啊啊——！！」（不想输，不想输掉，不会输！因为是那两个人，因为是好朋友，所以……！！）「绝对不让两个人一起，同时到达！！」"
},

{
    id:1026,
    cnname:"閃耀地飛身而出",
    jpname:"飛び出せ、キラメケ",
    img:"https://patchwiki.biligame.com/images/umamusume/9/9d/cr1hjd38ehyskhpqiar268h6p29ylz0.png",
    gushi:"即使在微风吹进的大门里，艾尼斯风神也在思念着家人「爸爸、妈妈、妹妹们，你们看啊。姐姐在努力哦！」开始冲刺，她用力跑了出去。不知道是不是因为反作用力，她稍稍向右倾斜了一点。(哇！不过没关系！)狠狠地踢了一下后脚，马上重新站了起来。接下来的瞬间，失误、家人、对手全都从脑海中闪过——「哈，哈，哈……啊哈哈哈！」微风虽容易吹起，但那却是如游戏般横扫芥草的狂风。"
},

{
    id:1027,
    cnname:"千紫萬紅中挺然的一朵",
    jpname:"千紫万紅にまぎれぬ一凛",
    img:"https://patchwiki.biligame.com/images/umamusume/1/1c/1czc4ojumm5senl6jpewnkyflsj7oeb.png",
    gushi:"「花即为心……」“啪”的一声，草上飞轻快地取下被剪掉的花，笑容柔和。「也有着这种说法呢～。插花就是把四季繁花，以最美的形体展现出来。而那个形体，大概就是心的样子吧～」突然间，她收起了满眼的柔和笑意，锁定目标……将最后一朵花也插进去了。「那么……您觉得如何呢？如果我的心能合您的眼的话，就再好不过了」纤细而又大胆。她那潜藏着斗志的娴雅的“心”，凛然伫立。"
},

{
    id:1028,
    cnname:"站上日本第一的舞台",
    jpname:"日本一のステージを",
    img:"https://patchwiki.biligame.com/images/umamusume/d/d8/m00arkg7eoat7huedkr3aqyuefpchwa.png",
    gushi:"「大大大、大家，一直以来这么热情的支持，真、真的十分感侠（谢）！」这么盛大吃螺丝的样子，令人忍俊不禁，会场内爆发出笑声。「人、人、也太多了……！」「小特，冷静一下」「就像之前练习的那样、没事儿没事儿！」也许是两个人的话让她取回了冷静，深呼吸了一下，坚定地向前看去。「今、今天为了能向大家传达更多的感谢，我会努力的！」她的话语引来一片欢呼声。欢乐的演唱会伴随着笑容开始了。"
}


    ],
    zhili:[
      {
    id:1001,
    cnname:"和你一起看泡沫",
    jpname:"君と見る泡沫",
    img:"https://patchwiki.biligame.com/images/umamusume/a/a0/ggeru36tsvckbldscomjcieu92nu0hb.png",
    gushi:"……我被拯救了。那温暖的手掌，触摸我所呼吸的世界。不被任何人理解也没关系。我的世界，并不想别人想象的那样，既不阴暗，也不冰冷，更不寂寞。所以说，希望任何人都不要来打扰我。这里是我唯一可以呼吸的地方。被打扰的话我会变得非常痛苦……。那双手掌从未试图将我从我的世界带走。而是将我的世界一滴不漏地轻轻包裹起来。今天我依旧在这个世界中呼吸着。然后，看着那耀眼的光芒。"
},

{
    id:1002,
    cnname:"#夏日 #新的自己",
    jpname:"＃夏 ＃新しい自分",
    img:"https://patchwiki.biligame.com/images/umamusume/e/e9/dz52nb42rnhchm686skrydcq30j8b1m.png",
    gushi:"教室里的女孩子们一边看着时尚杂志一边谈笑着。今天我也从教室的一头远远地望着那样子的同班同学们。我其实并不是没有兴趣。实际上，我也很憧憬这些热门博主悄悄地在社交媒体上关注了她们。但是，我觉得那里并不是我这种人能够踏入的地方所以现在只是默默地看着。如果真的越过那条线的话，急剧变化的自己会被大家怎么想呢――『随着流行随波逐流』『逞能』总是情不自禁在想这些事情。（哔咚♪）手机提醒我我喜欢的热门博主社交媒体更新了。「啊嘞……？　哎！？这是太阳神同学吗！？」是一直以来都明快又开朗的太阳神的照片。但是，今天的不太一样。很有大人的感觉，和以往不同的样子――『和平时不一样的人家！心情变得high了起来！』太阳神的表情不同于以往，清爽而又艳丽。她那份对改变的期待，传达给了我。让别人看到和平时不一样的自己。我曾经，觉得那是一件可怕的事情。我是不是，也稍微做一些改变比较好呢……。就算是一点点也好，从小事开始……。将视线上移，同学们正在翻阅着杂志对着Umastagram特辑热烈讨论着。「呐，那本杂志……我也可以一起看吗？」"
},

{
    id:1003,
    cnname:"All'alba vincerò!",
    jpname:"All&#39;alba vincerò!",
    img:"https://patchwiki.biligame.com/images/umamusume/8/83/fnilojzdx6tp10as50c5yv43vkc0bcu.png",
    gushi:"――太过戏剧性了。与其说是比赛不如说……仿佛看了一场歌剧一样。欢呼声、喝彩声，跌宕起伏，汇成了一首歌。是的这就是一首，共有全八幕的大型叙事诗。这毫无疑问就是大团圆【Good Final】――「此时此刻，让我在这里再次宣言！我才是真正的“世纪末霸王”！！」啊啊，听到了歌声。赞颂实现成就者的歌、赞颂世纪末霸王的歌――！"
},

{
    id:1004,
    cnname:"高级服装店・回忆",
    jpname:"オートクチュール・メモリー",
    img:"https://patchwiki.biligame.com/images/umamusume/d/df/qltixs8wdct8ybbpihntpp8cgxddjn1.png",
    gushi:"总算是，到达这里了呢。就给你五朵小红花吧。小红花、大红花，已经都为你咚咚地准备好了哦。发生了许多事，也做了许多事呢在最亲密的关系中也没有仁义的比赛。麻酱的漫画化作品创下了直逼百万的畅销记录。啊，我献给您的麻酱的人偶们那些孩子们还健康安好吗？因为接下来还有很多在等待着，所以建议确保好场地哦。数着手指头回顾的话，双手已经变得不够用了。过不了多久，就算把脚趾头加进去大概也会不够了吧。……哦呀哦呀？一副被猎人牵着鼻子走的表情呢。姆姆，你忘了吗。那可真是遗憾，把小红花全部没收了。用橡皮擦呀擦呀……很简单就消除掉了呢。不过请安心。只不过是又从一朵小小的小红花开始。没关系的。让你和我一起。成为新的回忆吧。"
},

{
    id:1005,
    cnname:"奔跑吧，奔跑啊，奔跑吧！！",
    jpname:"駆けよ、駆けよ、駆けよ！！",
    img:"https://patchwiki.biligame.com/images/umamusume/9/90/oqcfglat8i51pypmldaisbex6v64zq2.png",
    gushi:"『想驱』开始的地点由此可见『想燃』——燃烧『蹄板』，可以清楚的看到变成火星在空中飞舞的样子。「小栗帽，一直盯着天空发什么呆呢马上就要该轮到我们『想驱』了吧？」「不，突然······我也总有一天会书写『蹄板』并把思念寄托于某个人身上吧——在想这个······」「······那个时候的自己到底会怀着怎样的想法去书写『蹄板』呢？这么一想的话就考虑了各种各样的事······但是，就算去认真思考也完全不明白啊」「哈哈，都到现在了 就算怎么想也想不明白了吧！是吧稻荷？」「那当然～了！为了明天我们能做好的事，唯有尽自己全力所能去努力了撒！」「就是呀！不如说就抱着为了要在『蹄板』上这么写这种程度地努力去跑就好了呀！」「为了在『蹄板』上——····啊啊玉藻和稻荷说的对」是啊，现在单纯地跑就行了。只向着这双眼睛前方的那终点的所在地——为了将会到来的『那一天』为了尽可能多地把『谢谢』写在『蹄板』上——"
},

{
    id:1006,
    cnname:"任务『心之营养补给』",
    jpname:"ミッション『心の栄養補給』",
    img:"https://patchwiki.biligame.com/images/umamusume/6/61/k9vz8m0xp5k6su1pljb5v70sjv3aith.png",
    gushi:"美浦波旁开始用餐了。为了能够有效率的补充能量。她把葫芦干卷以一定速度默默地塞进嘴里――「波旁桑做的葫芦干卷真漂亮呢。呈现完美的圆柱体」「做的时候注意用了均匀的力度卷来着。如果可以的话，请你也尝一个」「十分感谢。我开动了」「波旁酱，可以的话，可不可以和我的沙锅冻交换？」「也尝尝我做的炸鸡块吧！是我开套餐店的父母亲传给我的！」「我以爆速做成的三明治，也请务必尝尝！」「……大家，十分感谢」收到了许多料理的波旁，静静地微笑着。（通过刚才的互赠料理，感觉到了一股特别能量的充填）（我也想，让大家获得『愉快』的状态。但是，我是否能实现还不明……）美浦波旁情不自禁地抿起了嘴。――但是，当她看到其他四人的样子时，脸颊又再度舒缓了下来。「推测对于这种能量最重要的是，……此刻的『直率的笑容』。任务『把元气回报给大家』开始」"
},

{
    id:1007,
    cnname:"绚烂",
    jpname:"燦爛",
    img:"https://patchwiki.biligame.com/images/umamusume/4/45/boeihcwgosuf1uqpky7n4rrhiai4qez.png",
    gushi:"贯彻的是至高。魅惑着的是艳丽。奉献出的是爱。那曼妙的身材只是为了奔跑驰骋而生。绀紫色的眼睛，仅仅凝视着无缺的荣光。菊、桜、橡、薔皆为了那份华丽而低下头。无论是嫉妒也好，羡慕也好，憧憬也好，斗志也好。抛去所有的想法。她仅仅是奔跑。然后获胜。――其名为"
},

{
    id:1008,
    cnname:"巧克力味的微笑",
    jpname:"フォンデンテで笑って",
    img:"https://patchwiki.biligame.com/images/umamusume/1/14/cpm5fx9hkg1anisb2rsr2rfwg0nbvsz.png",
    gushi:"大家，Buono～♪　今天的umains直播是要制作微苦但好吃的『黑巧克力』哦！其实呢，我一直在思考到底应该怎么教大家这个配方才好呢。因为，不～擅长吃稍微苦的东西的人也有很多呢吧？我想做的是，能让大～家都露出灿烂的笑容，像相扑锅一样的料理喔。……但是呢，看过了小小的英雄那个样子之后，我也想拿出一些勇气了。所以我决定，和大家一起，用相扑技去面对。因为我想用，这份我最喜欢的巧克力一起让大家和我一起笑着说 Buono♪哦！『好想吃菱曙酱做的巧克力呀～』『我也想吃菱曙的巧克力！』『好在意菱曙喜欢什么样的巧克力呢』……！　嗯，那个呢！这是我推荐的可可豆配比……啊，差点忘了说重要的事儿了。大家――情人节快乐！"
},

{
    id:1009,
    cnname:"阴晴不定的绝世佳人",
    jpname:"気まぐれ絶佳",
    img:"https://patchwiki.biligame.com/images/umamusume/6/68/a737iap5xxx2bfjolshxcpgs6laktc7.png",
    gushi:"她静静地走在，被皑皑白雪覆盖的石阶上。艳丽的尾巴和蕾丝伞随着心情摇摆，顺着爽澈的冬风听闻嘴中哼唱。突然，摄影师呼唤了她的名字。大大摇晃了一下尾巴的她缓缓地向这边转过身――令人窒息。伞的阴影落在那张美丽容颜上。那里零星绽放着红，和悄然露出的零星淡淡的白。那恍然望着身后的眼神，放松力气轻轻歪着的脑袋。还有那双举止得体地握着伞柄的手，夺走了他在我心中的印象。那份让人吃惊的美丽。在那里的明明确实是她，我却被迷得不敢相信到怀疑这点。――简直就像真的被施了魔法一样。不经意间和她交错了视线。她仿佛很惬意一般地眯起眼睛，笑了。「哼哼，完美吧？未来的大魔女可是会变换很多姿态的♪」"
},

{
    id:1010,
    cnname:"Are you merry?",
    jpname:"Are you merry?",
    img:"https://patchwiki.biligame.com/images/umamusume/b/b2/q129fntkopg7vqkj9ejpimr7yk0faqh.png",
    gushi:"临近特雷森学园圣诞派对前一天，气槽和富士奇迹正在商量着。「咳嗯……『圣诞快乐。为您今日光临特雷森度过圣诞节，献上真挚的感谢与欢迎』——首先，我想像这么」「嗯，气槽的诚意特别充分地传达出来了哦！不过如果考虑到这是在圣诞节，是不是有点过于死板了？」「……果然吗。不过一考虑到这是代表学生会在公众场合发言，就怎么也……」「气槽还真是，十分懂得TPO（时间·地点·场合）啊！不过呢，但如果这么想的话怎么样？如果要在圣诞派对上当圣诞老人的话，行为举止可得相符才行——」「——『喔 吼 吼 吼！圣诞～～快～～乐！』这种感觉哦！　好，轮到你了！」「什么！？　姆……姆姆……『呼呼呼，圣诞节快乐！』……这种吗！？」「嗯～～嗯，可惜！……比起Santa（圣诞）来说，更像是Satan（撒旦）？」「谁是恶魔啊！」「啊哈哈哈，就是这个！表情一下子生动起来了呢，气槽！……首先这是最重要的一点吧？」「唔……。……不，是吗。……是这样啊」「这样下去母亲可是会斥责我的——圣诞节可是，『快乐的』活动啊。这样的话——首先我要用心传达给大家，这是一个要『享受的』场合呢」「就是这样！嘿嘿，我也很期待圣诞当天哦，气槽」「啊啊。我会努力的」"
},

{
    id:1011,
    cnname:"TEIO・O・O！！！",
    jpname:"テイオー・オー・オー！！！",
    img:"https://patchwiki.biligame.com/images/umamusume/7/7c/t8t3uvzaq3cgssb3h6yyq7kvj416b39.png",
    gushi:"无论是比赛，还是其他时候当我遇到什么事的时候比起紧张，兴奋期待的心情总是占得更多。虽然总被说『好奇心还真是够旺盛呢』可其实不仅仅如此。完成任务之后、到达终点之后……只向着我的那种闪闪发光的感觉！就算是现在也很期待。在这场胜负的前方，到底会有怎样的光辉在等着我们呢！所以，要用我操纵的方向盘绝对——「让蓝色的围巾飘舞吧～♪要打方向盘了喔最强machine～♪」「TEIO——O——♪　TEIO——O——♪」「TEIO・O・O！！！」「真是的双涡轮！　人家明明在想正事不要随随便便编个奇怪的歌出来呀～～！」"
},

{
    id:1012,
    cnname:"委身于骰子",
    jpname:"一天地六に身を任せ",
    img:"https://patchwiki.biligame.com/images/umamusume/6/61/9f2dk8v59yv2hlepejml797bnyl7p1p.png",
    gushi:"所期望的是，那仿佛麻痹了的一瞬。尽自己全力可能简单地抓住那刺痛的、最高的舞台。等待着＜崛起＞的家伙们。我的命运掌握在敌人手中……就是那样的家伙。——审判之时。这一瞬，一起燃尽命运。倒下逝去的灯火们。啊啊，对了。为了这一瞬间，我才……「——正是因为如此，我才戒不掉呐」"
},

{
    id:1013,
    cnname:"诗歌剧碳☆adventure",
    jpname:"マチタン☆アドベンチャー",
    img:"https://patchwiki.biligame.com/images/umamusume/3/30/gu87cfmowuyx8ic0jf0fvj63c40ouon.png",
    gushi:"被故事所点缀的森林中，有两位吊着常春藤飞速移动的赛马娘——「我说那个啊——！　大树小姐！」「what's？　怎么啦？」「我，在这种情况下无论如何都想做……不，都想说的事？不不，都想叫出来的……？东西，无论如何都有啊！」「……！　I see！我现在也是，和诗歌剧同样的心情desu！」「喔喔！　那么，三二一我们一起……！3，2……1！」「「啊——啊啊～～～～～～♪」」"
},

{
    id:1014,
    cnname:"憧憬的景色",
    jpname:"あこがれの景色",
    img:"https://patchwiki.biligame.com/images/umamusume/4/41/08b42ixt4wahykpo6yykacnns5nw8fj.png",
    gushi:"曾经见过的，洁白的景色――新娘小姐莞尔一笑，于是周围也随之绽放笑容，大家都变得幸福满满。那个景色，无论何时都不会忘记。我也想那样带给大家笑容。将幸福想扩散一样传递给大家。那是一个小小的、令人向往的梦（neta角色歌）。拿出勇气，向前踏出一步。在踏出的那步前方，有着扩散开的笑容。那一天的憧憬，洁白的景色。新娘所看到的，幸福的景色。总觉得好像变得，更容易看到一点了……。「……想要更多，更多的笑容」从今以后也想让，大家更多的展现出笑容。然后，祈愿大家都能得到幸福——"
},

{
    id:1015,
    cnname:"Dear Mr. C.B.",
    jpname:"Dear Mr. C.B.",
    img:"https://patchwiki.biligame.com/images/umamusume/2/22/jw6edmk32xeq10hv6cw6q7jd19k1gag.png",
    gushi:"赛道是最糟的状态。明明如此，你却连泥都不沾地劈开马群，冲到了最前面。卷起的草坪空中飞舞的水滴甚至连前方的我们。在所有物体之间，缝进、扎透、抛下一切——被超越的时候，满眼看到的都是那清澈的天蓝色眼睛。谁也抓不到、谁也不能抓到一样地、自由地……。「Mr.C.B.，领先到达终点！三冠的初战，是Mr.C.B.获得了胜利！」在几乎分不清彼此的肮脏泥泞之中，只有她是特别的。她的举止简直就像是用手背擦去脸上的泥土的少年。轻轻扬起嘴角，飘然一笑。向着观众，向着宇宙举起手的姿态。让我甚至连被打败的事都忘记了，不知不觉下已经看得入迷。"
},

{
    id:1016,
    cnname:"Escorte étoile（明星领护）",
    jpname:"Escorte étoile",
    img:"https://patchwiki.biligame.com/images/umamusume/7/78/gb5auku3fdw3sua5xt72836e7y2zipu.png",
    gushi:"「……我说，从你那里能看到什么？」「过于不紧不慢通过的身影？还是说是谁扬起的灰尘？」「啊啊，那些人中可真是充斥着无聊啊。而且就像泥泞一样麻烦啊」「是就这样继续堕落下去……还是选择拼命挣扎呢……就是这么回事吧？」「但是，你还有第三个选项。抓紧这只手――」「带你领略无聊以外的世界哦」"
},

{
    id:1017,
    cnname:"SPECIAL DREAMERS!!",
    jpname:"SPECIAL DREAMERS!!",
    img:"https://patchwiki.biligame.com/images/umamusume/9/9a/tl59tg1sm4eb9bejpq3pay67n036w07.png",
    gushi:"「你们俩，觉得特雷森学园怎么样？真正进到里面，和想象的不一样吗？」「是的……如同斯佩小姐说的，完全不一样。对吧，北黑酱？」「嗯。完全不一样呢」「哎，这样吗！？难道说没有达到想象中那么好！？」「没有……不如说――」「比我想象得还要——快乐得多！不管是训练还是比赛，全都超出了我的想象！」「是啊是啊！　每天都像是在举办祭典一样，让我一直心跳加速呢！」「哈～～太好了……吓死我了，还以为心跳都要停了～」「但是……我和你们一样。新的事物一波接着一波……而且，还有许多让人兴奋期待的事情正在发生哦！」「连斯佩小姐都还没……！哇～！　怎么办，光钻酱！」「嗯！　接下来，我们到底会变成什么样呢……！」「啊哈哈！　让你们无法想象程度的兴奋正在等着你们哦！从现在开始，一直，越来越多！」「好！」「好！」"
},

{
    id:1018,
    cnname:"在小小的杯蛋糕中盛满思念",
    jpname:"小さなカップに想いをこめて",
    img:"https://patchwiki.biligame.com/images/umamusume/d/df/4pophmed4de651at5b2ldw6fb7sjefm.png",
    gushi:"重要的是，那小小勇气中的一片小小的碎片。稍微向前迈出一步的心情。把他们全部全部混合起来，温柔地烘焙，轻柔地包裹起来，再缠上丝带就大功告成了。然后再微微地，抬起头来……。「能……收下吗？」尽可能地试着微笑。虽然手还有一些，微微发抖。是因为想要传达到。是因为想让对方能够收到。"
},

{
    id:1019,
    cnname:"固執的市集",
    jpname:"いじっぱりのマルクト",
    img:"https://patchwiki.biligame.com/images/umamusume/3/3a/r149nvb3d3x376n1yjlezhatk1fzuqn.png",
    gushi:"你踏着星光闪耀的石板路前行。仅仅领先一步半，就好像在生气一般匆忙那纤细的腿就像是在缝纫一般，毫无停顿地拨开喧闹的人群，穿梭在熙熙攘攘的市场中。店铺门口充盈着光芒，闪亮的商品炫目而鲜艳。甜甜的热巧克力香味伴着肉桂的香气，温暖了整个夜晚。能在这样的冬日喧嚣中还能不迷失那小小的肩膀，无疑是你自身的功劳。「你在干什么呢，别走散了啊」她回过头，虚张声势地说道。我点了点头，又立刻转向前方。小心翼翼地前行，保持着仅仅一步半的距离，绝不再拉开更远的距离。装作没注意到她不时回头的视线，紧跟在她后面。因为一旦被发现了，这神圣的一步半就会突然消失了吧。沐浴着圣夜月光的你前行着。仅仅领先着一步半的距离，比任何人都要温柔慎重。"
},

{
    id:1020,
    cnname:"可爱的你，华丽的你",
    jpname:"かなし君、うつくし君",
    img:"https://patchwiki.biligame.com/images/umamusume/6/69/q4tkblgx47m9b42wu3itul6zubs8xr5.png",
    gushi:"用力挥动衣袖，就像要描绘半月一样……彩排时已经确认过灯光的位置，让泛起的红色最闪耀的角度――「嗯嗯、感觉不错♪」我脑海中描绘出的，我认为最可爱的可怜酱。期待着这样的我，为之加油的我，现在就在这里。画出比平时更艳丽的妆容，是为了振奋祭典伴奏的感觉和回应大家期待的思念的表现。但是……不，所以要更加更加――「超越大家期待的，可爱的可怜酱展示给大家看哦」"
},

{
    id:1021,
    cnname:"幽靈小姐與萬聖節的魔法",
    jpname:"幽霊さんとハロウィンの魔法",
    img:"https://patchwiki.biligame.com/images/umamusume/e/e9/6scs8nyr2dvcc3nn7o8f34m90qe7a6j.png",
    gushi:"那位幽灵小姐，背对着这边，一动不动地站着。幽灵小姐为了尽自己的职责，一直独自一人地努力着。非常非常的认真呢。明明让谁来帮忙的话，也不能称作失败才是……。「——…………」幽灵小姐，渐渐地，真正地敞开了心扉。那个，有注意到吗？之所以烦恼，是因为你太过于温柔了。——摘自手工绘本『幽灵小姐和吸血鬼的万圣节』。"
},

{
    id:1022,
    cnname:"合奏旋律",
    jpname:"響き合うストレイン",
    img:"https://patchwiki.biligame.com/images/umamusume/4/47/69kc3qmxu8i7ipuoc62di6b0cbo4uay.png",
    gushi:"相互竞争的脚步声，终于变成了和谐的旋律。（——咻哒哒哒哒哒！）「唔哈～……是礼服啊！！穿着这个摄影吗！？　跃跃欲试？心跳不已？　的感觉呢～～！？」（——嗒，嗒，嗒）「没什么，像平常一样就好了吧。只不过是衣服不一样而已」（——咚，——咚）「嗯。礼服只不过是点缀而已。重要的是，给支持自己的大家展现出和往常一样的姿态。」「这样啊，像往常一样吗……！那么——比比看谁能第一个到达一号摄影棚～～～～！！」「哎，等下——」「哈哈哈，这样确实像往常一样呢。好了，我们也过去摄影吧！」「真是的，真没办法……！」（——哒，哒，哒！）（——哒，哒，哒！）（——哒，哒，哒！）裙子的下摆轻轻的飞舞着，三个脚步声重叠在一起。就像是令人感到舒服的和音一样。"
},


{
    id:1023,
    cnname:"看來明天全國將染成一片鮮紅♪",
    jpname:"明日は全国的に赤でしょう♪",
    img:"https://patchwiki.biligame.com/images/umamusume/d/d3/178huk797xtwg9wvpxe0svmpde9cbmm.png",
    gushi:"那个施术者震撼空气，呼唤暗云，使天空染成了炼狱一般的颜色。那正是用森罗之理来解明根源之人。又使用布满天空的无数血泪，在锈迹斑斑的虚空中回响着喚声那位大人，正是人智不及的神罚的代行者。使一切为之战栗，使一切还原的红色使徒之名——“Bloody Sky”之名在这里记载着······。发行　黄金出版「ALL STAR集結！　赛马娘之王军名鉴」参上「嗯，有点太夸张了吧？······但是既然这是宣传，这种程度也差不多吧」「只要给人一种强大的印象，擅自摆摆架子也不是不行吧～♪」"
},

{
    id:1024,
    cnname:"不會連願望都抹去",
    jpname:"願いまでは拭わない",
    img:"https://patchwiki.biligame.com/images/umamusume/9/91/14cdc4pwhz7vzhpdzhut9ny5n8f7a4w.png",
    gushi:"无论曾经付出过多少努力，无论曾经吃过多少苦，结果就是一切。获胜的主角，总是闪耀着光芒。对于输掉的配角来说，那光芒实在太过耀眼。努力总是没能得到回报，总是离期望的东西就差一点。这就是现实。我早已明白。虽然早已知道，但我其实并不想知道。「啊哈……真的，笑了出来」因为，反正还是要继续跑下去啊。幻想着光辉的那一天。"
},

{
    id:1025,
    cnname:"意志、願望",
    jpname:"おもい、ねがう",
    img:"https://patchwiki.biligame.com/images/umamusume/f/fd/i7w7rh0otcpac3qa00elkdnui0e1kz1.png",
    gushi:"可爱的东西。 绝妙的东西。漂亮的东西。——不适合，人家的东西。就像这样一直远离着这些。因为华丽的东西会吸引住很多视线。但就算是我也想前进。成为值得骄傲的自己，不畏惧任何人的视线。所以，这件礼服就是我的决意。让我变强的——伙伴。总有一天，我会成为适合穿上礼服的我——而为自己骄傲自满吧。"
},

{
    id:1026,
    cnname:"由故鄉直達的聲援！",
    jpname:"ふるさと直送エール！",
    img:"https://patchwiki.biligame.com/images/umamusume/2/2f/2gzjkfizep97378qr5ey12xxbkh9pc9.png",
    gushi:"雪子～！  加油呀～！……嗯？　雪子是谁？你看，就是在那儿挥手的孩子哦！看了那笑容，心好像都被温暖了呀～。雪子……像是大家的女儿一样的孩子呢。会帮大家耕地，揉肩哦。……但是……最重要的还是她跑步时的样子啊。看起来超开心，给大家也带来了活力。——……所以说呀！　今天我们是来给那个孩子打气的哦！嘿？　你们，也是来给她应援的吗？……嘿嘿！　眼泪还是留着待会再说吧！　好嘞！现在就让我们一起喊吧！……一，二——！"
},

{
    id:1027,
    cnname:"往7公分的前方",
    jpname:"7センチの先へ",
    img:"https://patchwiki.biligame.com/images/umamusume/0/06/ljl3dt1fkdrikjo88zonpsuulb7d7et.png",
    gushi:"（没有毫米误差……just，快去！）当空中神宫凶猛地飞出时，场内所有人都叹息道「又来了」。那是如往常一样的暴走，体力不可能坚持下去。（你会不会觉得很肤浅呢）但她的节奏并没有被打乱，反而加快了，把叹息变成了欢呼声。（确定了是这个展开。倒推一下，拼命地锻炼体力！）无数次的模拟推导出了唯一的『公式』，然后——「证明完毕、混蛋！」出乎意料的结果引来场内交错的骂声，但场内只有空中神宫是个例外——她在嘲笑着。"
},

{
    id:1028,
    cnname:"连指尖都饱含感激",
    jpname:"感謝は指先まで込めて",
    img:"https://patchwiki.biligame.com/images/umamusume/a/a4/5yndkz18i2ej33ifvt4uaq5oxmazm4o.png",
    gushi:"「哇，好漂亮啊～……」全场的粉丝随着歌曲摇摆。动作优美的手也自然而然地流露出一种气质。（在比赛中心跳加速之后，还有这么美妙的心动在等着我）我不知道那是被窗框所限制的，比她梦想的还要感动的……（还有很多的事，想要回忆！在这个特雷森学园，和大家更多的——）「跑着，跳着，笑着！　一起享受着吧？」——因为幸福的三叶草，不四处奔走是找不到的！"
}


    ],
  }

  }

})
