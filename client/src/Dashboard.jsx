import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Dashboard = () => {

  const navigate = useNavigate();
  let message = localStorage.getItem("message");

  useEffect(() => {
    if (message !== 'Login successful') {
      alert("Please login first");
      navigate('/login');
    } else {
      console.log('Logged in');
    }
  }, []);

  const [file, setFile] = useState({ picture: "" });

  const handleChange = (e) => {
    const { name } = e.target;

    setFile(() => ({
      ...file,
      [name]: e.target.files[0]   
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('picture', file.picture);
    formData.append('id', localStorage.getItem("userId"));
  
    // fetch('http://localhost:5000/api/upload', {
    //   method: 'POST',   
    //   body: formData
    // })
    // .then(res => res.json())
    // .then(data => {
    //   alert(data.message);
    //   console.log(data);
    // })
    // .catch(err => {
    //   console.error(err);
    // });
    const res = await axios.post('http://localhost:5000/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    alert(res.data.message);
    console.log(res.data);
  };

  return (
    <div>
      <h1>Welcome to Dashboard</h1>

      <button onClick={()=>{
        localStorage.removeItem('userId');
        localStorage.removeItem('message');
        alert("Logged out successfully");
        navigate('/login');
      }}>
        Logout
      </button>

      <form method="POST" encType='multipart/form-data' onSubmit={handleSubmit}>
        <label htmlFor="fileInput">Choose a file:</label>
        <input 
          type="file" 
          id="file" 
          name="picture" 
          onChange={handleChange} 
        />
        <input type="submit" value="Upload" />
      </form>

    </div>
  )
}

export default Dashboard;
