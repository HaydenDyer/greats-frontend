import React from 'react';
import Home from './Home';
import Artists from './Artists';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Nav = () => {
    return (
        <Router>
            <div>
                <Link to ='/' className='navLink'>
                    <button>Home</button>
                </Link>
                <Link to ='/artists' className='navLink'>
                    <button>Artists</button>
                </Link>
            </div>
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