<script setup>
import { defineProps } from 'vue'

const props = defineProps({ headline: { type: String } })

</script>

<template>
  <div class="header">
    <div class="iconArrow">
      <i @click="$router.go(-1)" class="bi bi-arrow-left-short" scale="1.5"></i>
    </div>
    <div class="headline">
      <h1> {{ props.headline }}</h1>
    </div>
  </div>
</template>

<style scoped>
.header {
  border-bottom: thin inset;
  border-bottom-color: #F0F2F5;
  margin-bottom: 20px;
  padding-bottom: 10px;
  position: relative;
}

.iconArrow {
  left: 0;
  margin-left: 1em;
  position: absolute;
  transform: translate(0, -50%);
  top: 35%;
}

.iconArrow i {
  font-size: xx-large;
}

.headline h1 {
  font-size: medium;
  font-weight: 600;
  margin-bottom: 0;
  text-align: center;
  width: 100%;
}
</style>
