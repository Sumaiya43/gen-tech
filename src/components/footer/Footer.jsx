import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
      <div className="logo">
                <img src="/logo.png" alt="" />
                  <div className="name">
                      <span>GEN TECH</span>
                      <p>SOLUTIONS</p>
                  </div>
      </div>
      <ul>
        <li>CONTACT US</li>
        <li>ABOUT US</li>
        <li>SERVICES</li>
        <li>SHOWCASE</li>
        <li>SUPPORT</li>
      </ul>

      <div className="subscribe">
        <div className="text">
        <input type="text" placeholder="email" />
        </div>
        <button>SUBSCRIBE</button>
      </div>
      </div>
    </div>
  )
}

export default Footer