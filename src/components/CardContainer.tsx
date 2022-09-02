import { useState } from "react";
import { Radar } from "react-chartjs-2";
import Submission from "../models/Submission";
import Card from "./Card";
import "./CardContainer.css";
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";

interface Props {
  submissions: Submission[];
}

const CardContainer = ({ submissions }: Props) => {
  const enjoymentOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "black",
          font: {
            size: 12,
            family: "'Comfortaa', cursive",
          },
        },
      },
      title: {
        display: true,
        text: "Enjoyment",
        color: "black",
        font: {
          size: 20,
          family: "'Comfortaa', cursive",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
          font: {
            size: 10,
            family: "'Comfortaa', cursive",
          },
        },
      },
      y: {
        ticks: {
          color: "black",
          font: {
            size: 10,
            family: "'Comfortaa', cursive",
          },
        },
        max: 10,
        min: 0,
      },
    },
  };
  const sadnessOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "black",
          font: {
            size: 12,
            family: "'Comfortaa', cursive",
          },
        },
      },
      title: {
        display: true,
        text: "Sadness",
        color: "black",
        font: {
          size: 20,
          family: "'Comfortaa', cursive",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
          font: {
            size: 10,
            family: "'Comfortaa', cursive",
          },
        },
      },
      y: {
        max: 10,
        min: 0,
        ticks: {
          color: "black",
          font: {
            size: 10,
            family: "'Comfortaa', cursive",
          },
        },
      },
    },
  };

  const fearOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "black",
          font: {
            size: 12,
            family: "'Comfortaa', cursive",
          },
        },
      },
      title: {
        display: true,
        text: "Fear",
        color: "black",
        font: {
          size: 20,
          family: "'Comfortaa', cursive",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
          font: {
            size: 10,
            family: "'Comfortaa', cursive",
          },
        },
      },
      y: {
        ticks: {
          color: "black",
          font: {
            size: 10,
            family: "'Comfortaa', cursive",
          },
        },
        max: 10,
        min: 0,
      },
    },
  };
  const angerOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "black",
          font: {
            size: 12,
            family: "'Comfortaa', cursive",
          },
        },
      },
      title: {
        display: true,
        text: "Anger",
        color: "black",
        font: {
          size: 20,
          family: "'Comfortaa', cursive",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
          font: {
            size: 10,
            family: "'Comfortaa', cursive",
          },
        },
      },
      y: {
        ticks: {
          color: "black",
          font: {
            size: 10,
            family: "'Comfortaa', cursive",
          },
        },
        max: 10,
        min: 0,
      },
    },
  };
  const disgustOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "black",
          font: {
            size: 12,
            family: "'Comfortaa', cursive",
          },
        },
      },
      title: {
        display: true,
        text: "Disgust",
        color: "black",
        font: {
          size: 20,
          family: "'Comfortaa', cursive",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
          font: {
            size: 10,
            family: "'Comfortaa', cursive",
          },
        },
      },
      y: {
        ticks: {
          color: "black",
          font: {
            size: 10,
            family: "'Comfortaa', cursive",
          },
        },
        max: 10,
        min: 0,
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
  const satisfactionTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.satisfaction));
    return total;
  };
  const contentmentTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.contentment));
    return total;
  };
  const joyTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.joy));
    return total;
  };
  const reliefTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.relief));
    return total;
  };
  const hopelessnessTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.hopelessness));
    return total;
  };
  const lonelinessTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.loneliness));
    return total;
  };
  const disappointmentTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.disappointment));
    return total;
  };
  const gloomyTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.gloomy));
    return total;
  };
  const anxietyTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.anxiety));
    return total;
  };
  const stressedTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.stressed));
    return total;
  };
  const worriedTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.worried));
    return total;
  };
  const doubtfulTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.doubtful));
    return total;
  };
  const madTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.mad));
    return total;
  };
  const annoyedTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.annoyed));
    return total;
  };
  const irritationTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.irritation));
    return total;
  };
  const frustrationTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.frustration));
    return total;
  };
  const withdrawnTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.withdrawn));
    return total;
  };
  const uncomfortableTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.uncomfortable));
    return total;
  };
  const offendedTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.offended));
    return total;
  };
  const disturbedTotal = (submissions: Submission[]): number => {
    let total = 0;
    submissions.forEach((submission) => (total += submission.disturbed));
    return total;
  };
  const enjoymentTotal =
    satisfactionTotal(submissions) +
    contentmentTotal(submissions) +
    joyTotal(submissions) +
    reliefTotal(submissions);
  const sadnessTotal =
    hopelessnessTotal(submissions) +
    lonelinessTotal(submissions) +
    disappointmentTotal(submissions) +
    gloomyTotal(submissions);
  const fearTotal =
    anxietyTotal(submissions) +
    stressedTotal(submissions) +
    worriedTotal(submissions) +
    doubtfulTotal(submissions);
  const angerTotal =
    madTotal(submissions) +
    annoyedTotal(submissions) +
    irritationTotal(submissions) +
    frustrationTotal(submissions);
  const disgustTotal =
    withdrawnTotal(submissions) +
    uncomfortableTotal(submissions) +
    offendedTotal(submissions) +
    disturbedTotal(submissions);
  const radarBroadData = {
    labels: ["Enjoyment", "Sadness", "Fear", "Anger", "Disgusted"],
    datasets: [
      {
        label: "Average",
        data: [
          enjoymentTotal / submissions.length,
          sadnessTotal / submissions.length,
          fearTotal / submissions.length,
          angerTotal / submissions.length,
          disgustTotal / submissions.length,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Total",
        data: [
          enjoymentTotal,
          sadnessTotal,
          fearTotal,
          angerTotal,
          disgustTotal,
        ],
        backgroundColor: "rgba(255, 99, 50, 0.2)",
        borderColor: "rgba(255, 99, 75, 1)",
        borderWidth: 1,
      },
    ],
  };
  const radarSpecificData = {
    labels: [
      "Satisfaction",
      "Contentment",
      "Joy",
      "Relief",
      "Hopelessness",
      "Loneliness",
      "Disappointment",
      "Gloomy",
      "Anxiety",
      "Stressed",
      "Worried",
      "Doubtful",
      "Mad",
      "Annoyed",
      "Irritation",
      "Frustration",
      "Withdrawn",
      "Uncomfortable",
      "Offended",
      "Disturbed",
    ],
    datasets: [
      {
        label: "Average",
        data: [
          satisfactionTotal(submissions) / submissions.length,
          contentmentTotal(submissions) / submissions.length,
          joyTotal(submissions) / submissions.length,
          reliefTotal(submissions) / submissions.length,
          hopelessnessTotal(submissions) / submissions.length,
          lonelinessTotal(submissions) / submissions.length,
          disappointmentTotal(submissions) / submissions.length,
          gloomyTotal(submissions) / submissions.length,
          anxietyTotal(submissions) / submissions.length,
          stressedTotal(submissions) / submissions.length,
          worriedTotal(submissions) / submissions.length,
          doubtfulTotal(submissions) / submissions.length,
          madTotal(submissions) / submissions.length,
          annoyedTotal(submissions) / submissions.length,
          irritationTotal(submissions) / submissions.length,
          frustrationTotal(submissions) / submissions.length,
          withdrawnTotal(submissions) / submissions.length,
          uncomfortableTotal(submissions) / submissions.length,
          offendedTotal(submissions) / submissions.length,
          disturbedTotal(submissions) / submissions.length,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Total",
        data: [
          satisfactionTotal(submissions),
          contentmentTotal(submissions),
          joyTotal(submissions),
          reliefTotal(submissions),
          hopelessnessTotal(submissions),
          lonelinessTotal(submissions),
          disappointmentTotal(submissions),
          gloomyTotal(submissions),
          anxietyTotal(submissions),
          stressedTotal(submissions),
          worriedTotal(submissions),
          doubtfulTotal(submissions),
          madTotal(submissions),
          annoyedTotal(submissions),
          irritationTotal(submissions),
          frustrationTotal(submissions),
          withdrawnTotal(submissions),
          uncomfortableTotal(submissions),
          offendedTotal(submissions),
          disturbedTotal(submissions),
        ],
        backgroundColor: "rgba(255, 99, 50, 0.2)",
        borderColor: "rgba(255, 99, 75, 1)",
        borderWidth: 1,
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
      <div>
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
      </div>
      <div className="tooltip">
        <i className="fa-solid fa-info"></i>
        <span className="tooltiptext">
          These line graphs show emotional trends over time.
        </span>
      </div>
      <div className="lineGraphsContainer">
        {showEnjoyment && (
          <div
            className="linegraph"
            style={{
              width: "500px",
              height: "250px",
              backgroundColor: "rgba(243, 231, 165, 0.6)",
            }}
          >
            <LineChart
              chartData={userDataEnjoyment}
              options={enjoymentOptions}
            />
          </div>
        )}
        {showSadness && (
          <div
            className="linegraph"
            style={{
              width: "500px",
              height: "250px",
              backgroundColor: "rgba(110, 168, 211, 0.6)",
            }}
          >
            <LineChart chartData={userDataSadness} options={sadnessOptions} />
          </div>
        )}
        {showFear && (
          <div
            className="linegraph"
            style={{
              width: "500px",
              height: "250px",
              backgroundColor: "rgba(64, 96, 93, 0.6)",
            }}
          >
            <LineChart chartData={userDataFear} options={fearOptions} />
          </div>
        )}
        {showAnger && (
          <div
            className="linegraph"
            style={{
              width: "500px",
              height: "250px",
              backgroundColor: "rgba(194, 116, 108, 0.6)",
            }}
          >
            <LineChart chartData={userDataAnger} options={angerOptions} />
          </div>
        )}
        {showDisgust && (
          <div
            className="linegraph"
            style={{
              width: "500px",
              height: "250px",
              backgroundColor: "rgba(235, 179, 155, 0.6)",
            }}
          >
            <LineChart chartData={userDataDisgust} options={disgustOptions} />
          </div>
        )}
      </div>
      <div className="radarContainer">
        <div className="radar broad">
          <RadarChart chartData={radarBroadData} />
          <div className="tooltip">
            <i className="fa-solid fa-paperclip"></i>
            <span className="tooltiptext">These radar charts show</span>
          </div>
        </div>
        <div className=" radar specific">
          <RadarChart chartData={radarSpecificData} />
          <div className="tooltip">
            <i className="fa-solid fa-paperclip"></i>
            <span className="tooltiptext">These radar charts show</span>
          </div>
        </div>
      </div>
      {submissions.map((item) => <Card submission={item} />).reverse()}
    </div>
  );
};

export default CardContainer;
