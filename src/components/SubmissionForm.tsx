import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Submission from "../models/Submission";
import { addOneSubmission } from "../service/submissionService";
import "./SubmissionForm.css";
interface Props {
  onAdd: (submission: Submission) => void;
  setSeeForm: (setSeeForm: boolean) => void;
}
const SubmissionForm = ({ onAdd, setSeeForm }: Props) => {
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState("");
  const [keyMoments, setKeyMoments] = useState("");
  const [hDYFeel, setHDYFeel] = useState("");
  const [satisfaction, setSatisfaction] = useState<number>(0);
  const [contentment, setContentment] = useState<number>(0);
  const [joy, setJoy] = useState<number>(0);
  const [relief, setRelief] = useState<number>(0);
  const [hopelessness, setHopelessness] = useState<number>(0);
  const [loneliness, setLoneliness] = useState<number>(0);
  const [disappointment, setDisappointment] = useState<number>(0);
  const [gloomy, setGloomy] = useState<number>(0);
  const [anxiety, setAnxiety] = useState<number>(0);
  const [stressed, setStressed] = useState<number>(0);
  const [worried, setWorried] = useState<number>(0);
  const [doubtful, setDoubtful] = useState<number>(0);
  const [mad, setMad] = useState<number>(0);
  const [annoyed, setAnnoyed] = useState<number>(0);
  const [irritation, setIrritation] = useState<number>(0);
  const [frustration, setFrustration] = useState<number>(0);
  const [withdrawn, setWithdrawn] = useState<number>(0);
  const [uncomfortable, setUncomfortable] = useState<number>(0);
  const [offended, setOffended] = useState<number>(0);
  const [disturbed, setDisturbed] = useState<number>(0);
  const [counter, setCounter] = useState(1);
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const submission = {
      uid: user!.uid,
      date,
      activity,
      keyMoments,
      hDYFeel,
      satisfaction,
      contentment,
      joy,
      relief,
      hopelessness,
      loneliness,
      disappointment,
      gloomy,
      anxiety,
      stressed,
      worried,
      doubtful,
      mad,
      annoyed,
      irritation,
      frustration,
      withdrawn,
      uncomfortable,
      offended,
      disturbed,
    };
    onAdd(submission);
    setDate("");
    setActivity("");
    setKeyMoments("");
    setHDYFeel("");
    setSatisfaction(0);
    setContentment(0);
    setJoy(0);
    setRelief(0);
    setHopelessness(0);
    setLoneliness(0);
    setDisappointment(0);
    setGloomy(0);
    setAnxiety(0);
    setStressed(0);
    setWorried(0);
    setDoubtful(0);
    setMad(0);
    setAnnoyed(0);
    setIrritation(0);
    setFrustration(0);
    setWithdrawn(0);
    setUncomfortable(0);
    setOffended(0);
    setDisturbed(0);
    setSeeForm(false);
  };

  return (
    <form className="SubmissionForm" onSubmit={(e) => handleSubmit(e)}>
      <div className="formContainer">
        {counter === 1 && (
          <>
            <div className="form1">
              <div>
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <label htmlFor="activity">Daily Activity</label>
              <textarea
                name="activity"
                id="activity"
                cols={20}
                rows={3}
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                placeholder="Today I ate a banana"
              />
            </div>
          </>
        )}
        {counter === 2 && (
          <div className="form2">
            <label htmlFor="key-moments">Key Moments</label>
            <textarea
              name="key-moments"
              id="key-moments"
              cols={20}
              rows={3}
              value={keyMoments}
              onChange={(e) => setKeyMoments(e.target.value)}
              placeholder="Taught my child how to ride a bike"
            />
          </div>
        )}
        {counter === 3 && (
          <div className="form3">
            <label htmlFor="hdyfeel">How do you feel?</label>
            <textarea
              name="hdyfeel"
              id="hdyfeel"
              cols={20}
              rows={3}
              value={hDYFeel}
              onChange={(e) => setHDYFeel(e.target.value)}
              placeholder="Pretty good, I guess"
            />
          </div>
        )}
        {counter === 4 && (
          <>
            <h2> Emotional Mixer</h2>
            <p>Use the sliders to determine your current emotional levels.</p>
            <div className="form4">
              <div className="sliderColumn enjoymentColumn ">
                <label htmlFor="satisfaction slider">Satisfaction</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="satisfaction slider"
                    id="satisfaction slider"
                    className="slider"
                    min={0}
                    max={10}
                    step={1}
                    value={satisfaction}
                    onChange={(e) => setSatisfaction(parseInt(e.target.value))}
                  />
                  <label htmlFor="satisfaction slider">{satisfaction} </label>
                </div>

                <label htmlFor="contentment slider">Contentment</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="contentment slider"
                    id="contentment slider"
                    className="slider"
                    min={0}
                    max={10}
                    step={1}
                    value={contentment}
                    onChange={(e) => setContentment(parseInt(e.target.value))}
                  />
                  <label htmlFor="contentment slider">{contentment} </label>
                </div>

                <label htmlFor="joy slider">Joy</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="joy slider"
                    id="joy slider"
                    className="slider"
                    min={0}
                    max={10}
                    step={1}
                    value={joy}
                    onChange={(e) => setJoy(parseInt(e.target.value))}
                  />
                  <label htmlFor="joy slider">{joy} </label>
                </div>

                <label htmlFor="relief slider">Relief</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="relief slider"
                    id="relief slider"
                    className="slider"
                    min={0}
                    max={10}
                    step={1}
                    value={relief}
                    onChange={(e) => setRelief(parseInt(e.target.value))}
                  />
                  <label htmlFor="relief slider">{relief} </label>
                </div>
              </div>
              <div className="sliderColumn sadnessColumn">
                <label htmlFor="hopelessness slider">Hopelessness</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="hopelessness slider"
                    id="hopelessness slider"
                    className="slider"
                    min={0}
                    max={10}
                    step={1}
                    value={hopelessness}
                    onChange={(e) => setHopelessness(parseInt(e.target.value))}
                  />
                  <label htmlFor="hopelessness slider">{hopelessness} </label>
                </div>
                <label htmlFor="loneliness slider">Loneliness</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="loneliness slider"
                    className="slider"
                    id="loneliness slider"
                    min={0}
                    max={10}
                    step={1}
                    value={loneliness}
                    onChange={(e) => setLoneliness(parseInt(e.target.value))}
                  />
                  <label htmlFor="loneliness slider">{loneliness} </label>
                </div>
                <label htmlFor="disappointment slider">Disappointment</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="disappointment slider"
                    className="slider"
                    id="disappointment slider"
                    min={0}
                    max={10}
                    step={1}
                    value={disappointment}
                    onChange={(e) =>
                      setDisappointment(parseInt(e.target.value))
                    }
                  />
                  <label htmlFor="disappointment slider">
                    {disappointment}{" "}
                  </label>
                </div>
                <label htmlFor="gloomy slider">Gloomy</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="gloomy slider"
                    className="slider"
                    id="gloomy slider"
                    min={0}
                    max={10}
                    step={1}
                    value={gloomy}
                    onChange={(e) => setGloomy(parseInt(e.target.value))}
                  />
                  <label htmlFor="gloomy slider">{gloomy} </label>
                </div>
              </div>
              <div className="sliderColumn fearColumn ">
                <label htmlFor="anxiety slider">Anxiety</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="anxiety slider"
                    id="anxiety slider"
                    className="slider"
                    min={0}
                    max={10}
                    step={1}
                    value={anxiety}
                    onChange={(e) => setAnxiety(parseInt(e.target.value))}
                  />
                  <label htmlFor="anxiety slider">{anxiety} </label>
                </div>

                <label htmlFor="stressed slider">Stressed</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="stressed slider"
                    id="stressed slider"
                    className="slider"
                    min={0}
                    max={10}
                    step={1}
                    value={stressed}
                    onChange={(e) => setStressed(parseInt(e.target.value))}
                  />
                  <label htmlFor="stressed slider">{stressed} </label>{" "}
                </div>

                <label htmlFor="worried slider">Worried</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="worried slider"
                    className="slider"
                    id="worried slider"
                    min={0}
                    max={10}
                    step={1}
                    value={worried}
                    onChange={(e) => setWorried(parseInt(e.target.value))}
                  />
                  <label htmlFor="worried slider">{worried} </label>
                </div>

                <label htmlFor="doubtful slider">Doubtful</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="doubtful slider"
                    id="doubtful slider"
                    className="slider"
                    min={0}
                    max={10}
                    step={1}
                    value={doubtful}
                    onChange={(e) => setDoubtful(parseInt(e.target.value))}
                  />
                  <label htmlFor="doubtful slider">{doubtful} </label>
                </div>
              </div>
              <div className="sliderColumn angerColumn">
                <label htmlFor="mad slider">Mad</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="mad slider"
                    className="slider"
                    id="mad slider"
                    min={0}
                    max={10}
                    step={1}
                    value={mad}
                    onChange={(e) => setMad(parseInt(e.target.value))}
                  />
                  <label htmlFor="mad slider">{mad} </label>
                </div>

                <label htmlFor="annoyed slider">Annoyed</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="annoyed slider"
                    className="slider"
                    id="annoyed slider"
                    min={0}
                    max={10}
                    step={1}
                    value={annoyed}
                    onChange={(e) => setAnnoyed(parseInt(e.target.value))}
                  />
                  <label htmlFor="annoyed slider">{annoyed} </label>
                </div>

                <label htmlFor="irritation slider">Irritation</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="irritation slider"
                    className="slider"
                    id="irritation slider"
                    min={0}
                    max={10}
                    step={1}
                    value={irritation}
                    onChange={(e) => setIrritation(parseInt(e.target.value))}
                  />
                  <label htmlFor="irritation slider">{irritation} </label>
                </div>

                <label htmlFor="frustration slider">Frustration</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="frustration slider"
                    className="slider"
                    id="frustration slider"
                    min={0}
                    max={10}
                    step={1}
                    value={frustration}
                    onChange={(e) => setFrustration(parseInt(e.target.value))}
                  />
                  <label htmlFor="frustration slider">{frustration} </label>
                </div>
              </div>
              <div className="sliderColumn disgustColumn">
                <label htmlFor="withdrawn slider">Withdrawn</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="withdrawn slider"
                    className="slider"
                    id="withdrawn slider"
                    min={0}
                    max={10}
                    step={1}
                    value={withdrawn}
                    onChange={(e) => setWithdrawn(parseInt(e.target.value))}
                  />
                  <label htmlFor="withdrawn slider">{withdrawn} </label>{" "}
                </div>

                <label htmlFor="uncomfortable slider">Uncomfortable</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="uncomfortable slider"
                    className="slider"
                    id="uncomfortable slider"
                    min={0}
                    max={10}
                    step={1}
                    value={uncomfortable}
                    onChange={(e) => setUncomfortable(parseInt(e.target.value))}
                  />
                  <label htmlFor="uncomfortable slider">{uncomfortable} </label>
                </div>

                <label htmlFor="offended slider">Offended</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="offended slider"
                    className="slider"
                    id="offended slider"
                    min={0}
                    max={10}
                    step={1}
                    value={offended}
                    onChange={(e) => setOffended(parseInt(e.target.value))}
                  />
                  <label htmlFor="offended slider">{offended} </label>
                </div>

                <label htmlFor="disturbed slider">Disturbed</label>
                <div className="sliderNum">
                  <input
                    type="range"
                    name="disturbed slider"
                    id="disturbed slider"
                    className="slider"
                    min={0}
                    max={10}
                    step={1}
                    value={disturbed}
                    onChange={(e) => setDisturbed(parseInt(e.target.value))}
                  />
                  <label htmlFor="disturbed slider">{disturbed} </label>
                </div>
              </div>
            </div>
          </>
        )}
        <div>
          {counter > 1 && (
            <button
              type="button"
              onClick={() => setCounter((prev) => prev - 1)}
            >
              Back
            </button>
          )}
          {counter < 4 && (
            <button
              type="button"
              onClick={() => setCounter((prev) => prev + 1)}
            >
              Next
            </button>
          )}
          {counter === 4 && <button>Submit</button>}{" "}
        </div>
      </div>
    </form>
  );
};
export default SubmissionForm;
