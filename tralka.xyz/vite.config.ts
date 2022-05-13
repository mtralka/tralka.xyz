import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'
import WindiCSS from 'vite-plugin-windicss'
import generateSitemap from 'vite-ssg-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    Icons({}),
    WindiCSS(),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
      resolvers: [
        IconsResolver(),
      ],
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Layouts(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Markdown({
      headEnabled: true,
    }),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
    ]),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() { generateSitemap() },
  },
})
