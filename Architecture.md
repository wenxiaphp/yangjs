# 项目架构

项目技术栈涉及 koa2、leancloud、mysql、vue2.5、vue-cli 3、vant、微信开发。

## 一、服务端架构

> 服务端基于leancloud的网站托管功能，命令行工具使用 lean-cli。更多文档请移步[官网文档](http://t.cn/EbX2tmr)

### 快速构建后端框架

1. 登录：`lean login`
2. 初始化项目：`lean init`
  > 编程语言选择 Node.js；框架选择 Koa
3. 启动应用：`lean up`
4. 从本地代码部署：`lean deploy`

### 优化后端架构

#### 目录结构调整

除了 `.gitignore`、`.leanignore`、`LICENSE`、`package.json`、`server.js` 这 5 个文件，其余文件全部放在 `/server/` 目录下。

#### eslint

在 `/server/` 目录下新建 `.eslintrc.js`，并参考 http://t.cn/EbXbR0X 进行配置。然后再新建 `.eslintignore` 文件并写入 `**node_modules/**`

#### EditorConfig

在 `/server/` 目录下新建 `.editorconfig` 文件，并参考 http://t.cn/EbXqYXn 进行配置。

#### npm script

```diff
{
  "scripts": {
+   "up": "lean up --port 3300",
+   "fix": "eslint --fix ./",
+   "lint": "eslint lint ./",
    "start": "node server.js",
    "dev": "nodemon server.js -- "
  }
}
```

## 二、客户端架构

参考：[基于 vue cli 3 的微信公众号前端架构](http://t.cn/EbXMd8G)

## 三、集成部署