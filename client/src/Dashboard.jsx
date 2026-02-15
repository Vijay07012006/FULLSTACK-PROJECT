import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  let message = localStorage.getItem("message");
  // if(message !== "Login successful"){
  //   alert("Please login first");
  //   navigate('/login');
  // }
  // else{
  //   alert("Welcome to dashboard");
  //   process.exit(0);
  // }

  //OR 

  // if(message == "Login successful"){
  //   // alert("Welcome to dashboard");
  //   console.log('Logged in');
    
  // }
  // else{
  //   alert("Please login first");
  //   navigate('/login');
  // }

  //OR

  if(message == 'Login successful'){
    console.log('Logged in');
  }
  else{
    useEffect (()=>{
      alert("Please login first");
      navigate('/login');
    },[])
  }

  const [file , setFile] = useState({picture: ""});
  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFile(prevFile => ({
    //   ...prevFile,
    //   [name]: value
    // }));

    // OR

    setFile(()=>({...file , [name]:value}))
    // console.log(file);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(file);
    const formData = new FormData();
    formData.append('picture', file.picture);
    formData.append('id', localStorage.getItem("userId"));
    // console.log(formData);
    fetch('http://localhost:5000/api/upload', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
    
  }
  

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <button onClick={()=>{
        localStorage.removeItem('userId'); // We remove the userId from localStorage to clear the user's session data, ensuring that they are effectively logged out and cannot access protected routes without logging in again.
        localStorage.removeItem('message'); // We also remove the message from localStorage to clear any login-related information, further ensuring that the user's session is fully cleared upon logout. This helps maintain security and prevents unauthorized access to protected routes in the application.
        alert("Logged out successfully");
        navigate('/login'); // After clearing the user's session data, we use the navigate function to redirect them to the login page. This allows us to guide the user back to the login screen where they can log in again if they wish to access the dashboard or other protected routes. By calling navigate('/login'), we ensure that the user is taken to the appropriate page after logging out, providing a seamless user experience and maintaining the flow of the application.
      }}>Logout</button>

      {
        /*file uploading code started*/
        
         <form action="POST" encType='multipart/form-data' onSubmit={handleSubmit}>
            {/* We set the encType attribute to 'multipart/form-data' to specify that the form will be used for file uploads. This encoding type allows the form to send files along with other form data to the server when the form is submitted. By using 'multipart/form-data', we ensure that the file data is properly encoded and can be processed by the server-side code that handles file uploads. Without this encoding type, the file data would not be sent correctly, and the server would not be able to handle the file upload as intended.  */}
          <label htmlFor="fileInput">Choose a file:</label>
          <input type="file" id="file" name="picture" onChange={handleChange} />
          <input type="submit" value="Upload" />
        </form>

        /*file uploading code started */
      }
    </div>
  )
}

export default Dashboard

// npm init -y -- creates a package.json file with default values, allowing you to manage your project's dependencies and scripts. The -y flag automatically answers "yes" to all prompts, making the initialization process faster and more convenient. This command is commonly used when setting up a new Node.js project or when you want to quickly create a package.json file without going through the interactive prompts.  
// npm install express multer cors -- This command installs the Express framework, Multer middleware for handling file uploads, and CORS middleware for enabling Cross-Origin Resource Sharing in a Node.js project. Express is a popular web application framework that simplifies the process of building server-side applications, while Multer allows you to handle file uploads easily. CORS is used to enable cross-origin requests, allowing your server to accept requests from different domains. By running this command, you can set up your Node.js project with the necessary dependencies to create a server that can handle file uploads and manage cross-origin requests effectively.
// npm install concurrently --save-dev -- This command installs the Concurrently package as a development dependency in your Node.js project. Concurrently is a utility that allows you to run multiple commands concurrently in the terminal, which is particularly useful for running both the client and server sides of a full-stack application simultaneously. By using this command, you can set up your project to run both the frontend and backend servers with a single command, improving your development workflow and efficiency.