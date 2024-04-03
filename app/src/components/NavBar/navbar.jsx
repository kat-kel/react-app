import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cycles">Cycles</Link></li>
            <li><Link to='/works'>Works</Link></li>
            <li><Link to='/texts'>Texts</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    );
}


export default NavBar;