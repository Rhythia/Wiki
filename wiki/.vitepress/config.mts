import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { env } from 'node:process'

const IS_DEV = env.NODE_ENV === 'production'

const search = (): DefaultTheme.Config['search'] => {
  if (IS_DEV) return { provider: 'local' }

  return {
    provider: 'algolia',
    options: {
      appId: 'MDQBBYI18P',
      apiKey: '0f36f096b83770eae78115f2d88bd394',
      indexName: 'bsmg',
    },
  }
}

type Route =
  | readonly [name: string, path: string, routes?: Route[]]
  | readonly [name: string, routes: Route[]]

interface SidebarItem {
  name: string
  path: string
  routes: Route[]
}

const convert = ([text, link, routes]: Route): DefaultTheme.SidebarItem => {
  if (typeof link === 'string') {
    return {
      text,
      link,
      items: routes?.map(route => convert(route)),
    }
  }

  return {
    text,
    items: (link ?? routes)?.map(route => convert(route)),
  }
}

const sidebar = (...items: SidebarItem[]): DefaultTheme.SidebarMulti => {
  return Object.fromEntries(
    items.map(({ name, path, routes }) => [
      path,
      [
        {
          text: name,
          link: '.',
          items: routes?.map(route => convert(route)),
        },
      ],
    ]),
  )
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rhythia",
  description: "aim-based rhythm game",

  themeConfig: {
    logo: "/branding/icon.png",

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contribute', link: 'https://github.com/Rhythia/Wiki' }
    ],

    /* sidebar: [
      {
        text: 'FAQ',
        items: [
          { text: 'Installing the game', link: '/guides/installing-the-game'},
          { text: 'Keybinds', link: '/guides/keybinds'},
          { text: 'Installing custom content', link: '/guides/custom'},
          { text: 'Watching replays', link: '/guides/replay'}
        ]
      },
      {
        text: 'Mapping',
        items: [
          { text: "Installing the editor", link: '/mapping/installing'},
          { text: "Creating a map", link: '/mapping/creating'},
          { text: "Customizing", link: '/mapping/customizing'}
        ]
      }
    ],
    */

    sidebar: sidebar(
      {
        name: 'Home Page',
        path: '/',
        routes: [
          [
            'FAQ',
            [
              ['Installing the game', '/faq/installing-the-game'],
              ['Installing custom content', '/faq/custom-content'],
              ['Watching replays', '/faq/watching-replays'],
              ['In-game keybinds', '/faq/game-keybinds'],
            ],
          ],
          [
            'Mapping',
            [
              ['Installing the editor', '/mapping/installing-the-editor'],
              ['Creating maps', '/mapping/creating-maps'],
              ['Customizing the editor', '/mapping/editor-customization'],
              ['Basic mapping patterns', '/mapping/mapping-patterns'],
            ],
          ],
        ],
      }
    ),

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/rhythia' },
      { icon: 'github', link: 'https://github.com/Rhythia/' },
    ],

    footer:  {
      message: 'Licensed under CC BY-NC 4.0',
      copyright: 'Copyright © 2023-present Rhythia'
    },

    editLink: {
      pattern: 'https://github.com/Rhythia/Wiki/edit/main/wiki/:path'
    }
  }
})
