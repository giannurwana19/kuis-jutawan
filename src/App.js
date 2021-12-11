import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import Trivia from './components/Trivia';
import Start from './components/Start';

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('Rp 0');

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: 'Rp 100.000' },
        { id: 2, amount: 'Rp 200.000' },
        { id: 3, amount: 'Rp 300.000' },
        { id: 4, amount: 'Rp 500.000' },
        { id: 5, amount: 'Rp 1.000.000' },
        { id: 6, amount: 'Rp 2.000.000' },
        { id: 7, amount: 'Rp 4.000.000' },
        { id: 8, amount: 'Rp 8.000.000' },
        { id: 9, amount: 'Rp 16.000.000' },
        { id: 10, amount: 'Rp 32.000.000' },
        { id: 11, amount: 'Rp 64.000.000' },
        { id: 12, amount: 'Rp 125.000.000' },
        { id: 13, amount: 'Rp 250.000.000' },
        { id: 14, amount: 'Rp 500.000.000' },
        { id: 15, amount: 'Rp 1.000.000.000' },
      ].reverse(),
    []
  );

  const data = [
    {
      id: 1,
      question: 'Rolex is a company that specializes in what type of product?',
      answers: [
        {
          text: 'Phone',
          correct: false,
        },
        {
          text: 'Watches',
          correct: true,
        },
        {
          text: 'Food',
          correct: false,
        },
        {
          text: 'Cosmetic',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: 'When did the website `Facebook` launch?',
      answers: [
        {
          text: '2004',
          correct: true,
        },
        {
          text: '2005',
          correct: false,
        },
        {
          text: '2006',
          correct: false,
        },
        {
          text: '2007',
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },
  ];

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">Kamu mendapatkan {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map(m => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? 'moneyListItem active'
                      : 'moneyListItem'
                  }>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
