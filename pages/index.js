import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Hero from '../components/hero'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    
      <Hero />

      <Nav />

      <h3>Please fill in the form below to register your interest.</h3>

   

    
  </div>
)

export default Home
