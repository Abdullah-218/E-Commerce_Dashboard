import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
const Login = () => {
    
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })

    const handleLogin = async () => {
        console.warn(email, password);
        let result = await fetch('http://localhost:5000/login',{
            method: "POST",
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/')
      
        }else{
            alert("PLease enter correct Credentials")
        }
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <input
                type="text"
                className="inputBox"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                className="inputBox"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button 
               onClick={handleLogin} 
               className="appButton" 
               type="button">
                Login
            </button>
        </div>
    );
}

export default Login;