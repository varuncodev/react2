
import { useMYContext } from '../MyContext';

const C = () => {

  const {count} =useMYContext()

  return (
    <div className="bg-green-500 p-10  w-40 ">C
    {count}
    </div>
  )
}

export default C