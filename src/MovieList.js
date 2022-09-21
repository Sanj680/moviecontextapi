import {React,useState,useContext} from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'

const MovieList = ()=> {
const [movies,setMovies] = useContext(MovieContext)
    

  return (
    <div>
     
    {movies.map(movie =>(
        <Movie name={movie.name}price={movie.price} key={movie.id} />  //passing movie name and price as a prop to movie component.
    ))}
    </div>
  )
}

export default MovieList