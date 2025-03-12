<script lang="ts" setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

const { t, locale } = useI18n();
const router = useRouter();
const route = useRoute();

const languages = [
  { code: 'en', name: 'English', flag: 'https://dvqnsnzkbesefygzzxrq.supabase.co/storage/v1/object/public/carImages/languageSelector/en.svg' },
  { code: '', name: 'Português', flag: 'https://dvqnsnzkbesefygzzxrq.supabase.co/storage/v1/object/public/carImages/languageSelector/pt.svg' },
  { code: 'es', name: 'Español', flag: 'https://dvqnsnzkbesefygzzxrq.supabase.co/storage/v1/object/public/carImages/languageSelector/es.svg' },
  { code: 'fr', name: 'Français', flag: 'https://dvqnsnzkbesefygzzxrq.supabase.co/storage/v1/object/public/carImages/languageSelector/fr.svg' },
  { code: 'it', name: 'Italiano', flag: 'https://dvqnsnzkbesefygzzxrq.supabase.co/storage/v1/object/public/carImages/languageSelector/it.svg' },
  { code: 'de', name: 'Deutsch', flag: 'https://dvqnsnzkbesefygzzxrq.supabase.co/storage/v1/object/public/carImages/languageSelector/de.svg' },
  { code: 'zh-CN', name: '中国人', flag: 'https://dvqnsnzkbesefygzzxrq.supabase.co/storage/v1/object/public/carImages/languageSelector/china.svg' }
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

const dropdownRef = ref(null);

onClickOutside(dropdownRef, () => {
  dropdownOpen.value = false;
})

function changeLanguage(lang: any) {
  if (route.path.endsWith("/stock")) {
    if (lang=='') {
      router.push({ path: "/stock" });
    } else {
      router.push({ path: "/"+ lang + "/stock" });
    }
  } else if (route.path.includes("/stockSingle")) {
    if (route.path.startsWith("/stockSingle")) {
      if (lang=='') {
        router.push({ path: route.path })
      } else {
        router.push({ path: '/' + lang + route.path });
      }
    } else {
      if (lang=='') {
        router.push({ path: route.path.replace(/\/[^/]*\//, '/') });
      } else {
        router.push({ path: route.path.replace(/\/[^/]*\//, '/'+lang+'/') });
      }
    }
  }
   else {
    router.push({ path: "/" + lang })
  }
}

const getCurrentFlag = () => {
  const currentLang = languages.find((lang) => lang.code === locale.value);
  return currentLang ? currentLang.flag : 'https://dvqnsnzkbesefygzzxrq.supabase.co/storage/v1/object/public/carImages/languageSelector/pt.svg';
};

</script>

<template>

  <!-- Language Selector -->
  <div class="relative inline-block text-left py-4 mr-2" @click="closeNopenDropdown()">
    <!-- Flag Button -->
    <div class="inline-flex items-center cursor-pointer">
      <img :src="getCurrentFlag()" class="w-5 h-5" />
      <span class="caret" :class="{'rotate-caret': dropdownOpen}"></span>
    </div>

    <!-- Dropdown Menu (only shown when hovered) -->
    <div ref="dropdownRef" v-if="dropdownOpen">
      <ul class="absolute top-8 mt-2 w-32 bg-white rounded-md shadow-lg z-20 py-1 left-[-80px] xl:left-[-50px] font-semibold text-sm">
        <li v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)" class="text-[#3b4249] hover:text-[#b53d3d] flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
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
  color: #b53d3d;
}
</style>