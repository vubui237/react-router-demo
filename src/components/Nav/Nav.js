import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => <div>
    <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/About"><li>About</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
        <Link to="/Other"><li>OtherLink</li></Link>
    </ul>
</div>


export default Nav;