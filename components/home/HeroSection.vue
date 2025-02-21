<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref, onMounted, computed } from 'vue';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const selectedRange = ref([2000, 2024]); 
const router = useRouter(); 

const marca = ref('')
const combustivel = ref('')

const marcas = [
  {
    title: "Audi"
  },
  {
    title: "BMW"
  },
  {
    title: "Mercedes"
  },
  {
    title: "Fiat"
  },
  {
    title: "Toyota"
  },
  {
    title: "Peugeot"
  }
]

const combustiveis = [
  {
    title: "Gasolina",
  },
  {
    title: "Gasóleo",
  },
  {
    title: "GPL",
  },
  {
    title: "Elétrico"
  }
]

const pesquisar = () => {
  // Use router.push to navigate to /stock with query parameters
  router.push({
    path: '/stock',
    query: {
      marca: marca.value,
      combustivel: combustivel.value,
      minAno: selectedRange.value[0],
      maxAno: selectedRange.value[1],
    }
  });
};
onMounted(() => {
  const slider = document.getElementById('year-slider') as HTMLElement;
  
  noUiSlider.create(slider, {
    start: selectedRange.value,
    connect: true,
    range: {
      min: 2000,
      max: 2024
    },
    step: 1, 
    tooltips: true, 
    format: {
      to: (value: number) => Math.round(value),
      from: (value: string) => parseInt(value)
    }
  });

  // After initializing the slider, style the connect bars
  const connectBars = slider.getElementsByClassName("noUi-connect");
  for (let i = 0; i < connectBars.length; i++) {
    const bar = connectBars[i] as HTMLElement;
    bar.style.background = "#ffbd17"; 
    bar.style.border = "none"; 
    bar.style.outline = "none"; 
    bar.style.boxShadow = "none"; 
  }

  // Style the handles
  const handles = slider.querySelectorAll(".noUi-handle");
  handles.forEach(handle => {
    handle.style.background = "#ffbd17";
    handle.style.border = "2px solid #ffbd17";
    handle.style.borderRadius = "10px";
    handle.style.width = "36px";
    handle.style.height = "24px";
    handle.style.cursor = "grab"; 
    handle.style.boxShadow = "none"; 
    handle.style.outline = "none";

    // Add grabbing effect when mouse is down
    handle.addEventListener("mousedown", () => {
      handle.style.cursor = "grabbing";
    });
    handle.addEventListener("mouseup", () => {
      handle.style.cursor = "grab";
    });
  });

  // Apply the custom tooltip styling after the slider is initialized
  slider.noUiSlider?.on('update', (values: any) => {
    selectedRange.value = values.map((value: string) => parseInt(value));
    //console.log("Intervalo selecionado: " + selectedRange.value[0] + " - " + selectedRange.value[1]);
  });

  // Apply custom styles to the tooltips
  const tooltips = slider.querySelectorAll('.noUi-tooltip');
  tooltips.forEach(tooltip => {
    tooltip.style.backgroundColor = "#ffbd17";
    tooltip.style.color = "white";               
    tooltip.style.borderRadius = "12px";         
    tooltip.style.padding = "3px 10px";          
    tooltip.style.fontSize = "14px";
    tooltip.style.fontWeight = "bold";
    tooltip.style.transform = "translateY(27px) translateX(-20px)"; 
    tooltip.style.textAlign = "center";          
    tooltip.style.zIndex = "10";                
    tooltip.style.border = "none";
  });
});

</script>

<template>
  <div class="w-full relative mt-[-120px] bg-[#0b131a]">
      <img class="w-full h-[550px]" src="/assets/images/bgHero.png" alt="Background Image Hero Section">
      <div class="absolute inset-0 top-[40%] flex flex-col items-center w-full">
        <div class="bg-[#0b131a] px-8 pt-10 pb-6 rounded-full items-center w-full max-w-[800px] test">
          <!-- Dropdown Marca -->
          <div class="flex justify-center gap-3 items-center px-3">
            <div class="w-full rounded-xl">
              <label class="text-xs text-[#ffbd17] ml-2 font-medium">MARCA</label>
              <select v-model="marca" class="bg-[transparent] w-full px-3 py-2 bg-gray-800 text-white rounded-2xl border border-gray-700 focus:outline-none focus:border-yellow-500">
                <option class="bg-[#0b131a]" value="">Selecionar</option>
                <option class="bg-[#0b131a]" v-for="marca in marcas" :key="marca.title" :value="marca.title">{{ marca.title }}</option>
              </select>
            </div>

            <div class="w-full px-6 flex flex-col gap-3 mb-2">
              <label class="text-xs text-[#ffbd17] font-medium">ANO</label>
              <div id="year-slider" class="slider relative"></div>
            </div>

            <!-- Dropdown Combustível -->
            <div class="w-full">
              <label class="text-xs text-[#ffbd17] ml-2 font-medium">COMBUSTÍVEL</label>
              <select v-model="combustivel" class="bg-[transparent] w-full px-3 py-2 bg-gray-800 text-white rounded-2xl border border-gray-700 focus:outline-none focus:border-yellow-500">
                <option class="bg-[#0b131a]" value="">Selecionar</option>
                <option class="bg-[#0b131a]" v-for="combustivel in combustiveis" :key="combustivel.title">{{ combustivel.title }}</option>
              </select>
            </div>
          </div>
          <div class="flex justify-center text-white font-bold items-center">
            <button @click="pesquisar" class="bg-[#ffbd17] py-3 w-[250px] mt-6 rounded-full">
              PROCURAR <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
  </div>

</template>

<style scoped>
.test {
  box-shadow: 0 -2px 10px #f5c039, /* Glow above */
              0 2px 10px #f5c039,  /* Glow below */
              0 0 10px #f5c039,   /* Larger glow around */
              0 0 20px #ffbd17;   /* Intense glowing effect */
}

.slider {
  width: 100%;
  height: 10px;
}
.noUi-tooltip {
  display: none;
}

</style>
