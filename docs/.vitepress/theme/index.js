import DefaultTheme from 'vitepress/theme'
import UseDebounceFn from '@components/UseDebounceFn.vue'

export default {
  enhanceApp({ app, router, siteData }) {
    app.component('UseDebounceFn', UseDebounceFn)
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  },
  ...DefaultTheme
}