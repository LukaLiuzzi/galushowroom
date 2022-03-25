import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
      <>
    <FontAwesomeIcon icon={faCartShopping} className="text-white text-2xl"/>
    <span className='text-white px-1'>4</span>
      </>
  )
}

export default CartWidget