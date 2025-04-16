<script setup>
import { VPdfViewer } from '@vue-pdf-viewer/viewer';
</script>
<template>
    <div>
        <h2 class="text-2xl font-semibold text-center md:text-left">Hướng dẫn sử dụng</h2>
        <p class="text-gray-700 text-center md:text-left">Đây là trang hướng dẫn các bạn sử dụng công cụ này</p>
    </div>
    <div :style="{ width: '1028px', height: '700px' }">
        <VPdfViewer src="help.pdf"/>
    </div>
    <div class="text-center md:text-left">
        <router-link class="align-baseline font-bold text-sm text-gray-500 hover:text-gray-700 mr-5" :to="{ name: 'home' }">
            &larr; Về trang chủ
        </router-link>
        <router-link class="align-baseline font-bold text-sm text-gray-500 hover:text-gray-700 mr-5" :to="{ name: 'c1' }">
            Chương 2
        </router-link>
        <router-link class="align-baseline font-bold text-sm text-gray-500 hover:text-gray-700 mr-5" :to="{ name: 'c2' }">
            Chương 3
        </router-link>
        <router-link class="align-baseline font-bold text-sm text-gray-500 hover:text-gray-700 mr-5" :to="{ name: 'c3' }">
            Chương 4
        </router-link>
    </div>
</template>
<style>

</style>
