import React from 'react';
import { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import '../css/LastProduct.css';


function LastProduct(){
    const [products, setProductState] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3026/api/productos")
        .then((response) => response.json())
        .then((result) => setProductState(result.data));
    }, []);
    
    let productName = "";

    if (products.length > 0) {
        productName = products[products.length - 1].nombre;
    }

    return (
        <div className='card'>
        <h2>Ultimo producto agregado a la DB:</h2>
        <FontAwesomeIcon className='icon-database' icon={faDatabase}  />
        <h2 className='text'>{productName}</h2>
        </div>
    )
}

export default LastProduct;