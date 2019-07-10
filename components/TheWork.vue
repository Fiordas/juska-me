<template>
  <section class="hero is-medium" id="work">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered animation-overflow">
          <div class="column is-three-quarters has-text-centered" data-aos="fade-left" data-aos-duration="1500">
            <h1 class="title is-spaced">My Latest Work</h1>
            <h2 class="subtitle">I have worked on several individual and collaborative projects. Check them out below.</h2>
          </div>
        </div>
        <br />
        <div class="columns is-centered">
          <WorkCard v-for="(project, i) in projects" :key="i" :project="project" data-aos="zoom-in" data-aos-duration="1000" />
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
section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.animation-overflow {
  overflow: hidden;
}
</style>

