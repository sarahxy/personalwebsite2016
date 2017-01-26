import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll (event) {
      let scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);

      this.setState({
        transform: itemTranslate
      });
  }

  render () {
    return (
      <div className="page page--index">
        <Helmet
          title={config.siteTitle}

        />
        <div className="portfolio__title">
          <div className="portfolio__title--name">SARAH HUANG</div>
          <div className="portfolio__title--description">ux designer & front-end developer</div>
          
          <div className="portfolio__title--socialmedia">
            <div className="ic ic--1">
              <a href="https://www.linkedin.com/in/sarahxhuang" target="_blank">
                <img src={ prefixLink("/img/linkedin_icon.png") }/>
              </a>
            </div>
            <div className="ic ic--2">
              <a href="https://github.com/sarahxy" target="_blank">
                <img src={ prefixLink("/img/github_icon.png") }/>
              </a>
            </div>
            <div className="ic ic--3">
              <a href="https://www.hackster.io/sarahxy" target="_blank">
                <img src={ prefixLink("/img/hackster_icon.png") }/>
              </a>
            </div>
            <div className="ic ic--4">
              <Link
              to={prefixLink('/img/MyResume.pdf')} target="_blank">
                <img src={ prefixLink("/img/resume_icon.png") }/>
              </Link>
            </div>
          </div>

        </div>

        <div className="portfolio__wrapper">
          <Link
              to={prefixLink('/foodquest/')}>
            <div className="work work--1">
              <img src={prefixLink('/img/foodquest/foodquest_bg.jpg')}/>
              <div className="work--text"><b>Food Quest</b></div>
              <div className="work--tools">Framer.js, Sketch</div> 
            </div>
          </Link>
          <Link
              to={prefixLink('/irc/')}>
            <div className="work work--2">
              <img src={prefixLink('/img/irc_bg.png')}/>
              <div className="work--text"><b>IRC</b></div>
              <div className="work--tools">HTML, SASS, React</div>
            </div>
          </Link>
          <Link
              to={prefixLink('/wdd/')}>
            <div className="work work--3">
              <img src={prefixLink('/img/wdd/wdd_logo.png')}/>
              <div className="work--text"><b>Web Design Decal TA</b></div>
              <div className="work--tools">Education</div>
            </div>
          </Link>
          <Link
              to={prefixLink('/syncfab/')}>
            <div className="work work--4">
              <img src={prefixLink('/img/syncfab/gears.jpg')}/>
              <div className="work--text"><b>SyncFab UI/UX Intern</b></div>
              <div className="work--tools">User Research, HTML, CSS, Foundation, Prototyping</div>
            </div>
          </Link>
          <Link
              to={prefixLink('/website/')}>
            <div className="work work--5">
              <img src={prefixLink('/img/website_bg.png')}/>
              <div className="work--text"><b>Personal Website</b></div>
              <div className="work--tools">HTML, CSS, JQuery</div>
            </div>
          </Link>
          <Link
              to={prefixLink('/redditredesign/')}>
            <div className="work work--6">
              <img src={prefixLink('/img/redesign/reddit_bg.jpg')}/>
              <div className="work--text"><b><em>Reddit</em> Redesign</b></div> 
              <div className="work--tools">HTML, CSS, Prototyping</div>
            </div>
          </Link>
          <Link
              to={prefixLink('/hagglebuddy/')}>
            <div className="work work--7">
              <img src={prefixLink('/img/hagglebuddy/hagglebuddy_demo.png')}/>
              <div className="work--text"><b><em>Hagglebuddy</em></b></div>
              <div className="work--tools">Android Studio, Java, Balsamiq</div>
            </div>
          </Link>
          <Link
              to={prefixLink('/away/')}>
            <div className="work work--8">
              <img src={prefixLink('/img/away/away_bg.jpg')}/>
              <div className="work--text"><b><em>away</em></b></div>
              <div className="work--tools">Prototyping</div>
            </div>
          </Link>
          <Link
              to={prefixLink('/adobe/')}>
            <div className="work work--last">
              <img src={prefixLink('/img/misc/fennecfox.png')}/>
              <div className="work--text">Graphic Design</div>
              <div className="work--tools">Photoshop, Illustrator</div>
            </div>
          </Link>


        </div>
      </div>
    );
  }
}
