import { useInView } from "react-intersection-observer"
import "./services.scss"
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";

const Services = ({variants}) => {

  const [ref, inView] = useInView();
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(()=>{
      if(inView && !animationPlayed){
        setAnimationPlayed(true)
      }
  },[inView, animationPlayed])

  return (
    <div className="services" ref={ref} >
      <motion.div className="wrapper" variants={variants} initial="initial" animate={animationPlayed || inView ? "animate" : "initial"}>
        <motion.p style={{color: "green"}} variants={variants} >INCREASE TITERS AND SOLUBILITY</motion.p>
        <motion.h1 variants={variants} >TAILOR-MADE
          <br />SOLUTIONS</motion.h1>
          <motion.p variants={variants}  style={{margin: "20px 0"}}>We develop outstanding protein production processes for our customers. We do this by leveraging our proprietary expression technologies and extensive experience to engineer bespoke bacterial strains for each and every customer protein. The strains result in maximal titers of biologically active protein. After a project, the strains are transferred to the customer for use under a license agreement, together with all required documentation and protocols.</motion.p>
          <button>LEARN ABOUT OUR SERVICES</button>
      </motion.div>
    </div>
  )
}

export default Services