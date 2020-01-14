import React from 'react'
import Nav from '../components/nav'
import './style.css';
import Footer from '../components/footer'

const Attend = () => (

    <attend>

    <Nav />
        <div className="hero">
            <h1 className="title">15below Customer Conference 2020</h1>
            <div className="heroCta">
              <p>12 - 14 May 2020</p>
            </div>
            <br />
        </div>


        <div className="mainBody">
        <div className="Cta">
            <h1 className="Heading">Why Attend?</h1>
        </div>


          <h4><span className="step">1</span> Get the most from your notifications platform</h4>
          <p>Learn how to get the most out of the notifications platform, and leave with actionable insights to enhance the way you communicate with your passengers.</p>

          <h4><span className="step">2</span> Network with peers from the world's leading travel companies</h4>
          <p>Meet like-minded individuals who are as passionate as you are about making passenger experience the best it can be.</p>

          <h4><span className="step">3</span> Understand and influence the 15below product roadmap</h4>
          <p>We want to hear the challenges you face day-to-day – and most importantly – how we can help.</p>

          <h4><span className="step">4</span> Take part in an immersive, fully interactive format</h4>
          <p>No death-by-Powerpoint here! Enjoy three value-packed days full of deep-dive breakout sessions, panels, live case studies, interactive workshops, and more.</p>

          <h4><span className="step">5</span> Visit our offices and meet the team</h4>
          <p>Meet the whole 15below team in our new home, work from our Brighton offices or join our optional ‘how to’ sessions.</p>

          <h4><span className="step">6</span> Take in the sights and sounds of Brighton</h4>
          <p>Brighton will be home to two fantastic arts festivals at the same time as the conference, so why not extend your stay and find out why Brighton has been named “London by the sea”.</p>

          <h4><span className="step">7</span> Celebrate with us</h4>
          <p>We’re turning 20 and would love for you to be here to celebrate the occasion with us! Join us for food, drink, awards, and entertainment.</p>
        </div>

        <Footer />

        <style jsx>{`

            h4 {
              font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
              font-weight: 600;
              padding-left: 30px;
            }

           .mainBody p {
              color: #959a9a !important;
              padding-left: 30px;
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

            .mainBody {
              padding: 5px 35px 35px 0;
            }

            .Cta {
              background-color: #e00034;
              width: 150px;
              color: #ffffff;
            }

            .Heading {
              padding-left: 25px;
            }
                    

        `}</style>

    

    </attend>



)





export default Attend