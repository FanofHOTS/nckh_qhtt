<template>
    <div class="qhtt-container">
        <h2 class="text-2xl font-semibold text-center md:text-left">Chương 1</h2>
        <p class="text-gray-700 text-center md:text-left">Chuyển Bài Toán Quy Hoạch Tuyến Tính Về Dạng Chính Tắc</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <div class="bg-white shadow-md p-5">
            <div class="flex mb-4">
                <label class="text-gray-700 font-bold my-auto" for="fx">
                F(x)
                </label>
                <div class="flex-1 mx-2">
                <input id="fx" type="text" v-model="input.fx" placeholder="Phương trình F(x) ..." title="Phương trình F(x)" class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow">
                </div>
                <div class="relative">
                <select v-model="input.type" title="Bài toán" id="cbValue" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-400 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 focus:shadow">
                    <option value="min">Min</option>
                    <option value="max">Max</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>
        <textarea v-model="input.matrix" placeholder="Ma trận ..." title="Ma trận" id="matriX" class="block appearance-none border border-gray-400 rounded w-full text-gray-700 py-2 px-3 focus:outline-none focus:border-blue-500 focus:shadow mb-4" rows="4"></textarea>
        <div class="flex mb-4">
          <label id="rangBuoc" class="text-gray-700 font-bold my-auto mr-2" for="fxRB">
            Rằng buộc
          </label>
          <div class="flex-1">
            <input id="fxRB" type="text" v-model="input.fxRB" placeholder="Rằng buộc đề bài ..." title="Rằng buộc ..." class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow">
          </div>
        </div>
        <div class="text-center md:text-left">
          <button @click="submit" id="btnCalc" class="bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline rounded px-5 py-2 mr-2">
            Thực hiện
          </button>
          <button @click="reset" id="btnDel" class="bg-gray-500 text-white hover:bg-gray-600 focus:outline-none rounded px-4 py-2">
            Xóa
          </button>
        </div>
        </div>
            <div v-if="hasSubmit" class="grid grid-cols-1 gap-4 lg:col-span-2">
            <div class="bg-white shadow-md p-5 whitespace-pre-line" v-html="outputPrint"></div>
        </div>
    </div>
    <div class="text-center md:text-left">
        <router-link class="align-baseline font-bold text-sm text-gray-500 hover:text-gray-700 mr-5" :to="{ name: 'home' }">
        &larr; Về trang chủ
        </router-link>
        <router-link class="align-baseline font-bold text-sm text-blue-500 hover:text-blue-700" :to="{ name: 'c1' }">
        Chương kế &rarr;
        </router-link>
    </div>
</template>

<script>
import truec1 from '@/core/truec1'
export default {
    name: 'TrueC1Index',
    data () {
      return {
        input: {
          fx: '',
          matrix: '',
          fxRB: '',
          type: 'min'
        },
        hasSubmit: false,
        outputPrint: ''
      }
    },
    methods: {
      submit () {
        if (this.input.fx.trim() !== '' && this.input.matrix.trim() !== '' && this.input.fxRB.trim() !== '') {
          this.hasSubmit = true
          this.outputPrint = truec1(this.input.fx, this.input.matrix, this.input.fxRB, this.input.type)
        } else {
          this.$toasted.show('Không đủ dữ kiện đầu vào!')
          // console.log('Không đủ dữ kiện đầu vào!')
        }
      },
      reset () {
        this.input.fx = this.input.matrix = this.input.fxRB = ''
        this.input.type = 'min'
        // this.hasSubmit = false
      }
    }
  }
  </script>
  
  <style>
  
  </style>