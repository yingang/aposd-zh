import{_ as t,c as i,a,o}from"./app-s25-7jI4.js";const n={};function r(s,e){return o(),i("div",null,e[0]||(e[0]=[a('<h1 id="chapter-11-design-it-twice" tabindex="-1"><a class="header-anchor" href="#chapter-11-design-it-twice"><span>Chapter 11 Design it Twice</span></a></h1><p>Designing software is hard, so it’s unlikely that your first thoughts about how to structure a module or system will produce the best design. You’ll end up with a much better result if you consider multiple options for each major design decision: design it twice.</p><p>Suppose you are designing the class that will manage the text of a file for a GUI text editor. The first step is to define the interface that the class will present to the rest of the editor; rather than picking the first idea that comes to mind, consider several possibilities. One choice is a line-oriented interface, with operations to insert, modify, and delete whole lines of text. Another option is an interface based on individual character insertions and deletions. A third choice is a string-oriented interface, which operates on arbitrary ranges of characters that may cross line boundaries. You don’t need to pin down every feature of each alternative; it’s sufficient at this point to sketch out a few of the most important methods.</p><p>Try to pick approaches that are radically different from each other; you’ll learn more that way. Even if you are certain that there is only one reasonable approach, consider a second design anyway, no matter how bad you think it will be. It will be instructive to think about the weaknesses of that design and contrast them with the features of other designs.</p><p>After you have roughed out the designs for the alternatives, make a list of the pros and cons of each one. The most important consideration for an interface is ease of use for higher level software. In the example above, both the line-oriented interface and the character-oriented interface will require extra work in software that uses the text class. The line-oriented interface will require higher level software to split and join lines during partial-line and multi-line operations such as cutting and pasting the selection. The character-oriented interface will require loops to implement operations that modify more than a single character. It is also worth considering other factors:</p><ul><li>Does one alternative have a simpler interface than another? In the text example, all of the text interfaces are relatively simple.</li><li>Is one interface more general-purpose than another?</li><li>Does one interface enable a more efficient implementation than another? In the text example, the character-oriented approach is likely to be significantly slower than the others, because it requires a separate call into the text module for each character.</li></ul><p>Once you have compared alternative designs, you will be in a better position to identify the best design. The best choice may be one of the alternatives, or you may discover that you can combine features of multiple alternatives into a new design that is better than any of the original choices.</p><p>Sometimes none of the alternatives is particularly attractive; when this happens, see if you can come up with additional schemes. Use the problems you identified with the original alternatives to drive the new design(s). If you were designing the text class and considered only the line-oriented and character-oriented approaches, you might notice that each of the alternatives is awkward because it requires higher level software to perform additional text manipulations. That’s a red flag: if there’s going to be a text class, it should handle all of the text manipulation. In order to eliminate the additional text manipulations, the text interface needs to match more closely the operations happening in higher level software. These operations don’t always correspond to single characters or single lines. This line of reasoning should lead you to a range-oriented API for text, which eliminates the problem with the earlier designs.</p><p>The design-it-twice principle can be applied at many levels in a system. For a module, you can use this approach first to pick the interface, as described above. Then you can apply it again when you are designing the implementation: for the text class, you might consider implementations such as a linked list of lines, fixed-size blocks of characters, or a “gap buffer.” The goals will be different for the implementation than for the interface: for the implementation, the most important things are simplicity and performance. It’s also useful to explore multiple designs at higher levels in the system, such as when choosing features for a user interface, or when decomposing a system into major modules. In each case, it’s easier to identify the best approach if you can compare a few alternatives.</p><p>Designing it twice does not need to take a lot of extra time. For a smaller module such as a class, you may not need more than an hour or two to consider alternatives. This is a small amount of time compared to the days or weeks you will spend implementing the class. The initial design experiments will probably result in a significantly better design, which will more than pay for the time spent designing it twice. For larger modules you’ll spend more time in the initial design explorations, but the implementation will also take longer, and the benefits of a better design will also be higher.</p><p>I have noticed that the design-it-twice principle is sometimes hard for really smart people to embrace. When they are growing up, smart people discover that their first quick idea about any problem is sufficient for a good grade; there is no need to consider a second or third possibility. This makes it easy to develop bad work habits. However, as these people get older, they get promoted into environments with harder and harder problems. Eventually, everyone reaches a point where your first ideas are no longer good enough; if you want to get really great results, you have to consider a second possibility, or perhaps a third, no matter how smart you are. The design of large software systems falls in this category: no-one is good enough to get it right with their first try.</p><p>Unfortunately, I often see smart people who insist on implementing the first idea that comes to mind, and this causes them to underperform their true potential (it also makes them frustrating to work with). Perhaps they subconsciously believe that “smart people get it right the first time,” so if they try multiple designs it would mean they are not smart after all. This is not the case. It isn’t that you aren’t smart; it’s that the problems are really hard! Furthermore, that’s a good thing: it’s much more fun to work on a difficult problem where you have to think carefully, rather than an easy problem where you don’t have to think at all.</p><p>The design-it-twice approach not only improves your designs, but it also improves your design skills. The process of devising and comparing multiple approaches will teach you about the factors that make designs better or worse. Over time, this will make it easier for you to rule out bad designs and hone in on really great ones.</p>',13)]))}const l=t(n,[["render",r]]),c=JSON.parse('{"path":"/en/ch11.html","title":"Chapter 11 Design it Twice","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1744082517000,"contributors":[{"name":"yingang","username":"yingang","email":"1246410+yingang@users.noreply.github.com","commits":1,"url":"https://github.com/yingang"}],"changelog":[{"hash":"773de20e521064e4549d245555e3397d687d5177","time":1744082517000,"email":"1246410+yingang@users.noreply.github.com","author":"Gang Yin","message":"update ci script"}]},"filePathRelative":"en/ch11.md"}');export{l as comp,c as data};
