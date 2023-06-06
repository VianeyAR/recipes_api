import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal = () => {
  const [url, setUrl] = useState(
    "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setIndex = (alpha) => {
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  const searchRecipe = (evt) => {
    if (evt.key == "Enter") {
      setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>¡Busca Tus Recetas De Comida!</h1>
        </div>
        <div className="inspiracion">
          <div>
            <p>¡Nadie nace un gran</p>
            <p>COCINERO</p>
            <p>Se aprende</p>
            <p>INTENTANDO!</p>
          </div>
          <img
            src="https://images.pexels.com/photos/8511870/pexels-photo-8511870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="logo"
          />
        </div>

        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            placeholder="Ejemplo: Apple Frangipan Tart"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
          />
        </div>

        <div className="abc">
          <h2>Igual puedes seleccionar una letra y se desglosaran recetas con esa inicial</h2>
        </div>
        <div className="indexContainer">
          <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
        </div>


        <div className="container">
          {show ? (
            <MealItem data={item} />
          ) : (
            "Lo sentimos, no hay resultados :("
          )}
        </div>
        
      </div>
    </>
  );
};

export default Meal;
