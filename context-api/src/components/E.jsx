
import {  useMYContext } from '../MyContext';

const E = () => {

  const {count} = useMYContext()

  return (
    <div className="bg-cyan-500 p-10 ">E {count} </div>
  )
}

export default E