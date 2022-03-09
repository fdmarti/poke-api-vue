<template>
  <div 
      class="bg-red-400 w-3/4 text-white grid place-items-center p-10 rounded-2xl shadow-xl border-2 hover:bg-red-500 cursor-pointer active:translate-y-2 active:transition-all active:duration-100 active:border-gray-900 select-none"
      @click="showGeneration"
      >
      <h2 class="text-3xl uppercase">{{text}}</h2>
      <span class="mt-2"> <i class='bx bxs-map'></i> Ubicacion: {{location}}</span>
  </div>
</template>

<script>
export default {
    props:['text', 'location','value'],

    methods:{
      showGeneration(){
        this.$router.push('/generation/'+this.$props.value)
      }
    }
}
</script>