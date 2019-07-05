<template>
  <div class="column">
    <div class="box">
      <span class="icon is-large has-text-primary">
        <fa :icon="['fas', icon]" class="fa-3x" />
      </span>
      <h2 class="title is-4">{{title}}</h2>
      <div class="tags is-centered">
        <span class="tag is-primary" v-for="(tag, i) in tags" :key="i">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped>
.box {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
h2 {
  padding-top: 1rem;
}
</style>
