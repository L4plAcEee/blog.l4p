import type { DefaultTheme } from 'vitepress'
import fs from 'fs-extra'

const sidebarDailyNotes: DefaultTheme.SidebarItem[] =
  fs.readJSONSync('./scripts/daily-notes.json', { throws: false }) || []

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/doc_learning/': [
    {
      text: 'JavaScript 基础知识',
      collapsed: false,
      items: [
        { text: '数据类型', link: '/doc_learning/javascript/types' },
        { text: '引用类型的拷贝', link: '/doc_learning/javascript/clone' },
        { text: '类型转换', link: '/doc_learning/javascript/conversions' },
        { text: '原型和原型链', link: '/doc_learning/javascript/prototype' },
        { text: '继承', link: '/doc_learning/javascript/inherit' }
      ]
    },
    {
      text: 'ES6 常用知识点',
      link: '/doc_learning/es6/'
    }
  ],
  '/doc_analysis/': [
    {
      text: 'React',
      items: [
        { text: 'React 18 的新特性', link: '/doc_analysis/react/18' },
        { text: 'React 常见面试题', link: '/doc_analysis/react/interview' }
      ]
    },
    {
      text: '工具库',
      // collapsed: false,
      items: [
        { text: 'only-allow', link: '/doc_analysis/utils/only-allow' },
        { text: 'clsx', link: '/doc_analysis/utils/clsx' },
        { text: 'await-to-js', link: '/doc_analysis/utils/await-to-js' }
      ]
    }
  ],
  '/doc_workflow/': [
    {
      text: '编程规范',
      link: '/doc_workflow/style-guide'
    },
    {
      text: '常用工具/方法',
      collapsed: false,
      items: [
        { text: '工具库整理', link: '/doc_workflow/utils/library' },
        { text: '常用正则整理', link: '/doc_workflow/utils/regexp' },
        { text: '常用代码片段', link: '/doc_workflow/utils/snippets' }
      ]
    },
    {
      text: '常用库的使用与配置',
      collapsed: false,
      items: [
        { text: 'Tailwind CSS', link: '/doc_workflow/library/tailwindcss' },
        { text: 'Day.js', link: '/doc_workflow/library/dayjs' }
      ]
    },
    {
      text: 'HTML / CSS 相关',
      collapsed: false,
      items: [
        { text: 'HTML 奇淫技巧', link: '/doc_workflow/html/tricks' },
        { text: 'CSS 语法', link: '/doc_workflow/css/spec' },
        { text: 'CSS 奇淫技巧', link: '/doc_workflow/css/tricks' },
        { text: 'Sass 常用技巧', link: '/doc_workflow/sass/' }
      ]
    },
    {
      text: 'Vue 相关',
      link: '/doc_workflow/vue/'
    },
    {
      text: 'Node 相关',
      // collapsed: false,
      items: [{ text: 'npm 常用命令', link: '/doc_workflow/node/npm' }]
    },
    {
      text: '终端相关',
      collapsed: false,
      items: [
        { text: 'Zsh 配置', link: '/doc_workflow/terminal/zsh' },
        { text: '命令行工具', link: '/doc_workflow/terminal/toolkit' },
        { text: 'Shell 命令', link: '/doc_workflow/terminal/shell' }
      ]
    },
    {
      text: 'Git 相关',
      collapsed: false,
      items: [
        { text: 'Git 相关技巧', link: '/doc_workflow/git/' },
        { text: 'Git 命令清单', link: '/doc_workflow/git/command' }
      ]
    }
  ],
  '/doc_efficiency/': [
    {
      text: '软件推荐与配置',
      // collapsed: false,
      items: [
        { text: '多平台软件', link: '/doc_efficiency/software/cross-platform' },
        { text: 'Mac 平台', link: '/doc_efficiency/software/mac' },
        { text: 'Windows 平台', link: '/doc_efficiency/software/windows' },
        { text: '浏览器设置与扩展', link: '/doc_efficiency/software/browser' },
        { text: 'Visual Studio Code 配置', link: '/doc_efficiency/software/vscode' },
        { text: 'WebStorm 配置', link: '/doc_efficiency/software/webstorm' }
      ]
    },
    { text: '在线工具', link: '/doc_efficiency/online-tools' },
    { text: '书签脚本', link: '/doc_efficiency/bookmark-scripts' }
  ],
  '/doc_pit/': [
    {
      text: '踩坑记录',
      // collapsed: false,
      items: [
        { text: 'npm 踩坑记录', link: '/doc_pit/npm' },
        { text: '第三方库踩坑记录', link: '/doc_pit/library' },
        { text: 'PC 踩坑记录', link: '/doc_pit/pc' },
        { text: 'H5 踩坑记录', link: '/doc_pit/h5' },
        { text: '微信开发踩坑记录', link: '/doc_pit/wechat' }
      ]
    }
  ],
  '/daily-notes': sidebarDailyNotes
}
