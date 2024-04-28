import { FaBraille } from "react-icons/fa6"
import Links from "../links/Links"
import Sidebarr from "../sidebar/Sidebarr"
import "./Navbar.scss"
import { motion } from "framer-motion"
import { useState } from "react"



const Navbar = () => {
 
    const [isOpen , setOpen] = useState(false);

    const toggleButton = () => {
        // console.log("Toggle button clicked");
        setOpen(!isOpen);
    }

  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="logo">
                <img src="/logo.png" alt="" />
                <div className="name">
                    <span>GEN TECH</span>
                    <p>SOLUTIONS</p>
                </div>
            </div>
            <FaBraille className="braille-icon" onClick={toggleButton} />
            <div className="nav-link">
                <Links/>
                <motion.button whileHover={{backgroundColor: "green", color: "white"}}>CONTACT US</motion.button>
            </div>
        </div>
        {
            isOpen ? <Sidebarr isOpen={isOpen} toggleButton={toggleButton} /> : ""
        }
    </div>
  )
}

export default Navbar