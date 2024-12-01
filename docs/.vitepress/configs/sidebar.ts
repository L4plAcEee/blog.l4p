import type { DefaultTheme } from 'vitepress'
import fs from 'fs-extra'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/doc_learning/': [
    {
      text: 'test1',
      collapsed: false,
      items: [
        { text: '[0]', link: '/' },
        { text: '[1]', link: '/' },
      ],
    },
    {
      text: 'test2',
      collapsed: false,
      items: [{ text: 'text', link: '/' }],
    },
  ],
}
