<template>
  <section class="hero is-medium">
    <div class="hero-header" id="work">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-three-quarters has-text-centered">
            <h1 class="title is-spaced">My Latest Work</h1>
            <h2 class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-4" v-for="(project, i) in projects" :key="i">
            <WorkCard :project="project" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WorkCard from '@/components/WorkCard'
import projects from '~/static/projects.json'

export default {
  components: {
    WorkCard
  },
  data() {
    return {
      projects
    }
  }
}
</script>

<style scoped>
.hero.is-medium .hero-header {
  padding-top: 12rem;
}
.hero.is-medium .hero-body {
  padding-top: 4rem;
}
</style>

