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

@media screen and (max-width: 1439px) {
  .AstronomyContainer {
    grid-template-columns: 1fr 1fr;
    width: calc(448px + 448px + 72px);
  }
}

@media screen and (max-width: 967px) {
  .AstronomyContainer {
    grid-template-columns: 1fr;
    width: calc(448px + 48px);
  }
}

@media screen and (max-width: 495px) {
  .AstronomyContainer {
    width: 100%;
    padding: 8px 8px 59px 8px;
    margin-top: -51px;
    grid-gap: 8px;
  }
}
</style>