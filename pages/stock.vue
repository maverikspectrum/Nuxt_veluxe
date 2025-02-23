<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const marca = route.query.marca as string;
const combustivel = route.query.combustivel as string;
const minAno = route.query.minAno as string;
const maxAno = route.query.maxAno as string;
</script>

<template>
    <StockMain 
      :marca="marca"
      :combustivel="combustivel"
      :minAno="parseInt(minAno)"
      :maxAno="parseInt(maxAno)" 
    />
</template>
