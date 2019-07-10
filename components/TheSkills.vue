<template>
  <section class="hero is-medium has-text-centered">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered mobile-padding">
          <SkillColumn v-for="(skill, i) in skillData" :key="i" :icon="skill.icon" :title="skill.title" :tags="skill.tags" data-aos="fade-up" data-aos-duration="800" :data-aos-delay="150 * i" />
        </div>
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
      skillData: [
        {
          icon: 'hammer',
          title: 'Tools',
          tags: [
            'VS Code',
            'npm',
            'MongoDB',
            'MySQL',
            'Firebase',
            'AJAX',
            'REST',
            'Git'
          ]
        },
        {
          icon: 'code',
          title: 'Languages',
          tags: ['HTML', 'CSS', 'SASS', 'JavaScript (ES6)', 'SQL']
        },
        {
          icon: 'vector-square',
          title: 'Frameworks',
          tags: [
            'Vue.js',
            'Nuxt.js',
            'Express.js',
            'Node.js',
            'Bulma',
            'Bootstrap'
          ]
        }
      ]
    }
  }
}
</script>


<style scoped>
section {
  margin-top: -20rem;
}
</style>