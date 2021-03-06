import React from 'react'
import './style.css';
import Nav from '../components/nav'
import Footer from '../components/footer'
import Calendar from '../components/calendar';
import Head from 'next/head'


const Agenda = () => (
<agenda>
    <Head>
        <title>15below Customer Conference 2020</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
        <div className="hero">
          <div className="heroOverlay">
            <h1 className="title">15below Customer Conference 2020</h1>
              <div className="heroCta">
                <p>12 - 14 May 2020</p>
              </div>
              <br />
          </div>
        </div>
    <div className="mainBody">
        <div className="Cta">
            <h1 className="Heading">Agenda</h1>
        </div>

        <div id="app">
            <Calendar />
        </div>
    </div>

    <Footer />


        <style jsx>{`
     h3 {
      font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      font-weight: 400;
      padding-left: 30px;
     }

     mainBody p {
      color: #959a9a !important;
      padding-left: 30px;
    }

    .aboutBody {
      padding: 5px 35px 35px 0;
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

    `}</style>


</agenda>
)

export default Agenda