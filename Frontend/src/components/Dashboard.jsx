import React,{useEffect,useState} from 'react';
import '../css/DashboardStyle.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import Panel from './Panel';
import LastProduct from './LastProduct';


function Dashboard(){
    const [userLength, setUserLengthState] = useState([]);
    const [productLength, setProductLengthState] = useState([]);
  
    
    
    useEffect(() => {
        fetch("http://localhost:3026/api/user")
          .then((res) => res.json())
          .then((userLength) => setUserLengthState(userLength.meta));
      }, []);


    useEffect(() => {
        fetch("http://localhost:3026/api/productos")
          .then((res) => res.json())
          .then((productLength) => setProductLengthState(productLength.meta));
      }, []);

    return(

      
       <div className='dashboard'>

        <Panel  name={"usuarios"} total={userLength.total} icon={faUser} color={'red'} />
        <Panel  name={"productos"} total={productLength.Total_productos} icon={faCartShopping} color={'green'}/>
        <Panel  name={"categorias"} total ={productLength.Total_categorias} icon={faTags} color={'blue'}/>
        <LastProduct/>
        </div>
        

    )
}

export default Dashboard;