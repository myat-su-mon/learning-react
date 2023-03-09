import React from 'react';
import { useState } from 'react';
import './App.css';
import FAQItem from './components/FAQItem';
import Counter from './components/Counter';
import Todo from './components/Todo';

const App = () => {
  const [faqLists, setFaqList] = useState([
    {
      id:1,
      question: "nay kg lar?",
      answer: "kg tl",
      showAnswer: false,
    },
    {
      id:2,
      question: "sar pe p lar?",
      answer: "pe p",
      showAnswer: false,
    },
    {
      id:3,
      question: "bar sar mhr ll?",
      answer: "kyay oo",
      showAnswer: false,
    },
    {
      id:4,
      question: "chit lar?",
      answer: "chit tl",
      showAnswer: false,
    },
  ]);

  function openAnswer(id) {
    console.log(id);
    setFaqList(
      faqLists.map((faqList) => {
        if (faqList.id === id) {
          faqList.showAnswer = !faqList.showAnswer;
        }
        return faqList;
      })
    );
  }

  const [count, setCount] = useState(5);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  // function changeCount(x) {
  //   console.log(x);
  // }

  return (
    <>
    <Todo/>
      {/* <Counter/>
      <ShowName/> */}
      {/* {faqLists.map(faqList=>(
        <FAQItem key={faqList.id} openAnswer={openAnswer} faqList={faqList} />
      ))} */}

    {/* 
      <Counter start={count} increaseCount={increaseCount} decreaseCount={decreaseCount}/>
      <Counter start={count} increaseCount={increaseCount} decreaseCount={decreaseCount}/>
      <Counter start={count} increaseCount={increaseCount} decreaseCount={decreaseCount}/> */}
    </>
  )
}

export default App