import React from 'react'
import "./hero.scss"
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { motion } from 'framer-motion';



const variants = {
    initial: {
        y: +50, 
        opacity: 0 
    },
    animate: {
        y: 0, 
        opacity: 1,
        transition: {
            duration: 1 ,
            
        },
}
}

const textVariants = {
    
    initial: {
        y: 0,
        x: 0,
    },
    scrollButton: {
        y: 20,
        x:10,
        transition: {
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
        }
    },
}

const Hero = () => {

    
    return (
        <motion.div className='hero' >
            <div className="wrapper" >
                <div className="bio-image">
                    <motion.img variants={textVariants}  initial="initial" animate="scrollButton"  src="/nature.png" alt="" />
                </div>
                <motion.div className="text-items" initial="initial" animate="animate" >
                    <h1>MICROBIAL PROTEIN PRODUCTION EXPERTS</h1>
                    <hr />
                    <motion.div className="para" variants={variants}>
                        <IoCheckmarkDoneCircle className='icon' />
                        <p className='text'>Record-high titers</p>
                    </motion.div>
                    <motion.div className="para" variants={variants}>
                        <IoCheckmarkDoneCircle className='icon' />
                        <p className='text'>Microbial Secretion</p>
                    </motion.div>
                    <motion.div className="para" variants={variants}>
                        <IoCheckmarkDoneCircle className='icon' />
                        <p className='text'>Soluble production</p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Hero