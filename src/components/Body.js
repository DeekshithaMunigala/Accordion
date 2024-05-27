import { useState } from "react";
import Data from "./Data";
import Questions from "./Questions";

const Body = () => {
  const [questions, setQuestions] = useState(Data);

  return (
    <section className="container">
      <h1 className="heading">Questions</h1>
      {questions.map((each) => (
        <Questions key={each.id} Question={each} />
      ))}
    </section>
  );
};

export default Body;
