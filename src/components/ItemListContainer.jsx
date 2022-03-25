import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <h1 className='text-orange-400 text-center text-5xl font-bold'>Hola <span className='text-red-500'>{greeting}</span>, como estas?</h1>
  )
}

export default ItemListContainer