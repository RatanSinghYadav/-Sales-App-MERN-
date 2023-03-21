import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link className="nav-link clr" to='/'>Sales App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link clr" to='/add'>Add Sales</Link>
                            <Link className="nav-link clr" to='/top'>Top 5 Sales</Link>
                            <Link className="nav-link clr" to='/total'>Today's Total Revenue</Link>
                            <Link className="nav-link clr" to='/login'>Login</Link>
                            <Link className="nav-link clr" to='/register'>Register</Link>
                            <Link className="nav-link clr" to='/logout'>Logout</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;