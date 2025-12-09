# ブログテンプレート - アーキテクチャと開発ガイド

## 📋 プロジェクト概要

**Famichi Blog** は Next.js App Router ベースのマークダウン駆動型ブログテンプレートです。`posts/` ディレクトリ内の Markdown ファイルをファイルシステムから読み込み、自動的に記事ページを生成します。

- **フレームワーク**: Next.js 16.x + React 19
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS 4
- **ダークモード**: next-themes 対応

---

## 🏗️ ディレクトリ構造

```
blog-template/
├── src/
│   ├── app/
│   │   ├── globals.css          # グローバルスタイル（Tailwind、Prose スタイル定義）
│   │   ├── layout.tsx           # ルートレイアウト（ThemeProvider 設定）
│   │   ├── page.tsx             # ホームページ
│   │   ├── about/               # about ページ
│   │   ├── posts/               # 記事関連ページ
│   │   │   ├── page.tsx         # 記事一覧ページ
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # 個別記事ページ（動的ルート）
│   │   └── tags/                # タグ関連ページ
│   │       ├── page.tsx         # タグ一覧ページ
│   │       └── [tag]/
│   │           └── page.tsx     # タグ別記事ページ
│   ├── components/              # React コンポーネント
│   │   ├── Header.tsx           # ヘッダー（ロゴ、ナビゲーション）
│   │   ├── Footer.tsx           # フッター
│   │   ├── Hero.tsx             # ヒーロー セクション
│   │   ├── HeroBackground.tsx   # 3D 背景（Three.js）
│   │   ├── AllArticle.tsx       # 記事一覧コンポーネント
│   │   ├── AllTagsCard.tsx      # タグカード
│   │   ├── Introduce.tsx        # 自己紹介セクション
│   │   ├── SortedArticle.tsx    # ソート済み記事表示
│   │   ├── TableOfContents.tsx  # 目次コンポーネント
│   │   ├── theme-button.tsx     # ダークモード切り替えボタン
│   │   ├── theme-provider.tsx   # next-themes Provider
│   │   └── ui/                  # shadcn/ui コンポーネント
│   │       ├── button.tsx
│   │       └── dropdown-menu.tsx
│   └── lib/
│       ├── posts.ts             # Markdown 処理ロジック（重要）
│       └── utils.ts             # ユーティリティ関数
├── posts/                       # 記事用 Markdown ファイル
│   ├── 2025-11-26.md
│   ├── 2025-11-27.md
│   ├── hello-world.md
│   └── ...
├── public/                      # 静的ファイル
├── docs/                        # ドキュメント
├── package.json
├── tsconfig.json                # TypeScript 設定
├── tailwind.config.ts           # Tailwind CSS 設定
├── next.config.ts               # Next.js 設定
├── eslint.config.mjs            # ESLint 設定
├── postcss.config.mjs           # PostCSS 設定
└── components.json              # shadcn/ui 設定
```

---

## 🔑 主要機能と実装

### 1. **Markdown → HTML ワークフロー** (`src/lib/posts.ts`)

記事の Markdown → HTML 変換パイプライン：

```
Markdown ファイル (posts/*.md)
    ↓
gray-matter (フロントマター解析)
    ↓
remark (Markdown パース)
    ↓
remark-gfm (GitHub Flavored Markdown 対応)
    ↓
remark-rehype (Markdown → HTML AST)
    ↓
rehype-highlight (コードブロックのシンタックスハイライト)
    ↓
rehype-stringify (HTML 文字列化)
    ↓
cheerio (HTML パース / TOC 抽出)
    ↓
HTML + TOC 出力
```

**重要な関数:**

- `getSortedPostsData()`: 全記事を日付順でソート
- `getPostData(slug)`: 特定記事の詳細データ取得
- `generateTableOfContents(html)`: HTML から見出しを抽出して目次生成

### 2. **フロントマター形式**

Markdown ファイルの先頭で記事メタデータを定義：

```markdown
---
title: "記事のタイトル"
date: "2025-11-26"
excerpt: "記事の説明"
coverImage: "/images/cover.jpg"
tags: ["Next.js", "TypeScript"]
---

# 本文がここから始まる...
```

### 3. **ダークモード実装** (`src/app/globals.css` + `layout.tsx`)

**next-themes による実装:**

- `ThemeProvider` で全体をラップ
- `attribute="class"` で `.dark` クラスを `<html>` に付与
- CSS 変数（OKLCH 色空間）で ライト/ダーク モード の色を定義
- ダークモード時背景色: `oklch(0.18 0 0)` (目に優しい濃いグレー)
- `transition-colors duration-300` で滑らかに切り替え

**主要セレクタ:**

```css
:root {
  /* ライトモード */
}
.dark {
  /* ダークモード */
}
```

### 4. **3D ヒーロー背景** (`HeroBackground.tsx`)

React Three Fiber を使用した 3D エフェクト：

- `@react-three/fiber`
- `@react-three/drei`
- `three`

### 5. **コンポーネント設計**

**レイアウト構造:**

```
RootLayout (ThemeProvider で全体をラップ)
  ├── Header (ロゴ、ナビゲーション、テーマ切り替えボタン)
  ├── main (ページ内容)
  └── Footer
```

**ホームページ構成:**

- Hero セクション（3D 背景付き）
- Latest Stories セクション（AllArticle コンポーネント）
- Tags サイドバー（AllTagsCard）

---

## 📦 主要ライブラリ

