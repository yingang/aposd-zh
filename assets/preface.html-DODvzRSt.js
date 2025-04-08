import{_ as a,c as o,a as t,o as r}from"./app-s25-7jI4.js";const n={};function p(s,e){return r(),o("div",null,e[0]||(e[0]=[t('<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h1><p>80 多年來，人們一直在為電子計算機編寫程式，但令人驚訝的是，關於如何設計這些程式或什麼是好的程式的討論卻很少。關於軟體開發過程（如敏捷開發）和開發工具（如偵錯程式、版本控制系統和測試覆蓋工具）已經有了相當多的討論。針對程式設計技術的分析也已經相當廣泛，如物件導向程式設計和函數語言程式設計，以及設計模式和演算法。所有這些討論都是有價值的，但是軟體設計的核心問題在很大程度上仍然沒有觸及。David Parnas 的經典論文“關於將系統分解成模組的標準”發表於 1971 年，但是在隨後的 45 年裡，軟體設計的技術水平並沒有超過這篇論文。</p><p>計算機科學中最基本的問題是 <em>問題分解</em>：如何將一個複雜的問題分解為可以獨立解決的部分。問題分解是程式設計師每天都要面對的首要設計任務，但是，除了這裡描述的工作之外，我還沒有在任何一所大學裡找到一門以問題分解為中心的課程。我們講授 <code>for</code> 迴圈和麵向物件的程式設計，而不是軟體設計。</p><p>此外，不同的程式設計師在產出質量和效率上存在巨大差異，但是我們幾乎沒有嘗試去了解什麼能使最好的程式設計師變得更好，也沒有在我們的課堂上進授這些技能。我曾與幾位我認為是優秀的程式設計師的人進行過交談，但是他們中的大多數人都難以闡明賦予他們優勢的特定技術。許多人認為軟體設計技能是天生的天賦，無法講授。但是，有相當多的科學證據表明，許多領域的傑出表現更多地與高質量的實踐有關，而不是與先天能力有關（例如，參閱 Geoff Colvin 的《<em>哪來的天才？練習中的平凡與偉大</em>》）。</p><p>多年來，這些問題使我感到困惑和沮喪。我想知道軟體設計是否是可以被講授的，並且我假設設計技巧是區分優秀程式設計師和普通程式設計師的原因。我最終決定，回答這些問題的唯一方法是嘗試講授軟體設計課程。結果就是斯坦福大學的 CS 190 課程。在這個課程中，我提出了一套軟體設計原則。然後，學生將透過一系列專案來學習和實踐這些原則。該課程的授課方式類似於傳統的英語寫作課。在英語課堂上，學生使用迭代的過程，在過程中編寫草稿、獲取反饋、然後重寫以進行改進。在 CS 190 中，學生從頭開始開發大量軟體。然後，我們將進行大量的程式碼審查以識別設計問題，然後學生修改其專案以解決這些問題。這使學生可以瞭解如何透過應用設計原則來改進其程式碼。</p><p>到現在，我已經教過 3 次軟體設計課程，並且本書是基於該課程中出現的設計原則編寫的。這些原則立足於比較高的層級，類似於哲學概念（比如“透過定義來規避錯誤”），因此學生很難以抽象的方式理解這些思想。透過編寫程式碼、犯錯誤、然後檢視他們的錯誤以及後續的修正與這些原則之間的關係，學生將學得最好。</p><p>在這一點上，你可能會想知道：是什麼讓我認為我知道有關軟體設計的所有答案？老實說，我並不知道。當我學會程式設計時，也沒有關於軟體設計的課程，而且從來沒有導師來教我設計原則。在我學習程式設計時，程式碼審查還不存在。我對軟體設計的想法來自於編寫和閱讀程式碼的個人經驗。在我的職業生涯中，我已經用多種語言編寫了大約 25 萬行程式碼。我曾在一些團隊中工作過，這些團隊從零開始建立了三個作業系統、多個檔案和儲存系統、基礎架構工具（例如偵錯程式、構建系統和影像介面工具包）、一種指令碼語言以及用於文字、圖形、簡報和積體電路的互動式編輯器。一路上，我親身經歷了大型系統的問題，並嘗試了各種設計技術。另外，我已經閱讀了很多其他人編寫的程式碼，這使我接觸到了很多方法，無論是好是壞。</p><p>從所有這些經驗中，我嘗試提取通用線索，包括需要避免的錯誤和使用的技巧。本書反映了我的經驗：這裡描述的每個問題都是我親身經歷的，每種建議的技術都是我在自己的編碼中成功使用過的。</p><p>我不希望這本書成為軟體設計的定論。我敢肯定，我錯過了一些有價值的技術，從長遠來看，我的一些建議可能會變成壞主意。但是，我希望本書能開啟有關軟體設計的對話。將本書中的想法與你自己的經驗進行比較，以確定此處介紹的方法是否確實降低了你的軟體複雜性。這是一本呈現我個人觀點的書，所以有些讀者會不同意我的一些建議。如果你不同意，請嘗試理解原因在哪。我有興趣瞭解對你有用的東西、不起作用的東西以及你可能對軟體設計有的任何其他想法。我希望隨後的對話將增進我們對軟體設計的集體理解。</p><p>與我交流這本書的最好方法是將電子郵件傳送到以下地址：</p><p><a href="mailto:software-design-book@googlegroups.com" target="_blank" rel="noopener noreferrer">software-design-book@googlegroups.com</a></p><p>我有興趣聽到有關本書的反饋，例如缺陷或改進建議，以及與軟體設計相關的通用思想和經驗。我對可以在本書未來版本中使用的好的示例特別感興趣。最好的示例能說明重要的設計原則，並且足夠簡單，可以在一兩個段落中進行解釋。如果你想在電子郵件地址上看到其他人在說什麼並參與討論，可以加入 Google Group <code>software-design-book</code>。</p><p>如果出於某種原因 Google Group <code>software-design-book</code> 將來會消失，請在網際網路上搜索我的主頁，它將包含有關如何與這本書進行交流的更新說明。請不要將與圖書相關的電子郵件傳送到我的個人電子郵件地址。</p><p>我建議你使用本書建議時持保留態度。總體目標是降低複雜性，這比你在此處閱讀的任何特定原則或想法更為重要。如果你嘗試從本書中獲得一個想法並發現它實際上並沒有降低複雜性，那麼你就不必繼續使用它（但是，請讓我知道你的經歷，不管方法有效還是無效，我都想獲得相關的反饋意見）。</p><p>許多人提出了批評或建議，以提高本書的質量。以下人員對本書的各種草稿提供了有用的意見：Jeff Dean，Sanjay Ghemawat，John Hartman，Brian Kernighan，James Koppel，Amy Ousterhout，Kay Ousterhout，Rob Pike，Partha Ranganathan，Keith Schwartz 和 Alex Snaps。Christos Kozyrakis 為類和介面建議了術語“深”和“淺”，代替了之前有點模糊的術語“厚”和“薄”。我很感激 CS 190 中的學生，閱讀他們的程式碼並與他們討論的過程有助於明確我對設計的想法。</p>',15)]))}const c=a(n,[["render",p]]),g=JSON.parse('{"path":"/zh-tw/preface.html","title":"前言","lang":"zh-TW","frontmatter":{},"headers":[],"git":{"updatedTime":1744082517000,"contributors":[{"name":"yingang","username":"yingang","email":"1246410+yingang@users.noreply.github.com","commits":1,"url":"https://github.com/yingang"}],"changelog":[{"hash":"773de20e521064e4549d245555e3397d687d5177","time":1744082517000,"email":"1246410+yingang@users.noreply.github.com","author":"Gang Yin","message":"update ci script"}]},"filePathRelative":"zh-tw/preface.md"}');export{c as comp,g as data};
