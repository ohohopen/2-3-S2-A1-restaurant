# 我的餐廳清單

用 Express 初步建立的清單頁面

## 環境建置與需求

- node.js 14.16.0
- express 4.17.1

## 安裝與執行步驟

- 下載此專案至本機
- 終端機路徑指定此資料夾
- 執行 npm install 下載 node_modules 等相關套件
- 執行 npm run dev 啟動專案
- 在瀏覽器鍵入 localhost:3000 即可

## 功能

- 列出全部店家，提供店家名稱、類別、星星數等資訊
- 點擊單一店家連結到店家獨立頁面，提供店家類別、地址、電話、簡介等資訊
- 左上的字樣可連回首頁
- 可以店家名稱或類別進行搜尋

## 技術解說

- 載入 express 套件做為開發框架
- 載入 express.handlebars 做為網頁模板
- 指定 handlebars 做為 view engine
- 用 express.static 指定 public 做為連結 css、js 等檔案的資料夾
- 指定 main 為模板頁
- 用路由指定各頁路徑並執行 res.render()來啟動頁面
- 監聽 app 的 port，並在終端機執行 npm ren dev
- 功能面，取得 req.query 或 req.params 的資訊做為篩選物件資料的條件，組合成新的頁面，運用- 在店家獨立頁或搜尋功能
