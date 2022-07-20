import React from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
// import Experience from './components/experience/Experience'
// // import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import TopButton from './components/topButton/TopButton'
import FeedbackButton from './components/feedbackButton/FeedbackButton'

function App() {
  return (
    <div className="App">
      <FeedbackButton />
      <Home />
      <About />
      {/* 
      <Experience />
       */}
      <TopButton />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
