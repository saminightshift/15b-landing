import React from 'react'
import ReactDOM from 'react-dom'
import Divider from '../components/divider'


const Calendar = () => (

    <calendar>
       <div className="calendarBody"> 
        <div className="dayHeader">
            <h3>Day 1: Tuesday 12<sup>th</sup> May 2020</h3>
        </div>
        <Divider />
        <div className="scheduleContainer1">
        <table className="agenda-table" align="left">
                <tr>
                    <td width="100">09:00 - 09:30</td>
                    <td>Registration &amp; refreshments</td>
                </tr>
                <tr>
                    <td>09:30 - 10:00</td>
                    <td><strong>Welcome and Introduction</strong></td>
                </tr>
                <tr>
                    <td>10:00 - 10:45</td>
                    <td><strong>Keynote Presentation</strong><br />15below CEO Nicholas Key takes a look at how communications technology has changed over the last 20 years and looks ahead at what the next 20 years are likely to hold for our industry.</td>
                </tr>
                <tr>
                    <td>10:45 - 11:15</td>
                    <td><strong>Case study</strong><br />Learn from the experts with a live case study and Q&amp;A session.</td>
                </tr>
                <tr>
                    <td>11:15 - 11:35</td>
                    <td>Break</td>
                </tr>
                <tr>
                    <td>11:35 - 12:35</td>
                    <td><strong>Airline Panel: The Evolution of Customer Experience.</strong><br />A discussion with multiple airlines from around the world, hosted by 15below Heads of Account Management Gemma Chalk (EMEA &amp; Americas) and Alex Thornton (APAC).</td>
                </tr>
                <tr>
                    <td>12:35 - 13:35</td>
                    <td>Lunch</td>
                </tr>
                <tr>
                    <td>13:35 - 14:05</td>
                    <td><strong>Keynote – The Autonomous Customer 2020</strong><br/>Dr Nicola Millard, Principal Innovation Partner, Enterprise and Chief Innovation Officer at BT discusses the results of her extensive research, what the future of customer excellence looks like, and how travel companies can innovate to meet ever-rising customer expectations.</td>
                </tr>
                <tr>
                    <td>14:05 - 15:00</td>
                    <td><strong>Interactive workshop</strong><br/>An interactive session run by Dr Nicola Millard to help you put the results of her research into context and update your passenger communications strategy.</td>
                </tr>
                <tr>
                    <td>15:00 - 15:20</td>
                    <td>Break</td>
                </tr>
                <tr>
                    <td>15:20 – 15:50</td>
                    <td><strong>Introducing our Product Team</strong><br/>An introduction to our Product Team, the 15below Research Lab, and how we work with our customers as Development Partners.</td>
                </tr>
                <tr>
                    <td>15:50 - 16:20</td>
                    <td><strong>Channels – How many of your customers are you keeping informed?</strong><br/>15below Product Manager and in-house channels expert, Craig Lawes presents the results of his extensive research, revealing which channels you need to factor into your communications strategy to ensure you’re keeping ALL your customers informed and empowered.</td>
                </tr>
                <tr>
                    <td>16:20 – 16:50</td>
                    <td><strong>Product Innovation (part 1)</strong><br/>An overview of our latest product developments and what it means for you</td>
                </tr>
                <tr>
                    <td>
                    16:50 - 17:00
                    </td>
                    <td><strong>Wrap up day 1</strong></td>
                </tr>
                <tr>
                    <td>17:00 onwards</td>
                    <td>Evening entertainment, including flight on the British Airways i360</td>
                </tr>
            </table>
        </div>

        <div className="dayHeader">
            <h3>Day 2: Wednesday 13<sup>th</sup> May 2020</h3>
        </div>

        <Divider />
        <div className="scheduleContainer1">
        <table className="agenda-table" align="left">
                <tr>
                    <td width="100">09:00 - 09:30</td>
                    <td>Refreshments</td>
                </tr>
                <tr>
                    <td>9:30 - 9:45</td>
                    <td><strong>Welcome back &amp; Day 1 recap</strong></td>
                </tr>
                <tr>
                    <td>9:45 - 10:15</td>
                    <td><strong>Talking Tech</strong><br />An overview by 15below’s Head of Development and Lead Architect looking at the technical evolution of 15below over the last 20 years, and some of the innovations you can expect to see in the future.</td>
                </tr>
                <tr>
                    <td>10:15 - 10:45</td>
                    <td><strong>Product Innovation (part 2)</strong><br />An overview of our latest product developments and what it means for you.</td>
                </tr>
                <tr>
                    <td>10:45 - 11:15</td>
                    <td><strong>Case Study</strong><br/>Learn from the experts with a live case study and Q&amp;A session.</td>
                </tr>
                <tr>
                    <td>11:15 - 11:35</td>
                    <td>Break</td>
                </tr>
                <tr>
                    <td>11:35 - 12:00</td>
                    <td><strong>Partnerships</strong><br/>Learn more about 15below’s strategic partnerships and the benefits to our customer community. </td>
                </tr>
                <tr>
                    <td>12:00 - 13:00</td>
                    <td><strong>Round Table Discussions</strong><br/>An interactive deep-dive session looking at how travel companies can use 15below’s strategic partnerships to help achieve their objectives.</td>
                </tr>
                <tr>
                    <td>13:00 - 14:00</td>
                    <td>Lunch</td>
                </tr>
                <tr>
                    <td>14:00 - 14:45</td>
                    <td><strong>Work smart with the modules you use</strong><br/>Are you getting the most out of the 15below solutions you have invested in?</td>
                </tr>
                <tr>
                    <td>14:45 - 15:15</td>
                    <td><strong>Case Study</strong><br/>Learn from the experts with a live case study and Q&amp;A session.</td>
                </tr>
                <tr>
                    <td>15:15 - 15:45</td>
                    <td><strong>Wrap-up and Close</strong><br/>Review of days 1 &amp; 2 plus details of what to expect for day 3.</td>
                </tr>
                <tr>
                    <td>18:00 onwards</td>
                    <td>Evening event celebrating 20 years of 15below</td>
                </tr>
            </table>
        </div>
        
        <div className="dayHeader">
            <h3>Day 3: Thursday 14<sup>th</sup> May 2020</h3>
        </div>

        <Divider />

        <p>Come and see us at 15below HQ in Brighton! You can expect a warm welcome from your Account Manager, a chance to meet the wider 15below team and plenty of refreshments to fuel the day.<br/><br/>If you have any gaps between “how-to” sessions and 1-2-1 meetings, feel free to work from any of our collaborative spaces.
        <br/><br/>
        Details of exact sessions running at each time will be available nearer to the event so that you can plan your day. 
        </p>
        <Divider />
        <div className="scheduleContainer1">
        <table className="agenda-table" align="left">
                <tr>
                    <td width="100">09:00 – 10:00</td>
                    <td>Welcome, coffee and pastries</td>
                </tr>
                <tr>
                    <td>10:00 – 14:30</td>
                    <td><strong>“How-to" sessions</strong><br/>These 20-minute sessions will be taking place at set intervals throughout the day, feel free to drop in at a time that suits you.</td>
                </tr>
                <tr>
                    <td>1600</td>
                    <td>Close</td>
                </tr>
            </table>
        </div>

<br/>
        <Divider />
<br/>
        <div className="containerBox">
            <span>Anything particular you’d like us to cover? Let us know <a href="mailto:CC2020@15below.com">here</a></span>
            </div>
       <br/>

        <Divider />
        <br/>
        <div className="20Min">
        <h4>One-to-One Meetings</h4><p>In between the ‘how-to’ sessions, you’ll get the chance to attend drop-ins with our QA, Support & Product Teams, and meet with your Account Manager. If you would like to arrange a 1-2-1 meeting with anyone at 15below, please book this in with your Account Manager by emailing <a href="mailto:AM@15below.com">AM@15below.com</a></p>
        </div>
        
        </div>


        <style jsx>{`
    
        .calendarBody {
            margin: auto;
            padding: 0 40px 35px 40px;
        }

        a {
            color: #e00034;
        }

        .20Min {
            margin: auto;
            padding: 35px;
        }
        td {
            padding: 10px;
            valign: top;
        }

        .containerBox {
            width: 50%;
            color: #ffffff;
            background-color: #e00034;
            padding: 40px;
            margin: auto;
            font-size:20px;
            text-align: center;
        }

        .containerBox span a {
            color: #ffffff;
            font-weight: bold;
            
        }

        .scheduleContainer1 {
            width: 100%;
            margin: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }

        p {
            line-height:1.3;
        }

        .agenda-table {
            width: 80%;
        }

        `}</style>

    </calendar>
)


export default Calendar