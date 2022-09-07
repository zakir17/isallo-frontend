import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Submission from "../models/Submission";
import {
  deleteOneSubmission,
  getOneSubmission,
} from "../service/submissionService";
import BarChart from "./BarChart";
import Card from "./Card";
import "./Details.css";
const Details = () => {
  const { user } = useContext(AuthContext);
  const _id: string | undefined = useParams()._id;
  const [submission, setSubmission] = useState<Submission | null>(null);
  useEffect(() => {
    getOneSubmission(_id!, user!.uid!).then((response) => {
      setSubmission(response);
      console.log(response);
      console.log(user!.uid!);
    });
  }, []);
  const Navigate = useNavigate();
  const deleteThisSubmission = (_id: string, uid: string): void => {
    deleteOneSubmission(_id!, user!.uid!).then(() => {});
    Navigate("/main");
  };

  return (
    <div className="Details">
      {submission && (
        <div>
          <div className="textContainer">
            <div className="detailsHeader">
              <h2>Daily Reflection</h2>
              <p>Date: {submission?.date}</p>
            </div>
            <div className="textInput">
              <p>
                <span className="textTopics">Activities:</span>{" "}
                {submission?.activity}
              </p>
              <p>
                <span className="textTopics">How you felt:</span>{" "}
                {submission?.hDYFeel}
              </p>
              <p>
                <span className="textTopics"> Key Moments:</span>{" "}
                {submission?.keyMoments}
              </p>
            </div>
          </div>
          <div className="chartAndEmotionsContainer">
            <div className="emotions">
              <div className="enjoyment column">
                <p>Satisfaction: {submission?.satisfaction}</p>
                <p>Contentment: {submission?.contentment}</p>
                <p>Joy: {submission?.joy}</p>
                <p>Relief: {submission?.relief}</p>
              </div>
              <div className="sadness column">
                <p>Hopelessness: {submission?.hopelessness}</p>
                <p>Loneliness: {submission?.loneliness}</p>
                <p>Disappointment: {submission?.disappointment}</p>
                <p>Gloomy: {submission?.gloomy}</p>
              </div>
              <div className="fear column">
                <p>Anxiety: {submission?.anxiety}</p>
                <p>Stressed: {submission?.stressed}</p>
                <p>Worried: {submission?.worried}</p>
                <p>Doubtful: {submission?.doubtful}</p>
              </div>
              <div className="anger column">
                <p>Mad: {submission?.mad}</p>
                <p>Annoyed: {submission?.annoyed}</p>
                <p>Irritation: {submission?.irritation}</p>
                <p>Frustration: {submission?.frustration}</p>
              </div>
              <div className="disgust column">
                <p>Withdrawn: {submission?.withdrawn}</p>
                <p>Uncomfortable: {submission?.uncomfortable}</p>
                <p>Offended: {submission?.offended}</p>
                <p>Disturbed: {submission?.disturbed}</p>
              </div>
            </div>
            <div className="barChart">
              <BarChart
                chartData={[
                  submission.satisfaction,
                  submission.contentment,
                  submission.joy,
                  submission.relief,
                  submission.hopelessness,
                  submission.loneliness,
                  submission.disappointment,
                  submission.gloomy,
                  submission.anxiety,
                  submission.stressed,
                  submission.worried,
                  submission.doubtful,
                  submission.mad,
                  submission.annoyed,
                  submission.irritation,
                  submission.frustration,
                  submission.withdrawn,
                  submission.uncomfortable,
                  submission.offended,
                  submission.disturbed,
                ]}
              ></BarChart>
            </div>
          </div>
          <div className="deletebtn">
            <button
              onClick={() => deleteThisSubmission(submission._id!, user!.uid!)}
            >
              Delete Entry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Details;
