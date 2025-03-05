<script lang="ts" setup>
const props = defineProps({
  id: Number,
});
</script>
<template>
    <div class="bg-[#0b131a] p-10">
        Pagina do carro de id: {{ props.id }}
    </div>
</template>