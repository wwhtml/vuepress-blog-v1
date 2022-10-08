# VuePress-blog-v1.x（博客）

@(博客)

## 官网

v1：https://v1.vuepress.vuejs.org/zh/

v2：https://v2.vuepress.vuejs.org/zh/

V2 不太成熟，使用 v1 进行开发。

## github 地址

https://github.com/wwhtml/vuepress-blog-v1

## 博客地址

https://wwhtml.github.io/vuepress-blog-v1/

http://blog.91ml.top/

## 快速上手

1、创建一个新目录：

```
mkdir vuepress-blog-v1
cd vuepress-blog-v1
```

2、初始化

```
npm init
```

3、安装 vuepress

```
npm install -D vuepress
```

4、创建文档

```
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

5: 将默认的临时目录和缓存目录添加到 .gitignore 文件中

```
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

6、在 package.json 中添加一些 scripts

```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

7、在本地启动服务器

```
npm run docs:dev
```

VuePress 会在 http://localhost:8080 (opens new window)启动一个热重载的开发服务器。

## 目录结构

```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│
└── package.json


```

## 部署

### 部署到 github

以后每一次写完新文件之后，只需要执行 yarn deploy 命令，https://wwml725.github.io/docs/就会自动更新

- 源码保存在主分支
- 打包后的博客就放在`gh-pages`分支上，访问https://wwhtml.github.io/vuepress-blog-v1/就可以。

https://github.com/wwhtml/vuepress-blog-v1
