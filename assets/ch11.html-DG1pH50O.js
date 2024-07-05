import{_ as e,c as t,o as p,d as a}from"./app-Cqxxon4F.js";const c={},l=a('<h1 id="第-11-章-設計兩次" tabindex="-1"><a class="header-anchor" href="#第-11-章-設計兩次"><span>第 11 章 設計兩次</span></a></h1><p>設計軟體非常困難，因此您對如何構造模組或系統的初步思考不太可能會產生最佳的設計。如果為每個主要設計決策考慮多個選項，最終將獲得更好的結果：設計兩次。</p><p>假設您正在設計用於管理圖形介面文字編輯器的檔案文字的類。第一步是定義這個類將要呈現給編輯器其餘部分的介面。與其選擇想到的第一個想法，不如考慮幾種可能性。一種選擇是面向行的介面，該介面支援插入、修改和刪除整行文字的操作。另一個選擇是基於單個字元插入和刪除的介面。第三種選擇是面向字串的介面，該介面能對可能跨越行邊界的任意範圍的字元進行操作。您無需確定每個替代方案的每個功能；在這個時間點，勾勒出一些最重要的方法就足夠了。</p><p>嘗試選擇彼此差異較大的方法；這樣您將學到更多。即使你確定只有一種合理的方法，無論如何也要考慮第二種設計，不管你認為它有多糟糕。考慮該設計的弱點並將它們與其他設計的特性進行對比將很有啟發性。</p><p>在你粗略地設計出可供選擇的方案後，列出每個方案的優缺點。對較高層級軟體的易用性是介面最重要的考慮因素。在上面的示例中，面向行的介面和麵向字元的介面都需要在使用文字類的軟體程式碼中做一些額外的工作。面向行的介面將需要更高層級的軟體在部分行和多行操作（例如剪下和貼上所選內容）期間拆分和合並行。面向字元的介面將需要迴圈操作來實現多個字元的修改。還有其他值得考慮的因素：</p><ul><li>一種選擇是否具有比另一種有更簡單的介面？在文字示例中，所有文字介面都相對簡單。</li><li>一種介面是否比另一種介面更通用？</li><li>一種介面的實現是否比另一種介面的實現更有效率？在文字示例中，面向字元的方法可能比其他方法慢得多，因為它需要為每個字元單獨呼叫文字模組。</li></ul><p>比較了備選設計之後，您將可以更好地確定最佳設計。最佳選擇可能是這些選擇之一，或者您可能會發現，您可以將多種選擇的特性組合到一個新的設計中，這個新的設計比任何一個原始的設計都要更好。</p><p>有時所有的備選設計都沒有特別的吸引力。發生這種情況時，看看是否可以提出其他方案。使用您在備選設計中發現的問題來驅動新的設計。如果您在設計文字類並且僅考慮面向行和麵向字元的方法，則可能會注意到兩個方法都比較尷尬，因為它們都需要更高層級的軟體來執行額外的文字操作。那是一個危險訊號：如果要有一個文字類，它應該處理所有文字操作。為了消除其他額外的文字操作，文字介面需要更緊密地匹配更高層級軟體中發生的操作。這些操作並不總是對應於單個字元或單個行。這種推理方式應該會讓你找到一個面向範圍的文字 API，它消除了早期設計的問題。</p><p>設計兩次的原則可以應用在系統的不同層級上。對於模組，您可以首先使用此方法來設計介面，如上所述。然後，您可以在設計實現時再次應用它：對於文字類，您可以考慮的實現方式包括基於行的連結串列、固定大小的字元塊或“間隙緩衝區（Gap Buffer）”。設計實現的目標與設計介面的目標是不同的：對於實現，最重要的是簡單性和效能。在系統的更高層級上探索多種設計也很有用，例如在為使用者介面選擇特性或將系統分解為主要模組時。在每種情況下，如果您可以比較幾種選擇，則更容易確定最佳方法。</p><p>設計兩次不需要花費很多額外的時間。對於較小的模組比如類，您可能只需要一兩個小時去思考備選設計。與您將花費數天或數週時間來實現該類相比，這是很少的時間。一開始的設計實驗很可能產生明顯更好的設計，其收益將超過兩次設計所花的時間。對於較大的模組，您將花費更多的時間進行初始的設計探索，但是它的實現也將花費更長的時間，並且更好的設計所帶來的好處也會更高。</p><p>我已經注意到，真正聰明的人有時很難接受設計兩次的原則。聰明的人會發現，在他們長大的過程中，他們對任何問題的第一個快速構想就足以取得良好的成績，而無需考慮第二種或第三種可能性。這使得他們容易養成不良的工作習慣。但是，隨著這些人變老，他們將被提升到越來越困難的環境中。最終，每個人都進入了第一個想法不再足夠好的境地。如果您想獲得非常好的結果，那麼無論您多麼聰明，都必須考慮第二種可能性，或者第三種可能性。大型軟體系統的設計也是這樣：沒有人足夠優秀到總是能夠第一次就做好。</p><p>不幸的是，我經常看到聰明的人堅持要實現第一個想到的想法，這會使他們無法發揮其真正的潛力（這也使得與他們一起工作會讓人沮喪）。也許他們下意識地相信“聰明的人第一次就能做到”，因此，如果他們嘗試多種設計，那將意味著他們並不聰明。其實不是這樣的。不是說你不聰明，而是問題真的很難解決！此外，這其中是一件好事：處理一個必須認真思考的難題比處理一個根本不需要思考的難題更有趣。</p><p>設計兩次的方法不僅可以改善您的設計，而且可以提高您的設計能力。設計和比較多種方法的過程將教會你使設計變得更好或更差的因素。這將使你更容易排除不好的設計，並鑽研真正偉大的設計。</p>',13),h=[l];function i(s,n){return p(),t("div",null,h)}const r=e(c,[["render",i],["__file","ch11.html.vue"]]),_=JSON.parse('{"path":"/zh-tw/ch11.html","title":"第 11 章 設計兩次","lang":"zh-TW","frontmatter":{},"headers":[],"git":{"updatedTime":1720141840000},"filePathRelative":"zh-tw/ch11.md"}');export{r as comp,_ as data};