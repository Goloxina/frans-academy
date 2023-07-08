// Suponiendo que tienes una variable llamada "cartItemsCount" que contiene la cantidad de elementos en la cesta

const cartContainer = document.querySelector('.cart-container');
const cartCountElement = document.querySelector('.cart-count');

// Código JavaScript para actualizar el contador del carrito de compras
var basketCount = 0; // Variable para almacenar la cantidad de elementos en el carrito de compras

function actualizarContadorBasket() {
  var basketCountElement = document.querySelector('.toolbar__basket-count');
  basketCountElement.textContent = basketCount;
}

// Evento para simular agregar un elemento al carrito de compras
var basketButton = document.querySelector('.toolbar__basket-btn');
basketButton.addEventListener('click', function() {
  basketCount++;
  actualizarContadorBasket();
});
