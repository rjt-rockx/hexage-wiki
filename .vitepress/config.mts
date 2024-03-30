import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'wiki',
  lang: 'en-US',
  title: 'Hexage Wiki',
  description: 'Information and resources for games by Hexage',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vector/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
  ],

  themeConfig: {
    logo: {
      alt: 'Hexage Logo',
      light: '/vector/logo_on_light.svg',
      dark: '/vector/logo_on_dark.svg'
    },

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

    search: {
      provider: 'local'
    },

    sidebar: {
      '/flyingtank/': [
        {
          text: 'Flying Tank',
          items: [
            { text: 'About', link: '/flyingtank/' },
            { text: 'Missions', link: '/flyingtank/missions/' },
            { text: 'Tanks', link: '/flyingtank/tanks/' },
            { text: 'Weapons', link: '/flyingtank/weapons/' },
            { text: 'Bombs', link: '/flyingtank/bombs/' },
            { text: 'Specials', link: '/flyingtank/specials/' },
            { text: 'Drones', link: '/flyingtank/drones/' },
            { text: 'Upgrades', link: '/flyingtank/upgrades/' }
          ]
        }
      ]
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/rjt-rockx/hexage-wiki'
      },
      {
        icon: 'discord',
        link: 'https://discord.gg/jcvzARAnSp'
      }
    ],

    footer: {
      message: 'Released under the MIT License.\nThis site is neither affiliated with nor endorsed by Hexage.',
      copyright: `© ${new Date().getFullYear()} Hexage Wiki contributors`
    }
  },

  vite: {
    plugins: [UnoCSS()],
    resolve: {
      alias: [{ find: '$components', replacement: path.resolve('.vitepress/theme/components') }]
    }
  }
})
