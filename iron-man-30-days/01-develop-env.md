# 01. 基礎建設

馬上要開始介紹 Web Audio API 了，總要有個網站來呈現各種內容吧；既然要學東西，那就順便把不熟的 Vue 架起來玩一玩囉！

## Vue

前陣子 Vue Cli 3 推出了，增加了 UI 介面，讓不熟悉命令列的開發者可以透過 UI 勾勾選選快速建置專案，真的非常方便！

### 安裝

首先是安裝 Vue Cli。在安裝前，先確認你的電腦已經有安裝好 `node` & `npm`/`yarn`，隨後在終端機輸入：
```cs
yarn global add @vue/cli
```
接著是開啟專案，只要輸入：
```cs
vue create web-audio
```
並依著提示勾選需要的功能，這樣專案就建好囉！

### 執行

來確認一下專案是否能順利啟動吧：

```cs
yarn

yarn run serve
```

等待服務啟動。當啟動完成時，應該會看到終端機的提示如下：
![terminal](https://i.imgur.com/hv0M5jO.jpg)

服務開在 `localhost:8080`，應該會看到這樣的畫面：
![localhost](https://i.imgur.com/EMvZ30j.jpg)

確認服務正確啟動後，再來簡單做一下頁面切換吧。
利用 Vue Router 的特性，導覽頁籤一下就完工囉：

![nav](https://i.imgur.com/3AEty2G.jpg)


做到這，也就大致完成基礎建設啦～

第一天就先這樣，明天就要進入正題囉！