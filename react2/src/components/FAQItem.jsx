import React from 'react'
import { useState } from 'react';

function FAQItem({faqList, openAnswer}) {
    // const [showAnswer, setShowAnswer] = useState(false);
    const showQuestionBg = faqList.showAnswer ? "bg-primary text-white" : "";

  return (
    <div className='m-3'>
        <div onClick={()=> openAnswer(faqList.id)}
         className={`${showQuestionBg} border d-flex bg-info border-primary rounded p-3`}>{faqList.question}
        <span className={`ms-auto ${faqList.showAnswer ? "down" : ""}`}> &gt;</span>
        </div>
        {faqList.showAnswer && <div className='p-3 ani-effect'>{faqList.answer}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quisquam ducimus voluptatem. Necessitatibus similique error suscipit, officia perferendis aliquam dicta sequi dolores aperiam deserunt quod eos rerum facere accusamus ut?</div>}
    </div>
  )
}

export default FAQItem;