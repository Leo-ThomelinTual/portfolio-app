// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: "0.0.0.0", // ← indispensable en conteneur
    port: 3000,
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100,
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
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image"],
  app: {
    head: {
      title: "Portfolio -",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      htmlAttrs: {
        lang: "fr",
      },
      link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
    },
  },
});
