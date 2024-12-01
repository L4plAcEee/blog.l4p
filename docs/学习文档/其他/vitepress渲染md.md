# Vitepress Markdown 详细指南

## 1. Frontmatter 详解

### 基本格式
```markdown
---
title: 页面标题
description: 页面描述
layout: home
---
```

### 常用配置项
- **title**: 页面标题
- **description**: 页面描述,用于SEO
- **layout**: 页面布局(home, doc, page, custom)
- **head**: 自定义head标签内容
- **sidebar**: 是否显示侧边栏
- **navbar**: 是否显示导航栏
- **footer**: 是否显示页脚

### 特殊配置
```markdown
---
# 自定义页面类
pageClass: custom-page-class

# 上一页/下一页导航
prev: 
  text: '上一页'
  link: '/guide'
next: 
  text: '下一页'
  link: '/advanced'

# 编辑链接
editLink: 
  pattern: 'https://github.com/xxx/edit/main/docs/:path'
  text: '在 GitHub 上编辑此页'

# 最后更新时间
lastUpdated: true
---
```

### 使用技巧
1. 可以使用环境变量
```markdown
---
title: {{ VITE_APP_TITLE }}
---
```

2. 可以使用JavaScript表达式
```markdown
---
title: My {{ frontmatter.version }} Page
---
```
### 注意
在Vitepress中,frontmatter配置必须遵循以下规则:

1. 位置要求:
- 必须在markdown文件的最顶部
- 必须是文件的第一个内容块
- 不能在文档中间或末尾

1. 格式要求:
- 必须使用三个横线(---)开始和结束
- 必须是有效的YAML格式
- 必须完整包含在横线之间

正确示例:
```markdown
---
title: 页面标题
description: 页面描述
---

# 文档内容从这里开始
```

错误示例:
```markdown
# 文档标题

---
title: 页面标题  # 这里放置frontmatter是错误的
---

内容
```

这样设计的原因是:
1. frontmatter是文档的元数据配置
2. 需要在文档解析前被处理
3. 用于设置整个页面的属性和行为

如果您需要在文档其他位置进行配置,建议:
- 使用Vue组件
- 使用Markdown扩展语法
- 使用主题配置文件

## 2. 内置组件

### 提示容器
```markdown
::: tip 提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger 危险
这是一个危险警告
:::

::: details 详情
这是一个详情块
:::
```

### 代码组
````markdown
::: code-group
```js [config.js]
export default {
  data: 'Hello'
}
```

```ts [config.ts]
export default {
  data: 'Hello'
}
```
:::
````

### 自定义容器
```markdown
::: raw
这是一个原始HTML容器
:::

::: v-pre
这里的 {{ variable }} 不会被解析
:::
```

## 3. 代码块增强

### 语法高亮
````markdown
```js{1,4-6}
console.log('Hello')
let x = 1
let y = 2
// 高亮这些行
let z = 3
console.log(x + y + z)
```
````

### 显示行号
````markdown
```js:line-numbers
console.log('Hello')
let x = 1
let y = 2
```
````

### 导入代码片段
````markdown
```js
<<< @/filepath
```
````

### 代码组
````markdown
::: code-group
```js [ESM]
export default {}
```

```js [CommonJS]
module.exports = {}
```
:::
````

## 4. 特殊语法

### 目录生成
```markdown
[[toc]]
```

### Emoji支持
```markdown
:smile: :heart: :thumbsup:
```

### 链接处理
```markdown
# 内部链接
[首页](/)
[关于](/about)

# 外部链接
[Vitepress](https://vitepress.dev)
```

### 图片引用
```markdown
# 基本语法
![Alt text](./image.png)

# 指定尺寸
![Alt text](./image.png =100x200)

# 使用标题
![Alt text](./image.png "Image title")
```

## 5. 路由与目录结构

### 基本规则
- `docs/index.md` → `/`
- `docs/guide/index.md` → `/guide/`
- `docs/guide/introduction.md` → `/guide/introduction.html`

### 特殊文件
- `index.md` 和 `README.md` 都会被处理为目录的默认页面
- `.vuepress/config.js` 为配置文件
- `.vuepress/theme` 为主题目录

### 侧边栏配置
```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/' },
          { text: '快速开始', link: '/guide/getting-started' }
        ]
      }
    ]
  }
}
```

## 6. 配置相关

### Markdown 配置
```js
export default {
  markdown: {
    // 代码块行号
    lineNumbers: true,
    
    // 目录层级
    toc: { level: [1, 2, 3] },
    
    // 自定义容器
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险'
    },
    
    // 自定义 anchor
    anchor: {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#'
    }
  }
}
```

### 主题配置
```js
export default {
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],
    
    // 侧边栏
    sidebar: {...},
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/...' }
    ]
  }
}
```

## 7. 进阶功能

### Vue组件使用
```markdown
# 在markdown中使用Vue组件
<MyComponent />

# 使用插槽
<MyComponent>
  插槽内容
</MyComponent>

# 传递props
<MyComponent :prop="value" />
```

### 环境变量
```markdown
# 使用环境变量
{{ VITE_APP_TITLE }}

# 条件渲染
<div v-if="VITE_APP_DEBUG">Debug info</div>
```

### 引入代码片段
````markdown
# 引入完整文件
```js
<<< @/filepath

# 引入部分代码(使用行号)
```js
<<< @/filepath{2-8}

# 引入部分代码(使用注释标记)
```js
<<< @/filepath#snippet
````

## 注意事项

1. HTML标签使用
- 避免使用复杂的HTML结构
- 注意HTML标签可能被转义
- 使用`:v-pre`保留原始HTML

2. 图片处理
- 推荐使用相对路径
- 静态资源放在public目录
- 支持基本的图片优化

3. 代码块
- 正确使用语言标识符
- 注意行号和高亮语法
- 避免过长的代码段

4. 性能考虑
- 合理使用图片大小
- 避免过多的Vue组件
- 控制页面内容量

5. SEO优化
- 使用适当的标题层级
- 添加合适的描述
- 使用规范的链接地址

```markdown
这个详细指南涵盖了Vitepress处理Markdown的主要方面，
希望能帮助你更好地使用这个强大的工具。
如有任何问题，请随时询问。
```