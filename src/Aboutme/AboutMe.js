import React from 'react';
import './Aboutme.css';
import Szymon from './szymonPortfolio.png';
const Aboutme = () =>
    <>
        <div className='aboutme'>
            <h1>Szymon Dawidowicz</h1>
            <h2>Web Developer</h2>
            <p>Creative  and  collaborative  Software  Engineer looking  for  JavaScript/React  position.  Hard working  and  currently  seeking  to join a company with strong tech culture to enable me capitalize   on   my   web   development   and software  systems  expertise,  with  opportunities for personal and professional development. I  came  to  London  5  years  ago,  i  had  started work in kitchen. When i was in Poland i beenworked  in  tech  industry  for  small  companies and i corporate remotely with company base in New York. Since  one  year  i  participated  in  one  of JavaScript  meet  up. In  winter    2019  i  did coding boot camp Kodiri. Now i would like to come  back  to  tech  industry,  I'm  adoptable person  with  big  ambitions. I  like  help  others and learn from my environment.</p>
            <img src={Szymon} alt='test' />
        </div>
    </>

export default Aboutme;
