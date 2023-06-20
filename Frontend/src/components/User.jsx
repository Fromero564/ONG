import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserDetails from './UserDetails';
import '../css/UserStyle.css'


function User(){
    const [users, setUserState] = useState([]);
    const [userLength, setUserLengthState] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3026/api/user")
        .then((response) => response.json())
        .then((result) => setUserState(result.data));
    }, []);
  
    useEffect(() => {
      fetch("http://localhost:3026/api/user")
        .then((res) => res.json())
        .then((userLength) => setUserLengthState(userLength.meta));
    }, []);
    return ( 
        <div className="user-tab">
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nombre}</td>
                    <td>{user.email}</td>
                    <td>
                     
                      
                        <Link to={`/api/user/${user.id}`}>Ver detalles</Link>
                     
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h3>La cantidad de usuarios es: {userLength.total}</h3>
          <Routes>
            <Route path="/api/user/:id" element={<UserDetails />} exact />
          </Routes>
        </div>
    
        )
}

export default User;