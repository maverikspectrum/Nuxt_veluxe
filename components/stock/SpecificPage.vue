<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

const {t, locale} = useI18n();

const props = defineProps({
  id: Number,
});

const carros = [
  {
    id: 1,
    marca: "Audi",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2013, 
    preco: "12, 990",
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    lugares: 4,
    portas: 5,
    cor: "Azul escuro",
    tipologia: "Utilitário",
    consumo: 6.3,
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
    id: 2,
    marca: "BMW",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2011, 
    preco: "12, 990",
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    lugares: 4,
    portas: 5,
    cor: "Azul escuro",
    tipologia: "Utilitário",
    consumo: 6.3,
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
    id: 3,
    marca: "Fiat",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2013, 
    preco: "12, 990",
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    lugares: 4,
    portas: 5,
    cor: "Azul escuro",
    tipologia: "Utilitário",
    consumo: 6.3,
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
    id: 4,
    marca: "Toyota",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Elétrico",
    anoReg: 2013, 
    preco: "8, 640",
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    lugares: 4,
    portas: 5,
    cor: "Azul escuro",
    tipologia: "Utilitário",
    consumo: 6.3,
    kms: 50000,
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
    id: 5,
    marca: "Peugeot",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2013, 
    preco: "12, 990",
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    lugares: 4,
    portas: 5,
    cor: "Azul escuro",
    tipologia: "Utilitário",
    consumo: 6.3,
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
    id: 6,
    marca: "Mini",
    modelo: "A3 Sportback 1.6 TDI Sport",
    combustivel: "Gasóleo",
    anoReg: 2013, 
    preco: "12, 990",
    potencia: 110,
    cilindrada: 1598,
    transmissao: "Manual de 6 velocidades",
    estado: "Com pouco uso",
    lugares: 4,
    portas: 5,
    cor: "Azul escuro",
    tipologia: "Utilitário",
    consumo: 6.3,
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

const getCarro = () => carros.find(carro => carro.id === props.id);

const isFullscreen = ref(false);

const openFullscreen = () => {
  isFullscreen.value = true;
};

const closeFullscreen = () => {
  isFullscreen.value = false;
};

</script>
<template>
  <div v-if="!getCarro()" class="bg-[#0b131a] flex justify-center items-center h-screen text-5xl font-black text-white">
    No car found
  </div>
  <div v-else class="bg-[#0b131a] min-h-screen p-10 pt-14">
    <div class="flex justify-center test2 rounded-xl">
      <div class="bg-[#0b131a] w-1/2 rounded-l-xl p-6 text-white">
        <h1 class="text-white text-3xl text-left pb-3 font-black">
          {{ getCarro()?.marca + " - " +  getCarro()?.modelo }}
        </h1>
        <div class="flex flex-wrap justify-between items-center px-4">
          <div class="flex justify-start items-center font-light text-[15px] w-1/3">
            <svg class="mr-3 text-[#1abe0f]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
              <g fill="currentColor">
                <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"/>
                <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907c.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8z"/>
              </g>
            </svg>
            <div class="flex flex-col justify-center items-start mt-2">
              <p class="leading-[13px] text-gray-500">
                {{ t('fuel') }}
              </p>
              <p class="font-medium">
                {{ getCarro()?.combustivel }}
              </p>
              
            </div>
          </div>
          <div class="flex justify-start items-center font-light text-[15px] w-1/3">
            <svg class="mr-3 mt-1 text-[#1abe0f]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 2048 2048">
              <path fill="currentColor" d="M1792 993q60 41 107 93t81 114t50 131t18 141q0 119-45 224t-124 183t-183 123t-224 46q-91 0-176-27t-156-78t-126-122t-85-157H128V128h256V0h128v128h896V0h128v128h256zM256 256v256h1408V256h-128v128h-128V256H512v128H384V256zm643 1280q-3-31-3-64q0-86 24-167t73-153h-97v-128h128v86q41-51 91-90t108-67t121-42t128-15q100 0 192 33V640H256v896zm573 384q93 0 174-35t142-96t96-142t36-175q0-93-35-174t-96-142t-142-96t-175-36q-93 0-174 35t-142 96t-96 142t-36 175q0 93 35 174t96 142t142 96t175 36m64-512h192v128h-320v-384h128zM384 1024h128v128H384zm256 0h128v128H640zm0-256h128v128H640zm-256 512h128v128H384zm256 0h128v128H640zm384-384H896V768h128zm256 0h-128V768h128zm256 0h-128V768h128z"/>
            </svg>
            <div class="flex flex-col justify-center items-start mt-2">
              <p class="leading-[13px] text-gray-500">
                {{ t('year') }}
              </p>
              <p class="font-medium">
                {{ getCarro()?.anoReg }}
              </p>
              
            </div>
          </div>
          <div class="flex justify-start items-center font-light text-[15px] w-1/3">
            <svg class="mr-3 mt-1 text-[#1abe0f]" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 20 20">
              <path fill="currentColor" d="M10 2a2 2 0 0 0-.5 3.937V9.5a.5.5 0 0 0 1 0V5.937A2 2 0 0 0 10 2M3 5a1 1 0 0 1 2 0v4a.5.5 0 0 0 .5.5H8a.5.5 0 0 0 0-1H6V5a2 2 0 1 0-4 0v11a2 2 0 1 0 4 0v-3.5h2V16a2 2 0 1 0 4 0v-3h4.5a1.5 1.5 0 0 0 1.5-1.5V5a2 2 0 1 0-4 0v3.5h-2a.5.5 0 0 0 0 1h2.5A.5.5 0 0 0 15 9V5a1 1 0 1 1 2 0v6.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 0-.5.5V16a1 1 0 1 1-2 0v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4a1 1 0 1 1-2 0z"/>
            </svg>
            <div class="flex flex-col justify-center items-start mt-2">
              <p class="leading-[22px] text-gray-500">
                {{ t('transmission') }}
              </p>
              <p class="font-medium leading-[14px]">
                {{ getCarro()?.transmissao }}
              </p>
              
            </div>
          </div>
        </div>

        <div class="flex flex-wrap justify-between items-center mt-8 px-4">
          <div class="flex justify-start items-center font-light text-[15px] w-1/3">
            <svg class="mr-3 text-[#1abe0f]" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 21.998V11.996m20 10.002V11.996M12 21.998v-1m0-3.001v-1M5.725 5.655l.83.758m0 0c.16-.268.435-.738.527-1.032c.799-2.57.87-3.278 2.103-3.38h5.627c1.234.102 1.304.81 2.103 3.38c.091.294.318.764.477 1.032m-10.837 0C5.951 7.433 5.15 8.1 5.03 8.98c-.02.145 0 1.752 0 2.918c0 .876.844.85 1.666.918c.523.043 1.046.138 1.57.143c2.906.03 4.828.033 7.702.002c.556-.006 1.116-.11 1.67-.158c.625-.053 1.28-.123 1.33-.905c.077-1.165.02-2.773 0-2.918c-.12-.88-.97-1.547-1.575-2.567m-10.837 0h10.837m0 0l.972-.759M5.204 8.43l1.208.92m4.146 1.162h2.939m4.123-1.185l1.335-.425M7.082 12.855L7.004 14.5m9.978-1.623V14.5" color="currentColor"/>
            </svg>
            <div class="flex flex-col justify-center items-start mt-2">
              <p class="leading-[13px] text-gray-500">
                {{ t('kilometers') }}
              </p>
              <p class="font-medium">
                {{ getCarro()?.kms + " km" }}
              </p>
              
            </div>
          </div>
          <div class="flex justify-start items-center font-light text-[15px] w-1/3">
            <svg class="mr-3 mt-1 text-[#1abe0f]" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17 4.5C17 5.9 15.9 7 14.5 7S12 5.9 12 4.5S13.1 2 14.5 2S17 3.1 17 4.5M15 8h-.8c-2.1 0-4.1-1.2-5.1-3.1c-.1-.1-.2-.2-.2-.3l-1.8.8c.5 1.4 2.1 3.2 4.4 4.1l-1.8 5l-3.9-1.1L3 18.9l2 .5l1.8-3.6l4.5 1.2c1 .2 2-.3 2.4-1.2L16 9.4c.2-.7-.3-1.4-1-1.4m3.9-1l-3.4 9.4c-.6 1.6-2.1 2.6-3.7 2.6c-.3 0-.7 0-1-.1l-2.9-.8l-.9 1.8l2 .5l1.4.4c.5.1 1 .2 1.5.2c2.5 0 4.7-1.5 5.6-3.9L21 7z"/>
            </svg>
            <div class="flex flex-col justify-center items-start mt-2">
              <p class="leading-[13px] text-gray-500">
                {{ t('capacity') }}
              </p>
              <p class="font-medium">
                {{ getCarro()?.lugares }}
              </p>
              
            </div>
          </div>
          <div class="flex justify-start items-center font-light text-[15px] w-1/3">
            <svg class="mr-3 mt-1 text-[#1abe0f]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 14h-3v2h3zm3 7H3V11l8-8h10a1 1 0 0 1 1 1zM11.83 5l-6 6H20V5z"/>
            </svg>
            <div class="flex flex-col justify-center items-start mt-2">
              <p class="leading-[13px] text-gray-500">
                {{ t('doors') }}
              </p>
              <p class="font-medium">
                {{ getCarro()?.portas }}
              </p>
              
            </div>
          </div>
        </div>

        <div class="flex flex-wrap justify-between items-center mt-8 px-4">
          <div class="flex justify-start items-center font-light text-[15px] w-1/3">
            <svg class="mr-3 mt-1 text-[#1abe0f]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor">
              <path d="M5 6v-.5c0-.943 0-1.414.293-1.707S6.057 3.5 7 3.5s1.414 0 1.707.293S9 4.557 9 5.5V6m6-1h3"/>
              <path d="M16 2h-1.333C12.793 2 12 2.934 12 4.667C12 5.533 11.603 6 10.667 6H7c-1.886 0-2.828 0-3.414.586S3 8.114 3 10v5c0 3.3 0 4.95 1.025 5.975S6.7 22 10 22h4c3.3 0 4.95 0 5.975-1.025S21 18.3 21 15V7c0-2.357 0-3.536-.732-4.268C19.535 2 18.357 2 16 2"/>
              <path d="M9 14.587c0-1.464 1.264-2.911 2.15-3.747a1.23 1.23 0 0 1 1.7 0c.886.836 2.15 2.283 2.15 3.747a2.933 2.933 0 0 1-3 2.913c-1.864 0-3-1.477-3-2.913"/></g>
            </svg>
            <div class="flex flex-col justify-center items-start mt-2">
              <p class="leading-[13px] text-gray-500">
                {{ t('consumption') }}
              </p>
              <p v-if="getCarro()?.combustivel=='Elétrico'" class="font-medium">
                {{ getCarro()?.consumo + " kWh/100 km" }}
              </p>
              <p v-else class="font-medium">
                {{ getCarro()?.consumo + " L/100 km" }}
              </p>
              
              
            </div>
          </div>
          <div class="flex justify-start items-center font-light text-[15px] w-1/3">
            <svg class="mr-3 mt-1 text-[#1abe0f]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
              <g fill="currentColor">
                <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z"/>
                <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"/>
              </g>
            </svg>
            <div class="flex flex-col justify-center items-start mt-2">
              <p class="leading-[13px] text-gray-500">
                {{ t('potency') }}
              </p>
              <p class="font-medium">
                {{ getCarro()?.potencia + " Cv" }}
              </p>
              
            </div>
          </div>
          <div class="flex justify-start items-center font-light text-[15px] w-1/3">
            <svg class="mr-3 mt-1 text-[#1abe0f]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path stroke-dasharray="48" stroke-dashoffset="48" d="M11 9h6v10h-6.5l-2 -2h-2.5v-6.5l1.5 -1.5Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"/></path>
                <path fill="currentColor" fill-opacity="0" d="M17 13h0v-3h0v8h0v-3h0z" opacity="0"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M17 13h0v-3h0v8h0v-3h0z;M17 13h4v-3h1v8h-1v-3h-4z"/><set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"/><set fill="freeze" attributeName="opacity" begin="0.6s" to="1"/></path>
                <path d="M6 14h0M6 11v6" opacity="0"><animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M6 14h0M6 11v6;M6 14h-4M2 11v6"/><set fill="freeze" attributeName="opacity" begin="0.8s" to="1"/></path>
                <path d="M11 9v0M8 9h6" opacity="0"><animate fill="freeze" attributeName="d" begin="1s" dur="0.2s" values="M11 9v0M8 9h6;M11 9v-4M8 5h6"/><set fill="freeze" attributeName="opacity" begin="1s" to="1"/></path>
              </g>
            </svg>
            <div class="flex flex-col justify-center items-start mt-2">
              <p class="leading-[13px] text-gray-500">
                {{ t('cilindratingz') }}
              </p>
              <p class="font-medium">
                {{ getCarro()?.cilindrada + " Cc" }}
              </p>
              
            </div>
          </div>
        </div>

        <div class="flex flex-wrap justify-between items-center mt-8 px-4">
          <div class="flex justify-start items-center font-light text-[15px] w-1/3">
            <svg class="mr-3 mt-1 text-[#1abe0f]" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8"/>
            </svg>
            <div class="flex flex-col justify-center items-start mt-2">
              <p class="leading-[13px] text-gray-500">
                {{ t('color') }}
              </p>
              <p class="font-medium">
                {{ getCarro()?.cor }}
              </p>
              
            </div>
          </div>
          <div class="flex justify-start items-center font-light text-[15px] w-1/3">
            <svg class="mr-3 mt-1 text-[#1abe0f]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-width="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10ZM7 12l4 3l5-7"/>
            </svg>
            <div class="flex flex-col justify-center items-start mt-2">
              <p class="leading-[13px] text-gray-500">
                {{ t('state') }}
              </p>
              <p class="font-medium">
                {{ getCarro()?.estado }}
              </p>
              
            </div>
          </div>
          <div class="flex justify-start items-center font-light text-[15px] w-1/3">
            <svg class="mr-3 mt-1 text-[#1abe0f]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 100 100">
              <path fill="currentColor" d="M49.369 11.228c-11.647-.171-27.826.079-31.157 9.027l-8.184 19.204a2.84 2.84 0 0 0-1.37-.865l-3.295-.927a2.86 2.86 0 0 0-3.535 1.983L.109 45.754a2.86 2.86 0 0 0 1.983 3.534l3.296.928c.11.03.22.04.33.058c-.63 1.57-1.022 3.296-1.022 4.323v22.32c0 1.144.48 1.674 1.242 1.922v5.946a4.01 4.01 0 0 0 4.017 4.017h10.777a4.01 4.01 0 0 0 4.017-4.017v-5.728h50.503v5.728a4.01 4.01 0 0 0 4.018 4.017h10.775a4.01 4.01 0 0 0 4.019-4.017V78.84c.763-.248 1.24-.778 1.24-1.922v-22.32c0-1.027-.393-2.753-1.022-4.323c.11-.017.22-.027.33-.058l3.297-.928a2.86 2.86 0 0 0 1.982-3.534l-1.717-6.104a2.86 2.86 0 0 0-3.536-1.983l-3.295.927a2.86 2.86 0 0 0-1.371.865l-8.184-19.204c-3.57-9.084-20.773-8.856-32.42-9.027m33.357 29.444c.194.576-.386.96-.993.995c0 0-1.984.168-4.72.389c-2.082-4.864-6.92-8.292-12.525-8.292c-6.151 0-11.373 4.13-13.048 9.754c-.464.006-1.003.026-1.434.026c-10.597 0-31.739-1.877-31.739-1.877c-.606-.036-1.187-.42-.993-.995c8.142-24.821 8.385-22.955 32.276-22.694c23.89.26 24.029-1.513 33.176 22.694m-18.238-2.217a8.89 8.89 0 0 1 7.447 3.991c-4.785.355-10.292.718-15.424.929a8.88 8.88 0 0 1 7.977-4.92M9.407 46.51c.072.107.142.214.222.317h-.31zm5.294 6.234c2.096-.034 13.348 3.753 13.348 3.753c1.405.396 2.642 3.052 2.635 4.512c-.021 4.917-12.709 3.21-17.86 3.23a2.63 2.63 0 0 1-2.635-2.634V55.38c0-1.46 2.416-2.6 4.512-2.636m70.598 0c2.096.035 4.512 1.176 4.512 2.636v6.225a2.63 2.63 0 0 1-2.635 2.635c-5.15-.02-17.839 1.686-17.86-3.231c-.007-1.46 1.23-4.116 2.635-4.512c0 0 11.252-3.787 13.348-3.753" color="currentColor"/>
            </svg>
            <div class="flex flex-col justify-center items-start mt-2">
              <p class="leading-[13px] text-gray-500">
                {{ t('typology') }}
              </p>
              <p class="font-medium">
                {{ getCarro()?.tipologia }}
              </p>
              
            </div>
          </div>
        </div>
        
        <div class="px-4 w-full flex">
          <div class="w-1/2 flex justify-center items-center flex-col mt-12">
            <div class="flex justify-center items-center">
              <svg class="mr-3 mb-1 text-[#1abe0f]" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 20 20">
                <path fill="currentColor" d="M19.388.405a.605.605 0 0 0-1.141.399c.929 2.67-.915 4.664-2.321 5.732l-.568-.814c-.191-.273-.618-.5-.95-.504l-3.188.014a2.16 2.16 0 0 0-1.097.338L.729 12.157a1.01 1.01 0 0 0-.247 1.404l4.269 6.108c.32.455.831.4 1.287.082l9.394-6.588c.27-.191.582-.603.692-.918l.998-3.145c.11-.314.043-.793-.148-1.066l-.346-.496c1.888-1.447 3.848-4.004 2.76-7.133m-4.371 9.358a1.61 1.61 0 0 1-2.24-.396a1.614 1.614 0 0 1 .395-2.246a1.61 1.61 0 0 1 1.868.017c-.272.164-.459.26-.494.275a.606.606 0 0 0 .259 1.153q.13 0 .257-.059q.292-.137.619-.33a1.62 1.62 0 0 1-.664 1.586"/>
              </svg>
              <h1 class="text-gray-500 text-lg">
                {{ t('price') }}
              </h1>
            </div>
            <h1 class="text-white text-3xl font-bold">
              {{ getCarro()?.preco + " €" }}
            </h1>
          </div>

          <div class="w-1/2 flex justify-center items-center flex-col mt-14">
            <button class="border-2 btc border-[#22900c] hover:bg-[#22900c] btc text-[#1abe0f] p-4 px-8 rounded-xl hover:scale-[1.02] transition duration-300 ease-in-out">
              Interested? Contact us
              <i class="fa-solid fa-phone text-[19px] text-[#22900c] py-[5px] icn transition duration-300 ease-in-out"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <Swiper
            class="rounded-r-xl object-fit overflow-hidden"
            :modules="[Navigation]"
            :slides-per-view="1"
            space-between="4"
            :loop="true"
            :navigation="{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }"
            :speed="500"
            :effect="'fade'"
        >
          <SwiperSlide v-for="(carIMG, index) in getCarro()?.imagens" :key="index" class="w-full relative p-3 rounded-xl">
              <img class="max-h-[500px] rounded-xl w-full h-auto object-cover" :src="carIMG" alt="Car Image">
              <!-- Fullscreen Button -->
              <button @click="openFullscreen()" class="fullscreen-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"/>
                </svg>
              </button>
          </SwiperSlide>
          <div class="swiper-button-prev-custom transition duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"><path fill="currentColor" d="M9.428 11.84c.663.458 1.571-.013 1.571-.816V4.975c0-.803-.908-1.274-1.571-.816L5.644 6.776a1.486 1.486 0 0 0 0 2.447z"/></svg>
          </div>
          <div class="swiper-button-next-custom transition duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"><path fill="currentColor" d="M7.571 11.84C6.908 12.298 6 11.827 6 11.024V4.975c0-.803.908-1.274 1.571-.816l3.784 2.617a1.486 1.486 0 0 1 0 2.447z"/></svg>
          </div>
        </Swiper>
      </div>
    </div>

    <div v-if="isFullscreen" class="fullscreen-overlay">
      <div class="fullscreen-content">
        <Swiper
          class="w-full h-full"
          :modules="[Navigation]"
          :slides-per-view="1"
          space-between="4"
          :loop="true"
          :navigation="{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }"
          :speed="500"
          :effect="'fade'"
        >
          <SwiperSlide v-for="carIMG in getCarro()?.imagens" class="w-full relative flex justify-center items-center">
            <img class="max-h-[90vh] w-full object-contain" :src="carIMG" alt="Car Image">
          </SwiperSlide>
          <div class="swiper-button-prev-custom transition duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M9.428 11.84c.663.458 1.571-.013 1.571-.816V4.975c0-.803-.908-1.274-1.571-.816L5.644 6.776a1.486 1.486 0 0 0 0 2.447z"/></svg>
          </div>
          <div class="swiper-button-next-custom transition duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M7.571 11.84C6.908 12.298 6 11.827 6 11.024V4.975c0-.803.908-1.274 1.571-.816l3.784 2.617a1.486 1.486 0 0 1 0 2.447z"/></svg>
          </div>
        </Swiper>

        <!-- Close Button -->
        <button @click="closeFullscreen" class="close-fullscreen">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/>
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.swiper-button-prev-custom,
.swiper-button-next-custom {
  position: absolute;
  color: white;
  border-radius: 100%;
  background-color: #22900c;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  padding: 1px;
  top: 50%;
  z-index: 1;
  opacity: 0.6;
}

.swiper-button-prev-custom {
  left: 15px;
}

.swiper-button-next-custom {
  right: 15px;
}

.swiper-button-prev-custom:hover,
.swiper-button-next-custom:hover {
  opacity: 1;
  background-color: #1abe0f;
  color: white;
}

.test2 {
  box-shadow: 0 -1px 5px #7fc571, /* Glow above */
              0 1px 5px #7fc571,  /* Glow below */
              0 0 10px #1abe0f,   /* Larger glow around */
              0 0 5px #1abe0f;   /* Intense glowing effect */
}

.fullscreen-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  border: none;
  border-bottom-left-radius: 50%;
  padding: 8px;
  cursor: pointer;
  transition: scale 0.3s ease-in-out;
}

.fullscreen-btn:hover {
  scale: 1.10;
}

.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.fullscreen-content {
  position: relative;
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-fullscreen {
  position: absolute;
  top: 15px;
  right: 15px;
  color: white;
  cursor: pointer;
  transition: scale 0.3s ease-in-out;
  z-index: 5;
}

.close-fullscreen:hover {
  scale: 1.10;
}

.btc:hover,
.btc:hover .icn {
  color: white;
}

</style>