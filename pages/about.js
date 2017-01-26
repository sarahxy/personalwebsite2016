import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class About extends Component {
  render () {
    return (
      <div className="page page--about">
        <Helmet
          title={config.siteTitle}
        />
        {/*
        <div className="page--title" style={
                background: `url(${prefixLink("/img/meinburano.png")}) no-repeat center right`,

                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
              }}>
        </div>
        */}

        <div className="page__title">
          <div className="page__title--img">
            <img src={ prefixLink("/img/meinburano.png") } />
            <div className="box">
              <div className="page__title--name">Sarah Huang</div>
            </div>
            
          </div>
          
          <div className="page__title--textbox">
            <div className="page__title--text">I am a <div className="colored">Cognitive Science</div> & <div className="colored">Linguistics double major</div> and <div className="colored">Computer Science minor</div> at <div className="colored">UC Berkeley</div>, currently looking for full-time positions in tech after my graduation in May, particularly in UI/UX design and front-end web development.</div>
            <div className="page__title--text">I became interested in <div className="colored">human-centered design</div> through my studies in college, and since then have devoted my time to learning as much as I can with whatever opportunities I find, whether through classes or clubs or internships. I am passionate about <div className="colored">finding creative solutions to bridge the experience of technology with natural human perception and cognition, and helping users engage with products in a more meaningful way</div>.</div>

            <div className="page__title--text">In my spare time, I love reading books (of all genres), expressing myself through music and dance, travelling, taking photos, and writing. (These days I just dabble in journaling and poetry, but you can read some of my published work on <a href="http://figment.com/users/173425-XiamenGirl" target="_blank">Figment</a>, <a href="http://www.teenink.com/fiction/realistic_fiction/article/439823/One-Child/" target="_blank">Teen Ink</a>, and <a href="http://www.paloaltoonline.com/short_story/short_story_22/teen11.php" target="_blank">Palo Alto Weekly</a> if you're interested.) I also love drinking milk tea and I am always down for a good cup of sweet or spicy chai.</div>

            <div className="page__title--text">If you want to get in touch, please don't hesitate to email me at</div>
            <div className="email">s-huang@berkeley.edu</div>
            <div className="page__title--text page__title--text--last">I would love to hear from you!</div>
          </div>
        </div>
              
      </div>
    );
  }
}
