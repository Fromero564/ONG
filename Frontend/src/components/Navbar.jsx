import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar(){
    return(
       <div style={{ width:'90vw',backgroundColor: '#4A8CB6', padding: '10px' }}>
         <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <li style={{ marginRight: '10px'}}>
                 <NavLink to='/' style={{ textDecoration: 'bold', color: '#FFFFFF', padding: '5px' }}>DASHBOARD</NavLink>
             </li>
             <li style={{ marginRight: '10px' }}>
                 <NavLink to='/usuarios' style={{ textDecoration: 'bold', color: '#FFFFFF', padding: '5px' }}>USUARIOS</NavLink>
             </li>
             <li style={{ marginRight: '10px' }}>
                 <NavLink to='/productos' style={{ textDecoration: 'bold', color: '#FFFFFF', padding: '5px' }}>PRODUCTOS</NavLink>
             </li>
         </ul>
       </div>
    )
}

export default Navbar;