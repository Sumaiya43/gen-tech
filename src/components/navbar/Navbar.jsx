import Links from "../links/Links"
import "./Navbar.scss"

const Navbar = () => {
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
            <div className="nav-link">
                <Links/>
                <button>CONTACT US</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar