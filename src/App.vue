<template>
  <div id="app">
    <header class="header">
      <h1 class="h1">NASA Astronomy Picture of the Day</h1>
      <div id="nav">
        <router-link :to="{ path: monthPath }">
          All {{ month }} Pictures
        </router-link>
        | 
        <router-link to="/">{{ today }}</router-link>
      </div>
    </header>
    <router-view v-bind:pictures="pictures" v-bind:loading="loading" />
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: "app",
  data() {
    return {
      today: moment().format("MMMM Do"),
      month: moment().format('MMMM'),
      monthPath: moment().format('/YYYY/MM'),
      pictures: [],
      loading: true
    }
  },
  async created() {
    await this.fetchPictures();
    this.loading = false;
  },
  methods: {
    async fetchPictures() {
      const yearAndMonth = moment().format('YYYY-MM');
      const date = new Date().getDate();
      for (let i = 1; i <= date; i++) {
        const url = `${process.env.VUE_APP_BASE_URL}&date=${yearAndMonth}-${i}`;
        const response = await fetch(url);
        const picture = await response.json();
        this.pictures.push(picture);
      }
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  --heavy-shadow: 
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  --light-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
}

#app {
  background-color: #f9f9f9;
}

.header {
  position: sticky;
  top: 0;
  background-color: #ffffff;
  padding: 16px 0 16px;
  box-shadow: var(--heavy-shadow);
}

.h1 {
  text-align: center;
}

#nav {
  margin: auto;
  width: 200px;
}
</style>
