import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Posts from './Components/Posts';
import TopSongs from './Components/TopSongs';
import Home from './Components/Home';
// import Nav from './Components/Nav';

const App = () => {
  return (
    <div className='App'>
        <Router>
        <nav>
            <Link to='/' className='Link'>
                Home
            </Link>
            <Link to='/topsongs' className='Link'>
                Top Songs
            </Link>
            <Link to='/posts' className='Link'>
                Posts
            </Link>
        </nav>
        <main>
          <Route exact path='/' component={Home}/>
        </main>
        <main>
          <Route exact path='/posts' component={Posts}/>
        </main>
        <main>
          <Route exact path='/topsongs'
          component={TopSongs}/>
        </main>
      </Router>
    </div>
  );
}

export default App;
