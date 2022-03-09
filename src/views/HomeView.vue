<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 pt-28 gap-y-10 place-items-center">
    <CardGeneration text="Primera generación" location="Kanto" value="1" />
    <CardGeneration text="Segunda generación" location="Johto" value="2"/>

    <CardGeneration text="Tercera generación" location="Hoenn" value="3"/>
    <CardGeneration text="Cuarta generación" location="Sinnoh" value="4"/>

    <CardGeneration text="Quinta generación" location="Teselia" value="5"/>
    <CardGeneration text="Sexta generación" location="Kalos" value="6"/>

    <CardGeneration text="Séptima generación" location="Alola" value="7"/>
    <CardGeneration text="Octava generación" location="Galar" value="8"/>

  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    name: "HomeView",
    components: { 
      CardGeneration : defineAsyncComponent(() => import("@/components/CardGeneration.vue"))
     }
}
</script>
