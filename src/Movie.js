import React from 'react'
import './App.css'
const Movie =({name,price,id})  =>{  //destructured props to use it directly
 

  return (
    <div className="movie">
        name: {name}  price : {price}
     
    </div>
  )
}

export default Movie
