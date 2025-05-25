import { DefaultTheme, defineConfig, loadEnv } from 'vitepress'
import UnoCSS from 'unocss/vite'
import path from 'path'

const env = loadEnv('', process.cwd(), ['ALGOLIA'])

let searchConfig: DefaultTheme.Config['search'] = {
  provider: 'local'
}

if (env.ALGOLIA_APP_ID && env.ALGOLIA_SEARCH_API_KEY && env.ALGOLIA_INDEX_NAME)
  searchConfig = {
    provider: 'algolia',
    options: {
      appId: env.ALGOLIA_APP_ID,
      apiKey: env.ALGOLIA_SEARCH_API_KEY,
      indexName: env.ALGOLIA_INDEX_NAME
    }
  }

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
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'preconnect', href: 'https://i.imgur.com' }],
    ['link', { rel: 'preconnect', href: 'https://youtube.com' }],
    ['link', { rel: 'preconnect', href: 'https://apps.apple.com' }],
    ['link', { rel: 'preconnect', href: 'https://play.google.com' }],
    ['link', { rel: 'preconnect', href: 'https://store.steampowered.com' }]
  ],

  sitemap: {
    hostname: 'https://hexage.wiki'
  },

  themeConfig: {
    logo: {
      alt: 'Hexage Logo',
      light: '/vector/logo_on_light.svg',
      dark: '/vector/logo_on_dark.svg'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/hexage/' },
      {
        text: 'Games',
        items: [
          { text: 'Flying Tank', link: '/flyingtank/' },
          { text: 'Ritual', link: '/ritual/' },
          { text: 'REDCON', link: '/redcon/' },
          { text: 'Reaper', link: '/reaper/' },
          { text: 'Radiant Defense', link: '/radiantdefense/' },
          { text: 'ROBOTEK', link: '/robotek/' },
          { text: 'EVAC', link: '/evac/' },
          { text: 'Everlands', link: '/everlands/' },
          { text: 'Radiant', link: '/radiant/' },
          { text: 'Totemo', link: '/totemo/' },
          { text: 'Buka', link: '/buka/' }
        ]
      }
    ],

    search: searchConfig,

    outline: {
      level: [2, 3]
    },

    sidebar: {
      '/hexage/': [
        {
          text: 'Hexage',
          items: [
            { text: 'About', link: '/hexage/' },
            { text: 'Soundtrack', link: '/hexage/soundtrack' }
          ]
        }
      ],
      '/flyingtank/': [
        {
          text: 'Flying Tank',
          items: [
            { text: 'About', link: '/flyingtank/' },
            { text: 'Soundtrack', link: '/flyingtank/soundtrack' },
            { text: 'Missions', link: '/flyingtank/missions/' },
            { text: 'Tanks', link: '/flyingtank/tanks/' },
            { text: 'Weapons', link: '/flyingtank/weapons/' },
            { text: 'Bombs', link: '/flyingtank/bombs/' },
            { text: 'Specials', link: '/flyingtank/specials/' },
            { text: 'Drones', link: '/flyingtank/drones/' },
            { text: 'Upgrades', link: '/flyingtank/upgrades/' }
          ]
        }
      ],
      '/ritual/': [
        {
          text: 'Ritual',
          items: [
            { text: 'About', link: '/ritual/' },
            { text: 'Soundtrack', link: '/ritual/soundtrack' }
          ]
        }
      ],
      '/redcon/': [
        {
          text: 'REDCON',
          items: [
            { text: 'About', link: '/redcon/' },
            { text: 'Soundtrack', link: '/redcon/soundtrack' },
            {
              text: 'Forts',
              link: '/redcon/forts/'
            },
            {
              text: 'Locations',
              link: '/redcon/locations/',
              items: [
                { text: 'Enemy', link: '/redcon/locations/enemy/' },
                { text: 'Player', link: '/redcon/locations/player/' }
              ]
            },
            {
              text: 'Weapons',
              link: '/redcon/weapons/'
            },
            {
              text: 'Defenses',
              link: '/redcon/defenses/'
            },
            { text: 'Achievements', link: '/redcon/achievements/' }
          ]
        }
      ],
      '/reaper/': [
        {
          text: 'Reaper',
          items: [
            { text: 'About', link: '/reaper/' },
            { text: 'Soundtrack', link: '/reaper/soundtrack' }
          ]
        }
      ],
      '/radiantdefense/': [
        {
          text: 'Radiant Defense',
          items: [
            { text: 'About', link: '/radiant-defense/' },
            { text: 'Soundtrack', link: '/radiantdefense/soundtrack' }
          ]
        }
      ],
      '/robotek/': [
        {
          text: 'ROBOTEK',
          items: [
            { text: 'About', link: '/robotek/' },
            { text: 'Soundtrack', link: '/robotek/soundtrack' }
          ]
        }
      ],
      '/radiant/': [
        {
          text: 'Radiant',
          items: [
            { text: 'About', link: '/radiant/' },
            { text: 'Soundtrack', link: '/radiant/soundtrack' }
          ]
        }
      ],
      '/evac/': [
        {
          text: 'EVAC',
          items: [
            { text: 'About', link: '/evac/' },
            { text: 'Soundtrack', link: '/evac/soundtrack' }
          ]
        }
      ],
      '/everlands/': [
        {
          text: 'Everlands',
          items: [
            { text: 'About', link: '/everlands/' },
            { text: 'Soundtrack', link: '/everlands/soundtrack' }
          ]
        }
      ],
      '/totemo/': [
        {
          text: 'Totemo',
          items: [
            { text: 'About', link: '/totemo/' },
            { text: 'Soundtrack', link: '/totemo/soundtrack' }
          ]
        }
      ],
      '/buka/': [
        {
          text: 'Buka',
          items: [
            { text: 'About', link: '/buka/' },
            { text: 'Soundtrack', link: '/buka/soundtrack' }
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
