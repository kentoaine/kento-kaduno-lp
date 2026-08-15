# Kento Kaduno Personal LP

鹿角謙人の個人LP専用リポジトリです。`public/` をCloudflare Pagesで配信します。

本番URL: https://kento-kaduno-lp.pages.dev/

予備・確認URL: https://kentoaine.github.io/kento-kaduno-lp/

## 日常の更新

1. 写真を `public/images/` の用途別フォルダへ追加する
2. `public/index.html` の文章・画像パスを変更する
3. `npm run check` でリンク切れを確認する
4. GitHubへpushする
5. `npm run deploy` でCloudflare Pagesへ反映する（GitHub Pagesもpush時に更新）

## ローカル確認

```bash
npm install
npm run dev
```

## Cloudflareへの更新

```bash
npm install
npx wrangler login
npm run deploy
```

Cloudflare Dashboardの Workers & Pages → `kento-kaduno-lp` → Metrics からWeb Analyticsを有効化できます。有効化後、もう一度 `npm run deploy` を実行すると解析用スクリプトが自動挿入されます。

Cloudflare公式: https://developers.cloudflare.com/pages/how-to/web-analytics/

## フォルダ

- `public/index.html`: LP本体
- `public/images/`: 公開画像
- `docs/IMAGE_GUIDE.md`: 写真の命名・差し替え台帳
- `docs/LAUNCH_CHECKLIST.md`: 本番公開に必要な情報
- `docs/OPERATIONS.md`: 更新方法とCMS導入方針
