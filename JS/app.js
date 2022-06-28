import { pizzas }  from "./DB.js";
import { consultarDB } from "./Consulta.js";



const form = document.getElementById('formulario')

window.addEventListener('load', () => {
    const PizzaLS = JSON.stringify(pizzas)
    localStorage.setItem('pizzas', PizzaLS)
    
    form.addEventListener('submit', buscarPizza)
})

function buscarPizza(e) {
    e.preventDefault();
    const id_pizza = document.getElementById('idPizza').value
    if (!id_pizza) {
     const Error= document.createElement('p')
         console.log(Error);
    } else {
      consultarDB(id_pizza)
      

    }
}