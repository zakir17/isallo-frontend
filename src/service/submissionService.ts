import axios from "axios";
import Submission from "../models/Submission";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getAllSubmissions = async (uid: string): Promise<Submission[]> => {
  return (await axios.get(`${baseURL}/${encodeURIComponent(uid)}`)).data;
};

export const getOneSubmission = async (
  _id: string,
  uid: string
): Promise<Submission> => {
  return (
    await axios.get(
      `${baseURL}/${encodeURIComponent(_id)}/user/${encodeURIComponent(uid)}`
    )
  ).data;
};

export const addOneSubmission = async (
  submission: Submission
): Promise<Submission> => {
  return (await axios.post(baseURL, submission)).data;
};

export const deleteOneSubmission = async (
  id: string,
  uid: string
): Promise<Submission> => {
  return (
    await axios.delete(
      `${baseURL}/${encodeURIComponent(id)}/user/${encodeURIComponent(uid)}`
    )
  ).data;
};
