const Pizzas = [
    {ID:'1',nombre:'Muzzarela',ingredientes:['Muzzarela','Oregano','Aceitunas','Sal'],precio:400,img:'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg'}, 
    {ID:'2',nombre:'Napolitana',ingredientes:['Muzzarela','Tomate','Aceitunas','Adobo'],precio:450,img:'https://media-cdn.tripadvisor.com/media/photo-s/11/c7/be/d8/pizza-napolitana.jpg'}, 
    {ID:'3',nombre:'Calabresa',ingredientes:['Muzzarela','Salame','Aceite','Sal'],precio:735,img:'https://assets.pedix.app/bzQ1KmPlactsBj0He8ZD/products/renditions/1606237798752_medium.png'}, 
    {ID:'4',nombre:'Fugazzeta',ingredientes:['Muzzarela','Cebolla','Aceitunas'],precio:500,img:'http://eatgirls.com.ar/wp-content/uploads/2020/05/216253E5-FA97-4CE0-8951-C6A7CDF685A7.jpeg'}, 
    {ID:'5',nombre:'Jamon y Morrones',ingredientes:['Muzzarela','Jamon','Aceitunas','Morrones'],precio:1050,img:'https://mamacorapub.com/wp-content/uploads/2020/05/pizza-especial-salsa.jpg'}, 
    {ID:'6',nombre:'4 Quesos',ingredientes:['Muzzarela','Roquefort','Queso Azul','Aceitunas'],precio:900,img:'https://assets.unileversolutions.com/recipes-v2/216503.jpg'}, 
]

const localPizzas = localStorage.setItem('Pizzas',JSON.stringify(Pizzas))

const pizzaNombre = document.getElementById('pizza-nombre');
const pizzaIngredientes = document.getElementById('pizza-ingredientes');
const pizzaPrecio = document.getElementById('pizza-precio');
const pizzaID = document.getElementById('pizza-ID');
const pizzaImg = document.getElementById('pizza-img');
const pizzaBuscar = document.getElementById('buscar');
const pizzaSection = document.getElementById('contenedor')

// pizzaBuscar.addEventListener('click',()=>{
//     const cargarValor = pizzaCard.value;
//     buscarPizza = Pizzas.find((pizza2)=>pizza2.ID == cargarValor)
//     if(!buscarPizza){
//         alert('El ID que ingreso no corresponde con ninguna de nuestas pizzas, por favor vuelva a ingresar otro ID. Gracias.')        
//     }else{
//         const fotoPizza = document.createElement('foto');
        
//     }
// })


const buscarPizza = ()=>{
    const idInput = pizzaID.value
    const idPizza = Pizzas.find(Pizzas => Pizzas.ID == idInput)

    if(!idInput){
        pizzaNombre.textContent = 'Ingrese un ID por favor.'
        pizzaIngredientes.textContent = `.`
        pizzaPrecio.textContent = '$.'
        pizzaImg.textContent = 'Pizza no encontrada :c'
    }else if(!idPizza){
        pizzaNombre.textContent = 'Ingrese un ID valido'
        pizzaIngredientes.textContent = `.`
        pizzaPrecio.textContent = '$.'
        pizzaImg.textContent = 'Pizza no encontrada :c'
    }else{
        pizzaNombre.textContent = `Tu pizza es ${idPizza.nombre}`
        pizzaIngredientes.textContent = `Los ingredientes son: ${idPizza.ingredientes}.`
        pizzaPrecio.textContent = `El precio es de $${idPizza.precio}`
        const imagen= document.createElement('img');
        imagen.setAttribute('src', idPizza.img);
        pizzaImg.appendChild(imagen);
        pizzaImg.removeChild(pizzaImg.firstChild)
    }
}

pizzaBuscar.addEventListener('click',buscarPizza)