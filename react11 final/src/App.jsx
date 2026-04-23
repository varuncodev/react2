import Questions from './Component/Questions'
import { useState } from 'react'
import Result from './Component/Result'

const App = () => {
  const [score, setScore] = useState(0)
  const [isOver, setisOver] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">

      <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md">

        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Quiz App 🚀
        </h1>

        {isOver ? (
          <Result score={score} />
        ) : (
          <Questions setisOver={setisOver} setScore={setScore} />
        )}

      </div>

    </div>
  )
}

export default App