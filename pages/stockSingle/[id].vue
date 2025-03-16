<script setup lang="ts">
import { useRoute } from 'vue-router';
useHead({
  title: `Veluxe Auto | Showroom`
});
const route = useRoute();

const id = parseInt(route.params.id as string) || undefined;
</script>

<template>
  <div class="bg-[#121212]">
      <StockSpecificPage
        :id="id"
      />
    </div>
</template>
