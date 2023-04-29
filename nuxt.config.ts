// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt','@vueuse/nuxt','nuxt-icon'
    ],
    app:{
        head: {
            bodyAttrs: {
                class: 'bg-main'
            }
        }
    },
    
    css: ['@unocss/reset/tailwind.css'],
})
