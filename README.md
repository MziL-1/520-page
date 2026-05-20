# 520 Page 💌

一个为 520 定制的互动告白网页。

## 在线部署步骤（Vercel）

### 1. 登录 Vercel

访问 [vercel.com](https://vercel.com)，使用 GitHub 账号登录。

### 2. 导入项目

- 点击 **"Add New..."** → **"Project"**
- 在列表中找到 `520-page` 仓库
- 点击 **Import**

### 3. 配置部署

| 配置项 | 值 |
|--------|-----|
| Framework Preset | Other |
| Root Directory | ./（默认，不用改） |
| Build Command | 留空 |
| Output Directory | 留空 |

点击 **Deploy** 按钮。

### 4. 获取链接

部署完成后，Vercel 会生成一个链接，格式类似：

```
https://520-page-xxxx.vercel.app
```

这个链接就是可以分享的地址。

### 5. 自定义域名（可选）

在 Vercel 项目设置 → Domains 中，可以修改子域名，例如改为：

```
https://520-page.vercel.app
```

## 本地预览

使用 VS Code 的 Live Server 插件，或任意静态服务器：

```bash
npx serve .
```
