import { useState } from "react";
import { Link } from "react-router-dom";
import Submission from "../models/Submission";
import "./Card.css";
import PieChart from "./PieChart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

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

  const cardData = [enjoyment, sadness, fear, anger, disgust];

  return (
    <div className="Card">
      <PieChart cardData={cardData} />
      <div className="cardInfo">
        <p className="cardDate">Date: {submission.date}</p>
        <p>
          <span className="textTopics">Activities:</span> {submission.activity}
        </p>
        <p>
          <span className="textTopics">How you felt:</span> {submission.hDYFeel}
        </p>
        <p>
          <span className="textTopics">Key Moments:</span>{" "}
          {submission.keyMoments}
        </p>
        <Link to={`/${encodeURIComponent(submission._id!)}/details`}>
          <button className="cardBtn">See more</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
