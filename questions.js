import React, { useState } from "react";

export function Questions(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestion, setShowQuestion] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  const questions = [
    {
      question:
        "1- if you have the choice to kill all people in that earth would you do it?",
      answers: [
        { title: "YES", brainCells: 10 },
        { title: "MAYBE", brainCells: 5 },
        { title: "NEVER", brainCells: 0 },
      ],
    },
    {
      question: "2- do you want slavery back? ",
      answers: [
        { title: "yes", brainCells: 10 },
        { title: "maybe", brainCells: 5 },
        { title: "never", brainCells: 0 },
      ],
    },
    {
      question: "3- do you enjoy BDSM videos ?",
      answers: [
        { title: "yes", brainCells: 10 },
        { title: "maybe", brainCells: 5 },
        { title: "no", brainCells: 0 },
      ],
    },
    {
      question:
        "4- if you have a choice to kill your own people you will do it ? ",
      answers: [
        { title: "yes", brainCells: 10 },
        { title: "maybe", brainCells: 2 },
        { title: "no", brainCells: 0 },
      ],
    },
    {
      question: "5- would you sucide if it was halal?",
      answers: [
        { title: "yes", brainCells: 10 },
        { title: "maybe", brainCells: 2 },
        { title: "no", brainCells: 0 },
      ],
    },
    {
      question:
        "6- is it easy for you to insult the people who can't defend themselves ? ",
      answers: [
        { title: "for sure", brainCells: 10 },
        { title: "maybe", brainCells: 2 },
        { title: "no", brainCells: 0 },
      ],
    },
    {
      question:
        "7- is it easy for you to bully girls even that sometimes you know that bother them? ",
      answers: [
        { title: "for sure", brainCells: 10 },
        { title: "maybe", brainCells: 2 },
        { title: "no", brainCells: 0 },
      ],
    },
    {
      question: "8- is it easy for you to bully person until he block you ?",
      answers: [
        { title: "for sure", brainCells: 10 },
        { title: "maybe", brainCells: 2 },
        { title: "no", brainCells: 0 },
      ],
    },
    {
      question: "9- have you break down a person before? ",
      answers: [
        { title: "yes", brainCells: 10 },
        { title: "maybe", brainCells: 5 },
        { title: "no", brainCells: 0 },
      ],
    },
    {
      question:
        "10- if they told you in cost you ruin someone you hate life we will give you 1 millon dollar would you do it?",
      answers: [
        { title: "for sure", brainCells: 10 },
        { title: "maybe", brainCells: 5 },
        { title: "no", brainCells: 0 },
      ],
    },
  ];

  const Click = (brainCells) => {
    props.sumResult(brainCells);
    setTotalSum(totalSum + brainCells);

    setCurrentQuestion(currentQuestion + 1);
    console.log(props.Sum);
  };

  const restClick = (brainCells) => {
    props.backResult(brainCells);
    setCurrentQuestion(0);
    setShowQuestion(0);
  };

  const prevQuestionClick = () => {
    if (true) {
      setCurrentQuestion(currentQuestion - 1);
      props.backResult(questions[currentQuestion - 1].answers[1].brainCells);
      setTotalSum(totalSum - questions[currentQuestion].answers[1].brainCells);
      console.log(props.Sum);
    }
  };

  const question = questions.map((question, index) => (
    <div className="allshit" key={index}>
      <div className="question">question: {question.question}</div>

      <ul className="shit">
        {question.answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => Click(answer.brainCells)}
            className="answer"
          >
            {answer.title}
          </button>
        ))}
      </ul>
    </div>
  ));

  function showask() {
    setShowQuestion(1);
  }
  let qna = question[currentQuestion];
  return (
    <div>
      <div className="start">
        {showQuestion === 0 ? <div>sickness test</div> : null}
        {showQuestion === 0 ? (
          <button onClick={showask}>press to see how sick you are</button>
        ) : null}
      </div>
      <div>
        {showQuestion === 1 ? <div>{qna}</div> : null}
        <div className="qna">
          {showQuestion === 1 ? (
            <div>
              <button onClick={restClick}>restart</button>
            </div>
          ) : null}
          {currentQuestion < 10 && currentQuestion > 0 ? (
            <div>
              <button onClick={prevQuestionClick}>prevQuestion</button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="end">
        {currentQuestion === 10 ? (
          <button onClick={props.seeSum}>sum the results</button>
        ) : null}
        {props.ShowAnswer ? <div>{props.Sum}</div> : null}
        {props.ShowAnswer === true ? (
          <button className="result" onClick={props.seeResult}>
            result
          </button>
        ) : null}
        {props.showResult === true ? <div>{props.Result}</div> : null}
      </div>
    </div>
  );
}
