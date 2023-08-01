import React from "react";
import { useState } from "react";
import faqs from "../faqs";
import AccordionItem from "./AccordionItem";

// function createAccordion(faqsList) {
//   return (
//     <AccordionItem
//       id={faqsList.id}
//       key={faqsList.id}
//       question={faqsList.question}
//       answer={faqsList.answer}
//       toggler={() => handleToggle(faqsList.id)}
//     />
//   );
// }

const Accordion = () => {
  const [toggle, setToggle] = useState("0");

  const handleToggle = (index) => {
    if (toggle === index) {
      return setToggle("0");
    }
    setToggle(index);
  };

  function createAccordion(faqsList) {
    return (
      <AccordionItem
        id={faqsList.id}
        key={faqsList.id}
        question={faqsList.question}
        answer={faqsList.answer}
        toggler={() => handleToggle(faqsList.id)}
        isToggled={toggle === faqsList.id}
      />
    );
  }

  return (
    <div>
      <ul>{faqs.map(createAccordion)}</ul>
    </div>
  );
};

export default Accordion;
