<script setup>
import { ref } from 'vue'

const footerWave = ref('footer-transparent.png'),
  smallLogo = ref('small-logo-1.png')
</script>


<template>
  <div class="imageContainer">
    <img class="img1" :src="footerWave" alt="Footer">
    <img class="img2" :src="smallLogo" alt="Logo">
  </div>
</template>


<style scoped>
img {
  max-width: 100%;
  background-color: rgba(231, 182, 226, 0.46);
}

.imageContainer {
  position: relative;
  top: 0%;
  left: 0%;
}

.img1 {
  position: relative;
  top: 0%;
  left: 0%;
}

.img2 {
  position: absolute;
  top: 40px;
  right: 30px;
}
</style>
