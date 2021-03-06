import React from 'react'


const About = () => (
<about>
  <div className="Cta">
    <h1 className="Heading">About</h1>
  </div>
  <div className="aboutBody">
    <p>
    Every two years we bring together like-minded people from the world’s leading airlines and travel companies.
    It’s your opportunity to hear from – and share ideas, best practice and knowledge with – other members of our growing customer community. 
    Join us in Brighton for three value-packed days during which you will:
    </p>

  <div className="row">
    <div className="aboutIcon">
      <img src="aboutComms.jpg" width="100%" className="aboutComms"></img>
    </div>
    <div className="aboutPoint">
      <h4>Become an expert in passenger communications</h4>
      <p>Absorb the most up-to-date knowledge and insights from our in-house specialists, as well as perspectives from other industry experts. Learn through keynote talks, interactive sessions, deep-dive breakout groups, case studies from other 15below customers, how-to sessions, and more.</p>
    </div>
  </div>
    
<div className="row">
  <div className="aboutIcon">
    <img src="aboutRoad.jpg" width="100%" className="aboutRoadmap"></img>
  </div>
  <div className="aboutPoint">
    <h4>Discuss and feed into the future product roadmap</h4>
    <p>You’ll meet our Product Team and learn about the solutions they’re focusing on. They’ll introduce the 15below Research Lab which we use to gather input on the challenges you face day-to-day. Then, most importantly, you’ll find out how you can influence our product development and our future product roadmap.</p>
  </div>
</div>
    
<div className="row">
  <div className="aboutIcon">
    <img src="aboutCommunity.jpg" width="100%" className="aboutCommunity"></img>
  </div>
  <div className="aboutPoint">
    <h4>Join an experienced community</h4>
    <p>This is your chance to network with and learn from your peers from other best-in-class travel companies in a relaxed setting where everything is about passenger communications. You’ll meet a broad range of people from different departments and levels, who are all focused on creating the best customer experience possible.</p>
  </div>
</div>
  </div>
  

    <style jsx>{`
     
     body {
       height: 100%;
       width: 100%;
     }

     h3 {
      font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      font-weight: 400;
      padding-left: 30px;
     }

     h4 {
      font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      font-weight: 400;
      padding-left: 30px;
    }

     p {
      color: #959a9a !important;
      padding-left: 30px;
      margin: auto;
    }

    span.step {
      background: #e00034;
      border-radius: 0.8em;
      -moz-border-radius: 0.8em;
      -webkit-border-radius: 0.8em;
      color: #ffffff;
      display: inline-block;
      font-weight: bold;
      line-height: 1.6em;
      margin-right: 5px;
      text-align: center;
      width: 1.6em; 
    }

    .aboutBody {
      padding: 0 20px 30px 30px;
      margin: auto;
    }

     .Cta {
      background-color: #e00034;
      width: 180px;
      color: #ffffff;
      line-height: 1;
     }

     .Heading {
      padding: 10px 0 10px 25px;
    }

     .aboutPoint p {
       text-align: justify;
       text-justify: none;
     }
      

     @media (max-width: 600px) {

      .Cta {
        background-color: #e00034;
        width: 50%;
        padding: 0.5px;
      }

      p {
        margin: auto;
      }

    }

    `}</style>
</about>
)

export default About