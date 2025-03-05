<script lang="ts" setup>
import { ref } from 'vue';

const { t, locale } = useI18n();
const router = useRouter();
const route = useRoute();

const languages = [
  { code: 'en', name: 'English', flag: '/images/en.svg' },
  { code: '', name: 'Português', flag: '/images/pt.svg' },
  { code: 'es', name: 'Español', flag: '/images/es.svg' },
  { code: 'fr', name: 'Français', flag: '/images/fr.svg' },
  { code: 'it', name: 'Italiano', flag: '/images/it.svg' },
  { code: 'de', name: 'Deutsch', flag: '/images/de.svg' },
  { code: 'zh-CN', name: '中国人', flag: '/images/china.svg' }
];

const dropdownOpen = ref(false);

const openDropdown = () => {
  dropdownOpen.value = true;
};

const closeDropdown = () => {
  dropdownOpen.value = false;
};

const closeNopenDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

function changeLanguage(lang: any) {
  if (route.path.endsWith("/stock")) {
    if (lang=='') {
      router.push({ path: "/stock" });
    } else {
      router.push({ path: "/"+ lang + "/stock" });
    }
  } else {
    router.push({ path: "/" + lang })
  }
}

const getCurrentFlag = () => {
  const currentLang = languages.find((lang) => lang.code === locale.value);
  return currentLang ? currentLang.flag : '/images/pt.svg';
};

</script>

<template>

  <!-- Language Selector -->
  <div class="relative inline-block text-left py-4 mr-2 hidden lg:block" @mouseover="openDropdown" @mouseleave="closeDropdown">
    <!-- Flag Button -->
    <div class="inline-flex items-center cursor-pointer">
      <img :src="getCurrentFlag()" class="w-5 h-5" />
      <span class="caret" :class="{'rotate-caret': dropdownOpen}"></span>
    </div>

    <!-- Dropdown Menu (only shown when hovered) -->
    <div v-if="dropdownOpen">
      <ul class="absolute top-8 mt-2 w-36 bg-white rounded-md shadow-lg z-20 py-1 left-[-40px] font-semibold text-sm">
        <li v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)" class="text-[#3b4249] hover:text-[#138d0b] flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
          <img :src="lang.flag" class="w-5 h-5 mr-2" />
          <span>{{ lang.name }}</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- Language Selector -->
  <div class="relative flex items-center text-left px-6 py-6 cursor-pointer hover:bg-[#f15e75] hover:text-white lg:hidden" @click="closeNopenDropdown">
    <!-- Flag Button -->
    <div class="flex items-center justify-between cursor-pointer w-full ">
      <img :src="getCurrentFlag()" class="w-5 h-5" />
      <span class="caret" :class="{ 'rotate-caret': dropdownOpen }"></span>
    </div>

    <!-- Dropdown Menu for small screens -->
    <div v-if="dropdownOpen">
      <ul class="absolute left-0 top-16 w-full bg-white rounded-md shadow-lg z-20 py-1 font-semibold" >
        <li v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)" class="text-[#3b4249] hover:text-[#f15e75] flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
          <img :src="lang.flag" class="w-5 h-5 mr-2" />
          <span>{{ lang.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 6px;
  vertical-align: middle;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  transform: rotate(-90deg);
  transition: transform 0.3s ease;
}

.rotate-caret {
  transform: rotate(0deg);
  color: #138d0b;
}
</style>