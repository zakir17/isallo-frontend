import "./Resources.css";

const Resources = () => {
  return (
    <div className="Resources">
      <h2>Resources</h2>
      <div className="glossary">
        <h3>Glossary</h3>
        <p>
          <span>Annoyed </span> <span className="circle anger"></span>{" "}
          persistently upset or bothered by someone.
        </p>
        <p>
          <span>Anxiety </span>
          <span className="circle fear"></span> a feeling of worry, nervousness,
          or unease, typically about an imminent event or something with an
          uncertain outcome.
        </p>
        <p>
          <span>Contentment </span>
          <span className="circle enjoyment"></span> the state of being
          satisfied with what one is or has; not wanting more or anything else.
        </p>
        <p>
          <span>Disappointment </span>
          <span className="circle sadness"></span> sadness or displeasure caused
          by the nonfulfillment of one’s hopes or expectations.
        </p>
        <p>
          <span>Disturbed </span>
          <span className="circle disgust"></span> experiencing or exhibiting
          emotional agitation.
        </p>
        <p>
          <span>Doubtful </span>
          <span className="circle fear"></span> feeling uncertain about
          something.
        </p>
        <p>
          <span>Frustration </span>
          <span className="circle anger"></span> the feeling of being upset
          especially because of inability to change or achieve something.
        </p>
        <p>
          <span>Gloomy </span>
          <span className="circle sadness"></span> feeling distressed or
          pessimistic.
        </p>
        <p>
          <span>Hopelessness </span>
          <span className="circle sadness"></span> a feeling or state of
          despair; lack of hope.
        </p>
        <p>
          <span>Irritation </span>
          <span className="circle anger"></span> the state of feeling impatient
          or slightly angry.
        </p>
        <p>
          <span>Joy </span>
          <span className="circle enjoyment"></span> the emotion of great
          delight or happiness caused by something exceptionally good or
          satisfying; keen pleasure; elation.
        </p>
        <p>
          <span>Loneliness </span>
          <span className="circle sadness"></span> cut off from others; sad from
          being alone.
        </p>
        <p>
          <span>Mad </span>
          <span className="circle anger"></span> intensely angry or displeased.
        </p>
        <p>
          <span>Offended </span>
          <span className="circle disgust"></span> being upset or hurt by
          something someone said or did.
        </p>
        <p>
          <span>Relief </span>
          <span className="circle enjoyment"></span> removal or lightening of
          something oppressive, painful, or distressing.
        </p>
        <p>
          <span>Satisfaction </span>
          <span className="circle enjoyment"></span> fulfillment of one’s
          wishes, expectations, or needs, or the pleasure derived from this.
        </p>
        <p>
          <span>Stressed </span>
          <span className="circle fear"></span> experiencing mental or emotional
          strain or tension.
        </p>
        <p>
          <span>Uncomfortable </span>
          <span className="circle disgust"></span> feeling unease or
          awkwardness.
        </p>
        <p>
          <span>Withdrawn </span>
          <span className="circle disgust"></span> socially detached and
          unresponsive.
        </p>
        <p>
          <span>Worried </span>
          <span className="circle fear"></span> mentally troubled or concerned
          about actual or potential problems.
        </p>
        <div className="legend">
          <p>
            Enjoyment = <span className="circle enjoyment"></span>
          </p>
          <p>
            Sadness = <span className="circle sadness"></span>
          </p>
          <p>
            Fear = <span className="circle fear"></span>
          </p>
          <p>
            Anger = <span className="circle anger"></span>
          </p>
          <p>
            Disgust = <span className="circle disgust"></span>
          </p>
        </div>
      </div>
      <div className="externalLinks">
        <h3>External Links</h3>
        <div className="linkContainer">
          <p>
            <span>
              <a href="https://www.16personalities.com" target="_blank">
                16 Personalities{" "}
              </a>
            </span>
            - This is a personality test based on the Myers-Briggs theory. Take
            their free test to understand more about your personality traits.
          </p>
        </div>
        <div className="linkContainer">
          <p>
            <span>
              <a
                href="https://www.eclecticenergies.com/enneagram/test-2"
                target="_blank"
              >
                Eclectic Energies Enneagram Test{" "}
              </a>
            </span>
            - This personality test that describes how people interpret the
            world and manage their emotions.
          </p>
        </div>
        <div className="linkContainer">
          <p>
            <span>
              <a href="http://atlasofemotions.org/#actions/" target="_blank">
                Atlas of Emotions{" "}
              </a>
            </span>
            - This interactive tool helps users build their vocabulary of
            emotions in order to gain greater control over their response to
            emotional triggers.
          </p>
        </div>
        <div className="linkContainer">
          <p>
            <span>
              <a
                href="https://eternalisedofficial.com/2020/09/05/jungian-archetypes-explained/
"
                target="_blank"
              >
                Jungian Archetypes: Self, Persona, Shadow{" "}
              </a>
            </span>
            - Understand the three different realms your psyche: consciousness,
            the personal unconscious, and the collective unconscious.
          </p>
        </div>
        <div className="linkContainer">
          <p>
            <span>
              <a href="https://movies.disney.com/inside-out" target="_blank">
                Inside Out{" "}
              </a>
            </span>
            - Pixar's “Inside Out" educates adults and children alike about the
            complexity of human emotions.
          </p>
        </div>
        <div className="linkContainer">
          <p>
            <span>
              <a
                href="https://www.amazon.com/dp/1781251304/ref=cm_sw_em_r_mt_dp_7XP5BJ9GEKBKVNT45DJ8
                "
                target="_blank"
              >
                The Book of Human Emotions{" "}
              </a>
            </span>
            - “The Book of Human Emotions” shares a collection of 156 unique
            stories that helps readers discover new feelings and gain unexpected
            insights into why we feel the way we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
