<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
const mode = useColorMode()

</script>

<template>
  <div class="flex flex-col">
    <nav class="flex justify-between w-full card-base">
      <p>Handmade vue 3 components</p>
      <ul class="flex gap-2">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/common">Common</NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
