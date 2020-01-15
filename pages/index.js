import React from 'react'
import Head from 'next/head'
import './style.css';
import Nav from '../components/nav'
import Subscribe from '../components/subscribe'
import About from '../components/about'
import Divider from '../components/divider'
import Footer from '../components/footer'

const Home = () => (
      <div>
        <Head>
          <title>Home</title>
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
              <div className="signUpsec">
                <div className="formContainer">
                  <h3 className="signUpText">Please fill in the form below to register your interest.</h3>
                  <Subscribe />
                </div>
              </div>
              <Divider />
              <About />
        </div> 
        
        <Footer />
        
      </div>
    )

export default Home
