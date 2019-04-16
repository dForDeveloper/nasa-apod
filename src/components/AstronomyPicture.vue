<template>
  <div class="astronomy-picture">
    <h2>astronomy picture</h2>
    <p v-if="loading">Loading...</p>
    <img
      v-if="!loading && pictures[day - 1].media_type === 'image'"
      v-bind:src="pictures[day - 1].url"
      v-bind:alt="pictures[day - 1].title"
    />
    <iframe
      v-if="!loading && pictures[day - 1].media_type === 'video'"
      v-bind:src="pictures[day - 1].url"
      v-bind:title="pictures[day - 1].title"
    />
  </div>
</template>

<script>
export default {
  name: 'AstronomyPicture',
  props: ['pictures', 'loading', 'day']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
