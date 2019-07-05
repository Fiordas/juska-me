<template>
  <div class="box">
    <div class="content">
      <h2 class="title is-4">Project Overview</h2>
      <hr />
      <div class="columns is-mobile">
        <div class="column is-uppercase label">
          <p>Source</p>
          <p>Type</p>
          <p>Status</p>
          <p>Contributors</p>
        </div>
        <div class="column">
          <p>
            <a :href="source" target="_blank">GitHub</a>
          </p>
          <p>{{type}}</p>
          <p>{{status}}</p>
          <p>{{contributors}}</p>
        </div>
      </div>
      <p class="label">Technology Stack:</p>
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
  font-size: 14px;
}
</style>

