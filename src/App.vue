<template>
  <div class="bg-orange-50 min-h-screen">
   <NavbarMain @shorNavbar="shorNavbar($event)"/>
   <div 
    :class="navBarShort"
    class="transition-all duration-500"
    >
   <router-view ></router-view>
   </div>
  </div>

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components:{
    NavbarMain : defineAsyncComponent(() => import('@/components/NavbarMain.vue'))
  },

  data() {
    return {
      navBarState: true
    }
  },
  
  
  methods:{
    shorNavbar(state){
      this.navBarState = state
    }
  },

  computed:{
    navBarShort(){
      return this.navBarState ? 'pl-40': 'pl-10'
    }
  }


}
</script>