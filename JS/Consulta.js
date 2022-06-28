import { crearCard } from "./Card.js"
import { pizzas } from "./DB.js";


export function consultarDB(nombre){

    
    const LSPizzas = localStorage.getItem('pizzas')
    const JSONPizzas = JSON.parse(LSPizzas)

    const   PizzaByName = JSONPizzas.find(pizza => pizza.nombre == nombre)

    if(!PizzaByName){
        error();
      
    }
    else{
        crearCard(PizzaByName);
    }
}


function error(){
    limpiarHTML()
    const error = document.createElement('div2')
    card.appendChild(error)
    let formulario= document.getElementById('#formulario')

    if(formulario<pizzas.length){
    const MsgError = document.createElement('h2')
    MsgError.innerHTML = "Pizza no encontrada"
    error.appendChild(MsgError)
    }
    


   


}
function limpiarHTML(){
    while (card.firstChild) {
        card.removeChild(card.firstChild)
    }
}