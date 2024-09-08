import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '源码阅读', link: '/doc_analysis/react/18', activeMatch: '^/doc_analysis' },
  {
    text: '施工中...',
    items: [],
    activeMatch: '^/doc_learning',
  },
]
