import React, { useState } from "react";
import Worksheet from "./components/Worksheet";
import NameInput from "./components/NameInput";
import ResetButton from "./components/ResetButton";
import SubmitButton from "./components/SubmitButton";
import Header from "./components/Header";

const App = () => {
  const [userName, setUserName] = useState("");
  const [answers, setAnswers] = useState(Array(12).fill(null));
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const correctAnswers = [60, 70, 50, 80, 90, 40, 60, 50, 20, 10, 40, 30];

  const handleAnswerChange = (index, selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    if (!userName) {
      alert("Please enter your name before submitting.");
      return;
    }

    const userScore = answers.reduce((score, answer, index) => {
      return answer === correctAnswers[index] ? score + 1 : score;
    }, 0);

    setScore(userScore);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Array(12).fill(null));
    setScore(null);
    setSubmitted(false);
    setUserName("");
  };

  return (
    <div className="App">
      <Header />
      {!submitted ? (
        <div className="form-container">
          <NameInput userName={userName} setUserName={setUserName} />
          <Worksheet answers={answers} onAnswerChange={handleAnswerChange} />
          <div className="actions">
            <ResetButton onReset={handleReset} />
            <SubmitButton onSubmit={handleSubmit} />
          </div>
        </div>
      ) : (
        <div className="score-container">
          <h2>
            {userName}, Your Score: {score}/12
          </h2>
        </div>
      )}
    </div>
  );
};

export default App;
