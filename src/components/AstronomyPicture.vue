<template>
  <div v-if="pictures[day - 1]" class="AstronomyPicture">
    <p v-if="loading" class="loading">Loading...</p>
    <div class="AstronomyPicture--div">
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
        class="iframe"
      />
      <footer class="AstronomyPicture--footer">
        <button
          v-on:click="handlePrevious"
          v-if="pictures[day - 2]"
          class="button"
        >
          <
        </button>
        <div v-else></div>
        <h2 v-if="!loading" class="h2">{{ pictures[day - 1].title }}</h2>
        <button
          v-on:click="handleNext"
          v-if="pictures[parseInt(day)]"
          class="button"
        >
          >
        </button>
      </footer>
    </div>
  </div>
  <NotFound v-else />
</template>

<script>
import router from '../router'
import NotFound from './NotFound'

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
  },
  components: {
    NotFound
  }
}
</script>

<style scoped>
.loading {
  width: 100%;
  text-align: center;
  margin: 8px 0;
}

.AstronomyPicture {
  width: 100%;
  margin: auto;
  display: grid;
  justify-content: center;
}

.AstronomyPicture--footer {
  display: grid;
  grid-template-columns: 48px 1fr 48px;
  width: 100vw;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #ffffff;
  margin-bottom: 16px;
}

.AstronomyPicture--div {
  background-color: #f9f9f9;
  text-align: center;
  height: calc(100vh - 89px);
  position: relative;
  width: 100vw;
}

.h2 {
  text-align: center;
  vertical-align: middle;
}

.img, .iframe {
  height: calc(100vh - 89px);  
  vertical-align: middle;
}

.iframe {
  width: 100%;
  border: 0;
}

.button {
  box-shadow: var(--light-shadow);
  border: 0;
  padding: 8px 16px;
  font-size: 1rem;
  outline: none;
}

.button:hover {
  box-shadow: var(--heavy-shadow);
  transition: .3s;
  cursor: pointer;
}

@media screen and (max-width: 495px) {
  .AstronomyPicture--div {
    height: calc(100vh - 51px);
    margin-top: -51px;
    display: grid;
    align-content: center;
  }

  .img {
    height: initial;
    width: 100%;
  }

  .iframe {
    height: 100vw;
  }

  .AstronomyPicture--footer {
    width: 100%;
    left: 0;
    bottom: 0;
    color: #000000;
    margin-bottom: 0;
    padding-bottom: 8px;
  }
}
</style>
