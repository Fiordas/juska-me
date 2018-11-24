<template>
  <section class="section has-text-centered">
    <div class="container">
      <div class="columns is-centered">
        <SkillColumn v-for="(skill, i) in skillData" :key="i" :icon="skill.icon" :title="skill.title" :tags="skill.tags" />
      </div>
    </div>
  </section>
</template>

<script>
import SkillColumn from '@/components/SkillColumn.vue'

export default {
  components: {
    SkillColumn
  },
  data() {
    return {
      skillData: [{
        icon: 'hammer',
        title: 'Tools',
        tags: ['VS Code', 'npm', 'Node.js', 'GitHub']
      },
      {
        icon: 'code',
        title: 'Languages',
        tags: ['JavaScript (ES6)', 'HTML', 'CSS', 'SASS']
      },
      {
        icon: 'vector-square',
        title: 'Frameworks',
        tags: ['Vue.js', 'Nuxt.js', 'Bulma', 'Express.js']
      }]
    }
  }
}
</script>


<style scoped>
section {
  margin-top: -10rem;
}
</style>