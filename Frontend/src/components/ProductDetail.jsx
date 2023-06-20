import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../css/ProductDetailStyle.css';


function UserDetails (){
  const { id } = useParams();
  const [product, setproduct] = useState([]);
 

 

  useEffect(() => {
    fetch("http://localhost:3026/api/productos")
      .then((response) => response.json())
      .then((data) => setproduct(data.data));
  }, [id]);
  
  const productFiltrado = product.find(p => p.id == id);
  

  if (!productFiltrado) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="center">
    <div className="product-detail">
     <img src={`http://localhost:3026/images/${productFiltrado.imagen}`}
 alt="" />
     <p>ID:{productFiltrado.id}</p>
     <p>Nombre:{productFiltrado.nombre}</p>
     <p>Precio $:{productFiltrado.precio}</p>
     <p>Talle:{productFiltrado.talle}</p>
     <p>Descripcion:{productFiltrado.descripcion}</p>
     <p>Color:{productFiltrado.color}</p>
     <p>Categoria:{productFiltrado.categoria.categoria}</p>
     
    </div>
    </div>
  );
}


export default UserDetails;
