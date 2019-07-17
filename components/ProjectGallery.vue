<template>
  <no-ssr>
    <div v-swiper:mySwiper="swiperOptions">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(image, i) in images" :key="i">
          <img :src="require(`@/assets/images/${id}/${image}`)" alt="Project picture" />
        </div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </no-ssr>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style scoped>
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: #5156ac;
}

.swiper-button-next,
.swiper-button-prev {
  filter: brightness(0) saturate(100%) invert(35%) sepia(13%) saturate(2634%)
    hue-rotate(199deg) brightness(94%) contrast(91%);
}
</style>
