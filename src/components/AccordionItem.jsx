import React from "react";

const AccordionItem = (props) => {
  const onToggle = () => {
    props.toggler();
  };
  return (
    <li className="accordion_item">
      <button onClick={onToggle}>{props.question}</button>
      <div className="answer_wrapper">
        <div className="answer">{props.answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
