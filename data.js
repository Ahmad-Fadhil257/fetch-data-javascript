const sumber = "https://pokeapi.co/api/v2/pokemon/pikachu/"
fetch(sumber)
  .then ((data) => data.json())
  .then((result) => console.log(result ?? "Ga ada datanya bro"))