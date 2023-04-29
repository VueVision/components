// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
    shortcuts: {
        'bg-main': 'bg-[#f3f5f9] dark:bg-gradient-to-br dark:from-[#383845] dark:to-[#1f2029] text-[#232148] dark:text-[#ffffff]',
        'bg-base': 'bg-[#ffffff] dark:bg-[#1a1b24]',
        'page': 'min-h-screen flex flex-col p-4 gap-5',
        'bottom-modal': 'bottom-[1%] rounded-[15px] fixed w-11/12 md:w-2/3',
        'b-modal': 'top-[5%] fixed overflow-auto w-11/12 md:w-2/3',
        'page-title': 'text-4xl font-bold text-[#232148] dark:text-[#ffffff]',
        'card-base': 'bg-base p-4 rounded-lg shadow-lg',
    },
    theme: {
        colors: {
            primary: '#5468ff'
        }
    },
    safelist: ['bg-main'] // loaded in nuxt.config.ts attached to root tag
})