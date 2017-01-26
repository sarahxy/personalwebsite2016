import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Away extends Component {
  render () {
    return (
      <div className="page page--away">
        <Helmet
          title={"away"}
        />
        <div className="page__wrapper">
          <div className="page__heading"><b><em>away</em></b></div>
          <div className="page__subheading">
            <div className="page__subheading--date">June 2015</div>
            <div className="page__subheading--org"><a href="https://cs160.valkyriesavage.com/" target="_blank">CS 160</a></div>
            <div className="page__subheading--tools"><b>Tools:</b> Prototyping</div>
            <a href="https://www.hackster.io/sarahxy/des01-the-better-for-wear-d40d9a" target="_blank">
              <div className="button">View Project</div>
            </a>
          </div>
          
          <div className="content__wrapper">  
            <div className="text__wrapper">
              <div className="content__text">"away" is a smartwatch app for on-the-go travelers, who are unable to immediately respond to a text or call, that sends automated messages (preset by the user) to callers or texters, notifying them of the user's inavailability while the user is traveling.</div>

              <div className="content__heading"><b>Purpose</b></div>

              <div className="content__text">This prototyping project was an assignment given in the Summer 2015 class of CS 160 to challenge students to think of apps well suited for mobile computing, particularly smartwatches, and utilize physical prototyping methods.</div>
            
            </div>

            <div className="image__wrapper">
              <img src={prefixLink("/img/away/away_prototype.jpg")}/>
            </div>

            <div className="text__wrapper">
              <div className="content__heading"><b>User Research</b></div>

              <div className="content__text">The idea came after two interviews with two different users about their smartphone usage and what they thought of smartphones as an alternative. Both users surprisingly used their phone almost exclusively for messaging others, whether through text or call. Both users also shared a similar need to travel a lot, especially in commuting to work, or even traveling back to their home country. The need to text and call, as well as the fact that both women work and travel from location to location frequently were elements I kept in mind as I began thinking of ideas for possible smartwatch apps.</div>

              <div className="content__heading"><b>Features</b></div>

              <div className="content__text">The smartwatch app allows users to create and save messages or other information to send to specific contacts, calling contacts, or all contacts when said user is traveling. These pre-programmed settings can also be further customized and saved under various names to be accessed quickly later in similar situations. Navigation in the app is simplified to single taps through different options.</div>
            </div>

             <div className="images__wrapper">
              <img src={prefixLink("/img/away/away_1.jpg")}/>
              <img src={prefixLink("/img/away/away_2.jpg")}/>
              <img src={prefixLink("/img/away/away_4.jpg")}/>
            </div>

             <div className="images__wrapper">
              <img src={prefixLink("/img/away/away_3.jpg")}/>
              <img src={prefixLink("/img/away/away_5.jpg")}/>
            </div>
            
            <div className="text__wrapper">
              <div className="content__heading"><b>User Testing</b></div>

              <div className="content__text">After prototyping my screens from paper and pen, and using a strip of cardboard around the wrist to simulate a watch, I tested the app's functionality with a user. After running through a basic introduction to the app, I allowed him to use the app for himself, and manually switched screens based on his actions, and took notes, and observed.</div>

              <div className="content__text">The user concluded that he found the smartwatch app useful and would definitely want to use it in the future, but that he would probably restrict usage to biking or driving (when it would be inconvenient to use a smartphone). The user also suggested having voice support, so that someone on-the-go could just speak to the smartwatch instead of tapping furiously. He did run into problems with the app while using it, including unclear logic (e.g., swiping the screen vs. tapping) and a lack of indicators when he took a specific action.</div>

            </div>

            <div className="images__wrapper">
              <img src={prefixLink("/img/away/away_all.jpg")}/>
              <img src={prefixLink("/img/away/away_watch.jpg")}/>
            </div>

            <div className="text__wrapper">
              <div className="content__heading"><b>Key Takeaways</b></div>

              <div className="content__notes">
                  <b>***</b> even the tiniest details (like the pattern of responses whether taps or swipes, the ordering of questions, the inclusion of transition screens) can make a user's experience of an app significantly better or worse
                </div>
                <div className="content__notes">
                  <b>***</b> prototyping with pen-and-paper is a different (and quite cathartic) exercise of creativity
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}
