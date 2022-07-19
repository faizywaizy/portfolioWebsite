import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'
import SoftSkills from '../softskills/SoftSkills'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I'm Faizan{' '}
              <span role="img" aria-label="lightning">
                😄
              </span>{' '}
            </p>
            <p>
              I'm a product manager with extensive development experience.
            </p>
            <p>
              You can find me working on technical products built on React, Flutter, SQL, 
              and Node.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                I love
              </p>
              <Typewriter
                options={{
                  strings: [
                    'good food',
                    'continuous learning',
                    'bouldering',
                    'solving customer problems',
                    'meeting new people',
                    'identifying customer needs',
                    'fixing bugs',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 5,
                }}
              />
              <p>.</p>
            </div>
            <p>
              I've always loved solving problems, which is why I
              decided to start programming back in 2016. Since
              then, I've created some
              {' '}
              {/* <Link
                className="textLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              > */}
                projects
              {/* </Link> */}
              , worked at some{' '}
              {/* <Link
                className="textLink"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              > */}
                great places
              {/* </Link> */}
              , and met some great people.
            </p>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Toronto, Canada</p>
            </div>
          </div>
        </Fade>
        <Skills />
        <SoftSkills />

      </div>
    </Section>
  )
}

export default About
