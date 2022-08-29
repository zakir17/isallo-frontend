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
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const { user } = useContext(AuthContext);
  const [seeForm, setSeeForm] = useState<boolean>(false);

  const getAndSetSubmissions = (): void => {
    getAllSubmissions(user!.uid!).then((response) => {
      setSubmissions(response);
    });
  };
  const submitSubmission = (submission: Submission): void => {
    addOneSubmission(submission).then(() => {
      getAndSetSubmissions();
    });
  };

  useEffect(() => {
    if (user) {
      getAndSetSubmissions();
    }
  }, [user]);

  return (
    <div className="Main">
      {seeForm ? (
        <button onClick={() => setSeeForm(false)}>Open Journal</button>
      ) : (
        <button onClick={() => setSeeForm(true)}>Add Entry</button>
      )}

      {seeForm ? (
        <SubmissionForm onAdd={submitSubmission} setSeeForm={setSeeForm} />
      ) : (
        <CardContainer submissions={submissions} />
      )}
    </div>
  );
};

export default Main;
