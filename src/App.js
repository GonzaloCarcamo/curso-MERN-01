import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  // Crear listado de productos

  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa React', precio: 10 },
    { id: 2, nombre: 'Camisa Vue', precio: 20 },
    { id: 3, nombre: 'Camisa Angular', precio: 30 },
    { id: 4, nombre: 'Camisa Node', precio: 40 }
  ]);

  // State para carrito de compras

  const [ carrito, agregarProducto ] = useState([])

  // Fecha

  const fecha = new Date().getFullYear();


  return (
    <Fragment>
      
      <Header 
        titulo='tienda virtual'
      
      />

      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto 
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito 
      
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer 
        fecha={fecha}
      
      />
    
    </Fragment>

 
  );
}

export default App;
