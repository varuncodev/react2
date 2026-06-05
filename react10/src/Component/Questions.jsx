import question from './question.json'
import { useState } from 'react'

const Questions = ({ setisOver ,setScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
 

  function handleclick(selectedOption) {
    if (selectedOption === question[currentQuestion].answer) {
      setScore(prev => prev + 1)
    }

    // ✅ correct condition
    if (currentQuestion < question.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setisOver(true)
    }
  }

  return (
    <div>
      <h2 className='text-lg flex justify-center'>
        {question[currentQuestion].id}. {question[currentQuestion].question}
      </h2>

      <div className='flex flex-col justify-center items-center mt-5 gap-3'>
        {question[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleclick(option)}
            className='bg-blue-400 text-white py-2 px-8 rounded hover:bg-blue-600 border border-orange-300'
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Questions