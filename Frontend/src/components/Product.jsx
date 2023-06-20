import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import '../css/ProductStyle.css'



function Product(){
    const [products, setProductState] = useState([]);
    const [productLength, setProductLengthState] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3026/api/productos")
        .then((response) => response.json())
        .then((result) => setProductState(result.data));
    }, []);
  
    useEffect(() => {
      fetch("http://localhost:3026/api/productos")
        .then((res) => res.json())
        .then((productLength) => setProductLengthState(productLength.meta));
    }, []);

    const productsFilterCategoryDecoracion = products.filter(product => product.categoria_id == 1)
    const productsFilterCategoryHogar = products.filter(product => product.categoria_id == 2)
    const productsFilterCategoryIndumentaria = products.filter(product => product.categoria_id == 3)
  

    return ( 
        <div className="product-tab">
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Detalle</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.nombre}</td>
                    <td>{product.descripcion}</td>
                    <td>
                     
                      
                        <Link to={`/api/productos/${product.id}`}>Ver detalles</Link>
                     
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className='cantidadProductos'>
          <h3>La cantidad de productos es: {productLength.Total_productos}</h3>
          </div>
          <div className='cantidadProductosDeco'> 
          <h3>La cantidad de productos en Decoracion es: {productsFilterCategoryDecoracion.length}</h3>
          </div>
          <div className='cantidadProductosHogar'> 
          <h3>La cantidad de productos en Hogar es: {productsFilterCategoryHogar.length}</h3>
          </div>
          <div className='cantidadProductosIndu'> 
          <h3>La cantidad de productos en Indumentaria es: {productsFilterCategoryIndumentaria.length}</h3>
          </div>
          <Routes>
            <Route path="/api/productos/:id" element={< ProductDetail />} exact />
          </Routes>
         
        </div>
        )
}

export default Product;