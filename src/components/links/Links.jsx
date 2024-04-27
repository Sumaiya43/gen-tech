import React from 'react'

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
                <a href="" key={item}>{item}</a>
            ))
        }
    </div>
  )
}

export default Links