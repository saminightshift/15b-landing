import React from 'react'
import './style.css'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'

const Testimonials = () => (
    <testimonials>
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

        <div className="main">
            <h3>Don't just take our word for it...</h3>

            <div className="row">
                <div className="logoCol">
                    <img src="./flybe.png" width="60%"></img>
                </div>
                <div className="textCol">
                    <p>"As my first conference, the 15below experience has set a very bar for anyone else to compete.
                        The 15below 'family', both customers and employees, really helped to introduce me to great products
                        and cemented that we have made a great move to join 15below. I would highly recommend attending a 15below
                        conference. It's not only valuable but great fun!"
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="logoCol">
                    <img src="./tui.png" width="60%"></img>
                </div>
                <div className="textCol">
                    <p>"Fantastic event. Very informative. I enjoyed the industry insights and opportunities. Meeting your other customers
                        is really helpful to understand other use cases. I look forward to the next conference!"
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="logoCol">
                    <img src="./swiss.png" width="60%"></img>
                </div>
                <div className="textCol">
                    <p>"It was one of the best conferences I've attended! Relevant sessions, excellent organisation. Perfect!"
                    </p>
                </div>
            </div>
        </div>

    <style jsx>{`

        .main {
            padding: 30px;
            margin: auto;
        }

        .row {
            width: 100%;
        }

        .row:after {
            content: "";
            display: table;
            clear: both;
          }

        .logoCol {
            width: 20%;
        }

        .textCol {
            width: 80%;
        }
    
    `}</style>

<Footer />

    </testimonials>
)


export default Testimonials 