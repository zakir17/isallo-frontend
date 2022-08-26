import { useEffect, useState } from "react";
import Submission from "../models/Submission";
import { getAllSubmissions } from "../service/submissionService";
import CardContainer from "./CardContainer";
import "./Main.css";

const Main = () => {
  const [submissions, SetSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    getAllSubmissions().then((response) => {
      SetSubmissions(response);
    });
  }, []);

  return (
    <div className="Main">
      <CardContainer submissions={submissions} />
    </div>
  );
};

export default Main;
