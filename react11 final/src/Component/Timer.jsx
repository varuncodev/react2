import { useState, useEffect } from 'react'

const Timer = ({ currentQuestion, onTimeUp }) => {
  const [time, setTime] = useState(5)

  useEffect(() => {
    setTime(5)

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          onTimeUp()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [currentQuestion])

  return (
    <div className="flex justify-between items-center mb-3">
      <p className="text-sm text-gray-500">⏱ Time</p>

      <span
        className={`px-3 py-1 rounded-full text-sm font-bold ${
          time <= 2
            ? 'bg-red-100 text-red-600 animate-pulse'
            : 'bg-indigo-100 text-indigo-600'
        }`}
      >
        {time}s
      </span>
    </div>
  )
}

export default Timer