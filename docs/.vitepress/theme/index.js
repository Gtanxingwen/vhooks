import DefaultTheme from 'vitepress/theme'
import UseDebounceFn from '../../../src/components/UseDebounceFn.vue'

// console.log('@components', @components);
export default {
  enhanceApp({ app, router, siteData }) {
    app.component('UseDebounceFn', UseDebounceFn)
  },
  ...DefaultTheme
}