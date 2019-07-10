<template>
  <div class="site">
    <TheHeader />
    <nuxt class="site-content" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  },
  head() {
    return {
      title: 'Simonas Juska | Front-End Developer',
      htmlAttrs: {
        lang: 'en'
      }
    }
  }
}
</script>

<style scoped>
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.site-content {
  flex: 1;
}
</style>
