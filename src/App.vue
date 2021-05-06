<template>
  <div class="container p-8 mx-auto">
    <input
      v-model="yeniGorev"
      class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Yeni Görev Ekle"
      @keypress.enter="gorevOlustur"
    >
    <div class="grid grid-cols-3 mt-4">
      <div class="px-3 py-3 mr-4 bg-gray-100 rounded-lg">
        <p class="text-sm font-semibold tracking-wide text-gray-700">
          Yapılacaklar
        </p>
        <tabela :list="todo"/>
      </div>
      <div class="px-3 py-3 mr-4 bg-gray-100 rounded-lg">
        <p class="text-sm font-semibold tracking-wide text-gray-700">
          İşlemde Olanlar
        </p>
        <tabela :list="yapilan" @click-close="removeTask(...arguments, yapilan)" />
      </div>
      <div class="px-3 py-3 mr-4 bg-gray-100 rounded-lg">
        <p class="text-sm font-semibold tracking-wide text-gray-700">
          Tamamlananlar
        </p>
        <tabela :list="biten" @click-close="removeTask(...arguments, biten)" />
      </div>
    </div>
  </div>
</template>
<script>
import tabela from '@/components/tabela.vue';
export default {
  components:{
    tabela
  },
  data(){
    return{
      yeniGorev: '',
      todo:[
        {name:'Örnek Görev 1'},
        {name:'Örnek Görev 2'},
        {name:'Örnek Görev 3'}
      ],
      yapilan:[],
      biten:[]
    }
  },
    methods: {
    gorevOlustur() {
      if (this.yeniGorev.length !== 0) {
        this.todo.push({ name: this.yeniGorev });
        this.yeniGorev = '';
      }
    },
    removeTask(task, list) {
      const index = list.indexOf(task);
      if (index > -1) {
        list.splice(index, 1);
      }
    }
  },
}
</script>
