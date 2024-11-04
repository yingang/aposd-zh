import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { createSiderBar } from './siderbar'

export default defineUserConfig({
	bundler: viteBundler({}),

	base: '/aposd-zh/',

	locales: {
		'/': {
			lang: 'zh-CN',
			title: '软件设计的哲学',
		},
		'/en/': {
			lang: 'en-US',
			title: 'A Philosophy of Software Design',
		},
		'/zh-tw/' : {
      lang: 'zh-TW',
      title: '軟體設計的哲學，第二版',
    }
	},

	theme: defaultTheme({
		repo: 'yingang/aposd-zh',
		docsRepo: 'yingang/aposd-zh',
		docsBranch: 'main',
		docsDir: 'docs',
		contributors: false,
		sidebarDepth: 2,
		locales: {
			'/': {
				// zh-CN
				selectLanguageName: '简体中文',
				selectLanguageText: '选择语言',
				editLink: true,
				editLinkText: '在 GitHub 上编辑此页',
				lastUpdatedText: '上次更新',
				sidebar: createSiderBar('docs', ''),
			},
			'/en/': {
				selectLanguageName: 'English',
				selectLanguageText: 'Languages',
				editLink: false,
				editLinkText: 'Edit this page on GitHub',
				lastUpdatedText: 'Last Updated',
				sidebar: createSiderBar('docs/en', '/en'),
			},
			'/zh-tw/': {
				selectLanguageName: '繁体中文',
				selectLanguageText: '選擇語言',
				editLink: false,
				editLinkText: '在 GitHub 上編輯此頁',
				lastUpdatedText: '上次更新',
				sidebar: createSiderBar('docs/zh-tw', '/zh-tw'),
			},
		},
	}),
})
