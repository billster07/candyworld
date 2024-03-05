<script setup>
import { defineProps } from "vue";

const props = defineProps({
  buttonText: { type: String },
  buttonSize: { type: String, default: "sm" },
});
</script>

<template>
  <b-button class="button" :size="props.buttonSize"
    ><RouterLink to="/payment">
      {{ buttonText }}
    </RouterLink></b-button
  >
</template>

<style scoped>
.button {
  background-color: #e7b6e2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0.75rem;
  border: 0;
  padding: 5px 15px 5px 15px;
  margin-left: 30px;
}

.button:hover {
  background-color: rgba(255, 164, 85, 0.8);
  color: black;
}

.button:active {
  background-color: #ffe67b;
}

a {
  text-decoration: none;
  color: black;
}
</style>
