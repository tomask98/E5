import { pizzas }  from "./DB.js";
import { consultarDB } from "./Consulta.js";
// import { MostrarTodo } from "./MostrarTodo.js";



const form = document.getElementById('formulario')


window.addEventListener('load', () => {
    const PizzaLS = JSON.stringify(pizzas)


    localStorage.setItem('pizzas', PizzaLS)

    MostrarTodo(pizzas);
   

    form.addEventListener('submit', buscarPizza)

})

function buscarPizza(e) {
    e.preventDefault();
    const id_pizza = document.getElementById('idPizza').value.toLowerCase()
    if (!id_pizza) {
     const Error= document.createElement('p')
         console.log(Error);
    } else {
      consultarDB(id_pizza)


    }
}

function MostrarTodo (){

  let pizzasLoc = JSON.parse(localStorage.getItem('pizzas'));

  console.log(pizzasLoc);


  pizzas.forEach(pizza => {

    const {nombre,image} = pizza
      console.log(pizza);
      const contenedor = document.createElement('div')
      const cards = document.querySelector('.cards')
      contenedor.classList.add('container')

      contenedor.innerHTML= `<h2>${nombre}</h2>
                              <img src='${image}'> `


      console.log(contenedor);
      
      cards.appendChild(contenedor)

    
  });

   



}


  







