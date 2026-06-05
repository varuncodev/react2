const Result = ({ score }) => {
  return (
    <div className="text-center">

      <h2 className="text-2xl font-bold text-green-600 mb-3">
        🎉 Quiz Completed
      </h2>

      <p className="text-lg text-gray-700">
        Your Score:
      </p>

      <p className="text-3xl font-bold text-indigo-600 mt-2">
        {score} / 20
      </p>

    </div>
  )
}

export default Result