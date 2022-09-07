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
      <h2>Meet the Team</h2>
      <div className="team1">
        <section className="teamCard">
          <h3>Max Maciag</h3> <img src={Max} alt="Max" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            voluptates, modi, recusandae eius rem nemo ipsam assumenda odit
            iusto at quas delectus eum deleniti quos explicabo a veritatis
            molestiae beatae?
          </p>
          <a href="https://www.linkedin.com/in/max-maciag">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </section>
        <section className="teamCard">
          <h3>Raime Lee Cronkhite</h3>
          <img src={Raime} alt="Ramie" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Architecto, aperiam reprehenderit itaque assumenda voluptatibus
            dignissimos eligendi? Quisquam ex fugiat dolore doloribus eveniet
            odit laudantium, vero laboriosam voluptatibus, sapiente non dolorum!
          </p>
          <a href="www.linkedin.com/in/raimelee">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </section>
        <section className="teamCard">
          <h3>Zakir Hussain</h3>
          <img src={Zakir} alt="zakir" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            numquam consequuntur ad beatae. Consequatur officia pariatur commodi
            enim dicta explicabo maiores officiis eius similique, impedit ad
            ullam perspiciatis possimus qui.
          </p>
          <a href="https://www.linkedin.com/in/zakir-hussain17/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
