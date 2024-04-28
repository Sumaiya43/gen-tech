import { ImCross } from "react-icons/im";
import "./Sidebar.scss";
import Links from "../links/Links";

const Sidebarr = ({ isOpen , toggleButton }) => {


  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="bg">
        <Links />
        <ImCross className="im-cross" onClick={toggleButton} style={{fontSize: "52px"}}/>
      </div>
    </div>
  );
};



export default Sidebarr;