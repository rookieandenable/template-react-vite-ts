import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import viteEslint from 'vite-plugin-eslint'

export default defineConfig({
  envDir: 'env', // 加载 .env 文件的目录
  envPrefix: 'VITE_', // 修改前缀 默认是 VITE_
  base: './', // 公共基础路径 BASE_URL
  resolve: {
    alias: {
      // 路径别名
      '@': resolve(__dirname, './src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'] // 省略的扩展名
  },
  server: {
    host: '127.0.0.1',
    port: 8081,
    open: true, // .env 设置 BROWSER 可以指定自动打开的浏览器
    proxy: {
      // 代理
      '/v1/api': 'http://127.0.0.1:3000', // 字符串简写写法
      '/v2/api': {
        // 选项写法
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '^/backend/.*': {
        // 正则表达式写法
        target: 'http://aystar.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/backend/, '')
      },
      '/api': {
        // 使用proxy 实例
        target: 'http://aystar.com',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        }
      },
      '/socket.io': {
        // websockets 或 socket.io
        target: 'ws://localhost:9090',
        ws: true
      }
    }
  },
  plugins: [
    // 插件
    react(), // 支持 react
    viteEslint({
      failOnError: false
    }), // 开发阶段 eslint 支持
    legacy({
      targets: ['defaults', 'not IE 11'] // 打包后的文件提供传统浏览器兼容性的支持
    })
  ],
  // esbuild: {
  //   jsxInject: `import React from 'react'`, // jsx自动注入内容
  // }
  css: {
    preprocessorOptions: {
      scss: {
        // 全局引入scss文件
        additionalData: `@import '@/assets/style/varibale.scss'`
      }
    }
  }
})
