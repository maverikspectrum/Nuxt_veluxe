<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const route = useRoute();
const navbarClass = ref('navbar');
const localCode = useCookie("i18n_redirected");
const { t, locale } = useI18n(); 

const handleScroll = () => {
  if (!(route.path.includes('/stock') || route.path.includes("/stockSingle"))) {
    if (window.scrollY > 90) {
        navbarClass.value = 'navbar navbar-scrolled animationEnter';
    } else {
        navbarClass.value = 'navbar';
    }
  }
}

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}

watch(
  () => route.path,
  (newPath) => {
    if (newPath.includes('/stock') || route.path.includes("/stockSingle")) {
      navbarClass.value = 'navbar navbar-scrolled';
    } else {
      navbarClass.value = 'navbar';
    }
  },
  { immediate: true } 
);

onMounted(() => {
  if (route.path.includes('/stock') || route.path.includes("/stockSingle")) {
    navbarClass.value = 'navbar navbar-scrolled';
  } else {
    window.addEventListener('scroll', handleScroll);
  }
});

onBeforeUnmount(() => {
  if (!(route.path.includes('/stock') || route.path.includes("/stockSingle"))) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
    <div :class="navbarClass" class="navbar py-4 px-5 xs:px-10 lg:px-20 flex justify-center items-center relative border-t border-[#121212]">
        <div class="w-full flex justify-between items-center">
            <div>
              <NuxtLink :to="localCode=='pt' ? '/' : '/'+localCode">
                <img class="w-40" src="public/images/VeluxeAutoLogo.png" alt="Logo Image">
              </NuxtLink>
            </div>
            <div class="flex justify-center items-center gap-3 sm:gap-10 font-medium text-[13px]">
                <NuxtLink
                :to="localCode=='pt' ? '/stock' : '/'+localCode+'/stock'" 
                active-class="border-[#b53d3d] text-[#b53d3d] border-t-2"
                :class="{'border-transparent': !(route.path.endsWith('/stock'))}"
                class="flex flex-col justify-center gap-1 items-center hover:text-[#b53d3d] border-t-2 transition duration-300 ease-in-out hover:border-[#b53d3d] pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M20.515 13.754a.886.886 0 0 1-.88.88h-3.548a.885.885 0 0 1-.88-.88a.886.886 0 0 1 .88-.88h3.548a.89.89 0 0 1 .88.88m-12.376 0a.885.885 0 0 1-.88.88H3.711a.885.885 0 0 1-.88-.88a.886.886 0 0 1 .88-.88h3.548a.886.886 0 0 1 .879.88zm-1.84-8.167h11.404l1.399 3.562l-.069-.004H4.899zm17.68 2.706a1.33 1.33 0 0 0-1.527-1.094l.008-.001l-2.183.356a1 1 0 0 0-.094.026l.005-.002L18.782 4H5.216L3.81 7.578a1 1 0 0 0-.087-.023l-2.185-.357A1.33 1.33 0 0 0 .019 8.286l-.001.008a1.33 1.33 0 0 0 1.088 1.519l.008.001l1.271.209a4.23 4.23 0 0 0-1.3 2.955v6.091h4.4v-2.3h12.429v2.3h4.4v-3.248c.018-.076.028-.163.028-.253v-2.586a4.24 4.24 0 0 0-1.213-2.876l.001.001l1.766-.29a1.33 1.33 0 0 0 1.092-1.527l.001.008z"/></svg>
                    {{ t('stock') }}
                </NuxtLink>
                <button @click="scrollToBottom()" class="flex flex-col justify-center gap-1 items-center hover:text-[#b53d3d] transition duration-300 ease-in-out border-t-2 border-transparent hover:border-[#b53d3d] pt-1.5">
                    <i class="fa-solid fa-phone text-[19px] py-[5px]"></i>
                    <span class="text-[12px]">{{ t('contacts') }}</span>
                </button>
                <LanguageSelector/>
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
  background-color: #121212 ;
  box-shadow: 0px 10px 30px rgba(255, 255, 255, 0.2);
  color: white;
}

.animationEnter {
  animation: slideDown 0.4s ease-in-out forwards;
}

.navbar:not(.navbar-scrolled) {
  background-color: rgba(0, 0, 0, 0);
  color: white;
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