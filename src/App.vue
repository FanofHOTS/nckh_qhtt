<script setup>
</script>

<template>
  <div class="min-h-screen w-full flex flex-col bg-gray-100 px-5 xl:px-20">
    <main class="w-full py-5 my-auto">
      <router-view :key="$route.fullPath"/>
    </main>
    <footer class="text-center md:text-left py-5">
      © {{ new Date().getFullYear() }} <router-link :to="{ name: 'about' }" class="hover:underline text-blue-600">CHC</router-link> - NCKH, Linear programming
    </footer>
  </div>
</template>

<style>
</style>
