import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Questions = (props) => {
  const [showIcon, setShowIcon] = useState(false);

  const { title, info } = props.Question;
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="plus-icon" onClick={() => setShowIcon(!showIcon)}>
          {showIcon ? (
            <AiOutlineMinus className="icon" />
          ) : (
            <AiOutlinePlus className="icon" />
          )}
        </button>
      </header>
      <div className="text">
        <p>{showIcon && info}</p>
      </div>
    </article>
  );
};

export default Questions;
