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
    // maintainAspectRatio: true,
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
    maintainAspectRatio: true,
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
    maintainAspectRatio: true,
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
    maintainAspectRatio: true,
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
    maintainAspectRatio: true,
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
        borderColor: "rgb(194, 116, 108)",
        backgroundColor: "rgb(194, 116, 108)",
      },
      {
        label: "Contentment",
        data: contentment,
        borderColor: "rgb(110, 168, 211)",
        backgroundColor: "rgb(110, 168, 211)",
      },
      {
        label: "Joy",
        data: joy,
        borderColor: "rgb(235, 179, 155)",
        backgroundColor: "rgb(235, 179, 155)",
      },
      {
        label: "Relief",
        data: relief,
        borderColor: "rgb(64, 96, 93)",
        backgroundColor: "rgb(64, 96, 93)",
      },
    ],
  };
  const userDataSadness = {
    labels,
    datasets: [
      {
        label: "Hopelessness",
        data: hopelessness,
        borderColor: " rgb(194, 116, 108)",
        backgroundColor: " rgb(194, 116, 108)        ",
      },

      {
        label: "Loneliness",
        data: loneliness,
        borderColor: "rgb(243, 231, 165)        ",
        backgroundColor: " rgb(243, 231, 165)        ",
      },
      {
        label: "Disappointment",
        data: disappointment,
        borderColor: "rgb(235, 179, 155)        ",
        backgroundColor: "rgb(235, 179, 155)",
      },
      {
        label: "Gloomy",
        data: gloomy,
        borderColor: "rgb(64, 96, 93)        ",
        backgroundColor: "rgb(64, 96, 93)",
      },
    ],
  };
  const userDataFear = {
    labels,
    datasets: [
      {
        label: "Anxiety",
        data: anxiety,
        borderColor: "rgb(194, 116, 108)        ",
        backgroundColor: "rgb(194, 116, 108)        ",
      },
      {
        label: "Stressed",
        data: stressed,
        borderColor: "rgb(110, 168, 211)        ",
        backgroundColor: "rgb(110, 168, 211)        ",
      },
      {
        label: "Worried",
        data: worried,
        borderColor: " rgb(243, 231, 165)",
        backgroundColor: " rgb(243, 231, 165)",
      },
      {
        label: "Doubtful",
        data: doubtful,
        borderColor: "   rgb(235, 179, 155)",
        backgroundColor: "   rgb(235, 179, 155)",
      },
    ],
  };
  const userDataAnger = {
    labels,
    datasets: [
      {
        label: "Mad",
        data: mad,
        borderColor: "  rgb(235, 179, 155)        ",
        backgroundColor: "  rgb(235, 179, 155)        ",
      },
      {
        label: "Annoyed",
        data: annoyed,
        borderColor: " rgb(110, 168, 211)",
        backgroundColor: " rgb(110, 168, 211)",
      },
      {
        label: "Irritation",
        data: irritation,
        borderColor: "rgb(243, 231, 165)",
        backgroundColor: "rgb(243, 231, 165)",
      },
      {
        label: "Frustration",
        data: frustration,
        borderColor: " rgb(64, 96, 93)",
        backgroundColor: " rgb(64, 96, 93)",
      },
    ],
  };
  const userDataDisgust = {
    labels,
    datasets: [
      {
        label: "Withdrawn",
        data: withdrawn,
        borderColor: "rgb(194, 116, 108)        ",
        backgroundColor: "rgb(194, 116, 108)        ",
      },
      {
        label: "Uncomfortable",
        data: uncomfortable,
        borderColor: "rgb(110, 168, 211)",
        backgroundColor: "rgb(110, 168, 211)",
      },
      {
        label: "Offended",
        data: offended,
        borderColor: " rgb(243, 231, 165)",
        backgroundColor: " rgb(243, 231, 165)",
      },
      {
        label: "Disturbed",
        data: disturbed,
        borderColor: "rgb(64, 96, 93)",
        backgroundColor: "rgb(64, 96, 93)",
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
        backgroundColor: "rgba(110, 168, 211, 0.4)",
        borderColor: "rgba(110, 168, 211, 1)",
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
        backgroundColor: "rgba(235, 179, 155, 0.3)",
        borderColor: "rgba(194, 116, 108, 1)",
        borderWidth: 1,
      },
    ],
  };
  const radarOptions = {
    responsive: true,
    maintainAspectRatio: true,
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
        display: false,
        // text: "Disgust",
        color: "black",
        font: {
          size: 20,
          family: "'Comfortaa', cursive",
        },
      },
    },
    scales: {
      r: {
        color: "black",
        font: {
          size: 10,
          family: "'Comfortaa', cursive",
        },
      },
    },
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
        backgroundColor: "rgba(110, 168, 211, 0.4)",
        borderColor: "rgba(110, 168, 211, 1)",
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
        backgroundColor: "rgba(235, 179, 155, 0.3)",
        borderColor: "rgba(194, 116, 108, 1)",
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
      <h2>Trends </h2>
      <div className="checkboxContainer">
        <div>
          <input
            type="checkbox"
            name="enjoyment"
            id="enjoyment"
            defaultChecked={true}
            onClick={() => setShowEnjoyment(!showEnjoyment)}
          />
          <label htmlFor="enjoyment">Enjoyment</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="sadness"
            id="sadness"
            onClick={() => setShowSadness(!showSadness)}
          />
          <label htmlFor="sadness">Sadness</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="fear"
            id="fear"
            onClick={() => setShowFear(!showFear)}
          />
          <label htmlFor="fear">Fear</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="anger"
            id="anger"
            onClick={() => setShowAnger(!showAnger)}
          />
          <label htmlFor="anger">Anger</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="disgust"
            id="disgust"
            onClick={() => setShowDisgust(!showDisgust)}
          />
          <label htmlFor="disgust">Disgust</label>
        </div>
      </div>

      <div className="lineGraphsContainer">
        {showEnjoyment && (
          <div
            className="linegraph"
            style={{
              // width: "95%",
              // // // height: "85%",
              // // maxHeight: "300px",
              // minWidth: "250px",
              // maxWidth: "550px",
              backgroundColor: "rgba(243, 231, 165, 0.6)",
            }}
          >
            <div className="tooltip">
              <i className="fa-solid fa-circle-info"></i>
              <span className="tooltiptext">
                This line graph shows enjoyment trends over time.
              </span>
            </div>

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
              // width: "95%",
              // // // height: "85%",
              // // maxHeight: "300px",
              // minWidth: "250px",
              // maxWidth: "550px",
              backgroundColor: "rgba(110, 168, 211, 0.6)",
            }}
          >
            <div className="tooltip">
              <i className="fa-solid fa-circle-info"></i>
              <span className="tooltiptext">
                This line graph shows sadness trends over time.
              </span>
            </div>
            <LineChart chartData={userDataSadness} options={sadnessOptions} />
          </div>
        )}
        {showFear && (
          <div
            className="linegraph"
            style={{
              // width: "95%",
              // // // height: "85%",
              // // maxHeight: "300px",
              // minWidth: "250px",
              // maxWidth: "550px",
              backgroundColor: "rgba(64, 96, 93, 0.6)",
            }}
          >
            <div className="tooltip">
              <i className="fa-solid fa-circle-info"></i>
              <span className="tooltiptext">
                This line graph shows fear trends over time.
              </span>
            </div>
            <LineChart chartData={userDataFear} options={fearOptions} />
          </div>
        )}
        {showAnger && (
          <div
            className="linegraph"
            style={{
              // width: "95%",
              // // // height: "85%",
              // // maxHeight: "300px",
              // minWidth: "250px",
              // maxWidth: "550px",
              backgroundColor: "rgba(194, 116, 108, 0.6)",
            }}
          >
            <div className="tooltip">
              <i className="fa-solid fa-circle-info"></i>
              <span className="tooltiptext">
                This line graph shows anger trends over time.
              </span>
            </div>
            <LineChart chartData={userDataAnger} options={angerOptions} />
          </div>
        )}
        {showDisgust && (
          <div
            className="linegraph"
            style={{
              // width: "95%",
              // // // height: "85%",
              // // maxHeight: "300px",
              // minWidth: "250px",
              // maxWidth: "550px",
              backgroundColor: "rgba(235, 179, 155, 0.6)",
            }}
          >
            <div className="tooltip">
              <i className="fa-solid fa-circle-info"></i>
              <span className="tooltiptext">
                This line graph shows disgust trends over time.
              </span>
            </div>
            <LineChart chartData={userDataDisgust} options={disgustOptions} />
          </div>
        )}
      </div>
      <h2>Emotional Orientation </h2>
      <div className="radarContainer">
        <div className="radar broad">
          <div className="tooltip">
            <i className="fa-solid fa-circle-info"></i>
            <span className="tooltiptext">
              Use this chart to get a sense of your overall emotional picture.
            </span>
          </div>
          <RadarChart chartData={radarBroadData} options={radarOptions} />
        </div>
        <div className=" radar specific">
          <div className="tooltip">
            <i className="fa-solid fa-circle-info"></i>
            <span className="tooltiptext">
              Use this chart to get an in-depth picture of the intensity of your
              emotions.
            </span>
          </div>
          <RadarChart chartData={radarSpecificData} options={radarOptions} />
        </div>
      </div>
      <h2>History</h2>
      <div className="submissionContainer">
        {submissions.map((item) => <Card submission={item} />).reverse()}
      </div>
    </div>
  );
};

export default CardContainer;
