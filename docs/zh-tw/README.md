## 簡介

<img src="../figures/cover.jpeg" style="width: 28%" />

這本書是關於軟體設計的：如何將複雜的軟體系統分解成模組（如類和方法），以便這些模組可以相對獨立地實現。首先，這本書介紹了軟體設計的基本問題，也就是對複雜性的管理。然後，它討論了關於如何處理軟體設計過程的一些哲學問題，並提出了一系列可以在軟體設計過程中應用的設計原則。本書還介紹了一些可用來識別設計問題的危險訊號。您可以透過應用本書中的想法來減少大型軟體系統的複雜性，以便您可以更快地編寫軟體。

## 目錄

- [前言](preface.md)
- [第 1 章 介紹](ch01.md)
- [第 2 章 複雜性的本質](ch02.md)
- [第 3 章 能工作的程式碼是不夠的](ch03.md)
- [第 4 章 模組應該是深的](ch04.md)
- [第 5 章 資訊隱藏和資訊洩露](ch05.md)
- [第 6 章 通用的模組是更深的](ch06.md)
- [第 7 章 不同的層級，不同的抽象](ch07.md)
- [第 8 章 下沉複雜性](ch08.md)
- [第 9 章 在一起更好還是分開更好？](ch09.md)
- [第 10 章 透過定義來規避錯誤](ch10.md)
- [第 11 章 設計兩次](ch11.md)
- [第 12 章 不寫註釋的四個藉口](ch12.md)
- [第 13 章 註釋應該描述程式碼中不明顯的內容](ch13.md)
- [第 14 章 選取名稱](ch14.md)
- [第 15 章 先寫註釋](ch15.md)
- [第 16 章 修改現有的程式碼](ch16.md)
- [第 17 章 一致性](ch17.md)
- [第 18 章 程式碼應該是顯而易見的](ch18.md)
- [第 19 章 軟體發展趨勢](ch19.md)
- [第 20 章 效能設計](ch20.md)
- [第 21 章 結論](ch21.md)
- [總結](summary.md)

## 翻譯說明

無意中看到這本書的相關介紹，也很快找到了 GitHub 上的民間翻譯版，因為看到一些翻譯不太恰當的地方，所以想著順手提交修正下，然後找到其中 Star 數量比較多的主要是 [Cactus-proj](https://github.com/Cactus-proj/A-Philosophy-of-Software-Design-zh) 和 [Go7hic](https://github.com/Go7hic/A-Philosophy-of-Software-Design) 的，但兩者的內容幾乎完全一樣，包括翻譯有錯誤的地方也錯得一樣。從實質內容的提交歷史來看，應該 Cactus-proj 是更早的提交者，這一點從各自的 Fock/Star 數量也能側面印證。

這兩個專案均有收到並處理一些內容修正的 PR，但即使是 Cactus-proj，最新的幾個 PR 也處於長期未處理的狀態，應該都已經暫停維護了，然後基於 Cactus-proj，包含內容修復最多的是 [luojiego](https://github.com/luojiego/A-Philosophy-of-Software-Design-zh) 的 Fork，於是就基於這個建立了自己的 [Fork](https://github.com/yingang/aposd-zh)。除了一邊閱讀一邊校對，也摸索著更新了相關的部署指令碼，部署到我自己的 [GitHub Pages](https://yingang.github.io/aposd-zh/) 上，可直接線上閱讀。

從提交歷史來看，[gdut-yy](https://github.com/gdut-yy) 應該是主要的翻譯貢獻者，[liquid207](https://github.com/liquid207)、[wanghuanwei](https://github.com/wanghuanwei)、[luojiego](https://github.com/luojiego) 和 [BlackGlory](https://github.com/BlackGlory) 也都貢獻了比較多的翻譯修正，[inkydragon](https://github.com/inkydragon) 則主要負責了 LaTeX 和 PDF 相關的工作以及格式規範、持續整合等方面的工作，不確定歷史是否挖掘充分，所有提到未提到的貢獻者，一併感謝！

出於尊重原作版權的考慮，在完整的校訂工作完成之後，我刪除了與中文並列對照的英文內容，對於純英文內容也刪除了主體部分，只保留了前言以及各個章節的概要和總結。如果您在閱讀過程中，發現有翻譯不當的地方，或者有其他建議，歡迎提交相應的 PR 或 Issue。

另外，同時還基於 `opencc` 使用 Python 指令碼自動生成了繁體中文的翻譯版本，也一併放在了 [GitHub Pages](https://yingang.github.io/aposd-zh/) 上，如果發現有處理不當的內容，請針對該指令碼或對應的簡體內容提交 PR 或 Issue。

## 術語翻譯

翻譯是個比較困難的事情，除了個人水平有限，也有很多見仁見智的地方，所以這裡先列出一些術語的翻譯選擇和背後的考慮因素，以供參考，並至少在本書籍的翻譯過程中保持相對統一，也歡迎提 Issue 探討。

|英文|中文|說明|
|-|-|-|
|bug|缺陷 / 程式碼缺陷|沒有用“錯誤”是希望避免與 error 等術語的翻譯混淆|
|change|變更|針對程式碼的時候，更多使用“變更”而不是“改變”，但根據實際的上下文而定|
|complexity|複雜性|沒有用“複雜度”，類似的還有“依賴性（dependency）”和“模糊性（obscurity）”|
|deep module / class|深模組 / 深類|沒有用“深層”是希望避免與 layer 和 level 等術語的翻譯混淆|
|define error out of existence|透過定義來規避錯誤|類似的還有“透過設計來規避特殊情況（design special cases out of existence）”|
|dispatcher|分發器|沒有用“排程器”是希望避免與 scheduler 等術語的翻譯混淆|
|information leakage|資訊洩露|沒有用“洩漏”|
|pass-through|透傳|用於“透傳方法”、“透傳變數”、“透傳引數”等場景|
|public method / variables|公有方法 / 公有變數|沒有用“公開”是希望與 expose 和 exposure 等術語的翻譯混淆|
|selection|區域選擇 / 選擇的區域 / 所選區域|影象介面文字編譯器中的示例，直接翻譯成“選擇”會不太清晰|
|shallow module / class|淺模組 / 淺類|沒有用“淺層”，和 deep 的翻譯選擇是同樣的原因|
|web browser / server|Web 瀏覽器 / Web 伺服器|沒有用“網路”或“網頁”是希望避免與 network 和 web page 等術語的翻譯混淆，就保留英文了|