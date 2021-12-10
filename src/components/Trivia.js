import React, { useEffect, useState } from 'react';

const Trivia = ({ data, setTimeOut, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  return (
    <div className="trivia">
      <div className="question">Siapa Presiden pertama indonesia?</div>
      <div className="answers">
        <div className="answer">Soekarno</div>
        <div className="answer">Soekarno</div>
        <div className="answer">Soekarno</div>
        <div className="answer">Soekarno</div>
      </div>
    </div>
  );
};

export default Trivia;
