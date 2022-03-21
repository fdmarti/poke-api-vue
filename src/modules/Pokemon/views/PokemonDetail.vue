<template>
  <div class="p-10">
    <p class="text-center text-4xl font-semibold mt-5">Detalle del pokemon {{ $route.params.name[0].toUpperCase() + $route.params.name.substring(1)  }} - #{{pokemonData.order}}</p>

    <section v-if="isLoading" class="flex justify-center my-10">
      <SpinnerLoad />
    </section>

    <section class="grid grid-cols-2 mt-10 place-items-center border-2 rounded-lg bg-orange-100 shadow" v-else>
      <div class="p-5">
        <img :src="pokemonData.sprites.other.dream_world.front_default" :alt="`${$route.params.name}_img`">

        <section class="mt-5">
          <BasicStats text="Height" :value="`${pokemonData.height / 10} mts`"/>
          <BasicStats text="Weight" :value="`${pokemonData.weight / 10} kg`"/>
        </section>
 
      </div>
      <div>
        <p class="text-2xl font-bold">Stats</p>
            <MainStats v-for="(stats,index) in pokemonData.stats" :stats="stats" :key="index"/>
      </div>
    </section>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SpinnerLoad from '@/components/SpinnerLoad.vue'
import BasicStats from '@/components/BasicStats.vue';
import MainStats from '../../../components/MainStats.vue';
export default {
    components: { SpinnerLoad, BasicStats, MainStats },

    async created() {
        await this.getPokemonDataByName(this.$route.params.name);
        this.isLoading = false;
    },

    data() {
        return {
            isLoading: true
        };
    },
    methods: {
        ...mapActions(["getPokemonDataByName"])
    },
    computed: {
        ...mapGetters(["pokemonData"])
    },
}
</script>