<template>
    <div class="py-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" v-if="!$route.params.name">
        <PokemonCard  
            v-for="pokemon in getPokemones" 
            :key="pokemon.name" 
            :pokemon="pokemon"
            class="m-5"
            @click="goToDetailsPokemon(pokemon.name)"
            />
    </div>

    <div v-else>
        <router-view></router-view>
    </div>

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import { mapActions, mapGetters } from 'vuex'
export default {
    components: {
        PokemonCard : defineAsyncComponent(() => import('@/modules/Pokemon/components/PokemonCard.vue'))
    },

    created() {
        this.getPokemonesByGeneration(this.$route.params.id);
    },
    methods: {
        ...mapActions(["getPokemonesByGeneration"]),
        goToDetailsPokemon(namePokemon){
            console.log(namePokemon)

            this.$router.push({name : 'pokemon-detail', params :{ name : namePokemon}})
        }
    },
    computed: {
        ...mapGetters(["getPokemones"])
    },
}
</script>