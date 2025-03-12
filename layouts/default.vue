<script lang="ts" setup>
import { NuxtPage } from '#components';
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <div class="bg-[#121212]">
    <SpeedInsights/>
    <Analytics />
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>
