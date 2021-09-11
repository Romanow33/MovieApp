

import styles from './app.module.css'
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link } from 'react-router-dom';
import { MovieDetails } from './pages/movieDetails';
import { LandingPage } from './pages/landingPage';

export function App() {
  return (
    <Router className="App">
      <header>
        <Link to ="/"><h1 className={styles.title}>Movies</h1></Link>
        <Link to ="/movie"/>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          
          <Route path="/"><LandingPage/></Route>
          
        </Switch> 
      </main>
    </Router>
  );
}


