# 更新・CMS運用方針

## Phase 1: まず公開する

- GitHubをサイトの原本にする
- Cloudflare Pagesを本番配信先にする
- 写真は `public/images/`、ページは `public/index.html` で管理する
- 修正はCodexへ日本語で依頼し、差分を確認してGitHubへpushする

この段階は構成・文章・写真を詰めている現在に向いています。CMSを先に作り込まず、変更箇所が固まってから管理画面を導入します。

本番URLはCloudflare Pages、GitHub Pagesは予備・確認用URLとして使用します。Cloudflare DashboardでWeb Analyticsを有効にし、閲覧数、参照元、表示速度を確認します。

更新時はGitHubへpushした後、ローカルで `npm run deploy` を実行します。将来、完全自動化する場合はCloudflare Pages用のAPIトークンをGitHub ActionsのSecretへ登録し、mainへのpushをデプロイの契機にします。

## Phase 2: Newsと画像をGUI化する

推奨は「Cloudflareでサイト配信＋ヘッドレスCMSでNewsと画像を管理」です。管理対象は次の3種類に限定します。

1. News: 日付、カテゴリ、タイトル、本文、外部リンク、公開状態
2. Gallery: 写真、altテキスト、撮影日、並び順、公開状態
3. Profile: 所属、肩書き、SNS URL、問い合わせ先

日本語GUIを優先するならmicroCMS、柔軟な画像管理を優先するならSanityなどが候補です。CMS更新時はCloudflare Deploy Hookで再公開できます。Cloudflareだけで完結させる場合はD1・R2と専用管理画面が必要になり、初期開発と保守が増えます。

Cloudflare公式 Pages Web Analytics: https://developers.cloudflare.com/pages/how-to/web-analytics/

## 役割分担

- 本人: 写真選定、事実確認、公開可否、文章の最終承認
- Codex: HTML修正、画像最適化、リンクチェック、公開前確認
- GitHub: 変更履歴と原本管理
- Cloudflare: 自動公開、独自ドメイン、アクセス解析
- CMS（導入後）: News、Gallery、プロフィールのGUI更新
