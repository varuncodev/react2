import question from './question.json'
import { useState } from 'react'
import Timer from './Timer'

const Questions = ({ setisOver, setScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [missedCount, setMissedCount] = useState(0)

  const nextQuestion = (isAnswered) => {
    if (isAnswered) {
      setMissedCount(0)
    } else {
      setMissedCount(prev => {
        const newCount = prev + 1
        if (newCount >= 3) setisOver(true)
        return newCount
      })
    }

    if (currentQuestion < question.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setisOver(true)
    }
  }

  const handleClick = (option) => {
    if (option === question[currentQuestion].answer) {
      setScore(prev => prev + 1)
    }
    nextQuestion(true)
  }

  return (
    <div>

      <Timer
        currentQuestion={currentQuestion}
        onTimeUp={() => nextQuestion(false)}
      />

      {/* question */}
      <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
        {currentQuestion + 1}. {question[currentQuestion].question}
      </h2>

      {/* missed warning */}
      <p className="text-center text-sm text-red-500 mb-3">
        Missed: {missedCount} / 3
      </p>

      {/* options */}
      <div className="flex flex-col gap-3">
        {question[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(option)}
            className="w-full bg-indigo-500 text-white py-2 rounded-lg shadow hover:bg-indigo-600 hover:scale-105 transition duration-200"
          >
            {option}
          </button>
        ))}
      </div>

    </div>
  )
}

export default Questions