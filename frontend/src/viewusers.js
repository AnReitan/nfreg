import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const UsersTable = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:5000/api/users")
        .then(response => setUsers(response.data))
        .catch(error => console.error("Error fetching data:", error));
    }, []);
  
    return (
        
        <div className="container">
                        
            <h2>Brukerinfo
            <Link to='/Main' className= "btn btn-home">Meny </Link>
            </h2>

            <div className="table-container">
            <Link to='/user/add' className= "btn btn-green"> Legg til bruker </Link>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Navn</th>
                            <th>Brukertype</th>
                            <th>Aksjoner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                        <tr key={user.p_key}>
                            <td>{user.p_key}</td>
                            <td>{user.s_name}</td>
                            <td>{user.i_userlevel}</td>
                            <td className="text-align: center">
                                <Link to={`/user/edit/${user.p_key}`} className="btn btn-blue"> Rediger </Link>
                                <Link to={`/user/delete/${user.p_key}`} className="btn btn-red"> Slett </Link>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
     )
} 

export default UsersTable;