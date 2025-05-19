const sumber = "pikachu.json"

fetch(sumber)
  .then ((data) => data.json())
  .then((result) => console.log(result ?? "Ga ada datanya bro"))