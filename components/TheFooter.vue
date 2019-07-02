<template>
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <div>
                <small>Copyright © 2019 Simonas Juska</small>
              </div>
            </div>
          </div>
          <div class="level-right">
            <p class="level-item social">
              <a href="https://github.com/Fiordas" class="link" target="_blank">
                <span class="icon is-medium">
                  <fa :icon="['fab', 'github']" class="fa-lg" />
                </span>
              </a>
              <a href="https://www.linkedin.com/in/simonas-juska/" class="link" target="_blank">
                <span class="icon is-medium">
                  <fa :icon="['fab', 'linkedin']" class="fa-lg" />
                </span>
              </a>
              <a href="mailto:simonas.juska@outlook.com" class="link">
                <span class="icon is-medium">
                  <fa :icon="['fas', 'envelope']" class="fa-lg" />
                </span>
              </a>
            </p>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<style scoped>
.icon {
  color: hsl(0, 0%, 80%);
}
.social:hover .icon {
  color: hsl(0, 0%, 70%);
}
.icon:hover {
  color: white !important;
}
</style>

