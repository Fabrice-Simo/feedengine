<template>
  <div class="test">
    <h1 style="color: gray">{{ msg }}</h1>
  </div>
</template>

<script>
import { jsPlumb } from "jsplumb";
import * as mockData from "@/mockData";
export default {
  name: "FeedEngine",
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
};
</script>


<style scoped>
@import url("@/styleGuide/index.css");
.test {
  background-color: var(--fe-primary);
}
</style>