| ライブラリ                        | 用途                      | バージョン |
| --------------------------------- | ------------------------- | ---------- |
| **next**                          | フレームワーク            | ^16.0.7    |
| **react**                         | UI ライブラリ             | 19.2.0     |
| **typescript**                    | 型安全性                  | ^5         |
| **tailwindcss**                   | CSS フレームワーク        | ^4         |
| **remark**                        | Markdown パーサー         | ^15.0.1    |
| **remark-gfm**                    | GFM 対応                  | ^4.0.1     |
| **rehype-highlight**              | コード ハイライト         | ^7.0.2     |
| **next-themes**                   | ダークモード              | ^0.4.6     |
| **cheerio**                       | HTML パース               | ^1.1.2     |
| **gray-matter**                   | フロントマター解析        | ^4.0.3     |
| **github-slugger**                | URL 対応スラッグ生成      | ^2.0.0     |
| **@radix-ui/react-dropdown-menu** | ドロップダウン UI         | ^2.1.16    |
| **lucide-react**                  | アイコン                  | ^0.556.0   |
| **class-variance-authority**      | コンポーネント バリアント | ^0.7.1     |

---

## 🎨 スタイリング システム

### CSS 変数（色）

**ライトモード** (`:root`)

```css
--background: oklch(1 0 0); /* 白 */
--foreground: oklch(0.145 0 0); /* 黒 */
--primary: oklch(0.205 0 0); /* 濃いグレー */
--card: oklch(1 0 0); /* 白 */
```

**ダークモード** (`.dark`)

```css
--background: oklch(0.18 0 0); /* 濃いグレー */
--foreground: oklch(0.985 0 0); /* ほぼ白 */
--primary: oklch(0.922 0 0); /* 明るいグレー */
--card: oklch(0.205 0 0); /* 濃いグレー */
```

### Prose スタイル

テキストコンテンツ用にカスタマイズされた`.prose` クラス：

- h2: 左ボーダー付き（青）
- h3: 左ボーダー付き（明るい青）
- リスト: カスタムマーカー（グラデーション円形）
- テーブル: ストライプ背景、ホバー効果
- コードブロック: ダークテーマ、カスタムスクロールバー
- ブロッククォート: グラデーション背景

---

## 🛠️ 開発ガイド

### セットアップ

```bash
# 依存インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm build

# プロダクション起動
npm start
```

### 新しい記事を追加

1. `posts/` ディレクトリに新しい `.md` ファイルを作成
2. フロントマター を記述：

```markdown
---
title: "新しい記事"
date: "2025-12-08"
excerpt: "短い説明"
tags: ["tag1", "tag2"]
---

# 本文
```

3. 自動的に `/posts/[slug]` でアクセス可能に

### 記事の日付形式

`YYYY-MM-DD` 形式で記事をソート（新しい順）

### コンポーネント新規作成時の注意

- **Server Component** がデフォルト
- クライアント側の機能（state、hooks など）は `"use client"` をつける
- 例: `theme-button.tsx`, `theme-provider.tsx`

### TypeScript パスエイリアス

`tsconfig.json` で `@/*` を `src/` にマッピング：

```typescript
import { Button } from "@/components/ui/button"; // OK
import Button from "../../../components/ui/button"; // ❌ 避ける
```

---

## 🚀 今後の開発タスク

現在の TODO リスト（`docs/todo.md` より）:

- [ ] about ページの情報を実態に沿ったものに編集
- [ ] ページネーション機能の追加
- [ ] コードブロックにコピー機能の追加
- [ ] レスポンシブデザイン時のハンバーガーメニューの機能改善
- [ ] CLI コマンドで記事テンプレートを自動生成
- [ ] 記事と画像ファイルのディレクトリ構造を整理

### 追加検討項目

- **検索機能**: 全文検索、タグ検索の拡張
- **コメント機能**: Disqus や自前実装
- **SEO 最適化**: Open Graph、Sitemap 自動生成
- **CMS 連携**: Headless CMS（Contentful など）との連携
- **キャッシング**: ISR（Incremental Static Regeneration）の活用
- **分析**: Google Analytics、Vercel Analytics の統合

---

## 🔍 トラブルシューティング

### ビルド失敗

**原因 1: Markdown パース エラー**

- 記事ファイルの YAML フロントマター 形式を確認
- ファイル名に特殊文字がないか確認

**原因 2: 動的ルートの生成失敗**

- `generateStaticParams()` が正しく実装されているか確認（`src/app/posts/[slug]/page.tsx`）

### スタイルが反映されない

- Tailwind CSS ビルドキャッシュをクリア: `rm -rf .next`
- `globals.css` の import 順を確認（`@import "tailwindcss"` が最初）

### ダークモード が機能しない

- `layout.tsx` で `ThemeProvider` が `html` をラップしているか確認
- `suppressHydrationWarning` が `<html>` にあるか確認
- ブラウザキャッシュをクリア

---

## 📚 参考リソース

- [Next.js ドキュメント](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Remark プラグイン](https://github.com/remarkjs/remark/blob/main/doc/plugins.md)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [shadcn/ui](https://ui.shadcn.com)

---

## 📝 ファイル編集時のチェックリスト

新しい機能を追加する際：

- [ ] TypeScript の型定義を追加
- [ ] ダークモード対応（`dark:` プリフィックス）
- [ ] レスポンシブ対応（`md:`, `lg:` ブレークポイント）
- [ ] アクセシビリティ対応（`aria-*`, semantic HTML）
- [ ] コンポーネント の `"use client"` フラグを確認
- [ ] ESLint に引っかからないか確認（`npm run lint`）
- [ ] 不要な console.log() を削除
