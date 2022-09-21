import React, { useState, useContext } from 'react'
import { MovieContext } from './MovieContext'

const AddMovies = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [movies, setMovies] = useContext(MovieContext)

  const updateName = (e) => {
    setName(e.target.value)
  }
  const updatePrice = (e) => {
    setPrice(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setMovies((prevMovies) => [  // we can get the latest info about state
      ...prevMovies, //... ia rest operator used to make a copy of the existing movie list and then adds new array of objs
      { name: name, price: price, id: new Date().getTime() }, //we return an array because movielist is an array with objects like name price id
    ])
    setName('')
    setPrice('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={name} onChange={updateName} />
        <label htmlFor="">Price</label>
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default AddMovies

