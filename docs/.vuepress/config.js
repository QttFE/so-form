module.exports = {
  title: 'q-form',
  description: 'Just playing around',
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      {
        title: '快速上手',
        collapsable: false,
        children: [
          ['/started/install', '安装'],
          ['/started/started', '快速上手'],
          ['/started/component-list', '目前支持组件'],
        ]
      },
      {
        title: '基本使用',
        collapsable: false,
        children: [
          ['/usage/linkage', '基础表单'],
          ['/usage/usual-demo', '常用demo'],
          ['/usage/act', '联动'],
          ['/usage/validate', '校验'],
          ['/usage/status', '状态控制'],
          ['/usage/global-custom-component', '注册全局组件type'],
        ]
      }
    ]
  }
}
