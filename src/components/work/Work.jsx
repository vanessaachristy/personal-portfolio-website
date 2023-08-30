import { React, useEffect } from 'react'
import Aos from 'aos'
import './work.css'
import { workExperience } from './config'

export default function Work() {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="work" id="work">
            <div className="work-title" data-aos="fade-up">
                work experience.
            </div>
            <div className="work-container">
                {workExperience.map((work) => {
                    return (
                        <div className="work-box" data-aos="zoom-in">
                            <div className="work-logo">
                                <img src={work.logo} alt="" />
                            </div>
                            <div className="work-description">
                                <h1>{work.name}</h1>
                                <p>
                                    <i>{work.period}</i>
                                </p>
                                <h3>{work.department}</h3>
                                <ul>
                                    {work.jobscope.map((job) => {
                                        return <li>{job}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    )
                })}

                {/* <div className="work-description">
            <h1>Software Developer Intern, Singtel</h1>
            <p>
              <i>May 2022 - Aug 2022</i>
            </p>
            <br />
            <h3>Group Enterprise 5G/IOT Product House</h3>
            <p>
              • Developed the UI for a Credential Management Web Application
              using Vue.js
            </p>
            <p>• Build the REST APIs for the services using Spring Boot</p>
            <p>• Create unit testing for the REST services using JUnit</p>

            
          </div> */}
            </div>
        </div>
    )
}
