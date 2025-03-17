import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EditUser = () => {
    const { userID } = useParams(); // Get user ID from URL
    const navigate = useNavigate(); // This is to navigate back to the previous page
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editedUser, setEditedUser] = useState({
        s_name: '',
        s_email: '',
        i_userlevel: '',
        s_regno: '',
        b_active: true,
    });

    useEffect(() => {
axios.get(`${process.env.REACT_APP_API_URL}/api/user/${userID}`)
            .then(response => {
                setUser(response.data);
                setEditedUser(response.data);  // Initialize form with fetched data
                setLoading(false);
            })
            .catch(error => {
                setError("Failed to load user data.");
                setLoading(false);
            });
    }, [userID]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/user/${userID}`, editedUser)
            .then(response => {
                alert("User updated successfully!");
            })
            .catch(error => {
                console.error("Error updating user:", error);
                alert("Failed to update user data.");
            });
    };

   // Handle cancel and reset form data
   const handleCancel = () => {
    setEditedUser(user); // Reset to the original user data
    navigate(-1); // Navigate back to the previous page
};

    if (loading) return <p>Loading user data...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <h2>Endre bruker</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><strong>Navn:</strong></td>
                            <td>
                                <input
                                    type="text"
                                    name="s_name"
                                    value={editedUser.s_name}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Epost:</strong></td>
                            <td>
                                <input
                                    type="email"
                                    name="s_email"
                                    value={editedUser.s_email}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Brukertype:</strong></td>
                            <td>
                                <select
                                    name="i_userlevel"
                                    value={editedUser.i_userlevel}
                                    onChange={handleChange}
                                >
                                    <option value="1">Manskap</option>
                                    <option value="2">OPL</option>
                                    <option value="3">Admin</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Reg. nummer:</strong></td>
                            <td>
                                <input
                                    type="text"
                                    name="s_regno"
                                    value={editedUser.s_regno}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Aktiv:</strong></td>
                            <td>
                                <input
                                    type="checkbox"
                                    name="b_active"
                                    checked={editedUser.b_active}
                                    onChange={(e) => setEditedUser(prevState => ({
                                        ...prevState,
                                        b_active: e.target.checked,
                                    }))}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" className="btn btn-green">Lagre</button>
                <button type="button" className="btn btn-red" onClick={handleCancel}>Avbryt</button>
            </form>
        </div>
    );
};


export default EditUser;