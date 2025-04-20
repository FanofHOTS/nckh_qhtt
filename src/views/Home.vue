<template>
  <div>
    <h1 class="text-2xl text-center md:text-3xl md:text-left font-semibold">Quy hoạch tuyến tính</h1>
    <p class="text-center md:text-left text-gray-700 mb-5">
      Quy hoạch tuyến tính là bài toán tối ưu hóa, trong đó hàm mục tiêu và các điều kiện ràng buộc đều là tuyến tính.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(item, index) in items" :key="index" class="bg-white rounded shadow-md">
          <div class="p-5">
            <div class="font-semibold text-xl">{{ item.title }}</div>
            <p class="text-gray-700 text-base mb-4">{{ item.description }}</p>
            <router-link :to="{ name: item.route }" class="bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline text-white py-2 px-4 rounded">
              Xem &raquo;
            </router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      items: [
        {
          title: 'Chương 1',
          description: 'Chuyển Bài Toán Quy Hoạch Tuyến Tính Về Dạng Chính Tắc',
          route: 'truec1'
        },
        {
          title: 'Chương 2',
          description: 'Phương pháp đơn hình',
          route: 'c1'
        },
        {
          title: 'Chương 3',
          description: 'Bài toán đối ngẫu',
          route: 'c2'
        },
        {
          title: 'Chương 4',
          description: 'Ứng dụng QHTT: bài toán vận tải',
          route: 'c3'
        },
        {
          title: 'Hướng dẫn sử dụng',
          description: 'Hướng dẫn sử dụng công cụ này',
          route: 'help'
        }
      ]
    }
  }
}
</script>
