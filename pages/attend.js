import React from 'react'
import Nav from '../components/nav'
import './style.css';
import Footer from '../components/footer'
import Head from 'next/head'
import Divider from '../components/divider';

const Attend = () => (

    <attend>
      <Head>
          <title>15below Customer Conference 2020</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
    <Nav />
        <div className="hero">
            <h1 className="title">15below Customer Conference 2020</h1>
            <div className="heroCta">
              <p>12 - 14 May 2020</p>
            </div>
            <br />
        </div>


        <div className="mainBody">
          <br />
        <div className="CtaAttend">
            <h1 className="Heading">Why Attend?</h1>
        </div>

        <div className="row">
          <div className="textCol">
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
          <div className="col2">
          <iframe src="https://player.vimeo.com/video/384968267" width="100%" height="auto" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        </div>

          <Divider />

        <div className="row2">
          <h3>Don't forget...</h3>

          <h4>For the first time ever, the Customer Conference will be a 3-day event. Day 3 will be hosted in the new 15below offices where you can:
          </h4>

          <h4><span className="step">1</span> Extend your knowledge with ‘how-to’ sessions</h4>
          <p>These drop-in sessions – delivered to small groups and run throughout the day – are designed to take your knowledge and technical expertise to a new level – learn directly from the people who handle these tasks every day.</p>

          <h4><span className="step">2</span> Catch up with your Account Manager</h4>
          <p>Day three is the perfect time to discuss current or future plans on a one-to-one basis - but space is limited!  <a href="mailto:AM@15below.com" className="mailLink">Book Now</a> with your Account Manager to avoid disappointment.</p>

          <h4><span className="step">3</span> Meet the tech wizards behind 15below</h4>
          <p>This is your chance to meet the team that works hard every day to build, improve, and manage your notifications platform behind the scenes. Got a question for us? This is your opportunity to ask face-to-face!</p>

        </div>


        </div>

        <Footer />

        <style jsx>{`


            h3, h4 {
              font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
              font-weight: 600;
              padding-left: 30px;
            }

           .mainBody p {
              color: #959a9a !important;
              padding-left: 30px;
            }

            .mailLink {
              color: #e00034;
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

            .CtaAttend {
              background-color: #e00034;
              width: 280px;
              color: #ffffff;
              padding: 1px;
            }

            .Heading {
              padding-left: 25px;
              width: 250px;
            }

            .verticalDiv {
              width: 2%;
              background-color: #fff;
              border-left: dotted 2px #d6dada;
              height: 54rem !important;
              overflow: hidden;
              position: relative;
            }

            .textCol {
              width: 50%;
            }
        
            .col2 {
              width: 50%;
            }

            .vp-center {
              width: 100%;
              padding: 0px !important;
            }


        `}</style>

    

    </attend>



)





export default Attend