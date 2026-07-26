import React from 'react'
import { useSelector } from 'react-redux';

const Forecast = () => {
  const {forecast ,loading} = useSelector(state=>state.weatherReducer)

 
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!forecast) {
    return <h2>Search a city first.</h2>;
  }
  return (
     <div className="card bg-neutral text-neutral-content w-96">
      <div className="card-body items-center text-center">
        <h2 className="card-title">4 DAYS FORECAST</h2>
        {forecast.map((item,index)=>{
          return(
            <p key={index}>{item.dt_txt} - {(item.main.temp-273).toFixed(1)} Celcius</p>

          )
        })}
      </div>
    </div>
  )
}

export default Forecast