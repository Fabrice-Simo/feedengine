<template>
  <div
    :class="{
      'fe-list-container': true,
      'fe-album-list': !isPhoto,
      'fe-photo-list': isPhoto,
    }"
  >
    <slot name="button" />
    <div
      v-for="item in itemList"
      :id="item.uuid"
      :key="item.uuid"
      :class="{
        'fe-list-item': true,
        'fe-list-item-light': isSmall,
        'fe-list-item--large': !isSmall,
        'fe-list-item--small': isSmall,
      }"
    >
      <div class="fe-list-item__text">{{ item.name }}</div>
      <slot name="info" :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FeList",
  props: {
    itemList: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.every((el) => typeof el === "object");
      },
    },
    type: {
      type: String,
      default: "photo",
      validator: function (value) {
        // following values are valid
        return ["photo", "album"].includes(value);
      },
    },
    size: {
      type: String,
      default: "small",
      validator: function (value) {
        // following values are valid
        return ["small", "large"].includes(value);
      },
    },
  },
  computed: {
    isPhoto() {
      if (this.type !== "photo") {
        return false;
      }
      return true;
    },
    isSmall() {
      if (this.size !== "small") {
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
@import url("@/styleGuide/index.css");
.fe-list-container {
  display: flex;
  flex-direction: column;
  gap: var(--fe-medium-fix-spacing);
  padding: var(--fe-base-spacing);
}

.fe-list-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--fe-base-spacing);
  padding: var(--fe-base-spacing);
  user-select: none;
  min-width: var(fe-medium-spacing);
  color: var(--fe-secondary-dark);
  background-color: var(--fe-secondary);
}

.fe-list-item:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.fe-list-item--large {
  height: var(--fe-medium-spacing);
}

.fe-list-item--small {
  height: var(--fe-small-spacing);
}

.fe-list-item-light {
  background-color: var(--fe-action-text);
  border: var(--fe-base-fix-spacing) solid var(--fe-secondary);
}

.fe-list-item__text {
  font-weight: bold;
  font-size: var(--fe-base-font-size);
}

.fe-album-list {
  grid-area: fe-album-list;
}

.fe-photo-list {
  grid-area: fe-photo-list;
}
</style>
