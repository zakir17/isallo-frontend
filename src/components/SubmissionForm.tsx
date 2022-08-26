import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Submission from "../models/Submission";
import { addOneSubmission } from "../service/submissionService";
import "./SubmissionForm.css";

interface Props {
  onAdd: (submission: Submission) => void;
}
const SubmissionForm = ({ onAdd }: Props) => {
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
  };

  return (
    <form className="SubmissionForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="date">Date</label>
      <input
        type="datetime-local"
        name="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
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
      <label htmlFor="satisfaction">Satisfaction</label>
      <input
        type="range"
        name="satisfaction"
        id="satisfaction"
        min={0}
        max={10}
        step={1}
        value={satisfaction}
        onChange={(e) => setSatisfaction(parseInt(e.target.value))}
      />
      <label htmlFor="satisfaction">{satisfaction} </label>
      <label htmlFor="contentment">Contentment</label>
      <input
        type="range"
        name="contentment"
        id="contentment"
        min={0}
        max={10}
        step={1}
        value={contentment}
        onChange={(e) => setContentment(parseInt(e.target.value))}
      />
      <label htmlFor="contentment">{contentment} </label>
      <label htmlFor="joy">Joy</label>
      <input
        type="range"
        name="joy"
        id="joy"
        min={0}
        max={10}
        step={1}
        value={joy}
        onChange={(e) => setJoy(parseInt(e.target.value))}
      />
      <label htmlFor="joy">{joy} </label>
      <label htmlFor="relief">Relief</label>
      <input
        type="range"
        name="relief"
        id="relief"
        min={0}
        max={10}
        step={1}
        value={relief}
        onChange={(e) => setRelief(parseInt(e.target.value))}
      />
      <label htmlFor="relief">{relief} </label>
      <label htmlFor="hopelessness">Hopelessness</label>
      <input
        type="range"
        name="hopelessness"
        id="hopelessness"
        min={0}
        max={10}
        step={1}
        value={hopelessness}
        onChange={(e) => setHopelessness(parseInt(e.target.value))}
      />
      <label htmlFor="hopelessness">{hopelessness} </label>
      <label htmlFor="loneliness">Loneliness</label>
      <input
        type="range"
        name="loneliness"
        id="loneliness"
        min={0}
        max={10}
        step={1}
        value={loneliness}
        onChange={(e) => setLoneliness(parseInt(e.target.value))}
      />
      <label htmlFor="loneliness">{loneliness} </label>
      <label htmlFor="disappointment">Disappointment</label>
      <input
        type="range"
        name="disappointment"
        id="disappointment"
        min={0}
        max={10}
        step={1}
        value={disappointment}
        onChange={(e) => setDisappointment(parseInt(e.target.value))}
      />
      <label htmlFor="disappointment">{disappointment} </label>
      <label htmlFor="gloomy">Gloomy</label>
      <input
        type="range"
        name="gloomy"
        id="gloomy"
        min={0}
        max={10}
        step={1}
        value={gloomy}
        onChange={(e) => setGloomy(parseInt(e.target.value))}
      />
      <label htmlFor="gloomy">{gloomy} </label>
      <label htmlFor="anxiety">Anxiety</label>
      <input
        type="range"
        name="anxiety"
        id="anxiety"
        min={0}
        max={10}
        step={1}
        value={anxiety}
        onChange={(e) => setAnxiety(parseInt(e.target.value))}
      />
      <label htmlFor="anxiety">{anxiety} </label>
      <label htmlFor="stressed">stressed</label>
      <input
        type="range"
        name="stressed"
        id="stressed"
        min={0}
        max={10}
        step={1}
        value={stressed}
        onChange={(e) => setStressed(parseInt(e.target.value))}
      />
      <label htmlFor="stressed">{stressed} </label>
      <label htmlFor="worried">Worried</label>
      <input
        type="range"
        name="worried"
        id="worried"
        min={0}
        max={10}
        step={1}
        value={worried}
        onChange={(e) => setWorried(parseInt(e.target.value))}
      />
      <label htmlFor="worried">{worried} </label>
      <label htmlFor="doubtful">Doubtful</label>
      <input
        type="range"
        name="doubtful"
        id="doubtful"
        min={0}
        max={10}
        step={1}
        value={doubtful}
        onChange={(e) => setDoubtful(parseInt(e.target.value))}
      />
      <label htmlFor="doubtful">{doubtful} </label>
      <label htmlFor="mad">Mad</label>
      <input
        type="range"
        name="mad"
        id="mad"
        min={0}
        max={10}
        step={1}
        value={mad}
        onChange={(e) => setMad(parseInt(e.target.value))}
      />
      <label htmlFor="mad">{mad} </label>
      <label htmlFor="annoyed">Annoyed</label>
      <input
        type="range"
        name="annoyed"
        id="annoyed"
        min={0}
        max={10}
        step={1}
        value={annoyed}
        onChange={(e) => setAnnoyed(parseInt(e.target.value))}
      />
      <label htmlFor="annoyed">{annoyed} </label>
      <label htmlFor="irritation">Irritation</label>
      <input
        type="range"
        name="irritation"
        id="irritation"
        min={0}
        max={10}
        step={1}
        value={irritation}
        onChange={(e) => setIrritation(parseInt(e.target.value))}
      />
      <label htmlFor="irritation">{irritation} </label>
      <label htmlFor="frustration">Frustration</label>
      <input
        type="range"
        name="frustration"
        id="frustration"
        min={0}
        max={10}
        step={1}
        value={frustration}
        onChange={(e) => setFrustration(parseInt(e.target.value))}
      />
      <label htmlFor="frustration">{frustration} </label>
      <label htmlFor="withdrawn">Withdrawn</label>
      <input
        type="range"
        name="withdrawn"
        id="withdrawn"
        min={0}
        max={10}
        step={1}
        value={withdrawn}
        onChange={(e) => setWithdrawn(parseInt(e.target.value))}
      />
      <label htmlFor="withdrawn">{withdrawn} </label>
      <label htmlFor="uncomfortable">Uncomfortable</label>
      <input
        type="range"
        name="uncomfortable"
        id="uncomfortable"
        min={0}
        max={10}
        step={1}
        value={uncomfortable}
        onChange={(e) => setUncomfortable(parseInt(e.target.value))}
      />
      <label htmlFor="uncomfortable">{uncomfortable} </label>
      <label htmlFor="offended">Offended</label>
      <input
        type="range"
        name="offended"
        id="offended"
        min={0}
        max={10}
        step={1}
        value={offended}
        onChange={(e) => setOffended(parseInt(e.target.value))}
      />
      <label htmlFor="offended">{offended} </label>
      <label htmlFor="disturbed">Disturbed</label>
      <input
        type="range"
        name="disturbed"
        id="disturbed"
        min={0}
        max={10}
        step={1}
        value={disturbed}
        onChange={(e) => setDisturbed(parseInt(e.target.value))}
      />
      <label htmlFor="disturbed">{disturbed} </label>
      <button>Submit</button>
    </form>
  );
};

export default SubmissionForm;
