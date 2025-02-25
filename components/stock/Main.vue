<script setup lang="ts">
import { computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; 

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
    preco: 12990,
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    portas: 5,
    cor: "Azul escuro",
    kms: 190000,
    imagens: [
      "/images/mini1.jpg",
      "/images/mini2.jpg",
      "/images/mini10.jpg",
      "/images/mini11.jpg",
      "/images/mini12.jpg",
      "/images/mini13.jpg",
    ]
  },
  {
    marca: "BMW",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2013, 
    preco: 12990,
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    portas: 5,
    cor: "Azul escuro",
    kms: 190000,
    imagens: [
      "/images/mini1.jpg",
      "/images/mini2.jpg",
      "/images/mini10.jpg",
      "/images/mini11.jpg",
      "/images/mini12.jpg",
      "/images/mini13.jpg",
    ]
  },
  {
    marca: "Fiat",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2013, 
    preco: 12990,
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    portas: 5,
    cor: "Azul escuro",
    kms: 190000,
    imagens: [
      "/images/mini1.jpg",
      "/images/mini2.jpg",
      "/images/mini10.jpg",
      "/images/mini11.jpg",
      "/images/mini12.jpg",
      "/images/mini13.jpg",
    ]
  },
  {
    marca: "Toyota",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2013, 
    preco: 12990,
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    portas: 5,
    cor: "Azul escuro",
    kms: 190000,
    imagens: [
      "/images/mini1.jpg",
      "/images/mini2.jpg",
      "/images/mini10.jpg",
      "/images/mini11.jpg",
      "/images/mini12.jpg",
      "/images/mini13.jpg",
    ]
  },
  {
    marca: "Peugeot",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2013, 
    preco: 12990,
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    portas: 5,
    cor: "Azul escuro",
    kms: 190000,
    imagens: [
      "/images/mini1.jpg",
      "/images/mini2.jpg",
      "/images/mini10.jpg",
      "/images/mini11.jpg",
      "/images/mini12.jpg",
      "/images/mini13.jpg",
    ]
  },
  {
    marca: "Mini",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2013, 
    preco: "12,990",
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    portas: 5,
    cor: "Azul escuro",
    kms: 190000,
    imagens: [
      "/images/mini1.jpg",
      "/images/mini2.jpg",
      "/images/mini10.jpg",
      "/images/mini11.jpg",
      "/images/mini12.jpg",
      "/images/mini13.jpg",
    ]
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

const getRandomDelay = () => Math.floor(Math.random() * (8000 - 5000 + 1)) + 5000;

</script>

<template>
  <div class="bg-[#0b131a] w-full p-20 grid grid-cols-3 gap-10">
    <div v-for="carro in filteredCarros" :key="carro.modelo" class="pt-8 px-8 test rounded-2xl bg-[#0b131a]">
      <div class="w-full flex justify-center items-center rounded-t-xl bg-[#0b131a] text-[#ffbd17] test2">
          <p class="py-4 text-xl font-bold italic">
            {{ carro.preco }} €
          </p>
      </div>
      <Swiper
          class="rounded-b-xl object-fit overflow-hidden test3"
          :modules="[Autoplay, Navigation]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: getRandomDelay(), pauseOnMouseEnter: true }"
          :navigation="true"
          :speed="500"
          :effect="'fade'"
      >
      <SwiperSlide v-for="carIMG in carro.imagens" class="w-full relative">
          <img class="rounded-b-xl hover:scale-[1.05] transition duration-300 ease-in-out max-h-[300px] w-full" :src="carIMG" alt="Car Image">
      </SwiperSlide>
      </Swiper>
      <div class="flex flex-col justify-center items-center w-full pl-3 py-3">
        <h1 class="w-full text-white font-bold text-2xl">{{ carro.marca }}</h1>
        <h2 class="w-full text-white text-[20px]">{{ carro.modelo }}</h2>
        <button class="w-11/12 p-3 rounded-full bg-[#cc9711] mt-6 mb-4 text-white hover:bg-[#b98a11] transition duration-300 ease-in-out">
          <i class="fa-solid fa-magnifying-glass"></i> Saber mais 
        </button>
      </div>
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

.test2 {
  box-shadow: 
              0 0 10px #c5ad71;   /* Intense glowing effect */
}

.test3 {
  box-shadow: 0 0 10px #c5ad71;   /* Intense glowing effect */
}
</style>
