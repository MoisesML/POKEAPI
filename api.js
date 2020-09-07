let contenedor = document.getElementById("contenedor");
let btnBorrar = document.getElementById("Borrar");
let ctnMain = document.getElementById("js-main");
let btnBuscar = document.getElementById("Buscar");

let obtenerPokemon = () => {
    let asistente = new XMLHttpRequest

    asistente.addEventListener("readystatechange", () => {
        if(asistente.readyState === 4 && asistente.status === 200){
            let rpta = JSON.parse(asistente.responseText)["results"]
            console.log(rpta)

            let nombres = rpta.map((pokemon) => {
                return pokemon["name"]
            })

            crearItem(nombres)
            // console.log(nombres)
        }
    })
    asistente.open("GET", "https://pokeapi.co/api/v2/pokemon/");
    asistente.send(null);
}

obtenerPokemon();

function crearItem(nombre) {

    for (let i = 0; i < nombre.length; i++) {
        let pokemon = nombre[i];
        let urli = "";

        if(i<9){
            urli = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${i+1}.png`
        }else{
            urli = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${i+1}.png`
        }

        let divcontent = document.createElement("div");
        divcontent.classList.add("pokemon");

        let nombrepokemon = document.createElement("h2");
        nombrepokemon.innerHTML = pokemon;

        let imagenpokemon = document.createElement("img");
        imagenpokemon.setAttribute("src", urli)

        divcontent.appendChild(nombrepokemon);
        divcontent.appendChild(imagenpokemon);

        contenedor.appendChild(divcontent);

    }
}

btnBorrar.addEventListener("click",()=>{
    let ctlr = document.getElementById("controler");
    contenedor.innerHTML = "";
    ctlr.innerHTML = "";

})

btnBuscar.addEventListener("click",() => {
    obtenerPokemon();
})