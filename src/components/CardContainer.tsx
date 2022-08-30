import { useState } from "react";
import Submission from "../models/Submission";
import Card from "./Card";
import "./CardContainer.css";
import LineChart from "./LineChart";

interface Props {
  submissions: Submission[];
}

const CardContainer = ({ submissions }: Props) => {
  const enjoymentOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Enjoyment",
      },
    },
    scales: {
      xAxes: {
        grid: { drawBorder: true, color: "black" },
      },
    },
  };
  const sadnessOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Sadness",
      },
    },
  };
  const fearOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Fear",
      },
    },
  };
  const angerOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Anger",
      },
    },
  };
  const disgustOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Disgust",
      },
    },
  };
  const dateArray: string[] = [];
  submissions.forEach((item) => dateArray.push(item.date));
  const satisfaction: number[] = [];
  submissions.forEach((item) => satisfaction.push(item.satisfaction));
  const contentment: number[] = [];
  submissions.forEach((item) => contentment.push(item.contentment));
  const joy: number[] = [];
  submissions.forEach((item) => joy.push(item.joy));
  const relief: number[] = [];
  submissions.forEach((item) => relief.push(item.relief));
  const hopelessness: number[] = [];
  submissions.forEach((item) => hopelessness.push(item.hopelessness));
  const loneliness: number[] = [];
  submissions.forEach((item) => loneliness.push(item.loneliness));
  const disappointment: number[] = [];
  submissions.forEach((item) => disappointment.push(item.disappointment));
  const gloomy: number[] = [];
  submissions.forEach((item) => gloomy.push(item.gloomy));
  const anxiety: number[] = [];
  submissions.forEach((item) => anxiety.push(item.anxiety));
  const stressed: number[] = [];
  submissions.forEach((item) => stressed.push(item.stressed));
  const worried: number[] = [];
  submissions.forEach((item) => worried.push(item.worried));
  const doubtful: number[] = [];
  submissions.forEach((item) => doubtful.push(item.doubtful));
  const mad: number[] = [];
  submissions.forEach((item) => mad.push(item.mad));
  const annoyed: number[] = [];
  submissions.forEach((item) => annoyed.push(item.annoyed));
  const irritation: number[] = [];
  submissions.forEach((item) => irritation.push(item.irritation));
  const frustration: number[] = [];
  submissions.forEach((item) => frustration.push(item.frustration));
  const withdrawn: number[] = [];
  submissions.forEach((item) => withdrawn.push(item.withdrawn));
  const uncomfortable: number[] = [];
  submissions.forEach((item) => uncomfortable.push(item.uncomfortable));
  const offended: number[] = [];
  submissions.forEach((item) => offended.push(item.offended));
  const disturbed: number[] = [];
  submissions.forEach((item) => disturbed.push(item.disturbed));
  const labels = dateArray;
  const userData = {
    labels,
    datasets: [
      { label: "Satisfaction", data: satisfaction },
      { label: "Contentment", data: contentment },
      { label: "Joy", data: joy },
      { label: "Relief", data: relief },
      { label: "Hopelessness", data: hopelessness },
      { label: "Loneliness", data: loneliness },
      { label: "Disappointment", data: disappointment },
      { label: "Gloomy", data: gloomy },
      { label: "Anxiety", data: anxiety },
      { label: "Stressed", data: stressed },
      { label: "Worried", data: worried },
      { label: "Doubtful", data: doubtful },
      { label: "Mad", data: mad },
      { label: "Annoyed", data: annoyed },
      { label: "Irritation", data: irritation },
      { label: "Frustration", data: frustration },
      { label: "Withdrawn", data: withdrawn },
      { label: "Uncomfortable", data: uncomfortable },
      { label: "Offended", data: offended },
      { label: "Disturbed", data: disturbed },
    ],
  };
  const userDataEnjoyment = {
    labels,
    datasets: [
      {
        label: "Satisfaction",
        data: satisfaction,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Contentment",
        data: contentment,
        borderColor: "#049DC3",
        backgroundColor: "#049DC3",
      },
      {
        label: "Joy",
        data: joy,
        borderColor: "#FFF340",
        backgroundColor: "#FFF340",
      },
      {
        label: "Relief",
        data: relief,
        borderColor: "#25AE10",
        backgroundColor: "#25AE10",
      },
    ],
  };
  const userDataSadness = {
    labels,
    datasets: [
      {
        label: "Hopelessness",
        data: hopelessness,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },

      {
        label: "Loneliness",
        data: loneliness,
        borderColor: "#049DC3",
        backgroundColor: "#049DC3",
      },
      {
        label: "Disappointment",
        data: disappointment,
        borderColor: "#FFF340",
        backgroundColor: "#FFF340",
      },
      {
        label: "Gloomy",
        data: gloomy,
        borderColor: "#25AE10",
        backgroundColor: "#25AE10",
      },
    ],
  };
  const userDataFear = {
    labels,
    datasets: [
      {
        label: "Anxiety",
        data: anxiety,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Stressed",
        data: stressed,
        borderColor: "#049DC3",
        backgroundColor: "#049DC3",
      },
      {
        label: "Worried",
        data: worried,
        borderColor: "#FFF340",
        backgroundColor: "#FFF340",
      },
      {
        label: "Doubtful",
        data: doubtful,
        borderColor: "#25AE10",
        backgroundColor: "#25AE10",
      },
    ],
  };
  const userDataAnger = {
    labels,
    datasets: [
      {
        label: "Mad",
        data: mad,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Annoyed",
        data: annoyed,
        borderColor: "#049DC3",
        backgroundColor: "#049DC3",
      },
      {
        label: "Irritation",
        data: irritation,
        borderColor: "#FFF340",
        backgroundColor: "#FFF340",
      },
      {
        label: "Frustration",
        data: frustration,
        borderColor: "#25AE10",
        backgroundColor: "#25AE10",
      },
    ],
  };
  const userDataDisgust = {
    labels,
    datasets: [
      {
        label: "Withdrawn",
        data: withdrawn,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Uncomfortable",
        data: uncomfortable,
        borderColor: "#049DC3",
        backgroundColor: "#049DC3",
      },
      {
        label: "Offended",
        data: offended,
        borderColor: "#FFF340",
        backgroundColor: "#FFF340",
      },
      {
        label: "Disturbed",
        data: disturbed,
        borderColor: "#25AE10",
        backgroundColor: "#25AE10",
      },
    ],
  };

  const [showEnjoyment, setShowEnjoyment] = useState(true);
  const [showSadness, setShowSadness] = useState(false);
  const [showFear, setShowFear] = useState(false);
  const [showAnger, setShowAnger] = useState(false);
  const [showDisgust, setShowDisgust] = useState(false);
  return (
    <div className="CardContainer">
      <input
        type="checkbox"
        name="enjoyment"
        id="enjoyment"
        defaultChecked={true}
        onClick={() => setShowEnjoyment(!showEnjoyment)}
      />
      <label htmlFor="enjoyment">Enjoyment</label>
      <input
        type="checkbox"
        name="sadness"
        id="sadness"
        onClick={() => setShowSadness(!showSadness)}
      />
      <label htmlFor="sadness">Sadness</label>
      <input
        type="checkbox"
        name="fear"
        id="fear"
        onClick={() => setShowFear(!showFear)}
      />
      <label htmlFor="fear">Fear</label>
      <input
        type="checkbox"
        name="anger"
        id="anger"
        onClick={() => setShowAnger(!showAnger)}
      />
      <label htmlFor="anger">Anger</label>
      <input
        type="checkbox"
        name="disgust"
        id="disgust"
        onClick={() => setShowDisgust(!showDisgust)}
      />
      <label htmlFor="disgust">Disgust</label>

      {showEnjoyment && (
        <div>
          <h2>Enjoyment Trendline</h2>
          <LineChart chartData={userDataEnjoyment} options={enjoymentOptions} />
        </div>
      )}
      {showSadness && (
        <LineChart chartData={userDataSadness} options={sadnessOptions} />
      )}
      {showFear && <LineChart chartData={userDataFear} options={fearOptions} />}
      {showAnger && (
        <LineChart chartData={userDataAnger} options={angerOptions} />
      )}
      {showDisgust && (
        <LineChart chartData={userDataDisgust} options={disgustOptions} />
      )}
      {submissions.map((item) => (
        <Card submission={item} />
      ))}
    </div>
  );
};

export default CardContainer;
