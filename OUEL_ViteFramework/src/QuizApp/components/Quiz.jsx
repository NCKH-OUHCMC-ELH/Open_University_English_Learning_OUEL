import React, { useState, useEffect, useRef} from 'react'
import './Quiz.css'
import { getPassageQuestions } from '../api.js';

const Quiz = ({ passage }) => {

  let [index, setIndex] = useState(0);
  let [questions, setQuestions] = useState([]);
  let [lock, setLock] = useState(false);
  let [score,setScore] = useState(0);
  let [result, setResult] = useState(false);
  let [explanation, setExplanation] = useState(false);
  let [btn_prev, setBtn_prev] = useState(false);
  let [btn_next, setBtn_next] = useState(true);
  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);
  let option_array = [Option1, Option2, Option3, Option4];
  let [option_choose, setOptionChoose] = useState(Array(questions.length).fill(null));
  const map = ['A', 'B', 'C', 'D'];

  useEffect(() => {
    if (!passage?.id) return;
    const fetchQuestions = async () => {
      try {
        const data = await getPassageQuestions(passage.id);
        setQuestions(data);
      } catch (error) {
        console.error('không thể fetch passage:', error);
      }
    };
    fetchQuestions();
  }, [passage?.id]);
  if (!questions || questions.length === 0) {
    return <div>Chưa có câu hỏi cho passage này.</div>;
  }


  const question = questions[index];
//   let [question,setQuestion] = useState(questions[index]);


  const checkAns = (e, ans) => {
      if (lock) return;

      const updatedChoices = [...option_choose];
      updatedChoices[index] = ans;
      setOptionChoose(updatedChoices);
      setLock(true);
      setExplanation(true);

      if (question.correct_answer === map[ans]) {
          e.target.classList.add("correct");
          setScore(prev => prev + 1);
      } else {
          e.target.classList.add("wrong");
          for (let i = 0; i < 4; i++) {
              if (question.correct_answer === map[i]) {
                  if (option_array[i].current) {
                      option_array[i].current.classList.add("correct");
                  }
              }
          }
      }
  };

  const next = () => {
      if (!lock) return;

      if (index === questions.length - 1) {
            setResult(true);
            return;
      }

      const newIndex = index + 1;
      setIndex(newIndex);
      setLock(false);
      setBtn_prev(true);
      setExplanation(false);
      if ( newIndex === questions.length - 1){
          setBtn_next(false);
      }

      option_array.forEach(option => {
          if (option.current) {
              option.current.classList.remove("wrong");
              option.current.classList.remove("correct");
          }
      });

      const nextQuestion = questions[newIndex];
      const chosen = option_choose[newIndex];
      if (chosen !== null) {
          const correctIndex = map.indexOf(nextQuestion.correct_answer);
          if (chosen === correctIndex) {
              option_array[chosen].current.classList.add("correct");
          } else {
              option_array[chosen].current.classList.add("wrong");
              option_array[correctIndex].current.classList.add("correct");
          }
          setLock(true);
          setExplanation(true);
      }
  };

  const prev = () => {
      if (index === 0)
            return;

      const newIndex = index - 1;
      setIndex(newIndex);
      setLock(true);
      setExplanation(true);
      if ( newIndex === 0 ){
          setBtn_prev(false);
      }
      setBtn_next(true);

      option_array.forEach(option => {
          option.current.classList.remove("wrong");
          option.current.classList.remove("correct");
      });

      const nextQuestion = questions[newIndex];
      const chosen = option_choose[newIndex];
      if (chosen !== null) {
         const correctIndex = map.indexOf(nextQuestion.correct_answer);
         if (chosen === correctIndex) {
            option_array[chosen].current.classList.add("correct");
         } else {
            option_array[chosen].current.classList.add("wrong");
            option_array[correctIndex].current.classList.add("correct");
         }
      }
  }
  const reset = () => {
      setIndex(0);
      setScore(0);
      setLock(false);
      setResult(false);
      setExplanation(false);
      setOptionChoose(Array(questions.length).fill(null));
      setBtn_next(true);
      setBtn_prev(false);
      option_array.forEach(option => {
         if (option.current) {
            option.current.classList.remove("correct");
            option.current.classList.remove("wrong");
         }
      });
  }

  return (
    <div className='container'>
      <div className='header_container'>
          <h1>Quiz App</h1>
          {result?<></>:<>
              <div className='index'><h2> {index+1} / {questions.length}</h2></div>
              <div className="buttons">
                  {btn_prev?<>
                      <button onClick={prev}>Prev</button>
                  </>:<></>}
                  {btn_next?<>
                      <button onClick={next}>Next</button>
                  </>:<>
                        <button onClick={next}>Nộp bài!</button>
                  </>}

              </div>
          </>}
      </div>
      <hr />
      {result?<></>:<>
          <h2>{index + 1}. {question.question_text}</h2>
          <ul>
            <li ref={Option1} onClick={(e)=>{checkAns(e,0)}}>{question.option_a}</li>
            <li ref={Option2} onClick={(e)=>{checkAns(e,1)}}>{question.option_b}</li>
            <li ref={Option3} onClick={(e)=>{checkAns(e,2)}}>{question.option_c}</li>
            <li ref={Option4} onClick={(e)=>{checkAns(e,3)}}>{question.option_d}</li>
          </ul>
          {explanation?<>
              <h2>Giải thích: {question.explanation}</h2>
          </>:<></>}
      </>}
      {result?<>
          <h2> Điểm của bạn là {score} đ</h2>
          <button onClick={reset}> Reset </button>
      </>:<></>}
    </div>
  )
}

export default Quiz
