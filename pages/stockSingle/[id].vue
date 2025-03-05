<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const id = parseInt(route.params.id as string) || undefined;

</script>

<template>
    <StockSpecificPage
      :id="id"
    />
</template>
