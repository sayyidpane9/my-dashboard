import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

// Definisikan tipe untuk data yang akan kamu ambil dari API
interface QuizQuestion {
  question: string;
  description: string,
  type: string
}

const FetchQuizComponent: React.FC = () => {
  const [question, setQuestion] = useState<QuizQuestion[]| []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  async function fetchDummy () {
    const res = await axios.get("https://5b20-112-78-156-226.ngrok-free.app/question-type/question", {
        headers:{
            "ngrok-skip-browser-warning": "latest"
        }
    })
    console.log(res.data)
    setQuestion(res.data)
}

  // Function to fetch quiz data using async/await
//   const fetchQuiz = async () => {
//     try {
//       const response: AxiosResponse<any> = await axios.get('5b20-112-78-156-226.ngrok-free.app/question-type/question');
//       const fetchedQuestion = response.data.results[0];
//       const formattedQuestion: QuizQuestion = {
//         question: fetchedQuestion.question,
//         correct_answer: fetchedQuestion.correct_answer,
//         incorrect_answers: fetchedQuestion.incorrect_answers,
//       };
//       setQuestion(formattedQuestion);
//       setLoading(false);
//     } catch (err) {
//       setError('Error fetching quiz data');
//       setLoading(false);
//     }
//   };

  useEffect(() => {
    fetchDummy();
  }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

  if (error) {
    return <p>{error}</p>;
  }

  // Combine correct and incorrect answers and shuffle them
//   const answers = question
//     ? [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
//     : [];

  return (
    <div className="quiz-container p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Quiz Question</h1>
      <p className="text-lg font-medium mb-4">{}</p>
    {question.map((q)=>(
        <div className="">
            <p>{q.type}</p>
            <p>{q.question}</p>
            <p>{q.description}</p>
        </div>
    ))}
      {/* {answers.map((answer, index) => (
        <label key={index} className="block mb-2">
          <input
            type="radio"
            name="quiz"
            value={answer}
            className="mr-2"
          />
          {answer}
        </label>
      ))} */}
    </div>
  );
};

export default FetchQuizComponent;
