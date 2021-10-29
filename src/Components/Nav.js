import React from 'react';
import Home from './Home';
import Artists from './Artists';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Nav = () => {
    return (
        <Router>
            <nav>
                <Link to ='/' className='navLink'>
                    <button>Home</button>
                </Link>
                <Link to ='/artists' className='navLink'>
                    <button>Artists</button>
                </Link>
            </nav>
            <main>
                <Route
                    exact path='/'
                    component={Home}
                />
                <Route
                    path='/artists'
                    component={Artists}
                />
            </main>
        </Router>
    );
};

export default Nav;