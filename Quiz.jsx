import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    API.get("/quiz").then(res => setQuiz(res.data));
  }, []);

  const submitQuiz = async () => {
    let score = 0;
    let total = 0;

    quiz.forEach(q => {
      q.questions.forEach(ques => {
        total++;
        if (answers[ques._id] === ques.correctAnswer) {
          score++;
        }
      });
    });

    await API.post("/results/save", {
      userId: localStorage.getItem("userId"),
      score,
      total
    });

    nav("/result", { state: { score, total } });
  };

  return (
    <div>
      <h2>Quiz</h2>

      {quiz.map(q => (
        <div key={q._id}>
          <h3>{q.title}</h3>

          {q.questions.map(ques => (
            <div key={ques._id}>
              <p>{ques.question}</p>

              {ques.options.map(opt => (
                <button
                  onClick={() =>
                    setAnswers({...answers, [ques._id]: opt})
                  }
                >
                  {opt}
                </button>
              ))}
            </div>
          ))}
        </div>
      ))}

      <button onClick={submitQuiz}>Submit Quiz</button>
    </div>
  );
}