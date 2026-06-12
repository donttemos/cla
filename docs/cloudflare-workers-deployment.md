# Cloudflare Workers 部署文档

本文档对应当前仓库的部署方式：

- 运行平台：Cloudflare Workers
- Next.js 适配器：OpenNext Cloudflare
- 业务数据库：Cloudflare D1
- 增量缓存：Cloudflare KV

当前项目已经完成了基础适配，相关文件如下：

- [package.json](/G:/calculator/package.json)
- [next.config.ts](/G:/calculator/next.config.ts)
- [open-next.config.ts](/G:/calculator/open-next.config.ts)
- [wrangler.jsonc](/G:/calculator/wrangler.jsonc)
- [docs/d1-schema.sql](/G:/calculator/docs/d1-schema.sql)

## 1. 部署前说明

这套部署里要区分两种配置：

### 1.1 普通环境变量

这类可以直接在 Cloudflare Dashboard 里填写：

- `ADMIN_API_KEY`
- `NEXT_INC_CACHE_KV_PREFIX`
- 其他业务级字符串配置

这类值本质上是字符串。

### 1.2 Cloudflare 资源绑定

这类不是普通字符串，而是 Cloudflare 注入给 Worker 的资源对象：

- `DB`：D1 数据库绑定
- `NEXT_INC_CACHE_KV`：KV 绑定
- `ASSETS`：OpenNext 静态资源绑定

这类配置不能只靠普通环境变量替代，必须通过 Wrangler 配置或 Cloudflare 控制台绑定。

## 2. 当前项目依赖

项目已经安装了 Workers 部署所需依赖：

- `@opennextjs/cloudflare`
- `wrangler`

可用脚本：

```sh
npm run preview
npm run deploy
npm run upload
npm run cf-typegen
```

## 3. Cloudflare 资源准备

先创建 D1 和 KV。

### 3.1 创建 D1

```sh
npx wrangler d1 create calcverse
```

执行后会返回一个 `database_id`。

### 3.2 创建 KV

```sh
npx wrangler kv namespace create NEXT_INC_CACHE_KV
```

执行后会返回一个 `id`。

## 4. 配置 wrangler.jsonc

打开 [wrangler.jsonc](/G:/calculator/wrangler.jsonc)，把占位符替换掉：

```jsonc
"d1_databases": [
  {
    "binding": "DB",
    "database_name": "calcverse",
    "database_id": "REPLACE_WITH_D1_DATABASE_ID"
  }
],
"kv_namespaces": [
  {
    "binding": "NEXT_INC_CACHE_KV",
    "id": "REPLACE_WITH_KV_NAMESPACE_ID"
  }
]
```

替换成你刚刚创建出来的真实 ID。

## 5. 初始化 D1 数据库

执行当前项目的 D1 schema：

```sh
npx wrangler d1 execute calcverse --file=docs/d1-schema.sql
```

这个 schema 目前覆盖后台管理所依赖的核心表：

- `categories`
- `calculators`
- `blog_posts`

如果后续要把更多 MySQL 设计迁到 D1，需要继续扩展 [docs/d1-schema.sql](/G:/calculator/docs/d1-schema.sql)。

## 6. 配置 Cloudflare Dashboard

进入 Cloudflare Workers 项目配置页，补齐变量和绑定。

### 6.1 Variables / Secrets

至少配置：

```txt
ADMIN_API_KEY=你的后台口令
NEXT_INC_CACHE_KV_PREFIX=incremental-cache
```

其中：

- `ADMIN_API_KEY` 用于当前后台接口鉴权
- `NEXT_INC_CACHE_KV_PREFIX` 可不填，默认也能运行；填上更清晰

### 6.2 资源绑定

确认部署环境里存在：

- D1 binding：`DB`
- KV binding：`NEXT_INC_CACHE_KV`

如果你走 Wrangler 发布，`wrangler.jsonc` 会负责这部分。  
如果你主要走 Dashboard，也要确保控制台里的绑定名和代码里一致。

## 7. 本地验证

### 7.1 类型检查

```sh
npm run typecheck
```

### 7.2 运行测试

```sh
npm test
```

### 7.3 Workers 运行时预览

```sh
npm run preview
```

这个命令会：

1. 执行 OpenNext 构建
2. 用 Wrangler 在本地拉起 Worker 运行时

重点验证：

- 首页是否正常打开
- `/admin/login` 是否正常
- `/api/health/db` 是否返回数据库健康状态
- `/api/admin/categories`
- `/api/admin/calculators`
- `/api/admin/blog-posts`

## 8. 正式部署

直接部署：

```sh
npm run deploy
```

如果你想先上传版本、再在 Cloudflare 控制台做发布控制：

```sh
npm run upload
```

## 9. 部署后检查

发布完成后至少检查下面几项：

- 首页访问正常
- 至少一个 calculator 页面正常
- `/admin/login` 正常
- 登录后台后，分类/计算器/博客管理接口正常
- `/api/health/db` 返回 200
- 页面刷新和静态资源加载正常

## 10. 当前实现的技术说明

### 10.1 数据库访问策略

当前 [src/lib/db/mysql.ts](/G:/calculator/src/lib/db/mysql.ts) 已改成双通道：

- Cloudflare Workers 环境下：优先使用 `DB` D1 binding
- 普通 Node / 本地旧环境下：仍可走原来的 MySQL 环境变量

这意味着：

- Cloudflare 正式部署主路径已经是 D1
- 本地旧的 MySQL 脚本目前还保留为兼容路径

### 10.2 KV 用途

KV 当前用于 OpenNext 的 incremental cache，不作为主业务数据库。

## 11. 已知限制

### 11.1 MySQL seed 脚本不是 Cloudflare 主路径

项目里现有：

- [scripts/seed-mysql.js](/G:/calculator/scripts/seed-mysql.js)
- [docs/mysql-5.7-schema-plan.sql](/G:/calculator/docs/mysql-5.7-schema-plan.sql)

它们现在主要是旧 MySQL 路径的遗留/兼容内容，不是 Workers 正式部署的主路径。

### 11.2 D1 schema 目前是最小可运行集

当前 [docs/d1-schema.sql](/G:/calculator/docs/d1-schema.sql) 只覆盖现阶段后台 API 真正依赖的核心表，不是完整业务总 schema。

### 11.3 还没有做数据迁移脚本

如果你之前已经在 MySQL 里有后台数据，需要单独做一次 MySQL -> D1 数据迁移。

## 12. 推荐后续动作

建议按这个顺序继续：

1. 创建 D1 和 KV
2. 填好 `wrangler.jsonc`
3. 执行 D1 schema
4. 跑 `npm run preview`
5. 本地把 admin API 全测一遍
6. 再执行 `npm run deploy`

如果后面要继续，我建议下一步直接补：

- D1 初始化/seed 脚本
- MySQL 到 D1 的迁移脚本
- 一轮 `preview` 级别的真实联调文档
