import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <Link to="/dogs" className="navbar-brand" href="#">DOGGOS</Link>
            </nav>
        )
    }
}

export default Navbar;