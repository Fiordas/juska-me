<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container" v-if="!isSent">
        <div class="contact-text has-text-centered">
          <h1 class="title is-spaced">Reach out!</h1>
          <h2 class="subtitle">
            Use the form below or drop me an
            <a href="mailto:simonas.juska@outlook.com">e-mail</a>.
          </h2>
        </div>
        <form @submit.prevent="onSubmit">
          <div class="columns is-centered">
            <div class="column is-half">
              <div class="columns is-centered">
                <div class="column">
                  <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                      <input class="input" type="text" name="name" v-model="name" required />
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                      <input class="input" type="text" name="email" v-model="email" required />
                    </div>
                  </div>
                </div>
              </div>
              <div class="columns is-centered">
                <div class="column">
                  <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                      <textarea class="textarea" rows="5" name="message" v-model="message" required></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-centered">
            <div class="column is-half has-text-right">
              <button class="button is-primary is-outlined" type="submit" :class="{'is-loading': isLoading}">
                <strong>Submit</strong>
              </button>
              <p class="help is-danger" v-show="isSent === false">Something went wrong, please try again.</p>
            </div>
          </div>
        </form>
      </div>
      <div class="container" v-if="isSent === true">
        <div class="contact-text has-text-centered">
          <h1 class="title is-spaced">Form Submitted</h1>
          <h2 class="subtitle">Thanks for your message! I will get back to you as soon as I can.</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isLoading: false,
      isSent: null
    }
  },
  methods: {
    onSubmit() {
      this.isLoading = true
      this.isSent = null

      let data = new FormData()
      data.append('name', this.name)
      data.append('email', this.email)
      data.append('message', this.message)

      fetch(
        'https://script.google.com/macros/s/AKfycbyNMWt9_syVjBiWclXniqVSzs2PO4HVt-r-nc9t2CObsKN8nrJ9/exec',
        {
          method: 'POST',
          body: data,
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          mode: 'no-cors'
        }
      )
        .then(async (result) => {
          const response = await result.json()

          if (response.result == 'success') this.isSent = true
          else this.isSent = false
        })
        .catch(() => {
          this.isSent = false
        })
        .finally(() => this.isLoading = false)
    }
  }
}
</script>

<style scoped>
.contact-text {
  margin-top: 6rem;
  margin-bottom: 2rem;
}
</style>

