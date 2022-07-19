import React, { useRef } from 'react'
import './SoftSkills.css'
import IsVisible from 'react-is-visible'
import { Fade } from 'react-reveal'
import { softskills } from '../../data/softskills.json'
import { useContainerDimensions } from '../../hooks'

const SoftSkills = () => {
  const skillsWrapper = useRef()
  const { width } = useContainerDimensions(skillsWrapper)

  return (
    <Fade duration={2000}>
      <div style={{ position: 'relative', width: '100%', maxWidth: 600 }}>
        <IsVisible once>
          {(isVisibleSkillsWrapper) => (
            <div
              className="skills-wrapper"
              style={
                isVisibleSkillsWrapper
                  ? {
                      transition: '1s opacity ease-in-out',
                      transform: `translateX(0)`,
                      opacity: 1,
                    }
                  : {}
              }
            >
              <h2>Soft Skills</h2>
              <ul className="skills" ref={skillsWrapper}>
                {softskills.map((softskills) => {
                  return (
                    <li className="skill-bar-wrapper" key={softskills.skillName}>
                      <div
                        className="skill-bar"
                        id="tech-bar"
                        style={
                          isVisibleSkillsWrapper
                            ? {
                                transition: `${
                                  1 + softskills.id / 10
                                }s width ease-in-out`,
                                width: width * (softskills.amount / 100),
                              }
                            : {
                                width: 1,
                              }
                        }
                      ></div>
                      <div className="skill-name" id="tech">{softskills.skillName}</div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </IsVisible>
      </div>
    </Fade>
  )
}

export default SoftSkills
