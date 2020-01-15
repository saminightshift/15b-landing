import React from 'react'
import Nav from './nav'
import Footer from './footer'
import Head from 'next/head'

const Location = () => (
    <location>
    <div className="location">
      <br/>
      <div className="CtaAttend">
            <h1 className="Heading">Location</h1>
        </div>
    <div className="mainBody">
        <div className="row">
          <div className="venueBlock">
              <h3>Days 1 &amp; 2:  22nd - 23rd May 2018</h3>


              <h4>British Airways i360</h4>
              <p>Lower Kings Road<br />BN1 2LN</p>
              <img src="./venue-i360-pic-crop2.jpg" width="100%" className="venuePic" alt="British Airways i360 photo" />
              <iframe className="gMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.5151108784344!2d-0.15223458107520135!3d50.82162198050592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875851244cba2db%3A0x8739662617310e4d!2sBritish+Airways+i360!5e0!3m2!1sen!2suk!4v1521717883184" width="100%" height="300" frameborder="0"  allowfullscreen></iframe>

            </div>

            <div className="divide">&nbsp;</div>

            <div className="venueBlock2">
              <h3>Day 3: 24th May 2018</h3>
              
              <h4>15below Brighton Office</h4>
              <p>Lyndean House, 43-46 Queens Road<br />BN1 3XB</p>
              <img src="./office-pic-crop2.jpg" width="100%" className="venuePic" alt="15below office photo" />
              <iframe className="gMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.2334160848873!2d-0.14439978408454449!3d50.82684026805305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585748e8e9fdb%3A0xd06aa1eae69ac961!2s15below!5e0!3m2!1sen!2suk!4v1521718159634" width="100%" height="300" frameborder="0" allowfullscreen></iframe>
            </div>

          </div>
        </div>
      </div>

        <style jsx>{`

h4 {
  font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
}

h5 {
  font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
  padding-left: 30px;
}

.divide {
  width: 10%;
}

.mainBody p {
  color: #000000 !important;
}

.location {
  background-color: #ecf0f1;
}

.venuePic {
  border: 6px solid #ffffff;
}

.gMaps {
  border: 6px solid #ffffff;
}

.mainBody {
  padding: 30px;
  margin: auto;
}

.CtaAttend {
  background-color: #e00034;
  width: 250px;
  color: #ffffff;
  padding: 1px;
}

.Heading {
  padding-left: 25px;
  width: 200px;
}

.vp-center {
  width: 100%;
  padding: 0px !important;
}

.venueBlock {
  width: 45%;
  float: left;
  margin: auto;
  align-content: left;
}

.venueBlock2 {
  width: 45%;
  float: right;
  margin: auto;
  align-content: right;
}


@media (max-width: 600px){
  textCol {
    width: 100%;
  }

  col2 {
    width: 100%;
  }

  .divide {
    display: none;
  }

  .venueBlock {
    width: 100%;
    margin: auto;
    position: absolute;
  }

  .venueBlock2 {
    width: 100%;
    margin: auto;
    position: absolute;
  }

}

`}</style>
    </location>
)


export default Location