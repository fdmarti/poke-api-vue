
const bgBadgeColor = ( color ) => {

   switch (color) {
       case 'grass': return 'bg-green-200'
       case 'poison' : return 'bg-purple-200'
       case 'fire' : return 'bg-red-400 text-white'
       case 'water' : return 'bg-blue-300'
       case 'flying' : return 'bg-sky-300'
       case 'bug' : return 'bg-amber-300'
       case 'electric' : return 'bg-yellow-300'
       case 'ground' : return 'bg-amber-500'
       case 'fairy' : return 'bg-pink-300'
       case 'fighting' : return 'bg-orange-500'
       case 'psychic' : return 'bg-fuchsia-400'
       case 'rock' : return 'bg-stone-500 text-white'
       case 'steel' : return 'bg-slate-600 text-white'
       case 'ice' : return 'bg-cyan-300'
       case 'dark' : return 'bg-zinc-600 text-white'
       case 'dragon' : return 'bg-purple-600 text-white'
       case 'ghost' : return 'bg-indigo-600 text-white'
   
       default: return 'bg-gray-200'
   }
}


export default bgBadgeColor