import React ,{useState} from 'react'


const Cards = (props) => {
 const [count, setCount] = useState(0);

 function incre(){
    setCount(count + 1);

 }

  return (
    <div className="card">

      <h3>{props.title}</h3>
      <h2 onClick={incre}>Count: {count}</h2>
      <p>{props.desc}</p>

    </div>
  )
}

export default Cards;
