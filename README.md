# Gatsby blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/9157ed3a-d9d7-481f-8c06-ba2fd25c5779/deploy-status)](https://app.netlify.com/sites/eleline/deploys)

Gatsby で構築されたブログ

## セットアップ

yarn を用いてパッケージのインストールを行う

```sh
yarn
```

blog ディレクトリ内にマークダウンを用いて記事を書く

```md
<!-- Markdown -->

---

<!-- 記事のmetaデータをここに記述する -->

title: { 記事のタイトル }
date: { 今日の日付 }
description: { 記事の説明文 }
slug: { スラッグ }
tags: { タグ }
keywords: { キーワード }

---

## 見出し

...内容
```

ローカルサーバーを起動し、開発を開始する

```sh
yarn start
```

公開するファイルの生成とビルド

```sh
yarn build
```
