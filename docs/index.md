---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: L4plAce
  text: 起舞于电子之海
  tagline: 手与手相互交叠，于此引发的，是你我共创的奇迹。
  image:
    src: /logo.png
    alt: test image alt
  actions:
    - text: Start Reading
      link: /director.md
    - text: view on Bilibili
      link: https://space.bilibili.com/356541238
      theme: alt
features:
  - icon: 📖
    title: 学习中ing
    details: 记录学习中遇到的各种轶闻趣事。
    link: /director.md
    linkText: keep learning
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: /director.md
    linkText: 源码阅读
  - icon: 💡
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: /director.md
    linkText: 常用工具库
---

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
