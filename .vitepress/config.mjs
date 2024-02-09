import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Assistify",
  description: "Official Documentation of Assistify",
  themeConfig: {
    logo: { src: '/assistify-bg.webp', width: 28, height: 28 },
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Created with 💖 by Assistify Labs',
      copyright: 'Copyright © 2023 - present | Assistify Labs'
    },
    editLink: {
      pattern: 'https://github.com/assistifylabs/assistify-labs/edit/main/docs/:path'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/docs/guide/getting-started' },
      { text: 'Devlogs', link: '/devlogs/devlog' }
    ],

    sidebar: [
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: 'Create Account & Login', link: '/docs/guide/getting-started' },
          { text: 'Edting User Settings', link: '/docs/guide/modifying-user-settings' },
          { text: 'Creating Entity', link: '/docs/guide/creating-new-entity' },
          { text: 'Entity Navigation', link: '/docs/guide/overview-of-entity-navigation-page' },
          { text: 'Uploading & Embedding Files', link: '/docs/guide/uploading-and-embedding-files' },
          { text: 'Chat with AI', link: '/docs/guide/chat-page' },
          { text: 'Get Started with Custom AI (workshop)', link: '/docs/guide/get-started-with-workshop' },
          { text: 'Your Conversations', link: '/docs/guide/conversations-page' },
          { text: 'Editing Entity Settings', link: '/docs/guide/modifying-entity-settings' },
          { text: 'About our team', link: '/docs/guide/about-us' },
          { text: '(extra) Links', link: '/docs/guide/links-socials' },
        ]
      },
      {
        text: 'Devlogs',
        collapsed: false,
        items: [
          { text: 'First Devlog', link: '/devlogs/devlog' },
        ]
      },
    ],
    head: [
      ['meta', { name: 'theme-color', content: '#5f67ee' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:locale', content: 'en' }],
      ['meta', { property: 'og:title', content: 'Assistify | An AI to process your documents seamlessly.' }],
      ['meta', { property: 'og:site_name', content: 'Assistify' }],
      ['meta', { property: 'og:image', content: 'https://docs.assistifyai.org/assistify-bg.webp' }],
      ['meta', { property: 'og:url', content: 'https://docs.assistifyai.org' }],
    ],

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/assistifylabs' },
      { icon: 'discord', link: 'https://dsc.gg/assistify' }
    ]
  }
})

