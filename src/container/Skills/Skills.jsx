import React from "react";
import "./Skills.scss";

import skills from "../../data/skills";

const Skills = () => {
  const { skill } = skills;
  return (
    <>
      <section id="skill" className="skills">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="skill__heading-1">
                <h2 className="section__heading">
                  Skills and <br />
                  Experience
                </h2>
              </div>
              <div className="skill">
                <h3 className="skill__heading-2">
                  <b className="tags">&lt;</b>My Skills
                  <b className="tags">/&gt;</b>
                </h3>
                <div className="row justify-content-center text-center">
                  {React.Children.toArray(
                    skill.map((item) => {
                      return (
                        <>
                          <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                            <div className="skill__detail">
                              <div className="skill__icon">
                                <i className={item.skill}></i>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
