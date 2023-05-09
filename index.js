document.addEventListener("DOMContentLoaded", () => {
  const pokeContainer = document.querySelector(".pokemon-container");

  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((r) => r.json())
    .then((pokemons) => {
      pokemons.results.forEach((pokemon) => {
        const pokeCard = document.createElement("div");
        pokeCard.className = "poke-card";

        const h2 = document.createElement("h2");
        h2.innerHTML = pokemon.name;

        pokeCard.append(h2);
        pokeContainer.append(pokeCard);

        h2.addEventListener("click", () => {
            const detailedCard = document.createElement("div");
            detailedCard.className = "detailed-card";

            fetch(pokemon.url)
                .then((r) => r.json())
                .then(data => {
                    const h1 = document.createElement("h1");
                    h1.innerHTML = data.forms[0].name;

                    const img = document.createElement("img");
                    img.src = data.sprites.front_shiny;

                    const statsList = document.createElement("ul");
                    statsList.className = "stats-list";
                    statsList.innerHTML = "Stats"
                    

                    pokeContainer.innerHTML = '';
                    detailedCard.append(h1, img, statsList);
                    pokeContainer.append(detailedCard);


                
                })
        })

      });
    });
});
