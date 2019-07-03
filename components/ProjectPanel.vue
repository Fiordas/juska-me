<template>
  <div class="box">
    <div class="content">
      <h2 class="title is-4">Quick Summary</h2>
      <hr />
      <p>
        <strong>Source:</strong>
        <a :href="source" target="_blank">GitHub</a>
      </p>
      <p>
        <strong>Type:</strong>
        {{type}}
      </p>
      <p>
        <strong>Status:</strong>
        {{status}}
      </p>
      <p>
        <strong>Contributors:</strong>
        {{contributors}}
      </p>
      <p>
        <strong>Technology Stack:</strong>
      </p>
      <div class="tags">
        <span class="tag is-primary" v-for="tech in stack" :key="tech">{{tech}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: ''
    },
    contributors: {
      type: String,
      required: true
    },
    stack: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped>
p {
  line-height: 1rem;
}
</style>

