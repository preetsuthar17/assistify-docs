---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Assistify"
  text: "Documentation"
  tagline: Easily handle documents with power of best AI models.
  actions:
    - theme: brand
      text: Get Started ✨
      link: /docs/guide/getting-started
    - theme: alt
      text: Check out Assistify AI
      link: https://assistifyai.org
    - theme: brand
      text: v1.0.0 🚀
      link: /devlogs/v1.0.0-release
  image:
    src: /assistify-bg.webp
    alt: Assitify
    width: 160

features:
  - icon: 🚀
    title: Best AI models
    details: With Assistify you can use the best AI models like GPT4 or COHERE for free.
  - icon: 📁
    title: Handling Documents
    details: You can easily upload your own documents with 100% safety and use them as reference for AI. 
  - icon: 🔓
    title: No Paywalls 
    details: Use any AI model in Assistify completely for free without any efforts.
---


<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}


@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
