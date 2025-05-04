import React from 'react'
import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Count from './components/Count.jsx'
import About from './components/About.jsx'
import Colab from './components/Collab.jsx'
import How from './components/How.jsx'
import Service from './components/Service.jsx'
import Comment from './components/Comment.jsx'
import Pricing from './components/Pricing.jsx'
import Backup from './components/Backup.jsx'
import Contact from './components/Contact.jsx'
import Button from './components/Button.jsx'

function App() {

  return (
    <> 

      <main className="main" id="top" scroll-to-top="scroll-to-top">
        <div className="content">
          <Nav/>
        <div data-bs-target="#navbar" data-bs-spy="scroll" tabindex="0">
          <Hero/>
          <Count/>
          <About/>
          <Colab/>
          <How/>
          <Service/>
          <Comment/>
          <Pricing/>
          <Backup/>
          <Contact/>
        </div>
          <Button/>
          <Footer/>
      </div>
      </main>

    </>
  )
}

export default App
