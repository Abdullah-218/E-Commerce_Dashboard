import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout =()=>{
        console.warn("Logging out...");
        localStorage.clear();
        navigate('/signup');
    }

    return(
        <div>
            <img 
            alt="logo"
            className='logo'
            src = 'https://yt3.googleusercontent.com/ytc/AIdro_lpwLOOTumlQiiMYMHbBgJfQXVyRBGrZdTZ6NbtY-YA8wg=s900-c-k-c0x00ffffff-no-rj'/>
            {
            auth ? 
            <ul className="nav-ul">
                <li><Link to = "/">Products</Link></li>
                <li><Link to = "/add">Add Products</Link></li>
                <li><Link to = "/update">Update Products </Link></li>
                <li><Link to = "/profile">Profile</Link></li>
                <li><Link onClick={logout} to = "/signup">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
            <ul className='nav-ul nav-right'>
                <li><Link to = "/signup">SignUp</Link></li>
                <li><Link to = "/login">Login</Link></li>
            </ul>
            }
        </div>
    )
}

export default Nav; 