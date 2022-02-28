<template>
  <button @click="$emit('mbOnClick')" class="fe-button">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "FeButton",
  data() {
    return {
      onHover: false,
    };
  },
};
</script>

<style scoped>
@import url("@/styleGuide/index.css");
.fe-button {
  box-sizing: border-box;
  width: var(--fe-full-width);
  border: 0;
  border-radius: 1rem;
  padding: 1rem 1rem;
  cursor: pointer;
  user-select: none;

  color: var(--fe-accent-text);
  background-color: var(--fe-accent);

  font-weight: bold;
  font-size: var(--fe-base-font-size);
  text-align: center;
  text-transform: uppercase;

  transition: var(--fe-base-transition);
}

.fe-button:hover {
  outline: 0;
  color: var(--fe-action-text);
  background: var(--fe-action-hover);
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>
