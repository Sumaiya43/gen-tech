import "./content.scss"
import { motion } from "framer-motion"

const Content = () => {


    const variants = {
        initial: {
            y: +50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.5

            },
        }
    }

    return (
        <div className="content">
            <motion.div className="wrapper">
                <motion.div className="title" variants={variants} initial="initial" animate="animate">
                    <motion.p variants={variants}>OUR CONTENT</motion.p>
                    <motion.h1 variants={variants}>ARTICLES BY GEN <br />TECH SOLUTIONS</motion.h1>
                </motion.div>
                <div className="box-wrapper">
                    <div className="box">
                        <p>TECH INNOVATION</p>
                        <h1>TOWARDS A NEW INDUSTRY STANDARD FOR BACTERIAL PROTEIN PRODUCTION</h1>
                        <hr />
                        <p style={{ color: "gray", fontWeight: "300" }}>Selective secretion by E. coli will bring a revolutionary improvement in ease and cost of recombinant protein production processes.</p>
                    </div>
                    <div className="box">
                        <p>BUSINESS</p>
                        <h1>THE VALUE OF PATENT PROTECTION FOR BACTERIAL PRODUCTION STRAINS</h1>
                        <hr />
                        <p style={{ color: "gray", fontWeight: "300" }}>Vectron’s unique strain development processes can enable patenting of the resulting production strain.</p>
                    </div>
                    <div className="box">
                        <p>TECH INNOVATION</p>
                        <h1>TOWARDS A NEW INDUSTRY STANDARD FOR BACTERIAL PROTEIN PRODUCTION</h1>
                        <hr />
                        <p style={{ color: "gray", fontWeight: "300" }}>Trond Erik Vee Aune, Head of Vectron Bioslolutions, shares his experience and learnings from over a decade.</p>
                    </div>
                    <div className="box">
                        <p>BUSINESS</p>
                        <h1>REGULATORY CONSIDERATIONS WHEN SELECTING A DEVELOPMENT</h1>
                        <hr />
                        <p style={{ color: "gray", fontWeight: "300" }}>Ensuring regulatory success begins with a reliable expression system.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Content