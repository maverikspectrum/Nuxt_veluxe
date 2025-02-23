<script setup lang="ts">
import { computed } from 'vue';

// Define props
const props = defineProps({
  marca: String,
  combustivel: String,
  minAno: Number,
  maxAno: Number
});

// Car data
const carros = [
  {
    marca: "Audi",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2013, 
    preco: 12.990,
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    portas: 5,
    cor: "Azul escuro",
    kms: 190000
  },
  {
    marca: "BMW",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2013, 
    preco: 12.990,
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    portas: 5,
    cor: "Azul escuro",
    kms: 190000
  },
  {
    marca: "Fiat",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2013, 
    preco: 12.990,
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    portas: 5,
    cor: "Azul escuro",
    kms: 190000
  },
  {
    marca: "Toyota",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2013, 
    preco: 12.990,
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    portas: 5,
    cor: "Azul escuro",
    kms: 190000
  },
  {
    marca: "Peugeot",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2013, 
    preco: 12.990,
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    portas: 5,
    cor: "Azul escuro",
    kms: 190000
  }
];

// Computed property for filtering cars
const filteredCarros = computed(() => {
  return carros.filter(carro => {
    const isMarcaValid = props.marca ? carro.marca.toLowerCase().includes(props.marca.toLowerCase()) : true;
    const isCombustivelValid = props.combustivel ? carro.combustivel.toLowerCase().includes(props.combustivel.toLowerCase()) : true;
    const isAnoValid = (!isNaN(props.minAno) ? carro.anoReg >= props.minAno : true) && 
                        (!isNaN(props.maxAno) ? carro.anoReg <= props.maxAno : true);
    
    return isMarcaValid && isCombustivelValid && isAnoValid;
  });
});
</script>

<template>
  <div class="bg-[#0b131a] w-full p-20 grid grid-cols-4">
    <div v-for="carro in filteredCarros" :key="carro.modelo" class="p-8 test rounded-2xl">
      {{ carro.marca }} - {{ carro.modelo }}
    </div>
  </div>
</template>

<style scoped>
.test {
  box-shadow: 0 -1px 5px #f5c039, /* Glow above */
              0 1px 5px #f5c039,  /* Glow below */
              0 0 5px #f5c039,   /* Larger glow around */
              0 0 10px #ffbd17;   /* Intense glowing effect */
}
</style>
