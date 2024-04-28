import React from 'react'
import "./hero.scss"
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { motion } from 'framer-motion';

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
        <div className='hero'>
            <div className="wrapper">
                <div className="bio-image">
                    <motion.img variants={textVariants} initial="initial" animate="scrollButton"  src="/nature.png" alt="" />
                </div>
                <div className="text-items">
                    <h1>MICROBIAL PROTEIN PRODUCTION EXPERTS</h1>
                    <hr />
                    <div className="para">
                        <IoCheckmarkDoneCircle className='icon' />
                        <p className='text'>Record-high titers</p>
                    </div>
                    <div className="para">
                        <IoCheckmarkDoneCircle className='icon' />
                        <p className='text'>Microbial Secretion</p>
                    </div>
                    <div className="para">
                        <IoCheckmarkDoneCircle className='icon' />
                        <p className='text'>Soluble production</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero