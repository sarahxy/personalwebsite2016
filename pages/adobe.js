import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Adobe extends Component {
  render () {
    return (
      <div className="page page--adobe">
        <Helmet
          title={"Photoshop and Illustrator"}
        />
        <div className="page__wrapper">
          <div className="page__heading"><b>Graphic Design and Other Artwork</b></div>
          
          <div className="content__wrapper">  
            <div className="text__wrapper">
              <div className="content__heading">Adobe Photoshop & Illustrator</div>
            </div>

            <div className="images__wrapper">
              <img src={prefixLink("/img/misc/name.png")}/>
              <img src={prefixLink("/img/misc/lesson2.png")}/>
              <img src={prefixLink("/img/misc/eevee.png")}/>
            </div>

            <div className="images__wrapper">
              <img src={prefixLink("/img/misc/peacock.png")}/>
              <img src={prefixLink("/img/misc/florence.png")}/>
              <img src={prefixLink("/img/misc/skyline.png")}/>
            </div>

            <div className="images__wrapper">
              <img src={prefixLink("/img/misc/fennecfox.png")}/>
              <img src={prefixLink("/img/misc/fonts.png")}/>
              <img src={prefixLink("/img/misc/makeup.png")}/>
            </div>

            <div className="images__wrapper">
              <img src={prefixLink("/img/misc/coolcat.png")}/>
              <img src={prefixLink("/img/misc/wine.png")}/>
              <img src={prefixLink("/img/misc/surrealist.png")}/>
            </div>

            <div className="images__wrapper">
              <img src={prefixLink("/img/misc/harrypotter.png")}/>
              <img src={prefixLink("/img/misc/castles.png")}/>
              <img src={prefixLink("/img/misc/movieposter.png")}/>
            </div>

            <div className="images__wrapper">
              <img src={prefixLink("/img/misc/double-exposure.png")}/>
              <img src={prefixLink("/img/misc/hello.png")}/>
              <img src={prefixLink("/img/misc/celestial.png")}/>
            </div>

            <div className="images__wrapper">
              <img src={prefixLink("/img/misc/album.png")}/>
              <img src={prefixLink("/img/misc/lyricposter.png")}/>
            </div>


          </div>
        </div>
      </div>
    );
  }
}
