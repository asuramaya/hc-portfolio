import "./Testimonials.css";
import surveys from "../xlsx/surveys.json";
import React, { useEffect, useState } from "react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  //add 1 to index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => index + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testContainer">
      
      <button
        className="testimonials"
        s
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        {displaySurvey(surveys[index % surveys.length])}
      </button>
    </div>
  );
}

function displaySurvey(survey) {
  //take survey and convert to string

  const surveyString = JSON.stringify(
    survey["Requester name"].replace(/(\w+), (\w+)/, "$2 $1")
  ).replace(/['"]+/g, "");
  //remove quotes

  return (
    <div>
      <h1>"{survey["Ticket satisfaction comment"]}"</h1>
      <h2>
        {surveyString} - {survey["Solved"]}
      </h2>
    </div>
  );
}
