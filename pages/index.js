import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Subscribe from '../components/subscribe'
import About from '../components/about'
import Attend from '../components/attend'
import Testimonials from '../components/testimonials'
import Location from '../components/location'
import Divider from '../components/divider'
import Hero from '../components/hero'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <Hero />
    <div className="mainBody">
          <h3>Please fill in the form below to register your interest.</h3>

          <Subscribe />
          <Divider />
          <About />
    </div> 
    <div className="footer">
        <p className="copyDate">© 2020 15below All Rights Reserved</p>
        <p className="compReg">Company Registered in England No. 3945289</p>
    </div>

  <style jsx>{`
     
     :global(body) {
      margin: 0;
      font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    }

    .footer {
      height: 100px;
      width: 100%;
      background-color: #2F3C46;
      color: #ffffff;
      font-size:12px;
    }

    .copyDate {
      width: 40%;
      float: left;
      padding: 25px;
    }

    .compReg {
      width: 40%;
      float: right;
      padding: 25px;
    }
    .mainBody {
      margin: 0 auto;
      padding: 25px;
    }

    .nav {
      colour: red;
    }

     h3 {
      font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      font-weight: 400;
      margin: auto;
     }
     
     .button {
      background: red;
      border-radius: 8px;
      color: white;
    }

      .signup {
        padding: 18px 30px 24px;
      }

      .hero-banner-image { 
        width: 100%;
        height: 100%;
        max-width: 2560px;
        margin: 0;
        
      }
      
      .event-banner { 
        position: absolute;
        display: block;
        top: 30px;
        width: 640px;
        background: url('/iStock_000028193904XLarge33.jpg') no-repeat;
      }
      
      h1 {
        font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-weight: 500 !important;
      }
      
    
      .title {
        font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
    
  </div>
)

export default Home
