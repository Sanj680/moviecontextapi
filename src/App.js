
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import {MovieProvider} from './MovieContext' //import MovieProvider in app.js
import AddMovies from './AddMovies';
function App() {
  return (
    <div className="App">
      <MovieProvider>
      <Nav/>
      <AddMovies />
      <MovieList></MovieList>
      </MovieProvider>
    </div>
  );
}

export default App;
