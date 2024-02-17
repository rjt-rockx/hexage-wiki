import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'wiki',
  lang: 'en-US',
  title: 'Hexage Wiki',
  description: 'Information and resources for games by Hexage',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Games',
        items: [
          { text: 'Flying Tank', link: '/flyingtank/' },
          { text: 'Reaper', link: '/reaper/' },
          { text: 'Redcon', link: '/redcon/' }
        ]
      }
    ],

    sidebar: {
      '/flyingtank/': [
        {
          text: 'Flying Tank',
          items: [
            { text: 'Tanks', link: '/flyingtank/tanks/' },
            { text: 'Missions', link: '/flyingtank/missions/' },
            { text: 'Weapons', link: '/flyingtank/weapons/' },
            { text: 'Bombs', link: '/flyingtank/bombs/' },
            { text: 'Specials', link: '/flyingtank/specials/' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  },

  vite: {
    plugins: [UnoCSS()]
  }
})
