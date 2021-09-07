import DefaultTheme from 'vitepress/theme'
import UseDebounceFn from '../../../src/components/UseDebounceFn.vue'

export default {
  enhanceApp({ app, router, siteData }) {
    app.component('UseDebounceFn', UseDebounceFn)
  },
  ...DefaultTheme
}