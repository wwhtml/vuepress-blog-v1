const {navbar} = require('./configs/navbar')
const {sidebar} = require('./configs/sidebar')

module.exports = {
  title: "前端开发",
  description: "Just playing around",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  // base:'/vuepress-blog-v1/',
  host: "0.0.0.0",
  port: 8888, //注意：这里设置的最大端口号是65535，否则报错
  dest: "docs/.vuepress/dist", //默认打包目录'docs/.vuepress/dist'
  // theme: 'theme',
  markdown: {
    lineNumbers: true,
  },
  smoothScroll: true,

  themeConfig: {
    logo: "/assets/img/logo.png",
    repo: "https://www.baidu.com",
    repoLabel: "百度",
    lastUpdated: "最近更新时间",
    nav:navbar,
    sidebar:sidebar
    
  },
  plugins: [
    "@vuepress/last-updated",
    "@vuepress/back-to-top",
    "@vuepress/pwa",
  ],
};
