import { async } from "@firebase/util";
import axios from "axios";
import Submission from "../models/Submission";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getAllSubmissions = async (): Promise<Submission[]> => {
  return (await axios.get(baseURL)).data;
};
