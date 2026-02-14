import React from 'react'

const Login = () => {
  return (
    <>
    <form action="POST">
        <input type="email" placeholder='email' name='email'/>
        <br />
        <input type="password" placeholder='password' name='password'/>
        <br />
        <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default Login