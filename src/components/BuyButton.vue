<script setup>
import { defineProps } from 'vue';
import "bootstrap-icons/font/bootstrap-icons.css";

const props = defineProps({ buttonText: { type: String }, buttonSize: { type: String, default: "sm" } })
</script>

<template>
  <b-button class="button" :size="props.buttonSize"> {{ buttonText }} <i class="bi bi-cart"></i></b-button>
</template>

<style scoped>
.button {
  background-color: #e7b6e2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0.75rem;
  border: 0;
  color: black;
  padding: 5px 15px 5px 15px;
  margin-left: 30px;
}

.button:hover {
  background-color: rgba(255, 164, 85, 0.8);
  color: black;
}

.button:active {
  background-color: #FFE67B;
}
</style>
