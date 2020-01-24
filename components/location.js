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
            <div className="address">
            <h4>British Airways i360</h4>
              <p>Lower Kings Road<br />BN1 2LN<br/>Brighton</p>
            </div>
              <img src="./venue-i360-pic-crop2.jpg" width="100%" className="venuePic" alt="British Airways i360 photo" />
              <iframe className="gMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.5151108784344!2d-0.15223458107520135!3d50.82162198050592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875851244cba2db%3A0x8739662617310e4d!2sBritish+Airways+i360!5e0!3m2!1sen!2suk!4v1521717883184" width="100%" height="300" frameborder="0"  allowfullscreen></iframe>

            </div>

            <div className="divide">&nbsp;</div>

            <div className="venueBlock2">              
              <h4>15below Brighton Office</h4>
              <p>Lyndean House, 43-46 Queens Road<br />BN1 3XB<br/>Brighton</p>
              <img src="./office-pic-crop2.jpg" width="100%" className="venuePic" alt="15below office photo" />
              <iframe className="gMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.2334160848873!2d-0.14439978408454449!3d50.82684026805305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585748e8e9fdb%3A0xd06aa1eae69ac961!2s15below!5e0!3m2!1sen!2suk!4v1521718159634" width="100%" height="300" frameborder="0" allowfullscreen></iframe>
            </div>

          </div>

          <Divider />
          <h3>Accommodation</h3>

          <div className="row1">

            <div className="venueBlock3">
            <h4>MyHotel</h4>
            <iframe className="gMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.3516919702843!2d-0.13867330000003034!3d50.8246493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585754a9af877%3A0x5804455518c2d700!2sMy%20Brighton!5e0!3m2!1sen!2suk!4v1579865299848!5m2!1sen!2suk" width="100%" height="300" frameborder="0" allowfullscreen></iframe>
            <a href="https://myhotels.com/brighton/" target="blank" className="emailAdd">Click to view Hotel</a>

            <p>Standard Double room per night £90.00
            <br/>Superior Double per night £105.00
            <br/><i>(room-only rates, incl. WiFi and VAT)</i></p>

            <div>
              <h4>How to book:</h4>
              <p>Call MyHotel reservations department and quote code '15BE110520' to secure the special rates:<br/>
              <br/>+44 (0)1273 900 380 - (ext.: 380) – Ashleigh Cosham <br/>or email - <a href="mailto:ashleighcosham@myhotels.com" className="emailAdd">ashleighcosham@myhotels.com</a></p>
            </div>
<div className="spaceLoc">&nbsp;</div>


            </div>            
           
            <div className="venueBlock4">
            <h4>Queens Hotel</h4>
            <iframe className="gMaps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10082.492706798432!2d-0.139285!3d50.81962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92aacf51c3b3e763!2sQueens%20Hotel%20Brighton!5e0!3m2!1sen!2suk!4v1579865245613!5m2!1sen!2suk" width="100%" height="300" frameborder="0" allowfullscreen></iframe>
            <a href="https://queenshotelbrighton.com/" target="blank" className="emailAdd">Click to view Hotel</a>

            <p>Standard Double (single occupancy) per night £95.00
            <br/>Standard Double (double occupancy) per night £105.00

            <br/><i>(both incl. buffet breakfast, access to a small leisure centre, WiFi and VAT)</i></p>

            <p>Standard Double room per night £90.00

            <br/><i>(room-only rate, incl. leisure centre access, WiFi and VAT)</i></p>

            <p>Sea view supplement is £10 per room per night</p>

            <div>
              <h4>How to book:</h4>
              <strong><p>Call:</p></strong>
              <p>+44 (0) 1273 221605 – Tracey Rooke <br/>
              +44 (0) 1273 221603 – John Hirons <br/>
or email – <a href="mailto:info@queenshotelbrighton.com" className="emailAdd">info@queenshotelbrighton.com</a></p>
            </div>



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
  width: 86%;
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
  width: 200px;
  color: #ffffff;
  line-height: 1;
 }

 .Heading {
  padding: 10px 0 10px 25px;
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

.venueBlock3 {
   width: 45%;
}

.venueBlock4 {
  width: 45%;
}

.row1 {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.emailAdd {
  color: #e00034;
}


`}</style>
    </location>
)


export default Location