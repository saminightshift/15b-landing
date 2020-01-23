import React from 'react'
import Divider from '../components/divider'

const Calendar = () => (

    <calendar>
       <div className="calendarBody"> 
        <div className="dayHeader">
            <h3>Day 1: Tuesday 12<sup>th</sup> May 2020</h3>
        </div>

        <div className="scheduleContainer1">
            <div className="timeBlock">
                <h5>9:00 - 9:30</h5>
                <h5>9:30 - 10:00</h5>
                <h5>10:00 - 10:45</h5>
                <h5>10:45 - 11:15</h5>
                <h5>11:15 - 11:35</h5>
                <h5>11:35 - 12:35</h5>
                <h5>12:35 - 13:35</h5>
                <h5>13:35 - 14:05</h5>
                <h5>14:05 - 15:00</h5>
                <h5>15:00 - 15:20</h5>
                <h5>15:20 - 15:50</h5>
                <h5>15:50 - 16:20</h5>
                <h5>16:20 - 16:50</h5>
                <h5>16:50 - 17:00</h5>
                <h5>17:00</h5>
            </div>
            <div className="calendarItem">
                <h5>Registration &amp; refreshments</h5>
                <h5>Welcome &amp; introduction</h5>
                <h5>Keynote presentation</h5><p>15below CEO Nicholas Key takes a look at how communications technology has changed over the last 20 years and looks ahead at what the next 20 years are likely to hold for our industry.</p>
            </div>
        </div>
        
        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>10:00 - 10:45</h4></div>
            <div className="calendarItem"><h4>Keynote presentation</h4><p>15below CEO Nicholas Key takes a look at how communications technology has changed over the last 20 years and looks ahead at what the next 20 years are likely to hold for our industry.</p></div>
        </div>
        <div className="scheduleContainer2">
            <div className="timeBlock"><h4>10:45 - 11:15</h4></div>
            <div className="calendarItem"><h4>Case Study</h4><p>Learn from the experts with a live case study and Q&A session.</p></div>
        </div>
        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>11:15 - 11:35</h4></div>
            <div className="calendarItem"><h4>Break</h4></div>
        </div>
        <div className="scheduleContainer2">
            <div className="timeBlock"><h4>11:35 - 12:35</h4></div>
            <div className="calendarItem"><h4>Airline Panel: The Evolution of Customer Experience</h4><p>A discussion with multiple airlines from around the world, hosted by 15below Heads of Account Management Gemma Chalk (EMEA &amp; Americas) and Alex Thornton (APAC).</p></div>
        </div>
        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>12:35 - 13:35</h4></div>
            <div className="calendarItem"><h4>Lunch</h4></div>
        </div>
        <div className="scheduleContainer2">
            <div className="timeBlock"><h4>13:35 - 14:05</h4></div>
            <div className="calendarItem"><h4>Keynote – The Autonomous Customer 2020</h4><p>Dr Nicola Millard, Principal Innovation Partner, Enterprise and Chief Innovation Officer at BT discusses the results of her extensive research, what the future of customer excellence looks like, and how travel companies can innovate to meet ever-rising customer expectations.</p></div>
        </div>
        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>14:05 - 15:00</h4></div>
            <div className="calendarItem"><h4>Interactive workshop</h4><p>An interactive session run by Dr Nicola Millard to help you put the results of her research into context and update your passenger communications strategy.</p></div>
        </div>
        <div className="scheduleContainer2">
            <div className="timeBlock"><h4>15:00 - 15:20</h4></div>
            <div className="calendarItem"><h4>Break</h4></div>
        </div>
        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>15:20 - 15:50</h4></div>
            <div className="calendarItem"><h4>Introducing our Product Team</h4><p>An introduction to our Product Team, the 15below Research Lab, and how we work with our customers as Development Partners.</p></div>
        </div>
        <div className="scheduleContainer2">
            <div className="timeBlock"><h4>15:50 - 16:20</h4></div>
            <div className="calendarItem"><h4>Channels – How many of your customers are you keeping informed?</h4><p>15below Product Manager and in-house channels expert, Craig Lawes presents the results of his extensive research, revealing which channels you need to factor into your communications strategy to ensure you’re keeping ALL your customers informed and empowered.</p></div>
        </div>
        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>16:20 - 16:50</h4></div>
            <div className="calendarItem"><h4>Product Innovation (part 1)</h4><p>An overview of our latest product developments and what it means for you</p></div>
        </div>
        <div className="scheduleContainer2">
            <div className="timeBlock"><h4>16:50 - 17:00</h4></div>
            <div className="calendarItem"><h4>Wrap up Day 1</h4></div>
        </div>

        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>17:00</h4></div>
            <div className="calendarItem"><h4>Evening entertainment, including flight on the British Airways i360</h4></div>
        </div>

        <Divider />

        <div className="Day2">
        <div className="dayHeader">
            <h3>Day 1: Wednesday 13<sup>th</sup> May 2020</h3>
        </div>

        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>9:00 - 9:30</h4></div>
            <div className="calendarItem"><h4>Refreshments</h4></div>
        </div>
        <div className="scheduleContainer2">
            <div className="timeBlock"><h4>9:30 - 9:45</h4></div>
            <div className="calendarItem"><h4>Welcome back &amp; Day 1 recap</h4></div>
        </div>
        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>09:45 - 10:15</h4></div>
            <div className="calendarItem"><h4>Talking Tech</h4><p>An overview by 15below’s Head of Development and Lead Architect looking at the technical evolution of 15below over the last 20 years, and some of the innovations you can expect to see in the future.</p></div>
        </div>
        <div className="scheduleContainer2">
            <div className="timeBlock"><h4>10:45 - 10:45</h4></div>
            <div className="calendarItem"><h4>Product Innovation (part 2)</h4><p>An overview of our latest product developments and what it means for you.</p></div>
        </div>
        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>10:45 - 11:15</h4></div>
            <div className="calendarItem"><h4>Case Study</h4><p>Learn from the experts with a live case study and Q&amp;A session.</p></div>
        </div>
        <div className="scheduleContainer2">
            <div className="timeBlock"><h4>11:15 - 11:35</h4></div>
            <div className="calendarItem"><h4>Break</h4></div>
        </div>
        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>11:35 - 12:00</h4></div>
            <div className="calendarItem"><h4>Partnerships</h4><p>Learn more about 15below’s strategic partnerships and the benefits to our customer community.</p></div>
        </div>
        <div className="scheduleContainer2">
            <div className="timeBlock"><h4>12:00 - 13:00</h4></div>
            <div className="calendarItem"><h4>Round Table Discussions</h4><p>An interactive deep-dive session looking at how travel companies can use 15below’s strategic partnerships to help achieve their objectives.</p></div>
        </div>
        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>13:00 - 14:00</h4></div>
            <div className="calendarItem"><h4>Lunch</h4></div>
        </div>
        <div className="scheduleContainer2">
            <div className="timeBlock"><h4>14:00 - 14:45</h4></div>
            <div className="calendarItem"><h4>Work smart with the modules you use</h4><p>Are you getting the most out of the 15below solutions you have invested in?</p></div>
        </div>
        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>14:45 - 15:15</h4></div>
            <div className="calendarItem"><h4>Case Study</h4><p>Learn from the experts with a live case study and Q&A session.</p></div>
        </div>
        <div className="scheduleContainer2">
            <div className="timeBlock"><h4>15:15 - 15:45</h4></div>
            <div className="calendarItem"><h4>Wrap-up and Close</h4><p>Review of days 1 &amp; 2 plus details of what to expect for day 3.</p></div>
        </div>
        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>18:00</h4></div>
            <div className="calendarItem"><h4>Evening event celebrating 20 years of 15below</h4></div>
        </div>
        </div>

        <Divider />

        <div className="Day3">
        <div className="dayHeader">
            <h3>Day 3: Thursday 14<sup>th</sup> May 2020</h3>
        </div>

        <p>Come and see as at 15below HQ in Brighton! You can expect a warm welcome from your Account Manager, a chance to meet the wider 15below team and plenty of refreshments to fuel the day. 
If you have any gaps between “how-to” sessions and 1-2-1 meetings, feel free to work from any of our collaborative spaces.
Details of exact sessions running at each time will be available nearer to the event so that you can plan your day. </p>

        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>9:00 - 10:00</h4></div>
            <div className="calendarItem"><h4>Welcome, coffee and pastries</h4></div>
        </div>
        <div className="scheduleContainer2">
            <div className="timeBlock"><h4>10:00 - 14:30</h4></div>
            <div className="calendarItem"><h4>“How-to" sessions</h4><p>These 20-minute sessions will be taking place at set intervals throughout the day, feel free to drop in at a time that suits you.</p></div>
        </div>
        <div className="scheduleContainer1">
            <div className="timeBlock"><h4>16:00</h4></div>
            <div className="calendarItem"><h4>Close</h4></div>
        </div>
        <div className="20Min">
        <h4>20-Minute Knowledge Sessions</h4><p>Topics will be confirmed nearer the time. Keep an eye out for updates.</p>
        </div>

<br/>

        <Divider />



        <br/>

        <div className="containerBox">
            <span>Anything particular you’d like use to cover? Let us know <a href="mailto:CC2020@15below.com">here</a></span>
        </div><br/>

        <Divider />
        <br/>
        <div className="20Min">
        <h4>One-to-One Meetings</h4><p>In between the ‘How-to’ sessions, you’ll get the chance to attend drop-ins with our QA, Support & Product Teams, and meet with your Account Manager. If you would like to arrange a 1-2-1 meeting with anyone at 15below, please book this in with your Account Manager by emailing <a href="mailto:AM@15below.com">AM@15below.com</a></p>
        </div>
        
        </div>

        </div>

        <style jsx>{`
    
        .calendarBody {
            margin: auto;
            padding: 35px;
        }

        a {
            color: #e00034;
        }

        .20Min {
            margin: auto;
            padding: 35px;
        }

        .containerBox {
            width: 60%;
            color: #ffffff;
            background-color: #e00034;
            padding: 40px;
            margin: auto;
        }

        .containerBox span a {
            color: #ffffff;
            font-weight: bold;
        }

        .scheduleContainer1 {
            wwidth: 100%;
            margin: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }

        .scheduleContainer2 {
            wwidth: 100%;
            margin: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            background-colour: 	#F0F0F0;
        }

        p { color: #959a9a !important; }

        .timeBlock {
            width: 30%;
            text-align: justify;
            text-justify: outer-word;
        }



        .calendarItem {
            width: 70%;
        }

        `}</style>

    </calendar>
)

export default Calendar