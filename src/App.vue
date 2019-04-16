<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ path: monthPath }">All {{ month }} Pictures</router-link> | 
      <router-link to="/">{{ today }}</router-link>
    </div>
    <router-view/>
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
      pictures: []
    }
  }
}
</script>


<style>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
