import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Mailchimp from 'react-mailchimp-form'
 
class Subscribe extends Component {
  render() {
    return (
        <Mailchimp className="formsub"
        action='https://15below.us4.list-manage.com/subscribe/post?u=99107eeea50cd032d861c158f&amp;id=6b874089ea'
        fields={[
          {
            name: 'FNAME',
            placeholder: 'First Name',
            type: 'text',
            required: true,
            className: 'field'
          }
        ,
        {
            name: 'LNAME',
            placeholder: 'Last Name',
            type:'text',
            required: 'true',
            className: 'field'
        },
        {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true,
            className: 'field'
        },
        {
            name:'NUMBER',
            placeholder: 'Phone Number',
            type: 'tel',
            required: false,
            className: 'field'
        },
        {
            name:'COMPANY',
            placeholder: 'Organisation',
            type: 'text',
            required: true,
            className: 'field'
        },
        {
            name: 'JTITLE',
            placeholder: 'Job Title',
            type: 'text',
            required: true,
            className: 'field'
        },
        {
            name: 'VISA',
            placeholder: 'Visa letter required? (Y/N)',
            type: 'text',
            required: true,
            className: 'field'
        }

        ]}

// Change predetermined language
messages = {
    {
      sending: "Sending...",
      success: "Thank you for subscribing!",
      error: "An unexpected internal error has occurred.",
      empty: "You must write an e-mail.",
      duplicate: "Too many subscribe attempts for this email address",
      button: "Subscribe!"
    }
  }
  // Add a personalized class
  className='form_sub'
  />
    );
  }
  
}
 
export default Subscribe;