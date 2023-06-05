import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeInfo = () => {
    const [item, setItem]=useState();
    const {MealId}=useParams();
    if(MealId!="")
    {
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=>res.json())
        .then(data=>{
            setItem(data.Meals[0]);
        })
    }
  return (
    <>
    {
        (!item)?"":(<>
        <div className="content">
            <img src={item.strMealThumb} alt="" />
        </div>
        </>)
    }
    </>
  )
}

export default RecipeInfo;