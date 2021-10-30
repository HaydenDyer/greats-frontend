import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Posts from './Components/Posts';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <main>
          <Route exact path='/' component={Posts}/>
        </main>
      </Router>
    </div>
  );
}

export default App;
