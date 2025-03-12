<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref, onMounted, computed } from 'vue';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const { t, locale } = useI18n();
const selectedRange = ref([1990, 2024]);
const selectedRange2 = ref([10000, 500000]);
const selectedRange3 = ref([3000, 50000]); 
const router = useRouter(); 
const openFilters = ref(false);
const marca = ref('')
const combustivel = ref('')
const modelo = ref('')
const transmissao = ref('')
const tipologia = ref('')
const lugares = ref('')

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
    title: t('gasoline'),
  },
  {
    title: t('diesel'),
  },
  {
    title: t('lpg'),
  },
  {
    title: t('eletric')
  }
]

const transmissoes = [
  {
    title: t('manual')
  },
  {
    title: t('automatic')
  }
];

const lugaresOpcoes = [
  {
    title: 2
  },
  {
    title: 3
  },
  {
    title: 4 
  },
  {
    title: 5
  },
  {
    title: 6
  }
];

const typologies = [
  {
    title: t('utility')
  },
  {
    title: t('cityBased')
  },
  {
    title: t('suv')
  },
  {
    title: t('van')
  },
  {
    title: t('monoVolume')
  }
];

const pesquisar = () => {
  // Use router.push to navigate to /stock with query parameters
  router.push({
    path: '/stock',
    query: {
      marca: marca.value,
      combustivel: combustivel.value,
      minAno: selectedRange.value[0],
      maxAno: selectedRange.value[1],
      minPreco: selectedRange3.value[0],
      maxPreco: selectedRange3.value[1],
      minKM: selectedRange2.value[0],
      maxKM: selectedRange2.value[1],
      modelo: modelo.value,
      transmissao: transmissao.value,
      tipologia: tipologia.value,
      lugares: lugares.value,
    }
  });
};

