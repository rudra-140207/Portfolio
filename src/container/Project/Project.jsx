import React from 'react'
import './Project.scss'
import projectData from '../../data/project'

const Project = () => {
  const project = projectData

  return (
    <>
      <section id="project" className="project">
        <div className="container">
          <h2 className="section__heading">Projects</h2>
          <div className="project__display">
            <div className="row">
              {project.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12 py-3">
                    <div className="project__item comp">
                      <div className="project__item-img">
                        <img className="img-fluid" src={item.img} alt="YouTube Playlist Length" />
                      </div>
                      <div className="project__item-about">
                        <div className="project__name">
                          <h3 >{item.name}</h3>
                        </div>
                        <div className="project__item-about-content">
                          <p>{item.description}</p>
                          
                            {item.techStack && (
                              <>
                                <div className="project__item-about-tech">
                                  <h5>Tech Stack</h5>
                                </div>
                                <ul>
                                  {item.techStack.map((tech, index) => {
                                    return <li key={index}>{tech}</li>
                                  })}
                                </ul>
                              </>
                            )}

                            {item.components && (
                              <>
                                <div className="project__item-about-tech">
                                  <h5>Components</h5>
                                </div>
                                <ul>
                                  {item.components.map((tech, index) => {
                                    return <li key={index}>{tech}</li>
                                  })}
                                </ul>
                              </>
                            )}
                        </div>
                        <div className="project__item-links">
                          {item.complete ? (
                            <>
                              {item.liveDeploy && (
                                <div className="project__item-links-item live">
                                  <a href={item.liveDeploy} target="_blank" rel="noreferrer">Live Deployment <i className="fas fa-external-link-alt"></i></a>
                                </div>
                              )}

                              {item.sourceCode && (
                                <div className="project__item-links-item code">
                                  <a href={item.sourceCode} target="_blank" rel="noreferrer">Source Code <i className="fa-brands fa-github"></i></a>
                                </div>
                              )}
                            </>
                          ) : (
                            <>
                              <div className="project__item-links-item code">
                                In Development <i className="fa-solid fa-code"></i>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project