<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="logo-text navbar-item">Simonas
          <span class="logo-color">Juska</span>
        </nuxt-link>
        <div class="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link to="about" class="navbar-item">About</nuxt-link>
          <nuxt-link to="work" class="navbar-item">Work</nuxt-link>
          <nuxt-link to="contact" class="navbar-item">Contact</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Kanit:700");

.logo-text {
  font-family: "Kanit", sans-serif;
  font-size: 1.5rem;
}
.logo-color {
  color: rgb(81, 86, 172);
}
</style>