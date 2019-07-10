<template>
  <section class="hero is-fullheight" id="top">
    <div class="hero-body">
      <no-ssr>
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column has-text-right has-text-centered-mobile is-two-thirds-mobile is-offset-2-mobile" data-aos="zoom-in" data-aos-duration="600">
              <img src="@/assets/images/photo.jpg" alt="Portrait" width="300" />
            </div>
            <div class="column is-1"></div>
            <div class="column has-text-centered-mobile" data-aos="fade-in" data-aos-duration="600" data-aos-easing="ease-in-sine">
              <h1 class="title is-1">Hi, I'm Simonas</h1>
              <h2 class="subtitle is-4">A Front-End Developer</h2>
            </div>
          </div>
        </div>
      </no-ssr>
    </div>
    <div class="hero-footer has-text-centered">
      <a href="#" v-scroll-to="'#about'" aria-label="Scroll down the page arrow">
        <span class="icon is-large has-text-primary">
          <fa :icon="['fa', 'chevron-down']" class="fa-3x" />
        </span>
      </a>
    </div>
  </section>
</template>

<style scoped>
img {
  border-radius: 50%;
}

.icon {
  position: relative;
  animation: pulse 4s infinite;
}

@keyframes pulse {
  0% {
    bottom: 0;
  }
  50% {
    bottom: 50px;
  }
  100% {
    bottom: 0;
  }
}
</style>
