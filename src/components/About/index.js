import React from "react";
import profileImage from "../../assets/photos/pfp.png";

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            I'm A.B. Villalobos, a Maryland resident originally from Houston,
            Texas. My favorite activities while I'm not working are hiking,
            running, exploring, traveling, listening to audiobooks, and
            learning. When I'm at work, my main priorities are getting along
            with my coworkers and figuring out how I can benefit the team. Since
            2005, I've dedicated my life to the construction industry, but I'm
            always studying about the tech sector in the hopes that one day I
            may apply my soft skills and preparedness there and take on fresh,
            enjoyable tasks.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
