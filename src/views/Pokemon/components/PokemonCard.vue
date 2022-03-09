<template>
    <div class="grid place-items-center bg-gray-100 py-10 cursor-pointer hover:bg-gray-200 shadow-md rounded-xl">
        <div v-if="pokemonData">
            <img :src="pokemonData.sprites.front_default" :alt="`${pokemon.name}_img`" class="h-40">
        </div>
        <div v-else>
            <div class="bg-gray-300 animate-pulse h-48 w-48 rounded-full"></div>
        </div>
        <span v-if="pokemonData" class="text-center text-lg font-semibold">{{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}}</span>

        <TypesCard v-if="pokemonData" :types="pokemonData.types"/>

    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import { mapActions } from 'vuex'

export default {
    props: ["pokemon"],
    data() {
        return {
            pokemonData: null
        };
    },
    async created() {
        const resp = await this.getPokemonDataByUrl(this.$props.pokemon.name);
        this.pokemonData = resp;
    },
    methods: {
        ...mapActions(["getPokemonDataByUrl"])
    },
    components: {
        TypesCard : defineAsyncComponent(() => import('./TypesCard.vue'))
    }
}
</script>