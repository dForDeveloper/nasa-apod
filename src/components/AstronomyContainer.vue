<template>
  <div class="AstronomyContainer">
    <p v-if="loading">Loading...</p>
    <div v-bind:key="picture.date" v-for="picture in pictures">
      <AstronomyCard v-bind:picture="picture" v-bind:loading="loading" />
    </div>
  </div>
</template>

<script>
import AstronomyCard from './AstronomyCard'

export default {
  name: 'AstronomyContainer',
  props: ['pictures', 'loading'],
  components: {
    AstronomyCard
  }
}
</script>

<style scoped>
.AstronomyContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding: 24px;
  margin: auto;
  grid-gap: 24px;
}
</style>