import Submission from "../models/Submission";
import "./Card.css";

interface Props {
  submission: Submission;
}

const Card = ({ submission }: Props) => {
  return (
    <div className="Card">
      <p>Date: {submission.date}</p>
      <p>Activities: {submission.activity}</p>
      <p>How you felt: {submission.hDYFeel}</p>
      <p>Key Moments: {submission.keyMoments}</p>
      <p>Satisfaction: {submission.satisfaction}</p>
      <p>Contentment: {submission.contentment}</p>
      <p>Joy: {submission.joy}</p>
      <p>Relief: {submission.relief}</p>
      <p>Hopelessness: {submission.hopelessness}</p>
      <p>Loneliness: {submission.loneliness}</p>
      <p>Disappointment: {submission.disappointment}</p>
      <p>Gloomy: {submission.gloomy}</p>
      <p>Anxiety: {submission.anxiety}</p>
      <p>Stressed: {submission.stressed}</p>
      <p>Worried: {submission.worried}</p>
      <p>Doubtful: {submission.doubtful}</p>
      <p>Mad: {submission.mad}</p>
      <p>Annoyed: {submission.annoyed}</p>
      <p>Irritation: {submission.irritation}</p>
      <p>Frustration: {submission.frustration}</p>
      <p>Withdrawn: {submission.withdrawn}</p>
      <p>Uncomfortable: {submission.uncomfortable}</p>
      <p>Offended: {submission.offended}</p>
      <p>Disturbed: {submission.disturbed}</p>
    </div>
  );
};

export default Card;
