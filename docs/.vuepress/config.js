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
        {text: '前端', link: '/accumulate/' },
        {text: '算法', link: '/algorithm/'},    
      ],
      sidebar: [
        '/',
        '/guide/'
    ],
      sidebarDepth: 2, // 侧边栏显示2级
    }
  };