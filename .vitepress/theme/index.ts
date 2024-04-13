// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { NolebasePagePropertiesPlugin } from '@nolebase/vitepress-plugin-page-properties/client'
import '@nolebase/vitepress-plugin-page-properties/client/style.css'
import './style.css'
import 'uno.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp(ctx) {
    ctx.app.use(
      NolebasePagePropertiesPlugin<{
        releaseYear: number
      }>(),
      {
        properties: {
          en: [
            {
              type: 'plain',
              key: 'releaseYear',
              title: 'Release Year',
              omitEmpty: true
            }
          ]
        }
      }
    )
    // ...
  }
} satisfies Theme
