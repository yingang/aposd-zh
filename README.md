[![Build and Deploy](https://github.com/yingang/aposd-zh/actions/workflows/CI.yml/badge.svg)](https://github.com/yingang/aposd-zh/actions/workflows/CI.yml)
# 《软件设计的哲学》中文翻译

在线阅读：https://yingang.github.io/aposd-zh/

<div style="inline">
  <img src="./docs/cover.jpeg" width="210px" height="280px" />
</div>


## 简介

斯坦福教授、Tcl 语言发明者 John Ousterhout 的著作《A Philosophy of Software Design》，自出版以来，好评如潮。按照 IT 图书出版的惯例，如果冠名为“实践”，书中内容关注的是某项技术的细节和技巧；冠名为“艺术”，内容可能是记录一件优秀作品的设计过程和经验；而冠名为“哲学”，则是一些通用的原则和方法论，这些原则方法论串起来，能够形成一个体系。正如“知行合一”、“世界是由原子构成的”、“我思故我在”，这些耳熟能详的句子能够一定程度上代表背后的人物和思想。用一句话概括《A Philosophy of Software Design》，软件设计的核心在于降低复杂性。


## 目录

- [前言](docs/preface.md)
- [第 1 章 介绍](docs/ch01.md)
- [第 2 章 复杂性的本质](docs/ch02.md)
- [第 3 章 能工作的代码是不够的](docs/ch03.md)
- [第 4 章 模块应该是深的](docs/ch04.md)
- [第 5 章 信息隐藏(和泄漏)](docs/ch05.md)
- [第 6 章 通用模块更深入](docs/ch06.md)
- [第 7 章 不同的层，不同的抽象](docs/ch07.md)
- [第 8 章 降低复杂性](docs/ch08.md)
- [第 9 章 在一起更好还是分开更好？](docs/ch09.md)
- [第 10 章 通过定义规避错误](docs/ch10.md)
- [第 11 章 设计它两次](docs/ch11.md)
- [第 12 章 为什么要写注释呢？有四个理由](docs/ch12.md)
- [第 13 章 注释应该描述代码中不明显的内容](docs/ch13.md)
- [第 14 章 选择的名字](docs/ch14.md)
- [第 15 章 先写注释](docs/ch15.md)
- [第 16 章 修改现有的代码](docs/ch16.md)
- [第 17 章 一致性](docs/ch17.md)
- [第 18 章 代码应该是显而易见的](docs/ch18.md)
- [第 19 章 软件发展趋势](docs/ch19.md)
- [第 20 章 设计性能](docs/ch20.md)
- [第 21 章 结论](docs/ch21.md)
- [总结](docs/summary.md)


## 本地开发 & 阅读

本项目基于 VuePress 进行开发，以提供比 Github Markdown 更佳的阅读体验

依赖于 [`node.js`][nodejs]、[`yarn`][yarn]、[`vuepress`][vuepress] 等环境

[nodejs]: https://nodejs.org/zh-cn/
[yarn]: https://yarnpkg.com/
[vuepress]: https://v2.vuepress.vuejs.org/zh/


```sh
git clone https://github.com/yingang/aposd.git
cd A-Philosophy-of-Software-Design-zh/
yarn install    # 安装 VuePress@next
yarn dev        # 编译并打开网页预览
```

## 项目缘由

无意中看到这本书的相关介绍，也很快找到了 GitHub 上的民间翻译版，因为看到一些翻译不太恰当的地方，所以想着顺手提交修正下，然后找到其中 Star 数量比较多的主要是 [Cactus-proj](https://github.com/Cactus-proj/A-Philosophy-of-Software-Design-zh) 和 [Go7hic](https://github.com/Go7hic/A-Philosophy-of-Software-Design) 的，但两者的内容几乎完全一样，包括翻译有错误的地方也错得一样。从实质内容的提交历史来看，应该 Cactus-proj 是更早的提交者，这一点从各自的 Fock/Star 数量也能侧面印证。

这两个项目均有收到并处理一些内容修正的 PR，但即使是 Cactus-proj，最新的几个 PR 也处于长期未处理的状态，应该都已经暂停维护了，然后基于 Cactus-proj，包含内容修复最多的是 [luojiego](https://github.com/luojiego/A-Philosophy-of-Software-Design-zh) 的 Fock，于是就基于这个创建了自己的 Fork。除了一边阅读一边校对，也摸索着更新了相关的部署脚本，同样部署到 GitHub Pages 上。

从提交历史来看，[gdut-yy](https://github.com/gdut-yy) 应该是主要的翻译贡献者，[liquid207](https://github.com/liquid207)、[wanghuanwei](https://github.com/wanghuanwei)、[luojiego](https://github.com/luojiego) 和 [BlackGlory](https://github.com/BlackGlory) 也都贡献了比较多的翻译修正，[inkydragon](https://github.com/inkydragon) 则主要负责了 LaTeX 和 PDF 相关的工作，不确定历史是否挖掘充分，所有提到未提到的贡献者，一并感谢！

## License

[MIT](./LICENSE)
