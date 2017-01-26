import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Hagglebuddy extends Component {
  render () {
    return (
      <div className="page page--hagglebuddy">
        <Helmet
          title={"Hagglebuddy"}
        />
        <div className="page__wrapper">
          <div className="page__heading"><b><em>Hagglebuddy</em></b></div>
          <div className="page__subheading">
            <div className="page__subheading--date">June 2015 - August 2015</div>
            <div className="page__subheading--org"><a href="https://cs160.valkyriesavage.com/" target="_blank">CS 160</a></div>
            <div className="page__subheading--tools"><b>Tools:</b> Android Studio, Java, Balsamiq, User Research</div>
            <a href="https://github.com/Acehaidrey/HaggleMasters" target="_blank">
              <div className="button">View Code</div>
            </a>
          </div>
          
          <div className="content__wrapper">  
            <div className="text__wrapper">
              <div className="content__heading">Summary</div>
              <div className="content__text">An android wear and handheld app that helps users become more familiar with haggling and bargaining for goods in foreign countries.</div>
              <div className="content__text">There are two main goals of this app: 
              <b>   1)</b> to help users become more familiar with haggling and bargaining for goods in foreign countries, with the aid of a friend who can support, encourage, and advise the user without doing the haggling for them 
              <b>   2)</b> to protect target users from getting taken advantage of in a foreign place as well as making them more knowledgeable of what kind of prices to expect.
              </div>

              <iframe width="560" height="315" src="https://www.youtube.com/embed/vlbgXlGNuVU" frameborder="0" allowfullscreen></iframe>

              <div className="content__text">If you would like to read more, detailed write-ups created during the process of building the app can be found on Hackster, including a <a href="https://www.hackster.io/team-k-jaws2/grp02-b5cd85?ref=user&ref_id=14637&offset=6" target="_blank">contextual inquiry / task analysis / competitive analysis</a>, a <a href="https://www.hackster.io/team-k-jaws/grp03-05b264?ref=user&ref_id=14637&offset=3" target="_blank">low-fi prototype video</a>, an <a href="https://www.hackster.io/team-jaws2/grp05-f06205?ref=user&ref_id=14637&offset=5" target="_blank">interactive prototype</a> (including our hand-drawn scenario cases and more of our non-implemented features), and our <a href="https://www.hackster.io/team-jaws3/grpf3-fcfe59?ref=user&ref_id=14637&offset=4" target="_blank">final code and video</a>.</div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
