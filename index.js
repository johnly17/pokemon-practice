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
      });
    });
});
