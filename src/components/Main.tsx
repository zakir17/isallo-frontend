import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Submission from "../models/Submission";
import {
  addOneSubmission,
  getAllSubmissions,
} from "../service/submissionService";
import CardContainer from "./CardContainer";
import "./Main.css";
import SubmissionForm from "./SubmissionForm";

const Main = () => {
  const [submissions, SetSubmissions] = useState<Submission[]>([]);
  const { user } = useContext(AuthContext);
  const getAndSetSubmissions = (): void => {
    getAllSubmissions(user!.uid!).then((response) => {
      SetSubmissions(response);
    });
  };
  const submitSubmission = (submission: Submission): void => {
    addOneSubmission(submission).then(() => {
      getAndSetSubmissions();
    });
  };

  useEffect(() => {
    getAndSetSubmissions();
  }, []);

  return (
    <div className="Main">
      <CardContainer submissions={submissions} />
      <SubmissionForm onAdd={submitSubmission} />
    </div>
  );
};

export default Main;
