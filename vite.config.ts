import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Components({
      extensions: ['vue', 'md'],
      dirs: ['./.vitepress/theme/components/'],
      include: [/\/wiki\/(.*)\.md$/]
    })
  ]
})
