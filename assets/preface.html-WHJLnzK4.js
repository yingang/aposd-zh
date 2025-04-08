import{_ as t,c as a,a as o,o as s}from"./app-s25-7jI4.js";const i={};function n(r,e){return s(),a("div",null,e[0]||(e[0]=[o('<h1 id="preface" tabindex="-1"><a class="header-anchor" href="#preface"><span>Preface</span></a></h1><p>People have been writing programs for electronic computers for more than 80 years, but there has been surprisingly little conversation about how to design those programs or what good programs should look like. There has been considerable discussion about software development processes such as agile development and about development tools such as debuggers, version control systems, and test coverage tools. There has also been extensive analysis of programming techniques such as object-oriented programming and functional programming, and of design patterns and algorithms. All of these discussions have been valuable, but the core problem of software design is still largely untouched. David Parnas’ classic paper “On the Criteria to be used in Decomposing Systems into Modules” appeared in 1971, but the state of the art in software design has not progressed much beyond that paper in the ensuing 45 years.</p><p>The most fundamental problem in computer science is <em>problem decomposition</em>: how to take a complex problem and divide it up into pieces that can be solved independently. Problem decomposition is the central design task that programmers face every day, and yet, other than the work described here, I have not been able to identify a single class in any university where problem decomposition is a central topic. We teach for loops and object-oriented programming, but not software design.</p><p>In addition, there is a huge variation in quality and productivity among programmers, but we have made little attempt to understand what makes the best programmers so much better or to teach those skills in our classes. I have talked with several people I consider to be great programmers, but most of them had difficulty articulating specific techniques that give them their advantage. Many people assume that software design skill is an innate talent that cannot be taught. However, there is quite a bit of scientific evidence that outstanding performance in many fields is related more to high-quality practice than innate ability (see, for example, <em>Talent is Overrated</em> by Geoff Colvin).</p><p>For many years these issues have perplexed and frustrated me. I have wondered whether software design can be taught, and I have hypothesized that design skill is what separates great programmers from average ones. I finally decided that the only way to answer these questions was to attempt to teach a course on software design. The result is CS 190 at Stanford University. In this class I put forth a set of principles of software design. Students then work through a series of projects to assimilate and practice the principles. The class is taught in a fashion similar to a traditional English writing class. In an English class, students use an iterative process where they write a draft, get feedback, and then rewrite to make improvements. In CS 190, students develop a substantial piece of software from scratch. We then go through extensive code reviews to identify design problems, and students revise their projects to fix the problems. This allows students to see how their code can be improved by applying design principles.</p><p>I have now taught the software design class three times, and this book is based on the design principles that emerged from the class. The principles are fairly high level and border on the philosophical (“Define errors out of existence”), so it is hard for students to understand the ideas in the abstract. Students learn best by writing code, making mistakes, and then seeing how their mistakes and the subsequent fixes relate to the principles.</p><p>At this point you may well be wondering: what makes me think I know all the answers about software design? To be honest, I don’t. There were no classes on software design when I learned to program, and I never had a mentor to teach me design principles. At the time I learned to program, code reviews were virtually nonexistent. My ideas about software design come from personal experience writing and reading code. Over my career I have written about 250,000 lines of code in a variety of languages. I’ve worked on teams that created three operating systems from scratch, multiple file and storage systems, infrastructure tools such as debuggers, build systems, and GUI toolkits, a scripting language, and interactive editors for text, drawings, presentations, and integrated circuits. Along the way I’ve experienced firsthand the problems of large systems and experimented with various design techniques. In addition, I’ve read a considerable amount of code written by other people, which has exposed me to a variety of approaches, both good and bad.</p><p>Out of all of this experience, I’ve tried to extract common threads, both about mistakes to avoid and techniques to use. This book is a reflection of my experiences: every problem described here is one that I have experienced personally, and every suggested technique is one that I have used successfully in my own coding.</p><p>I don’t expect this book to be the final word on software design; I’m sure there are valuable techniques that I’ve missed, and some of my suggestions may turn out to be bad ideas in the long run. However, I hope that the book will start a conversation about software design. Compare the ideas in this book with your own experiences and decide for yourself whether the approaches described here really do reduce software complexity. This book is an opinion piece, so some readers will disagree with some of my suggestions. If you do disagree, try to understand why. I’m interested in hearing about things that work for you, things that don’t work, and any other ideas you may have about software design. I hope that the ensuing conversations will improve our collective understanding of software design. I will incorporate what I learn in future editions of this book.</p><p>The best way to communicate with me about the book is to send email to the following address:</p><p><a href="mailto:software-design-book@googlegroups.com" target="_blank" rel="noopener noreferrer">software-design-book@googlegroups.com</a></p><p>I’m interested in hearing specific feedback about the book, such as bugs or suggestions for improvement, as well as general thoughts and experiences related to software design. I’m particularly interested in compelling examples that I can use in future editions of the book. The best examples illustrate an important design principle and are simple enough to explain in a paragraph or two. If you would like to see what other people are saying on the email address and participate in discussions, you can join the Google Group <code>software-design-book</code>.</p><p>If for some reason the <code>software-design-book</code> Google Group should disappear in the future, search on the Web for my home page; it will contain updated instructions for how to communicate about the book. Please don’t send book-related email to my personal email address.</p><p>I recommend that you take the suggestions in this book with a grain of salt. The overall goal is to reduce complexity; this is more important than any particular principle or idea you read here. If you try an idea from this book and find that it doesn’t actually reduce complexity, then don’t feel obligated to keep using it (but, do let me know about your experience; I’d like to get feedback on what works and what doesn’t).</p><p>Many people have offered criticisms or made suggestions that improved the quality of the book. The following people offered helpful comments on various drafts of the book: Jeff Dean, Sanjay Ghemawat, John Hartman, Brian Kernighan, James Koppel, Amy Ousterhout, Kay Ousterhout, Rob Pike, Partha Ranganathan, Keith Schwartz, and Alex Snaps. Christos Kozyrakis suggested the terms “deep” and “shallow” for classes and interfaces, replacing previous terms “thick” and “thin”, which were somewhat ambiguous. I am indebted to the students in CS 190; the process of reading their code and discussing it with them has helped to crystallize my thoughts about design.</p>',15)]))}const d=t(i,[["render",n]]),l=JSON.parse('{"path":"/en/preface.html","title":"Preface","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1744082517000,"contributors":[{"name":"yingang","username":"yingang","email":"1246410+yingang@users.noreply.github.com","commits":1,"url":"https://github.com/yingang"}],"changelog":[{"hash":"773de20e521064e4549d245555e3397d687d5177","time":1744082517000,"email":"1246410+yingang@users.noreply.github.com","author":"Gang Yin","message":"update ci script"}]},"filePathRelative":"en/preface.md"}');export{d as comp,l as data};
