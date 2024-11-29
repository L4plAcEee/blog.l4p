---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: L4plAce
  text: 的现象之书
  tagline: 无论是闪现的灵感还是知识的碎片，尽数捕捉！
  image:
    src: /logo.png
    alt: test image alt
  actions:
    - text: 开始阅读
      link: /director.md
    - text: view on Bilibili
      link: https://space.bilibili.com/356541238
      theme: alt
features:
  - icon: 📖
    title: 蒜法学习
    details: 所谓蒜法，都是钳人的智慧啊！
    link: /doc_learning/Algorithm/index.md
    linkText: Algorithm
  - icon: 📘
    title: 1337
    details: 不想当一名hacker吗？
    link: /doc_learning/CallMeHacker/index.md
    linkText: 网安
  - icon: 💡
    title: Tools
    details: 在玩姬中学到的一切(工具，小技巧等集合~
    link: /doc_learning/PlayChicken/index.md
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
