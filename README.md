# CSS Fukuwarai

CSSを使った福笑いゲームアプリケーション

## プロジェクト構成

これはモノレポプロジェクトで、以下のパッケージで構成されています：

- `packages/backend` - Honoで構築されたバックエンドAPI
- `packages/frontend` - Next.jsで構築されたフロントエンドアプリケーション

## 開始方法

### 依存関係のインストール

```bash
pnpm install
```

### 開発サーバーの起動

すべてのサービスを並列で起動：

```bash
pnpm dev
```

個別に起動：

```bash
# バックエンドのみ
pnpm dev:backend

# フロントエンドのみ
pnpm dev:frontend
```

### アクセス先

- フロントエンド: http://localhost:3000
- バックエンドAPI: http://localhost:3001

## 利用技術

- **フロントエンド**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **バックエンド**: Hono, Node.js, TypeScript
- **パッケージマネージャ**: pnpm
- **ビルドツール**: Vite (バックエンド), Next.js (フロントエンド)
- **依存関係管理**: pnpm Catalog

## pnpm Catalog

このプロジェクトではpnpm Catalogを使用して依存関係を一元管理しています。

### Catalogの設定場所

Catalogの定義は **`pnpm-workspace.yaml`** にあり、ツールカテゴリ別に整理されています。

```yaml
catalog:
  # ESLint設定
  eslint:
    eslint: 9.37.0
    typescript-eslint: 8.45.0

  # Prettier設定
  prettier:
    prettier: 3.6.2
    prettier-plugin-tailwindcss: 0.6.14

  # TypeScript設定
  tsconfig:
    "@types/node": 22.18.8

  # TypeScript本体
  typescript:
    typescript: 5.9.3
```

### Catalogのカテゴリ

- `catalog:eslint` - ESLint関連ツール
  - ESLint本体とTypeScript ESLintプラグイン

- `catalog:prettier` - コードフォーマッター
  - Prettier本体とTailwind CSSプラグイン

- `catalog:tsconfig` - TypeScript設定
  - Node.jsの型定義

- `catalog:typescript` - TypeScript本体
  - TypeScriptコンパイラ

### 依存関係の更新方法

```bash
# catalogのバージョンを更新
# pnpm-workspace.yamlの該当カテゴリを編集

# 変更を適用
pnpm install

# 特定のパッケージのみ更新
pnpm --filter frontend add next@16
```

### Catalogの利点

- ツールカテゴリ別の整理で管理しやすい
- 全パッケージで統一された開発ツール
- 重複する依存関係の削減
- セキュリティアップデートが容易

## スクリプト

### 開発

- `pnpm dev` - 全ての開発サーバーを起動
- `pnpm dev:backend` - バックエンドのみ起動
- `pnpm dev:frontend` - フロントエンドのみ起動

### ビルドとテスト

- `pnpm build` - 全てのパッケージをビルド
- `pnpm test` - 全てのテストを実行
- `pnpm lint` - 全てのパッケージでリントを実行
- `pnpm clean` - ビルドファイルを削除

### Catalog管理

- `pnpm catalog:list` - インストールされているパッケージ一覧を表示
- `pnpm catalog:outdated` - 古いバージョンのパッケージを確認
- `pnpm catalog:update` - 全てのパッケージを最新版に更新

## ライセンス

MIT
