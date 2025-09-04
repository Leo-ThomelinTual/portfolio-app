// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3000,
    host: "0.0.0.0",
  },
  ssr: false,
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/app.css"],
  devtools: { enabled: true },
  icon: {
    size: "24px", // default <Icon> size applied
    mode: "svg", // default <Icon> mode applied
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image", "@nuxtjs/i18n"],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
    defaultLocale: "fr",
    locales: [
      { code: "en", name: "English", file: "en-US.json" },
      { code: "fr", name: "Français", file: "fr-FR.json" },
    ],
  },
  app: {
    head: {
      title: "Portfolio -",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      htmlAttrs: {
        lang: "fr",
      },
      bodyAttrs: {
        class: "dark",
      },
      link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
    },
  },
});
