import "./About.css";
import Max from "../assets/Max.jpg";
import Raime from "../assets/raime.jpg";
import Zakir from "../assets/Zakir.jpg";
const About = () => {
  return (
    <div className="About">
      <h2>About isallo</h2>
      <p className="mission">
        Our mission at isallo is to promote societal transformation and healing
        through moments of daily introspection. This genuine, internal
        metamorphosis begins where emotion and logic meet. By identifying our
        feelings and emotions, verbalizing the stories we&apos;ve formed about
        our experiences, and evaluating our emotional trends over time, we open
        the door for the true evolution of self.
      </p>
      <h2 className="meetH2">Meet the Team</h2>
      <div className="team1">
        <section className="teamCard">
          <img src={Max} alt="Max" />
          <div className="linkandname">
            <h3>
              Max Maciag
              <a href="https://www.linkedin.com/in/max-maciag" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </h3>
          </div>
          <p>
            Max graduated from a Grand Circus front end bootcamp in September
            2022. Max worked at a contract material testing lab prior to
            transitioning to the tech industry. He is a prominent community
            figure in the Super Smash Brothers Melee competitive scene within
            Michigan and is currently ranked top 5 in the state.
          </p>
        </section>
        <section className="teamCard">
          <img src={Raime} alt="Raime" />
          <div className="linkandname">
            <h3>
              Raime Lee
              <a href="https://www.linkedin.com/in/raimelee" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </h3>
          </div>
          <p>
            Raime is a full stack MERN developer and a classically-trained,
            award-winning artist. Outside of the studio, she constantly explores
            global cultures, philosophy, psychology, and art history and
            continually seeks out in-depth conversations about the emotional
            depths within and the contexts in which humanity resides. She loves
            taking long walks with her fiancé, Andrew, and their dog, Kumo.
          </p>
        </section>
        <section className="teamCard">
          <img src={Zakir} alt="zakir" />
          <div className="linkandname">
            <h3>
              Zakir Hussain
              <a
                href="https://www.linkedin.com/in/zakir-hussain17/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </h3>
          </div>
          <p>
            Bangladesh-born and Detroit-raised, Zakir hopes to build a better
            tomorrow. Previously in the medical, financial and non-profit
            industries, Zakir now is stepping into the tech space to build more
            meaningful products. Some of his interests include sports,
            technology, and astronomy. He also enjoys listening to music,
            playing video games and out door activities.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
