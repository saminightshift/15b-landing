import react from React

const About = () => (
<about>
    <h1>About</h1>

    <p>
        Every two years we bring together like-minded people from the world’s leading airline and travel companies.
    </p>
    <p>
        It’s your opportunity to hear from and share ideas, best practice and knowledge with other members of our growing customer community. 
    </p>
    <p>
        Join us in Brighton for three value-packed days during which you will:
    </p>

    <h3>Become an expert in passenger communications</h3>

    <p>Absorb the most up-to-date knowledge and insights from our in-house specialists, as well as perspectives from other industry experts. Learn through keynote talks, interactive sessions, deep-dive breakout groups, case studies from other 15below members, how-to sessions, and more.</p>

    <h3>Discuss and feed into the future product roadmap</h3>

    <p>You’ll meet our Product Team and learn about the solutions they’re focusing on. They’ll introduce the 15below Research Lab which we use to gather input on the challenges you face day-to-day. Then, most importantly, you’ll find out how you can influence our product development and our future product roadmap.</p>

    <h3>Join an experienced community</h3>

    <p>This is your chance to network with and learn from your peers from other best-in-class travel companies in a relaxed setting where everything is about passenger communications. You’ll meet a broad range of people from different departments and levels, who are all focused on creating the best customer experience possible.</p>

    <style jsx>{`
     
     h3 {
      font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      font-weight: 400;
     }
     
      .signup {
        padding: 18px 30px 24px;
      }

      .hero-banner-image { 
        width: 100%;
        height: 100%;
        max-width: 2560px;
        margin: 0;
        
      }
      
      .event-banner { 
        position: absolute;
        display: block;
        left: 50%; 
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        top: 30px;
        width: 640px;
        background: url('/iStock_000028193904XLarge33.jpg') no-repeat;
      }
      
      h1 {
        font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-weight: 500 !important;
      }
      
      .hero {
        width: 100%;
        color: #fff;
        height: 100%;
        background: url('/iStock_000028193904XLarge33.jpg') no-repeat 1%;
      }
      
      .title {
        font-family: "Gotham A", "Gotham B", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
</about>
)

export default About