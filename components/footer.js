import React from 'react'

const Footer = () => (
    <div className="footer">
            <p className="copyDate">© 2020 15below All Rights Reserved</p>
            <p className="compReg">Company Registered in England No. 3945289</p>
    
    <style jsx>{`

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
    `}
    </style>

    </div>
)


export default Footer