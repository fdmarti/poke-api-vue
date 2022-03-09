<template>
  <nav 
      class="flex flex-col gap-x-5 items-center bg-red-900 p-2 text-white fixed min-h-screen transition-all duration-500"
      :class="stateNavbar"
  >
        <router-link to="/">
          <i class='bx bx-color bx-md p-5'></i>
        </router-link>
        
        <router-link class="flex items-center" to="/about">
          <i class='bx bx-info-circle cursor-pointer bx-sm'></i> <span v-if="navbarSort" class="ml-2">About</span>
        </router-link>

        <span class="fixed bottom-0">
          <i 
            class='bx bx-chevrons-left cursor-pointer bx-md p-5 transition-all duration-700'
            :class="iconRotate"
            @click="sizeNavbar"></i>
        </span>
         

  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbarSort: true,
    }
  },
  methods:{
    sizeNavbar(){
      this.navbarSort = !this.navbarSort
      this.$emit('shorNavbar',this.navbarSort)
    }
  },

  computed:{
    stateNavbar(){
      return this.navbarSort ? 'w-1/12' : 'w-11'
    },
    iconRotate(){
      return this.navbarSort ? 'rotate-0' : 'rotate-180'
    }
  }

}
</script>