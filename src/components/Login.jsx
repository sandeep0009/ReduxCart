import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Login = () => {
    const[username,setname]=useState("");
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
    const handleLogin=async()=>{
        try{
            
            const res = await axios.post('https://dummyjson.com/auth/login', { username, password });
            console.log(res.data);
            const token=res.data.token;
           if(token){
            localStorage.setItem('token',token);
            navigate('/')
           }

       
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <div>
        <div className="form-actions">

            <div className="container flex justify-center">
                <div className="heading">
                    LogIn
                </div>

                <div className="input-fields">
                
                    <input type="text" placeholder="enter your username" value={username} onChange={(e)=>setname(e.target.value)}/>
                    <input type="text" placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                     <button onClick={handleLogin}>Log In</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login