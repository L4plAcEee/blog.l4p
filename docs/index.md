---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: test name
  text: test text
  tagline: test tagline
  image:
    src: /logo.png
    alt: test image alt
  actions:
    - text: test action 1
      link: /fe/es6/
    - text: test action 2
      link: /nav
      theme: alt
    - text: test action 3
      link: /daily-notes/
features:
  - icon: 📖
    title: 前端物语
    details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: /fe/javascript/types
    linkText: 前端常用知识
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: /analysis/utils/only-allow
    linkText: 源码阅读
  - icon: 💡
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: /workflow/utils/library
    linkText: 常用工具库
---
</script>
{
  "title": "L4plAce",
  "desc": "沉溺于电子之海",
  "link": "https://notes.fe-mm.com",
  "icon": "https://notes.fe-mm.com/logo.png"
}
<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>
