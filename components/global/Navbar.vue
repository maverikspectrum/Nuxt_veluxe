<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const route = useRoute();
const navbarClass = ref('navbar');

const handleScroll = () => {
  if (!(route.path.startsWith('/stock'))) {
    if (window.scrollY > 90) {
        navbarClass.value = 'navbar navbar-scrolled animationEnter';
    } else {
        navbarClass.value = 'navbar';
    }
  }
}

watch(
  () => route.path,
  (newPath) => {
    if (newPath.startsWith('/stock')) {
      navbarClass.value = 'navbar navbar-scrolled';
    } else {
      navbarClass.value = 'navbar';
    }
  },
  { immediate: true } 
);

onMounted(() => {
  if (route.path.startsWith('/stock')) {
    navbarClass.value = 'navbar navbar-scrolled';
  } else {
    window.addEventListener('scroll', handleScroll);
  }
});

onBeforeUnmount(() => {
  if (!(route.path.startsWith('/stock'))) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
    <div :class="navbarClass" class="navbar p-6 flex justify-center items-center  relative">
        <div class="w-[1300px] flex justify-between items-center">
            <div>
              <NuxtLink to="/">
                LOGO
              </NuxtLink>
            </div>
            <div class="flex justify-center items-center gap-10 font-medium pr-20 text-sm">
                <NuxtLink
                to="/stock" 
                class="flex flex-col justify-center gap-1 items-center hover:text-[#ffbd17] transition duration-300 ease-in-out border-t-2 border-transparent hover:border-[#ffbd17] pt-2">
                    <i class="fa-solid fa-car-side text-2xl"></i>
                    Stock
                </NuxtLink>
                <button class="flex flex-col justify-center gap-1 items-center hover:text-[#ffbd17] transition duration-300 ease-in-out border-t-2 border-transparent hover:border-[#ffbd17] pt-2">
                    <i class="fa-solid fa-phone text-2xl"></i>
                    Contactos
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  top: 0;
  left: 0;
  transition: transform 0.4s ease-in-out;
  z-index: 1000;
}

.navbar-scrolled {
  position: sticky;
  background-color: #0b131a;
  box-shadow: 0px 10px 30px rgba(255, 255, 255, 0.2);
  color: #ffbd17;
}

.animationEnter {
  animation: slideDown 0.4s ease-in-out forwards;
}

.navbar:not(.navbar-scrolled) {
  background-color: rgba(0, 0, 0, 0);
  color: #0b131a;
}

@keyframes slideDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0); 
  }
}
</style>