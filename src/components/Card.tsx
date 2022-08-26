import Submission from "../models/Submission";
import "./Card.css";

interface Props {
  submission: Submission;
}

const Card = ({ submission }: Props) => {
  return (
    <div className="Card">
      <p>{submission.date}</p>
      <p>{submission.activity}</p>
      <p>{submission.annoyed}</p>
      <p>{submission.hDYFeel}</p>
      <p>{submission.keyMoment}</p>
    </div>
  );
};

export default Card;
