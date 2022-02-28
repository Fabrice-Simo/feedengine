<template>
  <div class="test">
    <h1 style="color: gray">{{ msg }}</h1>
    <div class="fe-container">
      <!-- album list -->
      <fe-list type="album" size="large" :itemList="albumList">
        <template #button>
          <fe-button @mbOnClick="addAlbum">add album</fe-button>
        </template>
        <template #info="{ item }">
          <div class="fe-list-item__info">{{ item.photoCount }}</div>
        </template>
      </fe-list>
      <!-- photo list -->
      <fe-list type="photo" size="small" :itemList="photoList">
        <template #button>
          <fe-button @mbOnClick="addPhoto">add photo</fe-button>
        </template>
      </fe-list>
    </div>
  </div>
</template>

<script>
import { jsPlumb } from "jsplumb";
import * as mockData from "@/mockData";

import Button from "@/components/Button";
import List from "@/components/List";

export default {
  name: "FeedEngine",
  components: {
    "fe-button": Button,
    "fe-list": List,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      albumList: mockData.albumList,
      photoList: mockData.photoList,
      connectionList: mockData.connectionList,
    };
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
  min-height: calc(var(--fe-large-fix-spacing) * 6);

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

.fe-list-item__info {
  min-width: var(--fe-large-fix-spacing);
  max-height: var(--fe-large-fix-spacing);
  border-radius: var(--fe-large-fix-spacing);
  color: var(--fe-action-text);
  background-color: var(--fe-secondary-dark);
  line-height: var(--fe-large-fix-spacing);
}
</style>
