import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
    
      <div className= "container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__contenT">
          <div className="about__cards">
            <article className= 'about__card'> 
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1- year working</small>
            </article>

            <article className= 'about__card'> 
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur ...
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talks</a>
        </div>

      </div>
    </section>
    
  )
}

export default About