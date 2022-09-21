import {React,useState,createContext} from 'react'

export const MovieContext = createContext(); //function
//whenever we wanna use info from MovieContext we import that 
export const MovieProvider =(props)=>{  //movie provider gives info to the components , imported only in app.js
    const [movies,setMovies] = useState([
        {
            name: 'Harry Potter',
            price: "500 Rs",
            id:1
        },
        {
            name: 'Narnia',
            price: "400 Rs",
            id:2
        },
        {
          name: 'Lion King',
          price: "600 Rs",
          id:3
        }
      ])
        return(
          <MovieContext.Provider value={[movies,setMovies]}>

            {props.children}
          </MovieContext.Provider>
        )
}