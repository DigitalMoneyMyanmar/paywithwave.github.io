const { description } = require('../../package')

module.exports = {
  base: 'paywithwave.github.io/',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'WavePay Payment Gateway Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#fdd403' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Integration Guide',
        link: '/introduction',
      }
    ],
    sidebar: [
      '',
      ['/introduction/', "Introduction"],
      ['/technical-integration/', "Technical Integration"],
      ['/integration-guide/', "How to Integrate"],
      ['/faq/', "FAQ and Troubleshooting"],
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
