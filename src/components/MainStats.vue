<template>
    <section class="grid gap-x-4 p-3">
        <span class="uppercase">{{stats.stat.name}}</span>
        
        <div class="w-full bg-gray-200 rounded-full h-6 dark:bg-gray-700">
            <div :class="bgProgressColor" class="h-6 rounded-full text-center font-bold" :style="{width : stats.base_stat * 2 + 'px'}"> {{stats.base_stat}}</div>
        </div>
    </section>

</template>

<script>
export default {
    props:['stats'],

    computed:{
        bgProgressColor(){
            switch(this.$props.stats.stat.name){
                case 'hp' : return 'bg-red-400'
                case 'attack' : return 'bg-green-400'
                case 'defense' : return 'bg-blue-400'
                case 'special-attack' : return 'bg-cyan-400'
                case 'special-defense' : return 'bg-pink-400'
                case 'speed' : return 'bg-yellow-400'
                default : return ''
            }
        },
    }
}
</script>