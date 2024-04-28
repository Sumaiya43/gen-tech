import React from 'react'
import { motion } from "framer-motion"

const Links = () => {

    const items = [
        "HOMEPAGE",
        "SERVICES",
        "EVENTS",
        "TECHNOLOGIES",
        "ABOUT",
        
      ]
  return (
    <div className="links">
        {
            items.map((item) => (
                <motion.a href="" key={item} whileHover={{color: "white"}}>{item}</motion.a>
            ))
        }
    </div>
  )
}

export default Links