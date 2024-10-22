// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '学习笔记',
    items:[
      {text:'Spring',link:'/note/spring/'},
      {text:'MySQL',link:'/note/mysql/'},
      {text:'Java',link:'/note/java/'},
      {text:'Linux',link:'/note/linux/'},
      {text:'前端',link:'/note/front/'},
      {text:'算法',link:'/note/algorithm/'},
      {text:'设计模式',link:'/note/design/pattern/'},
    ]
  },
  {
    text: 'Tool', items: [
      { text: 'MyBatis Log 转SQL', link: '/pages/e7ab16/' },
      { text: 'Git Tips', link: 'https://wangchujiang.com/git-tips/' },
      { text: '淘宝领券工具', link: '/tbk/' },
      { text: 'Markdown语法指南', link: 'https://www.markdown.xyz/basic-syntax/' },
      { text: 'GitHub Emoji Picker', link: 'https://github-emoji-picker.rickstaa.dev/' },
      { text: 'Markdown代码块语言清单', link: 'https://www.iszy.cc/posts/15/' },

    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },


]
