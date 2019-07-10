<template>
  <nav class="navbar has-shadow is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <a href="#" v-scroll-to="'#top'" class="logo-text navbar-item has-text-dark" v-if="$route.name === 'index'">
          Simonas
          <span class="has-text-primary">Juska</span>
        </a>
        <nuxt-link to="/" class="logo-text navbar-item" v-else>
          Simonas
          <span class="has-text-primary">Juska</span>
        </nuxt-link>
        <div class="navbar-burger burger" :class="{'is-active': isBurger}" @click="isBurger = !isBurger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" :class="{'is-active': isBurger}">
        <div class="navbar-end" v-if="$route.name === 'index'">
          <div class="navbar-item">
            <a href="#" v-scroll-to="'#about'" class="navbar-item" @click="isBurger ? isBurger = !isBurger: null">
              <strong>About</strong>
            </a>
          </div>
          <div class="navbar-item">
            <a href="#" v-scroll-to="'#work'" class="navbar-item" @click="isBurger ? isBurger = !isBurger: null">
              <strong>Portfolio</strong>
            </a>
          </div>
          <div class="navbar-item">
            <a href="#" v-scroll-to="'#contact'" class="navbar-item" @click="isBurger ? isBurger = !isBurger: null">
              <strong>Contact</strong>
            </a>
          </div>
        </div>
        <div class="navbar-end" v-else>
          <div class="navbar-item">
            <button @click="$router.go(-1); isBurger ? isBurger = !isBurger: null" class="button is-primary is-outlined">
              <span class="icon is-medium">
                <fa :icon="['fas', 'undo']" />
              </span>
              <strong>Back</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isBurger: false
    }
  }
}
</script>


<style scoped>
.logo-text {
  font-family: 'Kanit', sans-serif;
  font-size: 1.5rem;
}
</style>
