import React from "react";

const Worksheet = ({ answers, onAnswerChange }) => {
  const questions = [
    { question: "Round 64 to the nearest ten", options: [60, 70, 50, 80] },
    { question: "Round 78 to the nearest ten", options: [70, 80, 60, 90] },
    { question: "Round 47 to the nearest ten", options: [40, 50, 30, 60] },
    { question: "Round 85 to the nearest ten", options: [80, 90, 70, 100] },
    { question: "Round 92 to the nearest ten", options: [90, 100, 80, 110] },
    { question: "Round 36 to the nearest ten", options: [30, 40, 20, 50] },
    { question: "Round 59 to the nearest ten", options: [50, 60, 40, 70] },
    { question: "Round 83 to the nearest ten", options: [80, 90, 70, 100] },
    { question: "Round 24 to the nearest ten", options: [20, 30, 10, 40] },
    { question: "Round 16 to the nearest ten", options: [10, 20, 0, 30] },
    { question: "Round 45 to the nearest ten", options: [40, 50, 30, 60] },
    { question: "Round 38 to the nearest ten", options: [30, 40, 20, 50] },
  ];

  return (
    <div className="worksheet-content">
      {questions.map((q, index) => (
        <div key={index} className="question">
          <div className="question-text">
            <label>{q.question}</label>
          </div>
          <div className="options">
            {q.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option">
                <input
                  type="radio"
                  id={`question-${index}-option-${optionIndex}`}
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => onAnswerChange(index, option)}
                />
                <label htmlFor={`question-${index}-option-${optionIndex}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Worksheet;
