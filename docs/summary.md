# 总结

## 设计原则小结

这些是本书中讨论的最重要的软件设计原则：

1. 复杂性是增量产生的：你必须努力处理小事情（请参阅 [第 2.4 节](ch02.md)）。
2. 能工作的代码是不够的（请参阅 [第 3.2 节](ch03.md)）。
3. 持续进行小额投资以改善系统设计（请参阅 [第 3.3 节](ch03.md)）。
4. 模块应该是深的（请参阅 [第 4.4 节](ch04.md)）
5. 接口的设计应尽可能简化其最常见的用法（请参阅 [第 4.7 节](ch04.md)）。
6. 让模块的接口简单比让其实现简单更为重要（请参阅 [第 8 章](ch08.md), [第 9.8 节](ch09.md)）。
7. 通用模块是更深的（请参阅 [第 6 章](ch06.md)）。
8. 分开通用代码和专用代码（请参阅 [第 9.4 节](ch09.md)）。
9. 不同的层级应具有不同的抽象（请参阅 [第 7 章](ch07.md)）。
10. 下沉复杂性（请参阅 [第 8 章](ch08.md)）。
11. 通过定义来规避错误（和特殊情况）（请参阅 [第 10.3 节](ch10.md)）。
12. 设计两次（请参阅 [第 11 章](ch11.md)）。
13. 注释应该描述代码中难以理解的内容（请参阅 [第 13 章](ch13.md)）。
14. 软件应被设计成易于阅读而不是易于编写（请参阅 [第 18.2 节](ch18.md)）。
15. 软件开发的增量应该是抽象而不是功能（请参阅 [第 19.2 节](ch19.md)）。

## 危险信号小结

这些是本书中讨论的一些最重要的危险信号。系统中任何这些症状的存在都表明系统的设计存在问题：

- **浅模块**：类或方法的接口并不比其实现简单得多（请参阅 [第 4.5 节](ch04.md)，[第 13.5 节](ch13.md)）。
- **信息泄露**：设计决策反映在多个模块中（请参阅 [第 5.2 节](ch05.md)）。
- **时间顺序分解**：代码结构基于执行操作的顺序，而不是基于信息隐藏的原则（请参阅 [第 5.3 节](ch05.md)）。
- **过度暴露**：API 强迫调用者在使用常用功能的时候还需要去了解那些很少使用的功能（请参阅 [第 5.7 节](ch05.md)）。
- **透传方法**：一种几乎不执行任何操作的方法，只是将其参数传递给具有相似签名的另一个方法（请参阅 [第 7.1 节](ch07.md)）。
- **重复**：一遍又一遍的重复代码（请参阅 [第 9.4 节](ch09.md)）。
- **通用专用混合体**：专用代码与通用代码没有整洁地分开（请参阅 [第 9.5 节](ch09.md)）。
- **连体方法**：两个方法之间的依赖很多，以至于很难在不理解一个方法的实现的情况下理解另一个方法的实现（请参阅 [第 9.8 节](ch09.md)）。
- **注释重复了代码**：注释中的所有信息在旁边的代码里显而易见（请参阅 [第 13.2 节](ch13.md)）。
- **实现文档污染了接口**：接口注释描述了其用户不需要了解的实现细节（请参阅 [第 13.5 节](ch13.md)）。
- **模糊的名称**：变量或方法的名称过于不精确，以至于它不能传递太多有用的信息（请参阅 [第 14.3 节](ch14.md)）。
- **难以选取名称**：很难为实体提供一个精确而直观的名称（请参阅 [第 14.3 节](ch14.md)）。
- **难以描述**：为了得到完整的描述，变量或方法的文档必须很长（请参阅 [第 15.3 节](ch15.md)）。
- **难以理解的代码**：一段代码的行为或含义不容易被理解（请参阅 [第 18.2 节](ch18.md)）。

## 关于作者

John Ousterhout 是斯坦福大学的 Bosack Lerner 计算机科学教授。他是 Tcl 脚本语言的创建者，并且以在分布式操作系统和存储系统中的工作而闻名。Ousterhout 在耶鲁大学获得了物理学学士学位，并在卡内基梅隆大学获得了计算机科学博士学位。他是美国国家工程院院士，并获得了诸多的奖项，包括美国计算机协会（ACM）的软件系统奖、ACM Grace Murray Hopper 奖、美国国家科学基金会（NSF）的总统青年研究奖和加州大学伯克利分校（UC Berkeley）的杰出教学奖。