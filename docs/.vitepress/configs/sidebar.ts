import type { DefaultTheme } from 'vitepress'
import fs from 'fs-extra'

const sidebarDailyNotes: DefaultTheme.SidebarItem[] =
  fs.readJSONSync('./scripts/daily-notes.json', { throws: false }) || []

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/文档/learning/': [
    {
      text: '从零开始的C++学习',
      collapsed: false,
      items: [
        { text: '数据类型', link: '/docs/文档/learning/从零开始的cpp学习/[0].0-based 的魅力.md' },
        { text: '引用类型的拷贝', link: '/docs/文档/learning/从零开始的cpp学习/[1].待施工.md' }
      ]
    }
  ],
  '/文档/analysis/': [
    {
      text: 'React',
      items: [
        { text: 'React 18 的新特性', link: '/analysis/react/18' },
        { text: 'React 常见面试题', link: '/analysis/react/interview' }
      ]
    },
    {
      text: '工具库',
      // collapsed: false,
      items: [
        { text: 'only-allow', link: '/analysis/utils/only-allow' },
        { text: 'clsx', link: '/analysis/utils/clsx' },
        { text: 'await-to-js', link: '/analysis/utils/await-to-js' }
      ]
    }
  ],
  '/文档/workflow/': [
    {
      text: '编程规范',
      link: '/workflow/style-guide'
    },
    {
      text: '常用工具/方法',
      collapsed: false,
      items: [
        { text: '工具库整理', link: '/workflow/utils/library' },
        { text: '常用正则整理', link: '/workflow/utils/regexp' },
        { text: '常用代码片段', link: '/workflow/utils/snippets' }
      ]
    },
    {
      text: '常用库的使用与配置',
      collapsed: false,
      items: [
        { text: 'Tailwind CSS', link: '/workflow/library/tailwindcss' },
        { text: 'Day.js', link: '/workflow/library/dayjs' }
      ]
    },
    {
      text: 'HTML / CSS 相关',
      collapsed: false,
      items: [
        { text: 'HTML 奇淫技巧', link: '/workflow/html/tricks' },
        { text: 'CSS 语法', link: '/workflow/css/spec' },
        { text: 'CSS 奇淫技巧', link: '/workflow/css/tricks' },
        { text: 'Sass 常用技巧', link: '/workflow/sass/' }
      ]
    },
    {
      text: 'Vue 相关',
      link: '/workflow/vue/'
    },
    {
      text: 'Node 相关',
      // collapsed: false,
      items: [{ text: 'npm 常用命令', link: '/workflow/node/npm' }]
    },
    {
      text: '终端相关',
      collapsed: false,
      items: [
        { text: 'Zsh 配置', link: '/workflow/terminal/zsh' },
        { text: '命令行工具', link: '/workflow/terminal/toolkit' },
        { text: 'Shell 命令', link: '/workflow/terminal/shell' }
      ]
    },
    {
      text: 'Git 相关',
      collapsed: false,
      items: [
        { text: 'Git 相关技巧', link: '/workflow/git/' },
        { text: 'Git 命令清单', link: '/workflow/git/command' }
      ]
    }
  ],
  '/文档/efficiency/': [
    {
      text: '软件推荐与配置',
      // collapsed: false,
      items: [
        { text: '多平台软件', link: '/efficiency/software/cross-platform' },
        { text: 'Mac 平台', link: '/efficiency/software/mac' },
        { text: 'Windows 平台', link: '/efficiency/software/windows' },
        { text: '浏览器设置与扩展', link: '/efficiency/software/browser' },
        { text: 'Visual Studio Code 配置', link: '/efficiency/software/vscode' },
        { text: 'WebStorm 配置', link: '/efficiency/software/webstorm' }
      ]
    },
    { text: '在线工具', link: '/efficiency/online-tools' },
    { text: '书签脚本', link: '/efficiency/bookmark-scripts' }
  ],
  '/文档/pit/': [
    {
      text: '踩坑记录',
      // collapsed: false,
      items: [
        { text: 'npm 踩坑记录', link: '/pit/npm' },
        { text: '第三方库踩坑记录', link: '/pit/library' },
        { text: 'PC 踩坑记录', link: '/pit/pc' },
        { text: 'H5 踩坑记录', link: '/pit/h5' },
        { text: '微信开发踩坑记录', link: '/pit/wechat' }
      ]
    }
  ],
  '文档//daily-notes': sidebarDailyNotes
}
