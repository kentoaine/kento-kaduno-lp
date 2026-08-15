# 画像管理ガイド

## フォルダ構成

```text
public/images/
├── profile/              本人のポートレート
├── brand/                COWNECT・FELSMATAのロゴ／アイコン
├── concept/              Vision・Contactなど思想を表すイメージ
├── projects/
│   ├── cownect/          COWNECTの開発・素材・チーム写真
│   └── felsmata/         FELSMATAの活動・サービス写真
├── journey/              生い立ち・学校・土地に対応する写真
└── gallery/              研究・登壇・イベント・日常の追加写真
```

高解像度の元画像は、GitHubへ公開しない `source-images/` に保管します。LPが参照するのは `public/images/` 内の軽量化済みWebPだけです。

## ファイル名のルール

- 半角英数字とハイフンのみを使う
- `用途-内容-連番.webp` の順にする
- 日付が重要な写真は `YYYY-MM-DD-内容-連番.webp` とする
- 元画像は別途保管し、Web掲載用は原則WebP、横幅1600〜2000px程度に書き出す
- 同じ写真を複数箇所で使っても、ファイルは複製せず同じパスを参照する

例:

```text
profile/hero-kento-kaduno.webp
profile/vision-kento-kaduno-lab.webp
projects/cownect/cownect-material-sheet-01.webp
projects/cownect/cownect-development-01.webp
projects/felsmata/felsmata-team-meeting-01.webp
journey/hakodate-city-01.webp
gallery/2026-08-it-essa-stage-01.webp
```

## 現在の差し替え台帳

| 掲載場所 | 入れてほしい写真 | 推奨ファイル名 | 比率の目安 |
|---|---|---|---|
| Hero | 本人の新しいポートレート | `profile/hero-kento-kaduno.webp` | 縦 4:5 |
| Vision | 研究中、ノートを取る、考えている本人 | `profile/vision-kento-kaduno-lab.webp` | 縦 4:5〜3:4 |
| Backcasting | 目指す社会や生活者を感じる実写 | `concept/backcasting-healthy-life.webp` | 横 16:9 |
| Forward casting | 現在の学習・研究・開発風景 | `concept/forwardcasting-current-work.webp` | 横 16:9 |
| COWNECT | 脱脂粉乳、素材、開発中の手元 | `projects/cownect/cownect-development-01.webp` | 横 16:9 |
| FELSMATA | ミーティング、事業づくり、サービス利用場面 | `projects/felsmata/felsmata-project-01.webp` | 横 16:9 |
| Journey・函館 | 本人に関係する函館の街並み | `journey/hakodate-city-01.webp` | 横 4:3〜16:9 |
| Journey・函館高専 | 校舎または在学時の活動 | `journey/hakodate-kosen-campus-01.webp` | 横 4:3〜16:9 |
| Journey・長岡 | 大学または長岡での活動 | `journey/nagaoka-university-01.webp` | 横 4:3〜16:9 |
| Gallery | 研究、登壇、イベント、日常 | `gallery/YYYY-MM-DD-subject-01.webp` | 横 16:10推奨 |
| Contact | 人の健康と未来を感じる静かな実写 | `concept/contact-future-01.webp` | 縦 4:5 |

## 写真ごとに記録する情報

- 撮影日、撮影場所、撮影者
- 写っている人の掲載許可
- 学校・企業・イベント会場の掲載条件
- 写真の説明（altテキスト用）
- 出典URLとライセンス（他者撮影・Web取得の場合）
- 公開期限がある場合は期限
