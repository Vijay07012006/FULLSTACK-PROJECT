import { useState } from 'react'
import './App.css'
import Home from './Home'
import Login from './Login'
import Dashboard from './Dashboard'
import {BrowserRouter , Routes, Route} from 'react-router-dom'  // BrowserRouter is a component provided by the react-router-dom library that enables client-side routing in a React application. It uses the HTML5 history API to keep the UI in sync with the URL, allowing for seamless navigation between different components or pages without requiring a full page reload. By wrapping our application with BrowserRouter, we can define routes and navigate between them using components like Routes and Route, creating a single-page application (SPA) experience for users. Routes is a component that is used to define a collection of Route components in a React application. It serves as a container for all the routes in the application and allows us to specify which component should be rendered based on the current URL path. Each Route component inside Routes defines a specific path and the corresponding component that should be rendered when that path is matched. This setup enables us to create a multi-page application experience while still maintaining the benefits of a single-page application (SPA) architecture. Route is a component that is used to define a specific route in a React application. It takes two main props: path and element. The path prop specifies the URL path that should be matched for this route, while the element prop specifies the React component that should be rendered when the path is matched. When the user navigates to a URL that matches the specified path, the corresponding component will be rendered, allowing for dynamic content rendering based on the URL. This is a fundamental part of client-side routing in React applications using react-router-dom. 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
