import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />


  
    <div className="hero">
        <h1 className="title">15below Customer Conference 2020</h1>
        <h3 className="description">
        Register your interest now!
        </h3>
      </div>
			<img className="event-banner hide-on-mobile" />
			<img className="hero-banner-image hide-on-mobile"/>

    <div className="signup">
          <h3>Please fill in the form below to register your interest.</h3>

    </div>

    <style jsx>{`
     
     h3 {
      font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      font-weight: 400;
     }
     
      .signup {
        padding: 25px;
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
        left: 50%; 
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        top: 30px;
        width: 640px;
        background: url('/event-banner-02.svg') no-repeat;
      }
      
      h1 {
        font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-weight: 500 !important;
      }
      
      .hero {
        width: 100%;
        color: #fff;
        height: 100%;
        background: url('/Long-thin-infographic.png') no-repeat 1%;
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
