import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class WDD extends Component {
  render () {
    return (
      <div className="page page--wdd">
        <Helmet
          title={"Web Design Decal (WDD)"}
        />
        <div className="page__wrapper">
          <div className="page__heading"><b><em>Web Design Decal</em></b></div>
          <div className="page__subheading">
            <div className="page__subheading--date">January 2016 - December 2016</div>
            <div className="page__subheading--org"><a href="wdd.io" target="_blank">Web Design Decal</a></div>
            <div className="page__subheading--tools"><b>Tools:</b> HTML, CSS, Javascript/JQuery</div>
            <a href="https://github.com/sarahxy/week-5-programming-handson_fall2016wdd" target="_blank">
              <div className="button">View Code</div>
            </a>
          </div>
          
          <div className="content__wrapper">  
            <div className="text__wrapper">
              <div className="content__text">The Web Design Decal (WDD) is a 2-unit student-led class at UC Berkeley. The purpose of the class is to teach students how to code in HTML, CSS, Javascript, and JQuery. Every semester, we get about 500-600 applicants, of which we take about 130 total. Throughout the semester, we have regular 2-hour lectures, where we teach fundamentals in design and web programming, sprinkled with a few hands-on activities to help cement ideas and concepts. Students are also expected to complete weekly homework assignments and two projects (a group project focused on website redesign and an individual project of their choice) by the end of the course.</div>

              <div className="content__text">Front-end tools and design principles are skills that are both incredibly useful and surprisingly enjoyable. Until recent years, UC Berkeley did not have many dedicated undergraduate courses that touched these topics.</div>

              <div className="content__text">I took WDD in the fall of 2015 -- after years of taking many Computer Science courses that were more devoted to back-end -- and fell in love with front-end programming. I applied to be a TA the semester after. Since then, I have prepared and taught lessons, and helped facilitate the course for the past year.</div>

              <div className="content__text">One of the concepts students often struggle with is basic CSS positioning. As a result, I created an in-class hands-on activity to aid students in understanding how to distinguish between the different positions. The resulting hands-on is a game of setting the table to match the image below. (You can view the code in the link supplied above).</div>

              <div className="image__wrapper">
                <img src={prefixLink("/img/wdd/week5handson.png")}/>
              </div>

              <div className="content__text">Teaching and facilitating WDD has allowed me to grow as a designer and developer, as well as an educator, in effectively communicating both aesthetic and technical concepts to students of all types of backgrounds. From leading a hands-on in a big classroom setting, to sitting down with one or two students during office hours, I have learned to adapt how I teach concepts to different situations and different people, through a variety of different mediums. It has been an incredibly rewarding experience watching students grow in their abilities, while also learning from their individual strengths and creativity.</div>
            </div>

            <div className="icon__wrapper">
              <img src={prefixLink("/img/wdd/wdd_logo.png")}/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
