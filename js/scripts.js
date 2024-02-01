let pokemonList = [
  {
    name: "Tranquill", 
    height: "0.6", 
    types: ["rivalry",  "super luck",  "big pecks"],
  },

  {
    name: "Butterfree", 
    height: "1.1", 
    types: ["compound eyes",  "tinted-lens"],
  },

  {
    name: "Slowpoke", 
    height: "1.2", 
    types: ["oblivious",  "own-tempo",  "regenerator"],
  },

];

pokemonList.forEach(function(pokemon) {
  document.write('<br>')
  document.write(pokemon.name)
  document.write('<br>')
  document.write(pokemon.height)
  document.write('<br>')
  document.write(pokemon.types);
  document.write('<br>')

})