export function crearCard(pizza) {
    limpiarHTML()
    
    
    const img = document.createElement('img')
    img.classList.add('card-img')
    img.src = pizza.img
    card.appendChild(img)

   
    const info = document.createElement('div')
    card.appendChild(info)

   
    const title = document.createElement('h2')
    title.innerText = pizza.nombre
    info.appendChild(title)

    
    const Ingre= document.createElement('h3')
    Ingre.innerText = 'Ingredientes:'
    info.appendChild(Ingre)
    const lista = document.createElement('ul')
    info.appendChild(lista)
    pizza.ingredientes.forEach(ingrediente => {
        const elementos = document.createElement('li')
        elementos.innerText = ingrediente
        lista.appendChild(elementos)
    });

 
    const precio = document.createElement('p')
    precio.innerText = `$ ${pizza.precio}`
    info.appendChild(precio)

}

export function limpiarHTML(){
    while (card.firstChild) {
        card.removeChild(card.firstChild)
    }
}