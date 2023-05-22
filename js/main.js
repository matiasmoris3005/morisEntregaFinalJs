// Array para almacenar los productos del carrito
const productosEnCarrito = [];

// Función para agregar un producto al carrito
function agregarProducto(nombre, precio) {
  let producto = {
    nombre: nombre,
    precio: precio
  };

  productosEnCarrito.push(producto);

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Producto agregado',
    text: `Se agregó el producto "${producto.nombre}" a tu carrito`,
    timer: 2000
  });
  actualizarCarrito();
  calcularSubTotal();
}

// Función para actualizar la lista de productos en el carrito
function actualizarCarrito() {
  let carrito = document.getElementById("carrito");
  carrito.innerHTML = "";

  productosEnCarrito.forEach(function(producto) {
    let nuevoProducto = document.createElement("li");
    nuevoProducto.innerText = producto.nombre + " - $" + producto.precio;
    carrito.appendChild(nuevoProducto);
  });
}

// Función para calcular el subtotal de la compra
function calcularSubTotal() {
  let subtotal = 0;

  productosEnCarrito.forEach(function(producto) {
    subtotal += producto.precio;
  });

  let subtotalElement = document.getElementById("subtotal");
  subtotalElement.innerText = "$" + subtotal;
}

let btnComprar = document.getElementById("btnComprar")
  
function comprar() {
  if(carrito.length != 0){ 
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Has finalizado exitosamente tu compra',
        showConfirmButton: false,
        timer: 2000
      });
      vaciarCarrito();
      calcularSubTotal();
      console.log("Se realizó una compra exitosamente")
  }
}

// Vinculamos la función comprar con el evento click del botón
btnComprar.addEventListener("click", comprar)

// Función para vaciar el carrito
function vaciarCarrito() {
  productosEnCarrito.length = 0;
  actualizarCarrito();
  calcularSubTotal();
  console.log("Carrito vaciado")
}

let btnVaciarCarrito = document.getElementById("btnVaciarCarrito")


// Guardo informacion en el local storage
function guardarProductos(){   
  localStorage.setItem("Bermuda Athletic", 7000);
  localStorage.setItem("Bermuda Rústico Elastizado", 7000);
  localStorage.setItem("Short Fire", 7000);
  localStorage.setItem("Remera Over Logo Fucsia", 5000);
  localStorage.setItem("Remera Over Leyenda Black", 5000);
  localStorage.setItem("Remera Over Leyenda Fucsia", 5000);
  localStorage.setItem("Musculosa Bull Negro", 4000);
  localStorage.setItem("Musculosa Bull Gotic Negro", 4000);
  localStorage.setItem("Musculosa Deportiva Aqua Fire", 4000);
  localStorage.setItem("Musculosa Bull Coral", 4000)
}
guardarProductos() 