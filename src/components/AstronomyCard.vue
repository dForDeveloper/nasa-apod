<template>
  <div v-if="!loading" class="AstronomyCard">
    <h4 class="h4" v-on:click="handleClick(picture.date)">
      {{ picture.title }}
    </h4>
    <h5>{{ formattedDate }}</h5>
    <img
      v-if="picture.media_type === 'image'"
      v-bind:src="picture.url"
      v-bind:alt="picture.title"
      v-on:click="handleClick(picture.date)"
      class="img"
    />
    <iframe
      v-if="picture.media_type === 'video'"
      v-bind:src="picture.url"
      v-bind:title="picture.title"
    />
  </div>
</template>

<script>
import router from '../router'
import moment from 'moment'

export default {
  name: 'AstronomyCard',
  props: ['picture', 'loading'],
  methods: {
    handleClick(date) {
      router.push(date.slice(5).replace(/-/g, '/'))
    }
  },
  data() {
    return {
      formattedDate: moment(this.picture.date).format('MMMM Do YYYY')
    }
  }
}
</script>

<style scoped>
.AstronomyCard {
  display: inline-block;
}

.h4 {
  cursor: pointer;
}

.img {
  height: 150px;
  cursor: pointer;
}
</style>