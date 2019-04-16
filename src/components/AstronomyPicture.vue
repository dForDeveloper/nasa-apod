<template>
  <div class="AstronomyPicture">
    <div class="AstronomyPicture--header">
      <button
        v-on:click="handlePrevious"
      >
        previous
      </button>
      <h2 v-if="!loading" class="h2">{{ pictures[day - 1].title }}</h2>
      <button
        v-on:click="handleNext"
        v-if="pictures[day]"
      >
        next
      </button>
    </div>
    <p v-if="loading">Loading...</p>
    <img
      v-if="!loading && pictures[day - 1].media_type === 'image'"
      v-bind:src="pictures[day - 1].url"
      v-bind:alt="pictures[day - 1].title"
      class="img"
    />
    <iframe
      v-if="!loading && pictures[day - 1].media_type === 'video'"
      v-bind:src="pictures[day - 1].url"
      v-bind:title="pictures[day - 1].title"
    />
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'AstronomyPicture',
  props: ['pictures', 'loading', 'day'],
  methods: {
    handlePrevious() {
      router.push({ path: `${this.day - 1}` })
    },
    handleNext() {
      router.push({ path: `${parseInt(this.day) + 1}` })
    }
  }
}
</script>

<style scoped>
.AstronomyPicture {
  width: 90%;
  margin: auto;
  display: grid;
  justify-content: center;
}

.AstronomyPicture--header {
  display: grid;
  grid-template-columns: 48px 1fr 48px;
}

.h2 {
  text-align: center;
}
</style>
