import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [

  { text: '源码阅读', link: '/doc_analysis/react/18', activeMatch: '^/doc_analysis' },
  {
    text: 'Workflow',
    items: [

    ],
    activeMatch: '^/doc_workflow'
  },
  {
    text: '笔记',
    items: [
      { text: '日常笔记', link: '/daily-notes/', activeMatch: '^/daily-notes' },
      {
        text: '踩坑记录',
        items: [
        ]
      }
    ],
    activeMatch: '^/daily-notes|doc_pit'
  }
]
