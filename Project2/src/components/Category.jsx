import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Category = () => {
const {setNews ,fetchNews} =useNewsContext()
    
    const category = ['Bussiness', 'Entertainment','Genral','Health','Science','Sports','Technology']
    
    const handleclick = async(e) => {
         const catory =e.target.value
         const data = await fetchNews(`/everything?q=${catory}`)
         setNews(data.articles)
    }

  return (
    <Wrapper>
        <div className="scrollbar-none max-w-full m-auto w-fit flex overflow-x-auto gap-3">
         {category.map((categ)=>{
            return(
                <button
                value={categ}
                 onClick={handleclick} 
                 key={categ}
                  className="btn btn-soft btn-accent">{categ}</button>
            )

        })}
       </div>
    </Wrapper>
  );
};

export default Category;
