import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar, algolia } from './configs'

const APP_BASE_PATH = basename(process.env.APP_BASE_PATH || '')

export default defineConfig({
  ignoreDeadLinks: [
    /^http:\/\/localhost/
  ],
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: 'L4plAce',
  description: '起舞于电子之海',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/L4plAcEee' }],

    footer: {
      message: '本站所有文章遵守 CC BY-SA 4.0 License.',
      copyright: 'Copyright © 2024-present L4plAce',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    /* Algolia DocSearch 配置 */
    algolia,

    docFooter: {
      prev: false,
      next: false,
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  /* 生成站点地图 */
  sitemap: {
    hostname: 'https://www.l4place.icu/',
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
