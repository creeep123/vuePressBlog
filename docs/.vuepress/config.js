module.exports = {
    title: '杨兄的博客',
    description: '个人技术指北',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '前端', link: '/前端面试题/' },
        {text: '算法', link: '/算法/'},    
        {text:'JS', link:'/JavaScript浅入浅出/'}
      ],
      sidebar: {
        '/JavaScript浅入浅出/':[
          'JavaScript 中的 this（1）- This 是什么？',
        ],
        '/前端面试题/':[
          ['2020-11-03','2020-11-03 数组去重'],
          ['2020-11-04','2020-11-04 输入url 后发生了什么？'],
          ['2020-11-05','2020-11-05 垂直居中的CSS实现'],
          ['2020-11-06','2020-11-06 cookie'],
		  ['2020-11-21','2020-11-21 forEach/ for of/ for in']
        ],
        '/算法/':[
        ]
      },
      sidebarDepth: 3, // 侧边栏显示3级
    }
  };