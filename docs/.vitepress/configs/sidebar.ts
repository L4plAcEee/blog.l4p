import type { DefaultTheme } from 'vitepress'
import fs from 'fs-extra'

const sidebarDailyNotes: DefaultTheme.SidebarItem[] =
  fs.readJSONSync('./scripts/daily-notes.json', { throws: false }) || []

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/doc_learning/': [
    {
      text: '从零开始的C++学习',
      collapsed: false,
      items: [
        { text: '[0]', link: '/doc_learning/cpp/[0]' },
        { text: '[1]', link: '/doc_learning/cpp/[1]' },
      ]
    },
    {
      text: 'Python从入门到入土',
      collapsed: false,
      items: [
        { text: 'Python 基础', link: '/doc_learning/python/[0]' },
      ]
    }
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
