import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Hero2 from './components/hero/Hero2'
import Services from './components/services/Services'
// import Technologies from './components/technologies/Technologies'
import Content from './components/content/Content'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



function App() {

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
            staggerChildren: 0.3

        },
    }
}


  return (
    <>
      <section>
        <Navbar />
        <Hero />
        <Hero2 />
      </section>
      <section>
        <Services variants={variants} />
      </section>
      {/* <section>
        <Technologies/>
      </section> */}
      <section>
        <Content/>
      </section>
      <section>
        <Contact/>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  )
}

export default App
