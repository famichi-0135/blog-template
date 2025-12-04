# blog-template

**プロジェクト概要**

- **目的**: Markdown ファイル（`posts/`）をソースとして読み込み、Next.js の App Router を用いて記事一覧・個別ページを提供するブログテンプレート。
- **主要言語**: `TypeScript`（一部設定ファイルは `JavaScript`/`MJS`）
- **主なフォルダ構成**: `src/app`、`src/components`、`src/lib`、`posts/`、`public/`

**実装の要点**

- **記事の管理**: `posts/` 配下の `.md` をファイルシステムから同期読み込みしてページを生成します（`src/lib/posts.ts` にロジックあり）。
- **Markdown → HTML ワークフロー**: `remark` → `remark-rehype` → `rehype-stringify`、`remark-gfm` で GFM、`rehype-highlight` でコードハイライトを実行。
- **目次（TOC）**: 生成した HTML を `cheerio` でパースして `h2`/`h3` を抽出、`github-slugger` で見出し ID を生成して TOC を作成。
- **ルーティング**: Next.js App Router（`src/app/posts/page.tsx`：記事一覧、`src/app/posts/[slug]/page.tsx`：個別記事）

**使用している主なライブラリ / フレームワーク**

- **フレームワーク**: `next` (`16.x`) — App Router ベース
- **UI / スタイル**: `tailwindcss` (`^4`)、`@tailwindcss/typography`
- **Markdown 処理**: `remark`, `remark-gfm`, `remark-rehype`, `rehype-stringify`, `rehype-highlight`, `remark-html`
- **メタデータ / FS**: `gray-matter`（フロントマター解析）、`fs`（Node 標準）
- **HTML パース / TOC**: `cheerio`, `github-slugger`
- **3D 描画（オプション）**: `three`, `@react-three/fiber`, `@react-three/drei`, `maath`

（完全な依存は `package.json` の `dependencies` / `devDependencies` を参照してください）

**主要ファイル**

- **記事処理ロジック**: `src/lib/posts.ts` — 記事の読み込み、変換、TOC 生成を担当
- **記事一覧ページ**: `src/app/posts/page.tsx`
- **記事個別ページ**: `src/app/posts/[slug]/page.tsx`
- **ヘッダー / ナビ**: `src/components/Header.tsx` — ロゴは `/`、主要ナビは `article` -> `/posts` に設定済み
- **グローバル CSS**: `src/app/globals.css`

**開発 / 実行**

- **依存インストール**: `npm install`（または `pnpm install` / `yarn`）
- **開発サーバー起動**:

```bash
npm run dev
```

**設定のポイント / 注意**

- **TypeScript 設定**: `tsconfig.json` で `jsx: react-jsx`、`@/*` のパスエイリアスを設定。
- **ESLint**: `eslint` と `eslint-config-next` を使用（`eslint.config.mjs`）。
- **Tailwind**: `postcss.config.mjs` に `@tailwindcss/postcss` を使用する設定が含まれています。必要に応じて `tailwind.config` を追加してください。
- **Next / React のバージョン**: `next@16`, `react@19` を使用。Edge/SSR の互換性や外部ライブラリ対応に注意してください。

**拡張案（参考）**

- 記事一覧にページネーションを追加
- タグ・カテゴリによるフィルタリング UI を実装（`getPostsByTag` を活用）
- カバー画像の最適化とサムネイル表示
- ビルド時に静的ページ生成（SSG）や ISR を検討

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# blog-template
