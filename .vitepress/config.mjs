import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Assistify",
  description: "Official Documentation of Assistify",
  themeConfig: {
    search: {
      provider: 'local'
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
          { text: 'Chat Page', link: '/docs/guide/chat-page' },
          { text: 'Get Started with Custom AI (workshop)', link: '/docs/guide/getting-started-with-workshop' },
          { text: 'Default & Custom Preamble', link: '/docs/guide/default-and-custom-preamble' },
          { text: 'Conversations Page', link: '/docs/guide/conversations-page' },
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

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/assistifylabs' }
    ]
  }
})

