import React, { use } from "react";
import useMystore from "../store";

const Navbar = () => {
  const dataCount = useMystore(state=>state.count);
  const dataIncreament = useMystore(state=>state.increment);
  const dataCapitalize =useMystore(state=>state.capitalizeName);
  const chngeName =useMystore(state=>state.name)
  


  return (
    <div>
      <p>{dataCount}</p>
      <p>{chngeName}</p>
   
      <div>
        <button onClick={dataIncreament}>INcreament</button>
        <button onClick={dataCapitalize}>Capitalize name</button>
      </div>
    </div>
  );
};

export default Navbar;
