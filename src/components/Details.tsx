import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Submission from "../models/Submission";
import {
  deleteOneSubmission,
  getOneSubmission,
} from "../service/submissionService";
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

  console.log(submission?.contentment);
  return (
    <div className="Details">
      {submission && (
        <div>
          <p>Date: {submission?.date}</p>
          <p>Activities: {submission?.activity}</p>
          <p>How you felt: {submission?.hDYFeel}</p>
          <p>Key Moments: {submission?.keyMoments}</p>
          <p>Satisfaction: {submission?.satisfaction}</p>
          <p>Contentment: {submission?.contentment}</p>
          <p>Joy: {submission?.joy}</p>
          <p>Relief: {submission?.relief}</p>
          <p>Hopelessness: {submission?.hopelessness}</p>
          <p>Loneliness: {submission?.loneliness}</p>
          <p>Disappointment: {submission?.disappointment}</p>
          <p>Gloomy: {submission?.gloomy}</p>
          <p>Anxiety: {submission?.anxiety}</p>
          <p>Stressed: {submission?.stressed}</p>
          <p>Worried: {submission?.worried}</p>
          <p>Doubtful: {submission?.doubtful}</p>
          <p>Mad: {submission?.mad}</p>
          <p>Annoyed: {submission?.annoyed}</p>
          <p>Irritation: {submission?.irritation}</p>
          <p>Frustration: {submission?.frustration}</p>
          <p>Withdrawn: {submission?.withdrawn}</p>
          <p>Uncomfortable: {submission?.uncomfortable}</p>
          <p>Offended: {submission?.offended}</p>
          <p>Disturbed: {submission?.disturbed}</p>

          <button
            onClick={() => deleteThisSubmission(submission._id!, user!.uid!)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Details;
