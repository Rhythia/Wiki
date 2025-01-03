import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

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
        name: '',
        path: '/',
        routes: [
          [
            'FAQ',
            [
              ['Installing the game', '/faq/installing-the-game'],
              ['Installing custom content', '/faq/custom-content'],
              ['Watching replays', '/faq/watching-replays'],
              ['In-game keybinds', '/faq/game-keybinds'],
              ['Rhythia Online', '/faq/rhythia-online'],
              ['Troubleshooting', '/faq/troubleshooting'],
            ],
          ],
          [
            'Mapping',
            [
              [
                'Editor setup',
                [
                  ['Installing the editor', '/mapping/editor-setup/installing-the-editor'],
                  ['Customizing the editor', '/mapping/editor-setup/editor-customization'],
                  ['Editor assets', '/mapping/editor-setup/editor-assets'],
                ],
              ],
              [
                'Basic mapping',
                [
                  ['Creating maps', '/mapping/basic-mapping/creating-maps'],
                  ['Basic quantum usage', '/mapping/basic-mapping/basic-quantum-usage'],
                  ['Mapping patterns', '/mapping/basic-mapping/mapping-patterns'],
                  ['Mapping aspects', '/mapping/basic-mapping/mapping-aspects'],
                  ['Difficulty rating', '/mapping/basic-mapping/difficulty-rating'],
                ],
              ],
              [
                'Extra mapping',
                [
                  ['Antipatterns', '/mapping/extra-mapping/antipatterns'],
                  ['Basic spacing', '/mapping/extra-mapping/basic_spacing'],
                  /*
                  Enable this when it's done
                  ['Creativity', '/mapping/extra-mapping/creativity'],
                  */
                  ['Execution', '/mapping/extra-mapping/execution'],
                  ['Manual BPM Timing', '/mapping/extra-mapping/manual-bpm-timing'],
                  ['Song representation', '/mapping/extra-mapping/song_representation'],
                  ['Styles', '/mapping/extra-mapping/styles'],
                ],
              ],
            ],
          ],
          [
            'Contributing',
            [
              ['Contributing to the wiki', '/dev/contributing-wiki'],
              ['Contributing to the game', '/dev/contributing-game'],
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
