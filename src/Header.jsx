import React from "react"

const Header=({title})=>{
  return(
    <header>
      <h1>{title}</h1>
    </header>
   )
}
Header.defaultprops={
  title:"TO DO LIST"
}

export default Header