onMounted(() => {
  const slider = document.getElementById('year-slider') as HTMLElement;
  
  noUiSlider.create(slider, {
    start: selectedRange.value,
    connect: true,
    range: {
      min: 1990,
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
    bar.style.background = "#b53d3d"; 
    bar.style.border = "none"; 
    bar.style.outline = "none"; 
    bar.style.boxShadow = "none"; 
    bar.style.height = "6px";
  }

  // Style the handles
  const handles = slider.querySelectorAll(".noUi-handle");
  handles.forEach(handle => {
    handle.style.background = "#b53d3d";
    handle.style.border = "2px solid #b53d3d";
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
    tooltip.style.backgroundColor = "#b53d3d";
    tooltip.style.color = "white";               
    tooltip.style.borderRadius = "12px";         
    tooltip.style.padding = "3px 10px";          
    tooltip.style.fontSize = "14px";
    tooltip.style.fontWeight = "bold";
    tooltip.style.transform = "translateY(27px) translateX(-19px)"; 
    tooltip.style.textAlign = "center";          
    tooltip.style.zIndex = "10";                
    tooltip.style.border = "none";
  });
});

function initializeSliders() {
  const slider2 = document.getElementById('price-slider');
  const slider3 = document.getElementById('kilometer-slider');
  
  if (!slider2 || !slider3) {
    console.warn('One or more sliders are missing from the DOM.');
    return;
  }

  // Initialize sliders only if they are visible
  if (slider2.offsetParent !== null && slider3.offsetParent !== null) {
    noUiSlider.create(slider2, {
      start: selectedRange3.value,
      connect: true,
      range: {
        min: 3000,
        max: 50000
      },
      step: 1, 
      tooltips: true, 
      format: {
        to: (value: number) => Math.round(value)+'€',
        from: (value: string) => parseInt(value)
      }
    });

    noUiSlider.create(slider3, {
      start: selectedRange2.value,
      connect: true,
      range: {
        min: 10000,
        max: 500000
      },
      step: 1, 
      tooltips: true, 
      format: {
        to: (value: number) => Math.round(value)+'km',
        from: (value: string) => parseInt(value)
      }
    });
  }

  const connectBars2 = slider2.getElementsByClassName("noUi-connect");
  for (let i = 0; i < connectBars2.length; i++) {
    const bar = connectBars2[i] as HTMLElement;
    bar.style.background = "#b53d3d"; 
    bar.style.border = "none"; 
    bar.style.outline = "none"; 
    bar.style.boxShadow = "none"; 
    bar.style.height = "6px";
  }
  const connectBars3 = slider3.getElementsByClassName("noUi-connect");
  for (let i = 0; i < connectBars3.length; i++) {
    const bar = connectBars3[i] as HTMLElement;
    bar.style.background = "#b53d3d"; 
    bar.style.border = "none"; 
    bar.style.outline = "none"; 
    bar.style.boxShadow = "none";
    bar.style.height = "6px";
  }
  
  const handles2 = slider2.querySelectorAll(".noUi-handle");
  handles2.forEach(handle => {
    handle.style.background = "#b53d3d";
    handle.style.border = "2px solid #b53d3d";
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
  const handles3 = slider3.querySelectorAll(".noUi-handle");
  handles3.forEach(handle => {
    handle.style.background = "#b53d3d";
    handle.style.border = "2px solid #b53d3d";
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

  slider2.noUiSlider?.on('update', (values: any) => {
    selectedRange3.value = values.map((value: string) => parseInt(value));
    //console.log("Intervalo selecionado: " + selectedRange.value[0] + " - " + selectedRange.value[1]);
  });
  slider3.noUiSlider?.on('update', (values: any) => {
    selectedRange2.value = values.map((value: string) => parseInt(value));
    //console.log("Intervalo selecionado: " + selectedRange.value[0] + " - " + selectedRange.value[1]);
  });

  const tooltips2 = slider2.querySelectorAll('.noUi-tooltip');
  tooltips2.forEach(tooltip => {
    tooltip.style.backgroundColor = "#b53d3d";
    tooltip.style.color = "white";               
    tooltip.style.borderRadius = "12px";         
    tooltip.style.padding = "3px 8px";          
    tooltip.style.fontSize = "14px";
    tooltip.style.fontWeight = "bold";
    tooltip.style.transform = "translateY(27px) translateX(-19px)"; 
    tooltip.style.textAlign = "center";          
    tooltip.style.zIndex = "10";                
    tooltip.style.border = "none";
  });
  const tooltips3 = slider3.querySelectorAll('.noUi-tooltip');
  tooltips3.forEach(tooltip => {
    tooltip.style.backgroundColor = "#b53d3d";
    tooltip.style.color = "white";               
    tooltip.style.borderRadius = "12px";         
    tooltip.style.padding = "3px 8px";          
    tooltip.style.fontSize = "14px";
    tooltip.style.fontWeight = "bold";
    tooltip.style.transform = "translateY(27px) translateX(-19px)"; 
    tooltip.style.textAlign = "center";          
    tooltip.style.zIndex = "10";                
    tooltip.style.border = "none";
  });
}

const isHiding = ref(false);

function toggleOpenFilters() {
  if (openFilters.value) {
    isHiding.value = true;
    setTimeout(() => {
      openFilters.value = false;
      isHiding.value = false;
    }, 1000); 
  } else {
    openFilters.value = true;
    nextTick(() => {
      initializeSliders();
    });
  }
}
</script>

<template>
  <div class="w-full relative mt-[-120px] bg-[#121212]">
      <img class="w-full h-[550px]" src="https://dvqnsnzkbesefygzzxrq.supabase.co/storage/v1/object/public/carImages/homePage/bgHero.jpg" alt="Background Image Hero Section">
      <div class="absolute inset-0 top-[22%] flex flex-col items-center w-full">
        <div class="bg-[#201818] px-8 pt-10 pb-6 rounded-[100px] items-center justify-center w-full max-w-[900px] test">
          <div class="text-[#D32F2F] flex justify-between items-center px-10 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8c0 2.4-1 4.5-2.7 6c-1.4-1.3-3.3-2-5.3-2s-3.8.7-5.3 2C5 16.5 4 14.4 4 12a8 8 0 0 1 8-8m2 1.89c-.38.01-.74.26-.9.65l-1.29 3.23l-.1.23c-.71.13-1.3.6-1.57 1.26c-.41 1.03.09 2.19 1.12 2.6s2.19-.09 2.6-1.12c.26-.66.14-1.42-.29-1.98l.1-.26l1.29-3.21l.01-.03c.2-.51-.05-1.09-.56-1.3c-.13-.05-.26-.07-.41-.07M10 6a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M7 9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m10 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"/></svg>
            <h1 class="text-[#D32F2F] text-center text-2xl font-bold pb-2 mr-10">
              {{ t('filtersTitle') }}
            </h1>
            <div></div>
          </div>
          <div class="flex justify-center items-center px-3">
            <div class="w-[30%] rounded-xl relative pl-6">
              <label class="text-xs text-[#b53d3d] ml-2 font-semibold">{{ t('brand') }}</label>
              <select v-model="marca" class="bg-transparent hover:bg-transparent w-full px-3 py-2 bg-gray-800 text-white rounded-2xl border appearance-none focus:outline-none border-[#b53d3d]">
                <option class="bg-[#201818]" value="">{{ t('select') }}</option>
                <option class="bg-[#201818]" v-for="marca in marcas" :key="marca.title" :value="marca.title">{{ marca.title }}</option>
              </select>
              <svg class="absolute top-[50%] right-2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="white" d="M3.076 4.617A1 1 0 0 1 4 4h4a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1-.217-1.09"/></svg>
            </div>

            <div class="w-[44%] ml-[14px] pr-[14px] flex flex-col gap-3 mb-2">
              <label class="text-xs text-[#b53d3d] font-semibold mr-6">{{ t('year') }}</label>
              <div id="year-slider" class="slider relative px-4" :class="{'pr-8': selectedRange.length<50}"></div>
            </div>

            <!-- Dropdown Combustível -->
            <div class="w-[30%] relative pr-10">
              <label class="text-xs text-[#b53d3d] ml-2 font-semibold">{{ t('fuel') }}</label>
              <select v-model="combustivel" class="bg-transparent w-full px-3 py-2 bg-gray-800 text-white rounded-2xl border appearance-none focus:outline-none border-[#b53d3d]">
                <option class="bg-[#201818]" value="">{{ t('select') }}</option>
                <option class="bg-[#201818]" v-for="combustivel in combustiveis" :key="combustivel.title">{{ combustivel.title }}</option>
              </select>
              <svg class="absolute top-[50%] right-12 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="white" d="M3.076 4.617A1 1 0 0 1 4 4h4a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1-.217-1.09"/></svg>
              <button
                @click="toggleOpenFilters()"
                >
                <svg :class="{'rotate-[90deg]': openFilters && !isHiding}" class="absolute right-[-10px] transition duration-[1s] ease-in-out top-[31px]" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"/></svg>
              </button>
            </div>
          </div>
          
          <div 
            v-if="openFilters"
            :class="{
              'appearSmooth': openFilters && !isHiding,
              'disappearSmooth': isHiding
            }"
            class="w-full transition-all duration-[1.5s] ease-in-out"
          >
            <div class="w-full flex justify-center items-center">
              <div class="mt-6 bg-[#b53d3d] opacity-[0.3] h-[1px] w-full ml-10 mr-12 py-[1px]"></div>
            </div>
            <div class="flex justify-center items-center px-3 pt-2">
              <div class="w-[30%] rounded-xl relative pl-6">
                <label class="text-xs text-[#b53d3d] ml-2 font-semibold">{{ t('model') }}</label>
                <select v-model="modelo" class="bg-transparent hover:bg-transparent w-full px-3 py-2 bg-gray-800 text-white rounded-2xl border appearance-none focus:outline-none border-[#b53d3d]">
                  <option class="bg-[#201818]" value="">{{ t('select') }}</option>
                  <option class="bg-[#201818]" v-for="marca in marcas" :key="marca.title" :value="marca.title">{{ marca.title }}</option>
                </select>
                <svg class="absolute top-[50%] right-2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="white" d="M3.076 4.617A1 1 0 0 1 4 4h4a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1-.217-1.09"/></svg>
              </div>

              <div class="w-[40%] ml-[9px] pl-[3px] pr-[21px] flex flex-col gap-3 mb-2 mr-5">
                <label class="text-xs text-[#b53d3d] font-semibold mr-6">{{ t('budget') }}</label>
                <div id="price-slider" class="slider relative px-4"></div>
              </div>

              <!-- Dropdown Combustível -->
              <div class="w-[30%] relative pr-10">
                <label class="text-xs text-[#b53d3d] ml-2 font-semibold">{{ t('typology') }}</label>
                <select v-model="tipologia" class="bg-transparent w-full px-3 py-2 bg-gray-800 text-white rounded-2xl border appearance-none focus:outline-none border-[#b53d3d]">
                  <option class="bg-[#201818]" value="">{{ t('select') }}</option>
                  <option class="bg-[#201818]" v-for="opt in typologies" :key="opt.title">{{ opt.title }}</option>
                </select>
                <svg class="absolute top-[50%] right-12 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="white" d="M3.076 4.617A1 1 0 0 1 4 4h4a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1-.217-1.09"/></svg>
              </div>
            </div>
            <div class="flex justify-center items-center px-3 pt-2">
              <div class="w-[30%] rounded-xl pl-6 relative">
                <label class="text-xs text-[#b53d3d] ml-2 font-semibold">{{ t('transmission') }}</label>
                <select v-model="transmissao" class="bg-transparent hover:bg-transparent w-full px-3 py-2 bg-gray-800 text-white rounded-2xl border appearance-none focus:outline-none border-[#b53d3d]">
                  <option class="bg-[#201818]" value="">{{ t('select') }}</option>
                  <option class="bg-[#201818]" v-for="opt in transmissoes" :key="opt.title" :value="opt.title">{{ opt.title }}</option>
                </select>
                <svg class="absolute top-[50%] right-2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="white" d="M3.076 4.617A1 1 0 0 1 4 4h4a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1-.217-1.09"/></svg>
              </div>

              <div class="w-[40%] pl-[12px] pr-[34px] flex flex-col gap-3 mb-2 mr-7">
                <label class="text-xs text-[#b53d3d] font-semibold mr-6">{{ t('kilometers') }}</label>
                <div id="kilometer-slider" class="slider relative px-4"></div>
              </div>

              <!-- Dropdown Combustível -->
              <div class="w-[30%] relative pr-10">
                <label class="text-xs text-[#b53d3d] ml-2 font-semibold">{{ t('capacity') }}</label>
                <select v-model="lugares" class="bg-transparent w-full px-3 py-2 bg-gray-800 text-white rounded-2xl border appearance-none focus:outline-none border-[#b53d3d]">
                  <option class="bg-[#201818]" value="">{{ t('select') }}</option>
                  <option class="bg-[#201818]" v-for="opt in lugaresOpcoes" :key="opt.title">{{ opt.title + ' ' +  t('seats') }}</option>
                </select>
                <svg class="absolute top-[50%] right-12 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="white" d="M3.076 4.617A1 1 0 0 1 4 4h4a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1-.217-1.09"/></svg>
              </div>
            </div>
            <div class="w-full flex justify-center items-center">
              <div class="mt-6 bg-[#b53d3d] opacity-[0.3] h-[1px] w-full ml-10 mr-12 py-[1px]"></div>
            </div>
          </div>
          <div class="flex justify-center text-white font-bold items-center">
            <button @click="pesquisar" class="bg-[#b53d3d] py-3 w-[250px] mt-6 rounded-full hover:opacity-[0.9] hover:scale-[1.02] transform transition duration-300 ease-in-out">
              {{ t('search') }} <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
  </div>

</template>

<style scoped>
.test {
  box-shadow: 0 0 30px #511e1e;
  background: linear-gradient(to bottom, #281d1d, #281d1d, #431313);
}

.slider {
  width: 100%;
  height: 10px;
}
.noUi-tooltip {
  display: none;
}

@keyframes slide-down {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
}

.appearSmooth {
  animation: slide-down 1.4s ease-in-out;
  overflow: hidden;
}

@keyframes slide-up {
  from {
    opacity: 1;
    max-height: 200px;
  }
  to {
    opacity: 0;
    max-height: 0;
  }
}

.disappearSmooth {
  animation: slide-up 1s ease-in-out;
  overflow: hidden;
}

#price-slider .noUi-tooltip,
#kilometer-slider .noUi-tooltip {
  display: none;
}

.shadow1 {
  position: absolute;
  width: 1000px; 
  height: 850px;
  bottom: -500px;
  left: -300px;
  background : radial-gradient(closest-side, rgba(157,170,255,0.21), #151316);
  opacity: 0.6;
  z-index: 0;
}

.shadow2 {
  position: absolute;
  width: 1000px; 
  height: 850px;
  top: -500px;
  left: -300px;
  background : radial-gradient(closest-side, rgba(157,170,255,0.21), #151316);
  opacity: 0.35;
  z-index: 0;
}

.noUi-target {
  background-color: #29333c;
  border: none;
  outline: none;
  box-shadow: none;
  height: 6px;
}
</style>
