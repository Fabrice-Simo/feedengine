<template>
  <div id="app">
    <feed-engine msg="Feed Engine Frontend V1" />
  </div>
</template>

<script>
import FeedEngine from "./views/feedengine";

export default {
  name: "App",
  components: {
    FeedEngine,
  },
};
</script>

<style>
#app {
  font-family: Roboto, Lato, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
