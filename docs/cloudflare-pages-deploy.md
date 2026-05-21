# Cloudflare Pages 部署说明

本项目是 Next.js 静态导出站点，适合部署到 Cloudflare Pages。

## 1. 提交代码到 GitHub

先把 `gamesite` 仓库推到 GitHub。Cloudflare Pages 会从 GitHub 仓库拉取代码并自动构建。

## 2. 选择一种方法

进入 Cloudflare Dashboard：

1. 打开 **Workers & Pages**
2. 点击 **Create application**
3. 选择 **Pages**
4. 选择 **Connect to Git**

推荐使用 **Connect to Git**，后续每次推送代码都会自动部署。

## 3. 选择一个存储库

1. 选择 GitHub
2. 授权 Cloudflare 访问你的 GitHub
3. 选择小游戏网站对应的仓库
4. 选择要部署的分支，通常是 `main`

如果 Cloudflare 让你选择项目根目录：

- 如果仓库根目录就是 `gamesite`，不用额外设置根目录
- 如果你把上级目录作为仓库，则 Root directory 填 `gamesite`

## 4. 创建和部署

Cloudflare Pages 构建设置：

| 设置项 | 填写 |
| --- | --- |
| Framework preset | Next.js 或 None |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | 仓库根目录是 `gamesite` 时留空；否则填 `gamesite` |
| Node.js version | `20` |

环境变量：

| 变量名 | 值 | 说明 |
| --- | --- | --- |
| `NEXT_PUBLIC_ADS_ENABLED` | `false` | AdSense 审核前保持关闭 |
| `NEXT_PUBLIC_SITE_URL` | 你的正式域名 | 例如 `https://game-blb.pages.dev` |

点击 **Save and Deploy** 后，Cloudflare 会自动执行构建并发布。

## 5. 部署后检查

打开 Cloudflare 提供的预览域名，检查：

- 首页可以正常打开
- 中文/英文切换正常
- 游戏卡片进入 `/play/2048/` 这类站内游玩页
- 游戏 iframe 可以加载 `/games/2048/index.html`
- 页面源代码里没有 `adsbygoogle` 或 `pagead2`
- `/sitemap.xml` 只包含 `/play/...` 的安全游戏页面
- `/robots.txt` 屏蔽了暂不展示的游戏目录

## 6. AdSense 通过后

审核通过后再开启广告：

1. 在 Cloudflare Pages 项目设置里找到 **Environment variables**
2. 把 `NEXT_PUBLIC_ADS_ENABLED` 改成 `true`
3. 按需要把 AdSense 脚本和广告单元接回广告组件
4. 重新部署

当前代码已经预留了 `AdSlot` 组件，但真实广告脚本仍保持关闭，适合先申请 AdSense。
