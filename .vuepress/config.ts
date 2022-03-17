import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

module.exports = ({
  title: 'simonzhangs的个人博客',
  description: 'simonzhangs\'松本博客-前端知识学习、记录和分享',
  // dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],
    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }]
  ],
  plugins: [
   ["vuepress-plugin-boxx"],
   ["vuepress-plugin-nuggets-style-copy", {
    copyText: "复制代码",
    tip: {
        content: "复制成功!"
    }
  }]
   
  ],
  //基于 reco 主题配置 
  theme: 'reco',
  themeConfig: {
    style: '@vuepress-reco/style-default',
    // autoSetCategory: true,         // 自动设置分类
    // autoAddCategoryToNavbar: true,  // 自动将首页、分类和标签添加至头部导航条
    logo: '/left-logo.png',
    author: 'simonzhangs',
    authorAvatar: '/logo.png',
    docsRepo: 'https://github.com/simonzhangs/simonzhangs.github.io',
    // docsBranch: 'main',
    // docsDir: 'example',
    repoLabel: '查看源码',
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助改善此页面！',
    lastUpdatedText: '',
    series: {
      '/blogs/interview-exp/': [
        {
          text: '腾讯---',
          children: ['tencent1', 'tencent2']
        },
        {
          text: '字节跳动---',
          children: ['bit1', 'bit2']
        }
      ],
      '/docs/Web/html5':[
        {
          text: 'html5基础---',
          children: ['基础1', '基础2']
        },
        {
          text: 'html进阶---',
          children: ['进阶3', '进阶4']
        }
      ],
      '/docs/about':[
        {
          text: '',
          children: ['about', 'timeline']
       }
      ],
      '/docs/items/':[
        {
          text: '项目集',
          children: ['/docs/items', '/docs/items/it1', '/docs/items/it2']
        }
      ],
      '/docs/applemusic/': [
        {
          text: 'applemusic 项目',
          children: ['/docs/applemusic/', '/docs/applemusic/pm1','/docs/applemusic/pm2','/docs/applemusic/pm3']
        }
      ]
    },
    navbar:
    [
      { text: 'Home', link: '/'},
      { text: '分类', link: '/categories/html5/1/' },
      { text: '标签', link: '/tags/tencent/1/' },
      { text: '随笔', link: '/docs/essays' },
      { text: 'applemusic', link: '/docs/applemusic/' },
      { text: '历史', link: '/docs/history/history'},
      { text: '项目集', link: '/docs/items/'},
      {text: '时间轴', link: '/docs/about/timeline'},
      {text: '关于', link: '/docs/about/about'},
      // { text: 'Docs',
      //   children: [
      //     { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
      //     { text: 'vuepress-theme-reco', link: '/blogs/other/guide' }
      //   ]
      // },
    ],
    //公告部分，每次刷新会在右下侧弹出
    bulletin: {
    },
    // valineConfig 配置与 1.x 一致
    valineConfig: {
      appId: 'PBmsmHY1AwdbxBNM33CN4v3n-gzGzoHsz',
      appKey: 'KuWjD5T4RCoUXT6HjyqD92Y4',
      placeholder: '填写邮箱可以收到回复提醒哦！',
      avatar:'robohash',
      verify: true, // 验证码服务
      // notify: true,
      recordIP: true,
      visitor: true 
      // hideComments: true // 隐藏评论
    },
    metingConfig: {
      meting: {
        // 网易
        server: "netease",
        // 读取歌单
        type: "playlist",
        mid: "696441716",
      },          
      // 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: true,
        mini: true,
        // 自动播放
        autoplay: true,
        // 歌曲栏折叠
        listFolded:true,
        // 颜色
        theme: '#f9bcdd',
        // 播放顺序为随机
        order: 'random',
        // 初始音量
        volume: 0.1,
        // 关闭歌词显示
        lrcType: 0
      },
      mobile :{
        // 手机端去掉cover图
        cover: false,
      }
    }
  },
  // debug: true,
  // 音乐插件
})