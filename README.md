# 520 Page 💌

一个为 520 定制的互动告白网页。

## 在线部署步骤（GitHub Pages）

### 1. 打开仓库设置

进入 GitHub 仓库 `MziL-1/520-page`，点击 **Settings** 标签。

### 2. 启用 GitHub Pages

- 左侧菜单找到 **Pages**
- Source 选择 **Deploy from a branch**
- Branch 选择 **master**，文件夹选 **/ (root)**
- 点击 **Save**

### 3. 获取链接

等待 1-2 分钟部署完成后，页面顶部会显示链接：

```
https://mziL-1.github.io/520-page/520.html
```

> ⚠️ 注意：GitHub Pages 的入口是 `520.html`，不是根目录，所以链接末尾需要加上 `/520.html`。

### 4. 自定义入口（可选）

如果想用根路径直接访问，可以把 `520.html` 重命名为 `index.html`：

```bash
git mv 520.html index.html
git commit -m "rename to index.html for GitHub Pages"
git push origin master
```

之后访问链接就是：

```
https://mziL-1.github.io/520-page/
```

---

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
