import {React,useContext} from 'react'
import { MovieContext } from './MovieContext' //import MovieContext in children components and MovieProvider in app.js
import './App.css'

const Nav=()=> {
  const [movies,setMovies] = useContext(MovieContext)
  return (
    <div className='nav'>
        <h3>Movie list</h3>
        <p> List of movies: {movies.length}</p>
    </div>
  )
}

export default Nav