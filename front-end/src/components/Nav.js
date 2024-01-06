import { React } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }
    return(
        <div>
            <img 
            className='logo'
            alt='logo'
            src='https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=600'
            />
            {
                auth ?
            <ul className='nav-ul'>

                <li><Link to="/"> Products </Link></li>
                <li><Link to="/profile"> Profile </Link></li>
                <li><Link to="/add"> Add Product </Link></li>
                <li><Link to="/update"> Update Product </Link></li>
                <li><Link onClick={logout} to="/signup"> Logout({JSON.parse(auth).name}) </Link></li>

            </ul>
                    :
                    <ul className='nav-ul' style={{textAlign:"right"}}>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </ul>
            }
        </div>
    )
}
export default Nav;