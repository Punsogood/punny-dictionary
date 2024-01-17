let pokemonList = [
  {
    name: "Tranquill", 
    height: "0.6", 
    types: ["rivalry", "superluck", "bigpecks"],
  },

  {
    name: "Butterfree", 
    height: "1.1", 
    types: ["compoundeyes", "tinted-lens"],
  },

  {
    name: "Slowpoke", 
    height: "1.2", 
    types: ["oblivious", "own-tempo", "regenerator"],
  },

];

for (let i=0; i<pokemonList.length; i++) {
  document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')')
  if (pokemonList[i].height <=1.1) {
  document.write('<br>');
  }
  else{
    document.write('That\'s a huge pokemon!');
    document.write('<br>');
  }
  }

