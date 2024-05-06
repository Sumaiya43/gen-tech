import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Hero2 from './components/hero/Hero2'
import Services from './components/services/Services'
import Technologies from './components/technologies/Technologies'
import Content from './components/content/Content'


function App() {


  return (
    <>
      <section>
        <Navbar />
        <Hero />
        <Hero2 />
      </section>
      <section>
        <Services />
      </section>
      {/* <section>
        <Technologies/>
      </section> */}
      <section>
        <Content/>
      </section>
    </>
  )
}

export default App
