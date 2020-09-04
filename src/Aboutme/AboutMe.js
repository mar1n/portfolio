import React from "react";
import "./Aboutme.scss";

import LedScreen from "../LedScreen/LedScreen";

const Aboutme = () => (
  <>
    <section>
      <article>
        <div className="screen">
          <div className="led-screen">
            <LedScreen />
          </div>
        </div>
        <div className="aboutme">
          <div className="aboutme-item">
            <h1>Szymon Dawidowicz</h1>
          </div>
          <div className="aboutme-item">
            <h1>Web Developer</h1>
          </div>
          <div className="aboutme-item">
            {/* <img src={Szymon} alt='test' /> */}
            <img
              className="image"
              srcSet={`${require(`./szymon-320w.png`)} 320w,
                        ${require(`./szymon-480w.png`)} 480w,
                        ${require(`./szymon-800w.png`)} 800w`}
              sizes="(max-width: 600px) 320px, (max-width: 450px) 320px, 480px"
              src={require(`./szymon-800w.png`)}
              alt="Szymon Dawidowicz"
            />
          </div>

          <div className="aboutme-item">
            <p>
              Creative and collaborative Software Engineer looking for
              JavaScript/React position. Hard working and currently seeking to
              join a company with strong tech culture to enable me capitalize on
              my web development and software systems expertise, with
              opportunities for personal and professional development. I came to
              London 5 years ago, I had started work in kitchen. When I was in
              Poland I've been worked in tech industry for small companies and I
              collaborated remotely with company base in New York. Since one
              year I participated in one of JavaScript meet up. In winter 2019 I
              did a boot camp call Kodiri. Now I would like to come back to the
              tech industry, I am a adoptable person with big ambitions. I would
              like to help others and learn from a new environment.
            </p>
          </div>
        </div>
      </article>
    </section>
  </>
);

export default Aboutme;
