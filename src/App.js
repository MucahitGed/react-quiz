import './App.css';
import React, { useState} from 'react';


function App() {
  const [timer , setTimer] = useState(10)

     let timeOut = setTimeout(()=>{
          if(timer > 0 ){
              setTimer(timer-1);
          }
          else{              
              setQuesIdx(quesIdx+1);
              setTimer(10);
          }
      }, 1000);

const questions = [
  {
    questionText: '1- Which Language Is Not Front End',
    answerOptions: [
      { answerText: 'HTML5', isCorrect: false },
      { answerText: 'CSS3', isCorrect: false },
      { answerText: 'Javascript', isCorrect: false },
      { answerText: 'Phyton', isCorrect: true },
    ],
  },
  {
    questionText: '2- Which Language Is Not Backend',
    answerOptions: [
      { answerText: 'C++', isCorrect: false },
      { answerText: 'CSS3', isCorrect: true },
      { answerText: 'Java', isCorrect: false },
      { answerText: 'C', isCorrect: false },
    ],
  },
  {
    questionText: '3- Which Language Is Newest',
    answerOptions: [
      { answerText: 'Javascript', isCorrect: true },
      { answerText: 'Java', isCorrect: false },
      { answerText: 'Fortran', isCorrect: false },
      { answerText: 'C++', isCorrect: false },
    ],
  },
  {
    questionText: '4- When Javascript Is Launched',
    answerOptions: [
      { answerText: '2001', isCorrect: false },
      { answerText: '1990', isCorrect: false },
      { answerText: '1992', isCorrect: false },
      { answerText: '1995', isCorrect: true },
    ],
  },
]
  const [quesIdx , setQuesIdx] = useState(0)
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = quesIdx+1
		if (nextQuestion < questions.length) {
			setQuesIdx(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  
  return (
    <div className='app'>
      {showScore ? (
      <div className='score-section'>
        You scored {score} out of {questions.length}
      </div>
    ) : (
      <div className='App'>
       <div className='Header'>
        <h1 className="header-title">
            Quiz App
        </h1>
        <div className="time">
            {timer}
        </div>
    </div>
      <div className="questions-main">
        <div className="question">{questions[quesIdx].questionText}</div>
        <div className="options">
          {questions[quesIdx].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
        </div>
      </div>
        <div className="Footer">
          <div className="footer">
          <div className="question-left">{quesIdx+1}/4</div>
        </div>
      </div>
      </div>)} 
      </div >
  )
}

export default App;
