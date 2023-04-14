import React, { useEffect, useState } from 'react'
import { Link , useLocation } from 'react-router-dom' // here the useLocation is used to make the toggled NavBar disappear on the basis of page like projects,home
import "../styles/NavBar.css"
import ReorderIcon from "@material-ui/icons/Reorder"

function NavBar() {

    const [expandNavBar , setExpandNavBar] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setExpandNavBar(false) //location works first and then the setExpandNavBar
    } , [location] ) // here we pass location in dependency array so therefore the useEffect will act only when there is a change in the location

  return (
    <div className="navbar" id = {expandNavBar ? "open" : "close"} > {/* here the open and close are css ids(look at NavBar.css) , and the navbar is toggled on the basis of that */}
      <div className='toggleButton'>
        <button onClick={() => {setExpandNavBar((prev) => !prev )}} > <ReorderIcon /> </button>
      </div>
      <div className='Links' >
        <Link to="/" > Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/biodata"> BioData </Link>
      </div>
    </div>
  )
}

export default NavBar
