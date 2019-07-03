<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <img :src="require(`@/assets/images/${project.id}/${project.logo}`)" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4 has-text-centered">{{project.title}}</p>
        </div>
      </div>
      <div class="content has-text-centered">{{project.summary}}</div>
    </div>
    <footer class="card-footer">
      <nuxt-link :to="`/projects/${project.id}`" class="card-footer-item">Read More</nuxt-link>
      <a :href="project.source" target="_blank" class="card-footer-item">GitHub</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 2%;
}

img {
  border-top-right-radius: 2%;
  border-top-left-radius: 2%;
}
</style>

