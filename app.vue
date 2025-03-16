<script setup lang="ts">
useHead({
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap"
    }
  ]
});
</script>

<template>
  <NuxtLayout />
</template>

<style>
::selection {
  background-color: #d47474;
  color: white; 
}
body {
  font-family: 'Nunito Sans', sans-serif;
}
</style>