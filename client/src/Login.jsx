import axios from 'axios' // Axios is a popular JavaScript library used for making HTTP requests from the browser or Node.js. It provides an easy-to-use API for sending asynchronous HTTP requests to REST endpoints and handling responses. Axios supports features like interceptors, request cancellation, and automatic transformation of JSON data, making it a convenient choice for handling API calls in web applications. In this code, we are using Axios to send a POST request to the server for user login authentication.
import React from 'react'
import { useState } from 'react' //  OR import React, { useState } from 'react' , both are correct and commonly used. The first one imports the entire React library and then separately imports the useState hook, while the second one imports both React and useState in a single statement. The choice between the two is mostly a matter of style and preference, as they achieve the same result. In modern React development, it's common to see the second form (importing both React and useState together) for brevity and clarity, especially when using multiple hooks or components from the React library. However, both forms are valid and can be used based on your coding style and project conventions. 
// useState is a hook that allows us to add state to functional components in React. It returns an array with two elements: the current state value and a function to update that state. We can use it to manage and update state within our functional components, enabling us to create dynamic and interactive user interfaces.
import { useNavigate } from 'react-router-dom'  // useNavigate is a hook that allows us to navigate to different routes programmatically in a React application that uses React Router for routing. It provides a way to change the current URL and navigate to different pages without using traditional anchor tags or links.
const Login = () => {
  const navigate = useNavigate();  // useNavigate is a hook provided by the react-router-dom library that allows us to programmatically navigate to different routes in a React application. It returns a function that can be called with a path to navigate to that route. In this code, we are using useNavigate to redirect the user to the dashboard page after a successful login. When the login is successful, we call navigate('/dashboard') to change the URL and render the Dashboard component associated with that route. This allows for seamless navigation within the application without needing to use traditional anchor tags or links.
  const [data, setData] =useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({
      ...prev,
      [name]: value
    }))
    //OR
    // setData(()=>({...data , [name]:value}))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post('http://localhost:5000/api/login', data)
    if(res.data.message == "Login successful"){
      localStorage.setItem("userId", res.data.id);
      localStorage.setItem("message", res.data.message);
      // alert("Login successful");
      navigate('/dashboard'); // After a successful login, we use the navigate function to redirect the user to the dashboard page. This allows us to programmatically change the route and display the appropriate content for logged-in users. By calling navigate('/dashboard'), we are instructing React Router to render the Dashboard component associated with that route, providing a seamless transition for the user after they have successfully logged in.
    }
    else{
      alert("Login failed");
    }
  }
   
  return (
    <>
    <form action="POST" onSubmit={handleSubmit}>
        <input type="email" placeholder='email' name='email' value={data.email} onChange={handleChange}/>
        <br />
        <input type="password" placeholder='password' name='password' value={data.password} onChange={handleChange}/>
        <br />
        <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default Login