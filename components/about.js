import React from 'react'

const About = () => (
<about>
  <div className="Cta">
    <h1 className="Heading">About</h1>
  </div>

  <div className="aboutBody">
    <p>
        Every two years we bring together like-minded people from the world’s leading airline and travel companies.
    </p>
    <p>
        It’s your opportunity to hear from and share ideas, best practice and knowledge with other members of our growing customer community. 
    </p>
    <p>
        Join us in Brighton for three value-packed days during which you will:
    </p>

    <h3>Become an expert in passenger communications</h3>

    <p>Absorb the most up-to-date knowledge and insights from our in-house specialists, as well as perspectives from other industry experts. Learn through keynote talks, interactive sessions, deep-dive breakout groups, case studies from other 15below members, how-to sessions, and more.</p>

    <h3 className="smallHead">Discuss and feed into the future product roadmap</h3>

    <p>You’ll meet our Product Team and learn about the solutions they’re focusing on. They’ll introduce the 15below Research Lab which we use to gather input on the challenges you face day-to-day. Then, most importantly, you’ll find out how you can influence our product development and our future product roadmap.</p>

    <h3 className="smallHead">Join an experienced community</h3>

    <p>This is your chance to network with and learn from your peers from other best-in-class travel companies in a relaxed setting where everything is about passenger communications. You’ll meet a broad range of people from different departments and levels, who are all focused on creating the best customer experience possible.</p>
  </div>
    <style jsx>{`
     
     h3 {
      font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      font-weight: 400;
      padding-left: 30px;
     }

     p {
      color: #959a9a !important;
      padding-left: 30px;
    }
     
     .Cta {
      background-color: #e00034;
      width: 20%;
      color: #ffffff;
     }

     .Heading {
       padding-left: 25px;
     }
      
    `}</style>
</about>
)

export default About