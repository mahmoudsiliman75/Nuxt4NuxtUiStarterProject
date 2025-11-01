export default defineNuxtConfig({
  // App Configurations
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
      ],
    },

    rootId: 'nuxt_4_app_root',

    pageTransition: { name: 'fade', mode: 'out-in' },

    layoutTransition: { name: 'fade', mode: 'out-in' },
  },

  // Project Css & Scripts Files
  css: ['@/assets/css/main.css'],

  // Modules Registeration
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
  ],

  // Modules Configurations
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    compilation: {
      strictMessage: false,
    },
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.ts',
        dir: 'ltr',
      },
      {
        name: 'العربية',
        code: 'ar',
        iso: 'ar-EG',
        file: 'ar.ts',
        dir: 'rtl',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
    },
  },

  ui: {
    prefix: '',
    theme: {
      colors: [
        'brand-basic',
        'brand-dark',
        'brand-light-1',
        'brand-light-2',
        'brand-light-3',
        'brand-light-4',
        'brand-secondary-basic',
        'brand-secondary-dark',
        'brand-secondary-light-1',
        'brand-secondary-light-2',
        'brand-secondary-light-3',
        'custom-black-50',
        'custom-black',
        'custom-gray-100',
        'custom-gray-200',
        'custom-gray-300',
        'custom-gray-400',
        'custom-gray-500',
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
      ],
    },
  },

  fonts: {
    families: [
      {
        name: 'NeoSansArabic Bold',
        provider: 'local',
        src: '/fonts/NeoSansArabic-Bold.ttf',
        weight: '700',
        style: 'bold',
        display: 'swap',
        fallbacks: ['sans-serif'],
      },
      {
        name: 'NeoSansArabic Medium',
        provider: 'local',
        src: '/fonts/NeoSansArabic-Medium.ttf',
        weight: '500',
        style: 'medium',
        display: 'swap',
        fallbacks: ['sans-serif'],
      },
      {
        name: 'NeoSansArabic Regular',
        provider: 'local',
        src: '/fonts/NeoSansArabic-Regular.ttf',
        weight: '400',
        style: 'normal',
        display: 'swap',
        fallbacks: ['sans-serif'],
      },
      {
        name: 'NeoSansArabic Light',
        provider: 'local',
        src: '/fonts/NeoSansArabic-Light.ttf',
        weight: '300',
        style: 'light',
        display: 'swap',
        fallbacks: ['sans-serif'],
      },
    ],
  },

  colorMode: {
    preference: 'light',
  },

  image: {
    quality: 85,
    format: ['avif', 'webp'],
  },

  // General Configurations
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
})
