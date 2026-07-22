
import A from './components/A';
import B from './components/B'
import { useMYContext } from './MyContext';

const App = () => {

  const data = useMYContext()
 


  return (
    // create context provide context useContext
    <div className=" flex justify-center h-screen items-center ">
       <div className="bg-red-500 p-10 h-80w-40 ">App 
    <A/>
    <B/>
    </div>
    </div>
   
  )
}

export default App