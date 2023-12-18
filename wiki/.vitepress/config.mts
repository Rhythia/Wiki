import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rhythia",
  description: "aim-based rhythm game",
  i18nRouting: true,

  themeConfig: {
    logo: "/branding/icon.png",

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contribute', link: 'https://github.com/Rhythia/Wiki' }
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Installing the game', link: '/guides/download'},
        ]
      },
    ],

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
