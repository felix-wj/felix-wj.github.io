// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/宇航员.ico' }], //favicons，资源放在public文件夹
  ['link', {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css'}],
  ['script', {src: 'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.js'}],


  [
    'meta',
    {
      name: 'keywords',
      content: '个人技术博客,技术文档,学习,面试,Java,JVM,Spring,MQ,Mybatis,Mysql,Docker,Linux,git',
    },
  ],
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
]
