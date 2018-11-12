module.exports = {
  title: 'q-form',
  base: '/ci/npm/q-form/docs/',
  description: '也许是vue最好用的表单组件',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css', integrity: 'sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ', crossorigin: 'anonymous' }]
  ],
  themeConfig: {
    logo:'/logo.png',
    sidebarDepth: 0,
    search: false,
    nav: [
      { icon: 'fa fa-home fa-lg', iconClass: 'is-medium', text: '首页', link: '/' },
      { icon: 'fa fa-book fa-lg', iconClass: 'is-medium', text: '文档', link: '/docs/' },
      { icon: 'fab fa-lg fa-gitlab', iconClass: 'is-medium', text: 'gitlab', link: 'https://git.qutoutiao.net/npm/q-form' },
    ],
    sidebar: [
      {
        title: '快速上手',
        collapsable: false,
        icon: 'fas fa-star',
        iconClass: 'has-text-warning',
        children: [
          ['/docs/', '安装'],
          // ['/docs/started/install', '安装'],
          ['/docs/started/started', '快速上手'],
          ['/docs/started/component-list', '目前支持组件'],
        ]
      },
      {
        title: '基本使用',
        collapsable: false,
        children: [
          ['/docs/usage/linkage', '基础表单'],
          ['/docs/usage/usual-demo', '常用demo'],
          ['/docs/usage/act', '联动'],
          ['/docs/usage/validate', '校验'],
          ['/docs/usage/status', '状态控制'],
          ['/docs/usage/global-custom-component', '注册全局组件type'],
        ]
      },
      {
        title: '组件标准',
        collapsable: false,
        children: [
          ['/docs/standard/form-config', 'iForm配置'],
          ['/docs/standard/form-item-config', 'iFormItem配置'],
          ['/docs/standard/form-rows-config', 'iFormRows配置'],
        ]
      }
    ]
  },
  sass: { indentedSyntax: true },
}
