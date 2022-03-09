<template>
    <div class="py-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <PokemonCard  
            v-for="pokemon in getPokemones" 
            :key="pokemon.name" 
            :pokemon="pokemon"
            class="m-5"
            />
    </div>

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import { mapActions, mapGetters } from 'vuex'
export default {
    components: {
        PokemonCard : defineAsyncComponent(() => import('./components/PokemonCard.vue'))
    },

    created() {
        this.getPokemonesByGeneration(this.$route.params.id);
    },
    methods: {
        ...mapActions(["getPokemonesByGeneration"])
    },
    computed: {
        ...mapGetters(["getPokemones"])
    },
}
</script>