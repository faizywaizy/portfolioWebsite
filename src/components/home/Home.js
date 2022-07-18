// import for li

import React, { useState } from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import Particles from 'react-particles-js'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
// import Navbar from '../navbar/Navbar'
import config from '../../config'
import faizan from '../../images/faizan.jpg'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className="home-wrapper">
      <div className="home">
        <Particles
          className="particles"
          params={config.particles}
        />
        <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
          <Fade bottom distance="40px">
            <img
              className="faizan"
              alt="faizan"
              src={faizan}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hey, I'm <span className="name">Faizan Ahmed-Chan</span>.{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">👋</span>
            </h1>
            <h1 className="greeting-text">I'm a product manager and <br></br>software developer.</h1>
            <br></br>
            
            <h1 className="greeting-text"> Thanks for looking me up!</h1>
            <br></br>

            <h1 className="greeting-text">This website is still underconstruction</h1>
            
            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
                {/* <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                /> */}
              </Link>
            </div>
          </Fade>
        </div>
        {/* <Navbar /> */}
      </div>
    </div>
  )
}

export default Home
