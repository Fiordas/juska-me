<template>
  <section class="hero is-fullheight" id="top">
    <div class="hero-body">
      <div class="container">
        <no-ssr>
          <template slot="placeholder">
            <div class="columns is-centered">
              <div class="column">
                <div class="spinner">
                  <div class="double-bounce1"></div>
                  <div class="double-bounce2"></div>
                </div>
              </div>
            </div>
          </template>
          <div class="columns is-vcentered">
            <div class="column has-text-right has-text-centered-mobile is-two-thirds-mobile is-offset-2-mobile">
              <img src="@/assets/images/photo.jpg" alt="Portrait" width="300" data-aos="zoom-in" data-aos-duration="600" />
            </div>
            <div class="column is-1"></div>
            <div class="column has-text-centered-mobile" data-aos="fade-in" data-aos-duration="600" data-aos-easing="ease-in-sine">
              <h1 class="title is-1">Hi, I'm Simonas</h1>
              <h2 class="subtitle is-4">A Front-End Developer</h2>
            </div>
          </div>
        </no-ssr>
      </div>
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

.spinner {
  width: 40px;
  height: 40px;
  position: relative;
  margin: 20vw auto;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgb(81, 86, 172);
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: bounce 2s infinite ease-in-out;
  -webkit-animation: bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  animation-delay: -1s;
  -webkit-animation-delay: -1s;
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}
</style>
