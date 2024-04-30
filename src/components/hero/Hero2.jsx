import React, { useEffect, useState } from 'react'
import "./hero2.scss"
import { useInView } from 'react-intersection-observer'




const Hero2 = () => {

  const [proteinCount, setProteinCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [vectorCount, setVectorCount] = useState(0);

  const [proteinRef, proteinInView] = useInView();
  const [experienceRef, experienceInView] = useInView();
  const [vectorRef, vectorInView] = useInView();

  useEffect(() => {
    if (proteinInView) {
      const animateNumber = () => {
        const target = 500;
        let count = 0;

        const interval = setInterval(() => {
          if (count < target) {
            count++;
            setProteinCount(count);
          } else {
            clearInterval(interval);
          }
        },)
      }
      animateNumber()
    }


  }, [proteinInView])

  useEffect(() => {
    if (experienceInView) {
      const animateExperience = () => {
        const target = 20;
        let count = 0;

        const interval = setInterval(() => {
          if (count < target) {
            count++;
            setExperienceCount(count);
          } else {
            clearInterval(interval);
          }
        }, 20)
      }
      animateExperience()
    }
  }, [experienceInView])

  useEffect(() => {
    if (vectorInView) {
      const animateVector = () => {
        const target = 300;
        let count = 0;

        const interval = setInterval(() => {
          if (count < target) {
            count++;
            setVectorCount(count);
          } else {
            clearInterval(interval);
          }
        },)
      }
      animateVector()
    }
  }, [vectorInView])


  return (
    <div className='hero2'>
      <div className="wrapper">
        <div className="left-hero">
          <p>STATE-OF-THE-ART STRAIN DEVELOPMENT</p>
          <h1>UNIQUE SOLUTIONS FOR UNIQUE PROBLEMS</h1>
          <button>CONTACT US FOR FEASIBILITY STUDIES</button>
        </div>
        <div className="right-hero">
          <div className="para">
            <p>Every protein is unique and presents unique manufacturing challenges. For microbial protein production, developers frequently turn to off-the-shelf expression vectors which often results in low titers or inactive protein. Vectron Biosolutions offers a different approach by developing tailor-made expression vectors for each protein.</p>
            <p>Providing unique solutions to unique problems is how we approach protein production challenges. Our proprietary technologies, in-house expertise and decades of experience enable robust protein production and scalability otherwise not possible.</p>
          </div>
          <hr />
          <div ref={proteinRef}>
            <h1>{proteinCount}+</h1>
            <p>PROTEINS SUCCESSFULLY PRODUCED, FROM SIMPLE ENZYMES TO COMPLEX BIOLOGICS</p>
          </div>
          <hr />
          <div ref={experienceRef}>
            <h1>{experienceCount}+</h1>
            <p>YEARS OF EXPERIENCE DEVELOPING ROBUST & COST-EFFICIENT PRODUCTION STRAINS</p>
          </div>
          <hr />
          <div ref={vectorRef}>
            <h1>{vectorCount}+</h1>
            <p>UNIQUE EXPRESSION VECTORS *</p>
          </div>
          <hr style={{marginBottom: "10rem"}} />
        </div>
      </div>
    </div>
  )
}

export default Hero2