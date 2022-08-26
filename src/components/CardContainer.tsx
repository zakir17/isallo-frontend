import Submission from "../models/Submission";
import Card from "./Card";
import "./CardContainer.css";

interface Props {
  submissions: Submission[];
}

const CardContainer = ({ submissions }: Props) => {
  return (
    <div className="CardContainer">
      {submissions.map((item) => (
        <Card submission={item} />
      ))}
    </div>
  );
};

export default CardContainer;
