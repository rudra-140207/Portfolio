import React from 'react'
import './About.scss'

import about from "../../data/about"

const About = () => {
  return (
    <section className="about py-5" id="about">
      <div className="container">
        <h2 className="section__heading text-center py-5">About Me</h2>
        <div className="row justify-content-center">

          {
            React.Children.toArray(
              about.map((item) => {

                return (
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3">
                    <div className="about__item mx-2 py-4 px-2">
                      <div className="about__item-img ">
                        <img className="img-fluid" src={item.img} alt="" />
                      </div>
                      <div className="about__item-content">
                        <div className="about__item-heading">
                          <h3>{item.name}</h3>
                          <div className="about__item-para">
                            <p>{item.description}</p>
                          </div>
                          <div className="about__item-details">
                            <div className="about__item-section-1 text-center">
                              <h5>{item.h1}</h5>
                              <p>{item.h1Array.join(', ')}</p>
                            </div>
                            <div className="about__item-section-2 text-center">
                              <h5>{item.h2}</h5>
                              <ul>
                                {
                                  React.Children.toArray(
                                    item.h2Array.map((item2) => {
                                      return (
                                        <li>{item2}</li>
                                      )
                                    })
                                  )
                                }
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>
      </div>
    </section>
  )
}

export default About