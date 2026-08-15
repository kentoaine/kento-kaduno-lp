# Kento Kaduno Personal LP

鹿角謙人の個人LP専用リポジトリです。`public/` をCloudflare Workers Static Assetsで配信します。

公開確認URL: https://kentoaine.github.io/kento-kaduno-lp/

## 日常の更新

1. 写真を `public/images/` の用途別フォルダへ追加する
2. `public/index.html` の文章・画像パスを変更する
3. `npm run check` でリンク切れを確認する
4. GitHubへpushする
5. 現在はGitHub Pagesで自動公開し、確認後にCloudflare Workers Buildsへ接続する

## ローカル確認

```bash
npm install
npm run dev
```

## Cloudflareへの初回接続

1. Cloudflare Dashboardの Workers & Pages → Create application → Import a repository を選ぶ
2. GitHubの `kentoaine/kento-kaduno-lp` を選び、Worker名を `kento-kaduno-lp` に合わせる
3. Build commandは空欄、Deploy commandは `npx wrangler deploy`
4. 初回公開後に独自ドメインを接続する
5. Cloudflare Web Analyticsを有効化する

Cloudflare公式: https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/

## フォルダ

- `public/index.html`: LP本体
- `public/images/`: 公開画像
- `docs/IMAGE_GUIDE.md`: 写真の命名・差し替え台帳
- `docs/LAUNCH_CHECKLIST.md`: 本番公開に必要な情報
- `docs/OPERATIONS.md`: 更新方法とCMS導入方針
