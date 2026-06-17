import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[data,setData] = useState({})

    const handleClick = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setPassword("");

        const data = {
            name,
            email,
            password,
        }

        localStorage.setItem("formData", JSON.stringify(data))
    }
    const getData=()=>{
        const user = localStorage.getItem("data")
        setData(JSON.parse(user))
    }

    return (
        <div>
            <h1>Sign Up Form</h1>
            <form action="/submit" method="post" onSubmit={handleClick}>
                <div>
                    <label htmlFor="name">Name:</label> <br />
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label> <br />
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label> <br />
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div> <br></br>
                <button type="submit">Submit</button>
            </form>
            <button onClick={getData}>Get Data:</button>
            <p>{data.name}</p>
            <p>{data.email}</p>
        </div>
    )
}

export default Form
