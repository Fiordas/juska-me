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
              :status="projects[$route.params.id].status"
              :type="projects[$route.params.id].type"
              :effort="projects[$route.params.id].effort"
              :stack="projects[$route.params.id].stack"
            />
          </div>
        </div>
        <div class="columns">
          <div class="column is-9">
            <h1 class="title is-spaced">{{ projects[$route.params.id].title }}</h1>
            <div class="content" v-html="projects[$route.params.id].description"></div>
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
  margin-top: 5rem;
  margin-bottom: 6rem;
}
</style>
