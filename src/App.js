import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "2*(4+4) sonucu nedir?",
    answers: ["2", "4", "8", "16"],
    correct: 3,
  },
  {
    question: "9*9 sonucu nedir?",
    answers: ["18", "81", "80", "79"],
    correct: 1,
  },
  {
    question: "Formula 1'in 2022 şampiyonu kimdir?",
    answers: [
      "Max Verstappen",
      "Charles Leclerd",
      "Lewis Hamilton",
      "Lando Norris",
    ],
    correct: 0,
  },
  {
    question: "Formula 1 takviminde ilk sırada hangi grand prix vardır?",
    answers: [
      "Bahreyn Grand Prix",
      "Suudi Arabistan Grand Prix",
      "Avustralya Grand Prix",
      "Emilia Romagna Grand Prix",
    ],
    correct: 0,
  },
  {
    question: "Hangisi Formula 1 takımlarından değildir?",
    answers: [
      "Ford-AMG F1 Team",
      "Alfa Romeo F1 Team Orlen",
      "BWT Alpine F1 Team",
      "Oracle Red Bull Racing",
    ],
    correct: 0,
  },
];

function App() {
  return <Quiz questions={QUESTIONS} />;
}

const Quiz = ({ questions }) => {
  console.log(questions);
  // KODUNUZ BURAYA GELECEK
  const [index, setIndex] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);

  const handleClick = (id) => {
    setAnswerIndex(id); // Seçilen cevabı güncelle
    if (id === questions[index].correct) {
      alert("Doğru cevap! 👍"); // Doğru cavap durumu
    } else {
      alert(
        `Yanlış cevap! Doğru cevap: ${
          questions[index].answers[questions[index].correct] // Yanlış cevap durumunda doğru cevap söyle
        }`
      );
    }

    // Sonraki soruya geçiş
    if (index < questions.length - 1) {
      setAnswerIndex(null); // Yeni soruya geçerken seçimi temizle
      setIndex(index + 1); // Bir sonraki soruya geç
    } else {
      alert("Tebrikler! Tüm soruları tamamladınız.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
        <p className="text-lg font-semibold text-gray-800">
          {questions[index].question}
        </p>
        <div className="mt-4">
          {questions[index].answers.map((answer, id) => {
            return (
              <p
                key={id}
                onClick={() => handleClick(id)}
                className="cursor-pointer p-2 text-gray-600 hover:bg-blue-100 hover:text-blue-700 rounded transition-colors"
              >
                {answer}
              </p>
            );
          })}
        </div>
        <br />
        <button
          onClick={() => {
            setIndex(0);
          }}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Başa dön
        </button>
      </div>
    </div>
  );
};

export default App;
