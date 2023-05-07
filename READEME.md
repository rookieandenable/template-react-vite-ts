## vite 自带的功能

1. 模块热更新

原生的 ESM HMR API

2. TS

自带ts转义功能 不检查类型

3. CSS 预处理器

已内置了支持功能 无需配置 只需给项目安装对应的预处理模块

```
yarn add -D sass
yarn add -D less
yarn add -D stylus

<style lang='sass'></style>
```

4. 对静态资源的处理

导入的解析为一个 url 地址并返回

```
import imgUrl from './img.png' == import imgUrl from './img.png?url'

document.getElementById('img').src = imgUrl
```

5. 对 JSON 的支持

将 整个 JSON 当成模块对象来进行导入

```
import json from './aa.json' // 导入整个json
import { name } from './aa.json' // 具名导入 有利于 treeshaking
```

6. 多模块导入

```
const modules = import.meta.glob('./dir/*.ts')
```

7. 全局环境变量设置 env

```
export default defineConfig({
  define: {
    __TestName__: '狂徒张三'
  }
})

<script setup>
  console.log(__TestName__)  // 使用
</script>
```

```
// 添加 .env vite.config.ts 会自动加载该文件中的全局变量 定义的变量 必需以 VITE_ 开头
VITE_NAME = sun

console.log(import.meta.env.VITE_NAME) // 使用

.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略

yarn run dev // 加载 .env .env.development
yarn run build // 加载 .env .env.production
```

## 代码规范和格式化 eslint + prettier