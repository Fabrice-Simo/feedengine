<template>
  <div class="test">
    <h1 style="color: gray">{{ msg }}</h1>
    <fe-button @mbOnClick="greet">add album</fe-button>
    <div class="fe-container">
      <div class="fe-album-list"><h1>Just a</h1></div>
      <div class="fe-photo-list"><h1>quick test</h1></div>
    </div>
  </div>
</template>

<script>
import { jsPlumb } from "jsplumb";
import * as mockData from "@/mockData";

import Button from "@/components/Button";

export default {
  name: "FeedEngine",
  components: {
    "fe-button": Button,
  },
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  mounted() {
    console.log(jsPlumb);
    console.log(mockData);
  },
  methods: {
    greet() {
      console.log("Hi there!");
    },
  },
};
</script>


<style scoped>
@import url("@/styleGuide/index.css");
.fe-container {
  position: relative;

  margin: 0 auto;
  padding: var(--fe-small-spacing);
  border-radius: var(--fe-medium-spacing);
  color: var(--fe-accent);
  width: var(--fe-half-width);

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: var(--fe-primary);
  opacity: 1;
  background-image: radial-gradient(
    var(--fe-primary-ligth) 0.45px,
    var(--fe-primary) 0.45px
  );
  background-size: 9px 9px;

  display: grid;
  grid-template-areas: "fe-album-list fe-album-list . . . . fe-photo-list  fe-photo-list";
}

.fe-album-list {
  grid-area: fe-album-list;
  background-color: red;
}

.fe-photo-list {
  grid-area: fe-photo-list;
  background-color: green;
}
</style>
