<template>
    <div class="flex gap-x-3 mt-5">
        <section 
            v-for="type in types" 
            :key="type.slot"
            class="border-2 border-white p-3 rounded-full"
            :class="bgColor(type.type.name)"
            >
            {{type.type.name[0].toUpperCase() + type.type.name.substring(1) }}
        </section>
    </div>
</template>

<script>

import bgBadgeColor from '@/helpers/bgBadgeColor'

export default {
    props:['types'],
    methods:{
        bgColor(color){
            return bgBadgeColor(color)
        }
    }
}
</script>