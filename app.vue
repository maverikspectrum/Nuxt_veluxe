<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap'
    }
  ]
});
</script>

<template>
  <NuxtLayout />
</template>

<style>
::selection {
  background-color: #44cc29;
  color: white; 
}
body {
  font-family: 'Nunito Sans', sans-serif;
}
</style>