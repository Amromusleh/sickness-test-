import "./App.css";
import { Questions } from "./questions";
import { useState } from "react";

function App() {
  const [sum, setSum] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");

  function sumResult(brainCells) {
    setSum(sum + brainCells);
  }
  function backResult(brainCells) {
    setSum(0);
    setShowAnswer(false);
    setShowResult(false);
  }

  function seeResult() {
    if (sum === 0) {
      setResult(
        "you are cute and pure seeing a person like you is almost imposiple"
      );
    }
    if (sum > +0 && sum < 30) {
      setResult("you are a normal person there is a few people of you");
    }
    if (sum >= 30 && sum < 60) {
      setResult(
        "you are person in the middle you don't need a therpy but you do need to chill up on your ideas "
      );
    }
    if (sum >= 60 && sum < 100) {
      setResult("you are in the danger zone watchout ");
    }
    if (sum >= 100) {
      setResult("you are a fucking psycho get some help FAST");
    }
  }
  function seeSum() {
    setShowAnswer(true);
    setShowResult(true);
  }

  return (
    <>
      <Questions
        showResult={showResult}
        Sum={sum}
        sumResult={sumResult}
        seeSum={seeSum}
        seeResult={seeResult}
        ShowAnswer={showAnswer}
        Result={result}
        backResult={backResult}
      />
    </>
  );
}

export default App;
