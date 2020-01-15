import React from 'react'
import './style.css'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'

const Location = () => (
    <location>
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
        <div className="CtaAttend">
            <h1 className="Heading">Location</h1>
        </div>

        <div className="row">
            <div className="six columns venue-block">
                <h4>Days 1 &amp; 2:  22nd - 23rd May 2018</h4>
                
                
                <h3>British Airways i360</h3>
                <p>Lower Kings Road<br />BN1 2LN</p>
                <img src="images/venue-i360-pic-crop2.jpg" className="venue-pic" alt="British Airways i360 photo" />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.5151108784344!2d-0.15223458107520135!3d50.82162198050592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875851244cba2db%3A0x8739662617310e4d!2sBritish+Airways+i360!5e0!3m2!1sen!2suk!4v1521717883184" width="100%" height="300" frameborder="0"  allowfullscreen></iframe>
                
            </div>
            
            <div className="divider hide-on-desktop"></div>
            
            <div className="six columns venue-block">
                <h4>Day 3: 24th May 2018</h4>
                
                <h3>15below Brighton Office</h3>
                <p>Lyndean House, 43-46 Queens Road<br />BN1 3XB</p>
                <img src="images/office-pic-crop2.jpg" className="venue-pic" alt="15below office photo" />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.2334160848873!2d-0.14439978408454449!3d50.82684026805305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585748e8e9fdb%3A0xd06aa1eae69ac961!2s15below!5e0!3m2!1sen!2suk!4v1521718159634" width="100%" height="300" frameborder="0" allowfullscreen></iframe>
            </div>
            
        </div>
        </div>

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

.CtaAttend {
  background-color: #e00034;
  width: 250px;
  color: #ffffff;
}

.Heading {
  padding-left: 25px;
  width: 200px;
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


@media (min-width: 600px){
  textCol {
    width: 100%;
  }

  col2 {
    width: 100%;
  }

  .venue-block { margin-bottom: 20px; } 
  .venue-block h3 { margin-bottom: 10px !important; }
  .venue-block h4 { margin-bottom: 10px !important; } 
  .venue-block p { margin-bottom: 10px !important; } 

}

`}</style>

    <Footer />

    </location>
)


export default Location