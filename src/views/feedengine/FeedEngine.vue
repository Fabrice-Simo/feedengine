<template>
  <div class="test">
    <h1 style="color: gray">{{ msg }}</h1>
    <fe-button @mbOnClick="greet">add album</fe-button>
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
.test {
  background-color: var(--fe-primary);
}
</style>
