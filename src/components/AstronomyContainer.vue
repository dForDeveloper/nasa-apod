<template>
  <div>
    <h2>astronomy container</h2>
    <p v-if="loading">Loading...</p>
    <div v-bind:key="picture.date" v-for="picture in pictures">
      <h4 v-if="!loading" class="h4" v-on:click="handleClick(picture.date)">
        {{ picture.title }}
      </h4>
      <img
        v-if="!loading && picture.media_type === 'image'"
        v-bind:src="picture.url"
        v-bind:alt="picture.title"
        v-on:click="handleClick(picture.date)"
        class="img"
      />
      <iframe
        v-if="!loading && picture.media_type === 'video'"
        v-bind:src="picture.url"
        v-bind:title="picture.title"
      />
    </div>
  </div>
</template>

<script>
import router from '../router';

export default {
  name: 'AstronomyContainer',
  props: ['pictures', 'loading'],
  methods: {
    handleClick(date) {
      router.push(date.slice(5).replace(/-/g, '/'))
    }
  }
}
</script>

<style scoped>
.h4 {
  cursor: pointer;
}

.img {
  height: 150px;
  cursor: pointer;
}
</style>