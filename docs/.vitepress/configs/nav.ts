import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '日记', link: '/日记/index.md', activeMatch: '^/日记' },
  {
    text: '施工中...',
    items: [],
    activeMatch: '^/',
  },
]
