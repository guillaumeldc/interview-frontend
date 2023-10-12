import React from 'react'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = () => {
        console.error("PostDATA")

        const postData = async () => {
            const data = { email, password };
            const request = await fetch('http://10.0.1.25:9999/api-auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const response = await request.json()
            const token = response.token
            localStorage.setItem('token', token);
        }
        postData()
    }


    return (
        <div className='row'>
            <h2>Login</h2>
            <label>Email</label>
            <input type="email" id="email" onChange={e => setEmail(e.target.value)} value={email} />
            <label>Password</label>
            <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} />
            <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login
