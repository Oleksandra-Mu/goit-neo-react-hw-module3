import { useEffect, useState } from "react";
import "./App.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

const getValues = () => {
  const defaultValues = { good: 0, neutral: 0, bad: 0 };
  const localValues = localStorage.getItem("feedbackValues");
  if (localValues) {
    try {
      return JSON.parse(localValues);
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      localStorage.setItem("feedbackValues", JSON.stringify(defaultValues));
      return defaultValues;
    }
  } else {
    localStorage.setItem("feedbackValues", JSON.stringify(defaultValues));
    return defaultValues;
  }
};

export default function App() {
  const [feedback, setFeedback] = useState(getValues);

  const updateFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const resetFeedback = () => {
    const defaultValues = { good: 0, neutral: 0, bad: 0 };
    localStorage.setItem("feedbackValues", JSON.stringify(defaultValues));

    setFeedback(defaultValues);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  useEffect(() => {
    localStorage.setItem("feedbackValues", JSON.stringify(feedback));
  }, [feedback]);

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
