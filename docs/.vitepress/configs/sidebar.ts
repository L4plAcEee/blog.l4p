import type { DefaultTheme } from 'vitepress'
import fs from 'fs-extra'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/doc_learning/': [
    {
      text: '从零开始的C++学习',
      collapsed: false,
      items: [
        { text: '[0]', link: '/doc_learning/cpp/[0]' },
        { text: '[1]', link: '/doc_learning/cpp/[1]' },
      ],
    },
    {
      text: 'Python从入门到入土',
      collapsed: false,
      items: [{ text: 'Python 基础', link: '/doc_learning/python/[0]' }],
    },
  ],
}
