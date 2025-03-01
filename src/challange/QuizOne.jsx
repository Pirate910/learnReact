export const ninjaTurtles = [
    <h2>Donatello</h2>,
    <h2>Michaelangelo</h2>,
    <h2>Rafael</h2>,
    <h2>Leonard</h2>,
];

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
console.log(
    pokemon.map((element, id) => {
        return `<p>${element}</p>`;
    })
);
