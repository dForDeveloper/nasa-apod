<template>
  <div
    v-if="!loading"
    v-on:click="handleClick(picture.date)"
    class="AstronomyCard"
  >
    <h4 class="h4">
      {{ picture.title }}
    </h4>
    <h5 class="h5">{{ formattedDate }}</h5>
    <div class="AstronomyCard--div">
      <img
        v-if="picture.media_type === 'image'"
        v-bind:src="picture.url"
        v-bind:alt="picture.title"
        class="img"
      />
      <iframe
        v-if="picture.media_type === 'video'"
        v-bind:src="picture.url"
        v-bind:title="picture.title"
        class="iframe"
        height="240"
      />
    </div>
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
      formattedDate: moment(this.picture.date).format('MMMM Do, YYYY')
    }
  }
}
</script>

<style scoped>
.AstronomyCard {
  width: 100%;
  padding: 24px;
  box-shadow: var(--light-shadow);
  border-radius: 4px;
  text-align: center;
  background-color: #ffffff;
  box-sizing: border-box;
  width: 448px;
  margin: auto;
}

.AstronomyCard:hover {
  box-shadow: var(--heavy-shadow);
  transition: .3s;
  cursor: pointer;
}

.h4, .h5 {
  margin: 0 0 8px;
}

.AstronomyCard--div {
  background-color: #000000;
}

.img {
  height: 240px;
  vertical-align: middle;
}

.iframe {
  border: 0;
  vertical-align: middle;
}

@media screen and (max-width: 495px) {
  .AstronomyCard {
    width: 100%;
    padding: 16px;
  }

  .img {
    height: 200px;
  }

  .iframe {
    width: 100%;
  }
}

@media screen and (max-width: 400px) {
  .img {
    height: 150px;
  }
}
</style>