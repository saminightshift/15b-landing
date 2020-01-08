import React, { createRef } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const url ="https://15below.us4.list-manage.com/subscribe/post?u=99107eeea50cd032d861c158f&amp;id=6b874089ea"

const Subscribe = () => {
    const emailRef = createRef (createRef)

        return (
            <div>
            <h2>Would you like me to keep you in the loop?</h2>
            <p>...</p>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => {
                    switch (status) {
                        case "sending":
                            return <div>Sending...</div>
                        case "success":
                            return <div>Subscribed.</div>
                        case "error":
                            return <div dangerouslySetInnerHTML={{ __html: message }} />
                        default:
                            return (
                                <form
                                    onSubmit={() => {
                                        event.preventDefault()

                                        subscribe({
                                            EMAIL: emailRef.current.value,
                                            FIRSTNAME: firstName.current.value,
                                        })
                                    }}
                                >
                                    <input type="firstName" ref={firstName} />
                                    <input type="email" ref={emailRef} />
                                    <input type="submit" value="subscribe" />
                                </form>
                            )
                    }
                }}
            />
        </div>
    )
}




export default Subscribe