import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Home = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    
    const [users, setUsers] = useState([]);
    const [mode, setMode] = useState(false);
    const [editID, setEditID] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(data)
        if (mode == true) {
            let res = await axios.put(`http://localhost:5000/api/user/${editID}`, data)
            handlefetch();
            setData({
                name: "",
                email: "",
                password: ""
            })
            setMode(false);
            setEditID(null);
        }
        else {
            // // Using axios
            let res = await axios.post('http://localhost:5000/api/user', data)
            // console.log(res.data)

            handlefetch();
            setData({
                name: "",
                email: "",
                password: ""
            })
        }

        // // Using fetch
        // const a = await fetch('http://localhost:5000/api/user', {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)})
        // const res = await a.json()
        // console.log(res)
    }
    const handlefetch = async () => {
        let res = await axios.get('http://localhost:5000/api/user')
        // console.log(res.data)
        setUsers(res.data);
    }
    useEffect(() => {
        handlefetch()
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/user/${id}`);
            alert("User deleted successfully")
            handlefetch();
        }
        catch (err) {
            console.error("Error deleting user:", err);
        }
    }
    const handleUpdate = async (b) => {
        setData({
            name: b.name,
            email: b.email,
            password: b.password
        })
        setMode(true);
        setEditID(b._id);

    }

    return (
        <div>
            <form method="POST" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={data.name}
                    onChange={handleChange}
                />
                <br />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={data.email}
                    onChange={handleChange}
                />
                <br />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={data.password}
                    onChange={handleChange}
                />
                <br />

                <button type="submit" onClick={handlefetch}>Submit</button>
            </form>
            <br />
            <br />
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td id={`user-name-${index}`}>{user.name || "No Name"}</td>
                            <td id={`user-email-${index}`}>{user.email || "No Email"}</td>
                            <td><button onClick={() => handleDelete(user._id)}>Delete</button></td>
                            <td><button onClick={() => handleUpdate(user)}>Update</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home
