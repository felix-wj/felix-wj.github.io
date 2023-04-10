const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
    theme: 'vdoing',
    title: "Felix's Blog",
    description: '记录工作、学习与生活',
    port: 8081,
    head,
    plugins,
    themeConfig,
    markdown: {
        //extractHeaders: [ 'h2', 'h3', 'h4' ],
        lineNumbers: true, // 代码行号
        plugins: [
            ['markdown-it-replace-link']
        ],
        extendMarkdown: md => {
            md.use(require(`markdown-it-replace-link`), {
                replaceLink: function (link, env) {
                    if (link.toString().startsWith('urlPrefix')) {
                        return link.replace('urlPrefix', 'https://blog.edwsmycs.cn')
                    } else {
                        return link.toString()
                    }

                }
            })
        }
    },
    devServer: {
        proxy: {
            '/taoBaoKeApiTest': {
                //要访问的跨域的域名
                target: 'http://localhost:8080/',
                ws: true,
                secure: false, // 使用的是http协议则设置为false，https协议则设置为true
                changOrigin: true,
                pathRewrite: {
                    '^/taoBaoKeApiTest': ''
                }
            },
        }
    }

}
