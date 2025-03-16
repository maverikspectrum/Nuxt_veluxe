<script setup lang="ts">
import { useRoute } from 'vue-router';
const {t, locale} = useI18n();
useHead({
  title: `Veluxe Auto | ${t('stock')}`
});
const route = useRoute();

const marca = route.query.marca as string;
const combustivel = route.query.combustivel as string;
const minAno = parseInt(route.query.minAno as string) || undefined;
const maxAno = parseInt(route.query.maxAno as string) || undefined;
const minPreco = parseInt(route.query.minPreco as string) || undefined;
const maxPreco = parseInt(route.query.maxPreco as string) || undefined;
const minKM = parseInt(route.query.minKM as string) || undefined;
const maxKM = parseInt(route.query.maxKM as string) || undefined;
const modelo = route.query.combustivel as string;
const transmissao = route.query.transmissao as string;
const tipologia = route.query.tipologia as string;
const lugares = route.query.lugares as string;

</script>

<template>
  <div class="bg-[#121212]">
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
  </div>
</template>
