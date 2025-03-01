<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const marca = route.query.marca as string;
const combustivel = route.query.combustivel as string;
const minAno = parseInt(route.query.minAno as string) || undefined;
const maxAno = parseInt(route.query.maxAno as string) || undefined;
const minPreco = parseInt(route.query.maxAno as string) || undefined;
const maxPreco = parseInt(route.query.maxAno as string) || undefined;
const minKM = parseInt(route.query.maxAno as string) || undefined;
const maxKM = parseInt(route.query.maxAno as string) || undefined;
const modelo = route.query.combustivel as string;
const transmissao = route.query.combustivel as string;
const tipologia = route.query.combustivel as string;
const lugares = parseInt(route.query.maxAno as string) || undefined;

</script>

<template>
    <StockMain 
      :marca="marca"
      :combustivel="combustivel"
      :minAno="minAno"
      :maxAno="maxAno"
      :minPreco="minPreco" 
      :maxPreco="maxPreco" 
      :minKM="minKM" 
      :maxKM="maxKM" 
      :modelo="modelo"
      :transmissao="transmissao"
      :tipologia="tipologia"
      :lugares="lugares"
    />
</template>
