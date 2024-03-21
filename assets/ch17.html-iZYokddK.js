import{_ as s,r,o as l,c,a as e,d as t,b as n,w as a,e as i}from"./app-C7-5p1i5.js";const h={},d=i('<h1 id="第-17-章-一致性" tabindex="-1"><a class="header-anchor" href="#第-17-章-一致性"><span>第 17 章 一致性</span></a></h1><blockquote><p>Chapter 17 Consistency</p></blockquote><blockquote><p>Consistency is a powerful tool for reducing the complexity of a system and making its behavior more obvious. If a system is consistent, it means that similar things are done in similar ways, and dissimilar things are done in different ways. Consistency creates cognitive leverage: once you have learned how something is done in one place, you can use that knowledge to immediately understand other places that use the same approach. If a system is not implemented in a consistent fashion, developers must learn about each situation separately. This will take more time.</p></blockquote><p>一致性是一个强大的工具，可以降低系统复杂性并使其行为更明显。如果系统是一致的，则意味着相似的事情以相似的方式完成，而不同的事情则以不同的方式完成。一致性创造了认知杠杆：一旦您了解了某个地方的工作方式，就可以使用该知识立即了解其他使用相同方式的地方。如果系统没有以一致的风格实现，则开发人员必须分别了解每种情况，这将花费更多的时间。</p><blockquote><p>Consistency reduces mistakes. If a system is not consistent, two situations may appear the same when in fact they are different. A developer may see a pattern that looks familiar and make incorrect assumptions based on previous encounters with that pattern. On the other hand, if the system is consistent, assumptions made based on familiar-looking situations will be safe. Consistency allows developers to work more quickly with fewer mistakes.</p></blockquote><p>一致性减少了失误。如果系统不是一致的，两种实际上不相同的情况可能看起来是一样的。开发人员可能会看到一个看起来很熟悉的模式，并根据以前遇到的模式做出错误的假设。另一方面，如果系统是一致的，则基于看起来很熟悉的情况所做的假设就会很安全。一致性允许开发人员更快速的工作，还能减少失误。</p><h2 id="_17-1-一致性示例" tabindex="-1"><a class="header-anchor" href="#_17-1-一致性示例"><span>17.1 一致性示例</span></a></h2><blockquote><p>17.1 Examples of consistency</p></blockquote><blockquote><p>Consistency can be applied at many levels in a system; here are a few examples.</p></blockquote><p>一致性可以应用于系统中的许多层级，这里是一些例子。</p><blockquote><p>Names. Chapter 14 has already discussed the benefits of using names in a consistent way.</p></blockquote>',11),u=e("strong",null,"名称。",-1),p=e("blockquote",null,[e("p",null,"Coding style. It is common nowadays for development organizations to have style guides that restrict program structure beyond the rules enforced by compilers. Modern style guides address a range of issues, such as indentation, curly-brace placement, order of declarations, naming, commenting, and restrictions on language features considered dangerous. Style guidelines make code easier to read and can reduce some kinds of errors.")],-1),m=e("p",null,[e("strong",null,"编码风格。"),t(" 如今，开发组织通常会制定编码风格指南，在编译器所强制执行的规则之外对程序进行额外的结构限制。现代的风格指南解决了一系列问题，例如缩进、花括号放置、声明顺序、命名、注释以及对认为危险的语言特性的限制。风格指南使代码更易于阅读，并且可以减少某些类型的错误。")],-1),f=e("blockquote",null,[e("p",null,"Interfaces. An interface with multiple implementations is another example of consistency. Once you understand one implementation of the interface, any other implementation becomes easier to understand because you already know the features it will have to provide.")],-1),b=e("p",null,[e("strong",null,"接口。"),t(" 具有多种实现的接口是一致性的另一个示例。一旦了解了接口的其中一种实现，其他的实现都将变得更易于理解，因为您已经知道它将会提供的特性。")],-1),y=e("blockquote",null,[e("p",null,"Design patterns. Design patterns are generally-accepted solutions to certain common problems, such as the model-view-controller approach to user interface design. If you can use an existing design pattern to solve the problem, the implementation will proceed more quickly, it is more likely to work, and your code will be more obvious to readers. Design patterns are discussed in more detail in Section 19.5.")],-1),w=e("strong",null,"设计模式。",-1),v=i('<blockquote><p>Invariants. An invariant is a property of a variable or structure that is always true. For example, a data structure storing lines of text might enforce an invariant that each line is terminated by a newline character. Invariants reduce the number of special cases that must be considered in code and make it easier to reason about the code’s behavior.</p></blockquote><p><strong>不变量。</strong> 不变量是一个变量或结构的属性，它总是为真。例如，存储文本行的数据结构可能会强制要求每行以换行符终止的不变量。不变量减少了代码中必须考虑的特殊情况的数量，并且更容易推断代码的行为。</p><h2 id="_17-2-确保一致性" tabindex="-1"><a class="header-anchor" href="#_17-2-确保一致性"><span>17.2 确保一致性</span></a></h2><blockquote><p>17.2 Ensuring consistency</p></blockquote><blockquote><p>Consistency is hard to maintain, especially when many people work on a project over a long time. People in one group may not know about conventions established in another group. Newcomers don’t know the rules, so they unintentionally violate the conventions and create new conventions that conflict with existing ones. Here are a few tips for establishing and maintaining consistency:</p></blockquote><p>一致性很难保持，尤其是当许多人长时间从事一个项目时。一个小组的人可能不了解另一小组中建立的约定。新来的人不了解约定，因此他们无意间违反了约定，并创建了与现有约定冲突的新约定。以下是建立和保持一致性的一些技巧：</p><blockquote><p>Document. Create a document that lists the most important overall conventions, such as coding style guidelines. Place the document in a spot where developers are likely to see it, such as a conspicuous place on the project Wiki. Encourage new people joining the group to read the document, and encourage existing people to review it every once in a while. Several style guides from various organizations have been published on the Web; consider starting with one of these.</p></blockquote><p><strong>文档。</strong> 创建一个文档，并列出最重要的总体约定，例如编码风格指南。将文档放置在开发人员容易会看到的位置，例如项目维基的显要位置。鼓励新加入小组的成员来阅读这些文档，并鼓励现有的团队人员时不时对文档进行评审。一些来自不同组织的风格指南已经在网上发布；考虑从其中之一开始。</p><p>For conventions that are more localized, such as invariants, find an appropriate spot in the code to document them. If you don’t write the conventions down, it’s unlikely that other people will follow them.</p><p>对于那些更加局部的约定，例如不变量，请在代码中找到合适的位置进行记录。如果您不把这些约定写下来，那么其他人也不太可能会遵循它们。</p><blockquote><p>Enforce. Even with good documentation, it’s hard for developers to remember all of the conventions. The best way to enforce conventions is to write a tool that checks for violations, and make sure that code cannot be committed to the repository unless it passes the checker. Automated checkers work particularly well for low-level syntactic conventions.</p></blockquote><p><strong>强制执行。</strong> 即使有好的文档，开发人员也很难记住所有约定。强制执行约定的最佳方法是编写一个检查违规的工具，并确保代码在通过检查之前不能提交到存储库。自动检查对于低层级的语法约定特别有用。</p><blockquote><p>One of my recent projects had problems with line termination characters. Some developers worked on Unix, where lines are terminated by newlines; others worked on Windows, where lines are normally terminated by a carriage-return followed by a newline. If a developer on one system made a small edit to a file previously edited on the other system, the editor would sometimes replace all of the line terminators with ones appropriate for that system. This gave the appearance that every line of the file had been modified, which made it hard to track the meaningful changes. We established a convention that files should contain newlines only, but it was hard to ensure that every tool used by every developer followed the convention. Every time a new developer joined the project, we would experience a rash of line termination problems while that developer adjusted to the convention.</p></blockquote><p>我最近的一个项目有行终止符的问题。一些开发人员在 Unix 上工作，行由换行符终止；其他的人工作在 Windows 上，行通常由回车符加上换行符来终止。如果某个系统上的开发人员对先前在另一个系统上编辑过的文件进行了编辑，那么编辑器有时会将所有行终止符替换为适合该系统的行终止符。这给人的感觉是文件的每一行都被修改了，也就让人很难追踪有意义的变化。我们建立了一个约定，即文件应该只包含换行符，但是很难确保每个开发人员使用的每个工具都遵循这个约定。每当一个新的开发人员加入这个项目，我们都会遇到大量的行终止符问题，直到开发人员适应了这个约定。</p><blockquote><p>We eventually solved this problem by writing a short script that was executed automatically before changes are committed to the source code repository. The script checks all of the files that have been modified and aborts the commit if any of them contain carriage returns. The script can also be run manually to repair damaged files by replacing carriage-return/newline sequences with newlines. This instantly eliminated the problems, and it also helped train new developers.</p></blockquote><p>我们最终通过编写了一个简短的脚本解决了这个问题，该脚本会在变更提交到源代码存储库之前自动执行。该脚本检查所有已修改的文件，如果其中任何一个包含回车符，则中止提交。该脚本也可以手动运行，通过用换行符替换回车符加换行符来修复损坏的文件。这一下子就消除了问题，并且还有助于培训新的开发人员。</p><blockquote><p>Code reviews provide another opportunity for enforcing conventions and for educating new developers about the conventions. The more nit-picky that code reviewers are, the more quickly everyone on the team will learn the conventions, and the cleaner the code will be.</p></blockquote><p>代码审查为强制执行约定和向新的开发人员提供培训上提供了另一个时机。代码审阅者越挑剔，团队中的每个人学习约定的速度就越快，并且代码越清晰。</p><blockquote><p>When in Rome ... The most important convention of all is that every developer should follow the old adage “When in Rome, do as the Romans do.” When working in a new file, look around to see how the existing code is structured. Are all public variables and methods declared before private ones? Are the methods in alphabetical order? Do variables use “camel case,” as in firstServerName, or “snake case,” as in first_server_name? When you see anything that looks like it might possibly be a convention, follow it. When making a design decision, ask yourself if it’s likely that a similar decision was made elsewhere in the project; if so, find an existing example and use the same approach in your new code.</p></blockquote><p><strong>入乡随俗。</strong> 所有约定中最重要的约定是每个开发人员都应遵循古老的格言：“到了罗马，就按罗马人那样做。” 在编写新代码时，请先看看现有的代码是如何组织的。是否在私有变量和方法之前声明了所有的公有变量和方法？方法是否按字母顺序排列？变量是像 <code>firstServerName</code> 那样使用驼峰命名法，还是像 <code>first_server_name</code> 中那样使用蛇形命名法？当您看到任何看起来可能是约定的内容时，请遵循该约定。在做出设计决策时，请问自己是否有可能在项目的其它地方做出了类似的决策；如果是这样，请找到一个现有示例，并在新代码中使用相同的方式。</p><blockquote><p>Don’t change existing conventions. Resist the urge to “improve” on existing conventions. Having a “better idea” is not a sufficient excuse to introduce inconsistencies. Your new idea may indeed be better, but the value of consistency over inconsistency is almost always greater than the value of one approach over another. Before introducing inconsistent behavior, ask yourself two questions. First, do you have significant new information justifying your approach that wasn’t available when the old convention was established? Second, is the new approach so much better that it is worth taking the time to update all of the old uses? If your organization agrees that the answers to both questions are “yes,” then go ahead and make the upgrade; when you are done, there should be no sign of the old convention. However, you still run the risk that other developers will not know about the new convention, so they may reintroduce the old approach in the future. Overall, reconsidering established conventions is rarely a good use of developer time.</p></blockquote><p><strong>不要改变现有约定。</strong> 抵制“改善”现有约定的冲动。<strong>有一个“更好的想法”并不是引入不一致的充分借口。</strong> 您的新想法可能确实更好，但是一致性胜过不一致的价值几乎总是大于一种方法胜过另一种方法的价值。在引入不一致的行为之前，请问自己两个问题。首先，您是否拥有在建立旧约定时还不存在的全新信息来支持使用新的方法？其次，新的方法是否好到值得花时间去更新所有旧的用法？如果您的组织同意这两个问题的回答均为“是”，那么就去进行更新；当您完成后，应该不会有任何旧约定的痕迹留下来。然而，您仍然面临着其他开发人员不了解新约定的风险，因此他们将来可能会重新引入旧的方法。总体而言，重新考虑已建立的约定很少会是对开发人员时间的好用途。</p><h2 id="_17-3-做过头了" tabindex="-1"><a class="header-anchor" href="#_17-3-做过头了"><span>17.3 做过头了</span></a></h2><blockquote><p>17.3 Taking it too far</p></blockquote><blockquote><p>Consistency means not only that similar things should be done in similar ways, but that dissimilar things should be done in different ways. If you become overzealous about consistency and try to force dissimilar things into the same approach, such as by using the same variable name for things that are really different or using an existing design pattern for a task that doesn’t fit the pattern, you’ll create complexity and confusion. Consistency only provides benefits when developers have confidence that “if it looks like an x, it really is an x.”</p></blockquote><p>一致性不仅意味着相似的事情应该以相似的方式完成，而且不同的事情也应该以不同的方式完成。如果您对一致性过于热衷，并试图对不同的事物强制采用相同的方法，例如对确实不同的事物使用相同的变量名，或者对不适合该模式的任务使用现有的设计模式，那只会造成复杂性和混乱。一致性只有在开发人员确信“如果它看起来像 <code>x</code>，它确实是 <code>x</code>”时才会带来好处。</p><h2 id="_17-4-结论" tabindex="-1"><a class="header-anchor" href="#_17-4-结论"><span>17.4 结论</span></a></h2><blockquote><p>17.4 Conclusion</p></blockquote><blockquote><p>Consistency is another example of the investment mindset. It will take a bit of extra work to ensure consistency: work to decide on conventions, work to create automated checkers, work to look for similar situations to mimic in new code, and work in code reviews to educate the team. The return on this investment is that your code will be more obvious. Developers will be able to understand the code’s behavior more quickly and accurately, and this will allow them to work faster, with fewer bugs.</p></blockquote><p>一致性是投资思维的另一个例子。确保一致性的工作将需要一些额外的工作：决定使用什么约定、创建自动检查程序、寻找旧代码中的类似情况以在新代码中模仿、在代码审查中培训团队成员。这项投资的回报是您的代码将更加明显。开发人员将能够更快和更准确地了解代码的行为，这将使他们能够更快地工作，并引入更少的缺陷。</p>',30);function g(k,_){const o=r("RouteLink");return l(),c("div",null,[d,e("p",null,[u,t(),n(o,{to:"/ch14.html"},{default:a(()=>[t("第 14 章")]),_:1}),t("已经讨论了以一致的方式使用名称的好处。")]),p,m,f,b,y,e("p",null,[w,t(" 设计模式是某些常见问题的普遍接受的解决方案，例如用于用户界面设计的模型-视图-控制器（MVC）方法。如果您可以使用现有的设计模式来解决问题，则实现会更快地进行，也更有可能奏效，并且您的代码对读者来说也会更明显。设计模式将在"),n(o,{to:"/ch19.html"},{default:a(()=>[t("第 19.5 节")]),_:1}),t("中详细讨论。")]),v])}const x=s(h,[["render",g],["__file","ch17.html.vue"]]),C=JSON.parse('{"path":"/ch17.html","title":"第 17 章 一致性","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"17.1 一致性示例","slug":"_17-1-一致性示例","link":"#_17-1-一致性示例","children":[]},{"level":2,"title":"17.2 确保一致性","slug":"_17-2-确保一致性","link":"#_17-2-确保一致性","children":[]},{"level":2,"title":"17.3 做过头了","slug":"_17-3-做过头了","link":"#_17-3-做过头了","children":[]},{"level":2,"title":"17.4 结论","slug":"_17-4-结论","link":"#_17-4-结论","children":[]}],"git":{"updatedTime":1711020904000},"filePathRelative":"ch17.md"}');export{x as comp,C as data};