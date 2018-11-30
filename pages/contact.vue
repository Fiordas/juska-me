<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="contact-text has-text-centered">
          <h1 class="title is-spaced">Reach out!</h1>
          <h2 class="subtitle">Use the form below or shoot me an <a href="mailto:simonas.juska@outlook.com">e-mail</a>.</h2>
        </div>
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="columns is-centered">
              <div class="column">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                    >
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="columns is-centered">
              <div class="column">
                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-half has-text-right">
            <button class="button is-primary is-outlined">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-text {
  margin-bottom: 2rem;
}
</style>

