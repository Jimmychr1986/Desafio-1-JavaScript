var precio = 400000;
var contador = 0;
var precioSpan = document.querySelector(".precio-inicial");
var precioFin = document.querySelector(".valor-total");
var suma = document.querySelector('#btnsuma');
var resta = document.querySelector('#btnresta');
var cantidad = document.querySelector(".cantidad");

 
precioSpan.innerHTML = precio;

suma.addEventListener('click', () => {
    contador++;
    cantidad.innerHTML = contador;
    precioFin.innerHTML = precio * contador;

    }
);

resta.addEventListener('click', () => {
    if (contador >0)
    contador--;
    cantidad.innerHTML = contador;
    precioFin.innerHTML = precio * contador;
}
);



