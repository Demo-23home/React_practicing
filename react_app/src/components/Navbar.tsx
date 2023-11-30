import React from 'react'

interface Props{
    cartItemsCount: number;
}


export const Navbar = ({cartItemsCount}:Props) => {

  return (
    <div>NavBar:{cartItemsCount}</div>
  )
}

export default Navbar
