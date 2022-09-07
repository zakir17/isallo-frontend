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
      <div className="journeyContainer">
        {seeForm ? (
          <>
            <h2>Your Entry</h2>
            <button className="ReturnToJBtn" onClick={() => setSeeForm(false)}>
              Return to Journal
            </button>
          </>
        ) : (
          <>
            <h2>My Journey</h2>
            <div className="myJourneyP">
              <p>
                Use this page to add entries to your journal, access past
                entries individually, and evaluate your emotions. View entries
                below or...
              </p>
              <button onClick={() => setSeeForm(true)}>Add Entry</button>
            </div>
          </>
        )}
      </div>

      {seeForm ? (
        <SubmissionForm onAdd={submitSubmission} setSeeForm={setSeeForm} />
      ) : (
        <CardContainer submissions={submissions} />
      )}
    </div>
  );
};

export default Main;
