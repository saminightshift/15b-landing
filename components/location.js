import React from 'react'
import Nav from './nav'
import Footer from './footer'
import Head from 'next/head'
import Divider from './divider'

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
              <h4>British Airways i360</h4>
              <p>Lower Kings Road<br />BN1 2LN</p>
              <img src="./venue-i360-pic-crop2.jpg" width="100%" className="venuePic" alt="British Airways i360 photo" />
              <iframe className="gMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.5151108784344!2d-0.15223458107520135!3d50.82162198050592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875851244cba2db%3A0x8739662617310e4d!2sBritish+Airways+i360!5e0!3m2!1sen!2suk!4v1521717883184" width="100%" height="300" frameborder="0"  allowfullscreen></iframe>

            </div>

            <div className="divide">&nbsp;</div>

            <div className="venueBlock2">              
              <h4>15below Brighton Office</h4>
              <p>Lyndean House, 43-46 Queens Road<br />BN1 3XB</p>
              <img src="./office-pic-crop2.jpg" width="100%" className="venuePic" alt="15below office photo" />
              <iframe className="gMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.2334160848873!2d-0.14439978408454449!3d50.82684026805305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585748e8e9fdb%3A0xd06aa1eae69ac961!2s15below!5e0!3m2!1sen!2suk!4v1521718159634" width="100%" height="300" frameborder="0" allowfullscreen></iframe>
            </div>

          </div>

          <Divider />

          <div className="row2">
            <h3>Accommodation</h3>
            <h4>MyHotel</h4>
            <p>Standard Double per night £95.00
            <br/>Superior Double per night £105.00
            <br/><i>(room-only rates, incl. WiFi and VAT)</i></p>
           
            <div className="bookCard">
              <h4>How to book:</h4>
              <p>Call My Hotel reservations department and quote code '15BE110520' to secure the special rates:<br/>
              <br/>+44 (0)1273 900 380 - (ext.: 380) – Ashleigh Cosham <br/>or email - <a href="mailto:ashleighcosham@myhotels.com">ashleighcosham@myhotels.com</a></p>
            </div>
           
        
          <Divider />

            <h4>Queens Hotel</h4>
            <p>Standard Double (single occupancy) per night £95.00
            <br/>Standard Double (double occupancy) per night £105.00

            <br/><i>(both incl. buffet breakfast, access to a small leisure centre, WiFi and VAT)</i></p>

            <p>Standard Double room per night £90.00

            <br/><i>(room-only rate, incl. leisure centre, WIFI and VAT)</i></p>

            <p>Seaview supplement is £10 per room per night</p>

            <div className="bookCard">
              <h4>How to book:</h4>
              <p>+44 (0) 1273 221605 – Direct Line – Tracey Rooke <br/>
+44 (0) 1273 221603 – Direct Line – John Hirons <br/>
or email – <a href="mailto:info@queenshotelbrighton.com">info@queenshotelbrighton.com</a></p>
            </div>
         
          </div>

        </div>
      </div>

        <style jsx>{`

h4 {
  font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
}

.bookCard {
  background-color: #ffffff;
  padding: 25px;
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
  align-content: top;
}

.venueBlock2 {
  width: 45%;
  float: right;
  margin: auto;
  align-content: top;
}


`}</style>
    </location>
)


export default Location