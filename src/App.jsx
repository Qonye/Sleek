import React from 'react'
import './App.scss'

// Import components
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
