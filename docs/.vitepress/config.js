const { resolve } = require('path')
// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
	title: 'vhooks',
	description: 'vue hooks based composition api',
	head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
	base: '/vhooks/',
	themeConfig: {
		repo: 'Gtanxingwen/vhooks',
		logo: '/logo.svg',
		docsDir: 'docs',
		docsBranch: 'main',
		editLinks: true,
		editLinkText: 'Suggest changes to this page',
		
		// algolia: {
		// },

		// carbonAds: {
		// },
		
		nav: [
			{ text: 'Guide', link: '/guide/' },
			{
				text: 'Links',
				items: [
					{
						text: 'Changelog',
						link: 'https://github.com/Gtanxingwen/vhooks/CHANGELOG.md'
					}
				]
			}
		],
		
		sidebar: {
			// catch-all fallback
			'/': [
				{
					text: 'guide',
					children: [
						{
							text: 'guide',
							link: '/guide/'
						}
					]
				},
				{
					text: 'sideEffect',
					children: [
						{
							text: 'useDebounceFn',
							link: '/guide/useDebounceFn'
						}
					]
				},
				{
					text: 'state',
					children: [
						{
							text: 'useBoolean',
							link: '/guide/useBoolean'
						}
					]
				}
			]
		}
	},
	alias: {
		'@packages': resolve(__dirname, '../../packages'),
		'@compos': resolve(__dirname, '../../../src/components'),
	}
}