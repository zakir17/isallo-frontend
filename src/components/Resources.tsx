import "./Resources.css";

const Resources = () => {
  return (
    <div className="Resources">
      <h2>Glossary</h2>
      <div className="glossary">
        <p>
          <span>annoyed </span> <span className="circle anger"></span>{" "}
          persistently upset or bothered by someone.
        </p>
        <p>
          <span>anxiety </span>
          <span className="circle fear"></span> a feeling of worry, nervousness,
          or unease, typically about an imminent event or something with an
          uncertain outcome.
        </p>
        <p>
          <span>contentment </span>
          <span className="circle enjoyment"></span> the state of being
          satisfied with what one is or has; not wanting more or anything else.
        </p>
        <p>
          <span>disappointment </span>
          <span className="circle sadness"></span> sadness or displeasure caused
          by the nonfulfillment of one’s hopes or expectations.
        </p>
        <p>
          <span>disturbed </span>
          <span className="circle disgust"></span> experiencing or exhibiting
          emotional agitation.
        </p>
        <p>
          <span>doubtful </span>
          <span className="circle fear"></span> feeling uncertain about
          something.
        </p>
        <p>
          <span>frustration </span>
          <span className="circle anger"></span> the feeling of being upset
          especially because of inability to change or achieve something.
        </p>
        <p>
          <span>gloomy </span>
          <span className="circle sadness"></span> feeling distressed or
          pessimistic.
        </p>
        <p>
          <span>hopelessness </span>
          <span className="circle sadness"></span> a feeling or state of
          despair; lack of hope.
        </p>
        <p>
          <span>irritation </span>
          <span className="circle anger"></span> the state of feeling impatient
          or slightly angry.
        </p>
        <p>
          <span>joy </span>
          <span className="circle enjoyment"></span> the emotion of great
          delight or happiness caused by something exceptionally good or
          satisfying; keen pleasure; elation.
        </p>
        <p>
          <span>loneliness </span>
          <span className="circle sadness"></span> cut off from others; sad from
          being alone.
        </p>
        <p>
          <span>mad </span>
          <span className="circle anger"></span> intensely angry or displeased.
        </p>
        <p>
          <span>offended </span>
          <span className="circle disgust"></span> being upset or hurt by
          something someone said or did.
        </p>
        <p>
          <span>relief </span>
          <span className="circle enjoyment"></span> removal or lightening of
          something oppressive, painful, or distressing.
        </p>
        <p>
          <span>satisfaction </span>
          <span className="circle enjoyment"></span> fulfillment of one’s
          wishes, expectations, or needs, or the pleasure derived from this.
        </p>
        <p>
          <span>stressed </span>
          <span className="circle fear"></span> experiencing mental or emotional
          strain or tension.
        </p>
        <p>
          <span>uncomfortable </span>
          <span className="circle disgust"></span> feeling unease or
          awkwardness.
        </p>
        <p>
          <span>withdrawn </span>
          <span className="circle disgust"></span> socially detached and
          unresponsive.
          <p>
            <span>worried </span>
            <span className="circle fear"></span> mentally troubled or concerned
            about actual or potential problems.
          </p>
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
    </div>
  );
};

export default Resources;
