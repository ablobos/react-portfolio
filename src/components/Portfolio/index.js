import React from "react";
import passwordGenerator from "../../assets/photos/passwordGenerator.png";
import cosmicDuck from "../../assets/photos/cosmicDuck.png";
import horiseon from "../../assets/photos/horiseon.png";
import weatherForecast from "../../assets/photos/weatherForecast.png";
import planner from "../../assets/photos/planner.png";
import javascriptQuiz from "../../assets/photos/javascriptQuiz.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://ablobos.github.io/password_generator/">
                {""}
                <img
                  src={passwordGenerator}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Password Generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
                The goal here is to modify the starter code to create an
                application that enables users to generate random passwords
                based on criteria that will propmt them to select. Some of the
                criteria was to be presented with a series of prompts such as
                length, character volume, and character types and display the
                final result. This will be my thrid challenge and is part of my
                JavaScript education and training.
              </p>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://crystal-coding-time.github.io/supreme-octo-system/">
                {""}
                <img
                  src={cosmicDuck}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Cosmic Duck"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Cosmic Duck Project</h4>
              <p>
                This project allows users to search for a topic they'd like to
                learn more about, and see educational resources from Wikipedia
                and YouTube on one page. We built this project to be a free
                resource for people who want to learn new skills. Through
                building it, we learned to use the CSS framework Bulma, and
                practiced our skills at pulling and manipulating data from
                third-party APIs.
              </p>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://ablobos.github.io/captainhoriseon_refactorepisode/">
                {""}
                <img
                  src={horiseon}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Horiseon"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Horiseon</h4>
              <p>
                Project is to focus on code refactoring in web development. In
                this project, " a marketing agency has hired me to refactor an
                existing site to make it more accessible.
              </p>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://ablobos.github.io/is_it_coldoutside/">
                {""}
                <img
                  src={weatherForecast}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather Forecast"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Forecast</h4>
              <p>
                This app gives users the ability to search for metropolitan
                cities and find quick details on the weather in hourly or 5 day
                format using Celsius or Fahrenheit units.
              </p>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://ablobos.github.io/unique_digitizedplanner/">
                {""}
                <img
                  src={planner}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Planner"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Planner</h4>
              <p>
                A planner created to allow users to easily track and manage
                daily duties. User can add, delete, and check off certain list
                items they have added to plan their day more effectively and
                keep on schedule.
              </p>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://ablobos.github.io/web_iqquiz/">
                {""}
                <img
                  src={javascriptQuiz}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Javascript Quiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Javascript Quiz</h4>
              <p>
                My goal was to sharpen up my vanilla javascript skills and use a
                tutorial on top of using recorded Zoom class recordings. I used
                Brian Design to put life into this project and benefited from
                his simplicity and tiny tips about the steps. The app should
                have features such as a bar to show progress, color distinction
                when selecting correct and incorrect answers to name a few.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
