import react from 'react'
import Cards from './Components/Cards'
import jsonData from './Components/data.json'

function App() {
 

  return (
    <>
     <div className="text-2xl font-bold m-auto flex justify-center bg-red-500 text-white p-4">Practice</div>
      
      
      {jsonData.map((data, index) => (
        <Cards key={index} data={data} />
      ))}

    </>
  )
}

export default App
