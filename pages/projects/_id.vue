<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container" v-if="projects[$route.params.id]">
        <div class="columns">
          <div class="column is-9">
            <ProjectGallery :images="projects[$route.params.id].images" :id="$route.params.id" />
          </div>
          <div class="column">
            <ProjectPanel
              :source="projects[$route.params.id].source"
              :type="projects[$route.params.id].type"
              :status="projects[$route.params.id].status"
              :contributors="projects[$route.params.id].contributors"
              :stack="projects[$route.params.id].stack"
            />
          </div>
        </div>
        <div class="columns">
          <div class="column is-9">
            <h1 class="title is-spaced">{{ projects[$route.params.id].title }}</h1>
            <p>{{ projects[$route.params.id].description }}</p>
          </div>
        </div>
      </div>
      <div class="container" v-else>
        <h1 class="title">Project not found</h1>
        <nuxt-link to="/">Return home</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectGallery from '@/components/ProjectGallery.vue'
import ProjectPanel from '@/components/ProjectPanel.vue'
import projects from '~/static/projects.json'

export default {
  components: {
    ProjectGallery,
    ProjectPanel
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
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
