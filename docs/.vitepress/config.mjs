import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "english project",
  description: "english topics",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Topics', link: '/pages/first-level' }
    ],

    sidebar: [
      {
        text: 'Topics',
        items: [
          { 
            text: 'Intensive English (First Level)', 
            link: '/pages/first-level',
            items: [
              { text: 'Subpage 1', link: '/markdown-examples/subpage1' },
              { text: 'Subpage 2', link: '/markdown-examples/subpage2' },
            ]
          },
          { text: 'Intensive English (Second Level)', link: '/pages/second-level' },
          { text: 'Intensive English (Third Level)', link: '/pages/third-level' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TEBB27/ingles-apuntes' }
    ]
  }
})
