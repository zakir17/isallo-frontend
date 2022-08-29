import { Link } from "react-router-dom";
import Submission from "../models/Submission";
import "./Card.css";

interface Props {
  submission: Submission;
}

const Card = ({ submission }: Props) => {
  const enjoyment =
    submission.satisfaction +
    submission.contentment +
    submission.joy +
    submission.relief;

  const sadness =
    submission.hopelessness +
    submission.loneliness +
    submission.disappointment +
    submission.gloomy;
  const fear =
    submission.anxiety +
    submission.stressed +
    submission.worried +
    submission.doubtful;
  const anger =
    submission.mad +
    submission.annoyed +
    submission.irritation +
    submission.frustration;

  const disgust =
    submission.withdrawn +
    submission.uncomfortable +
    submission.offended +
    submission.disturbed;

  return (
    <div className="Card">
      <p>Date: {submission.date}</p>
      <p>Activities: {submission.activity}</p>
      <p>How you felt: {submission.hDYFeel}</p>
      <p>Key Moments: {submission.keyMoments}</p>
      <p>Your enjoyment level is: {enjoyment}</p>
      <p>Your enjoyment level is: {sadness}</p>
      <p>Your enjoyment level is: {fear}</p>
      <p>Your enjoyment level is: {anger}</p>
      <p>Your enjoyment level is: {disgust}</p>

      <Link to={`/${encodeURIComponent(submission._id!)}/details`}>
        See more
      </Link>
    </div>
  );
};

export default Card;
