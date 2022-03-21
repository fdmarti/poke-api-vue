import pokeApi from '@/helpers/pokeApi';
import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemones: [],
    pokemon: []
  },
  mutations: {
    setPokemones(state,payload){
      state.pokemones = payload
    },

    setPokemonData(state,payload){
      state.pokemon = payload
    }
  },
  actions: {
    async getPokemonesByGeneration({commit},generation){

      let limitAndOffset;
      switch (generation) {
        case '1':
          limitAndOffset = 'limit=151'
          break;
        case '2':
          limitAndOffset = 'limit=100&offset=151'
          break;
        case '3':
          limitAndOffset = 'limit=135&offset=251'
          break;
        case '4':
          limitAndOffset = 'limit=107&offset=386'
          break;
        case '5':
          limitAndOffset = 'limit=156&offset=493'
          break;
        case '6':
          limitAndOffset = 'limit=72&offset=649'
          break;
        case '7':
          limitAndOffset = 'limit=88&offset=721'
          break;
        case '8':
          limitAndOffset = 'limit=89&offset=898'
          break;
      }

      const { data } = await pokeApi.get(`/pokemon?${limitAndOffset}`)
      commit('setPokemones',data.results)
      
    },

    async getPokemonDataByUrl(context,name){
      const { data } = await pokeApi.get(`/pokemon/${name}`)
      return data
    },

    async getPokemonDataByName({commit},name){
      const { data } = await pokeApi.get(`/pokemon/${name}`)
      commit('setPokemonData',data)
    },


  },

  getters: {
    getPokemones(state){
      return state.pokemones
    },

    pokemonData(state){
      return state.pokemon
    }
  },
})
