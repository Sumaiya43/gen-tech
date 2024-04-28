import { ImCross } from "react-icons/im";
import "./Sidebar.scss";
import Links from "../links/Links";
import { motion } from "framer-motion";

const Sidebarr = ({ isOpen , toggleButton }) => {


  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="bg">
        <Links/>
        <ImCross className="im-cross" onClick={toggleButton} style={{fontSize: "32px", cursor: "pointer"}}/>
      </div> 
    </div>
  );
};



export default Sidebarr;