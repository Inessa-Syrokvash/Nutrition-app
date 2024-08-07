import { useState } from "react";
import { useEffect } from "react";
import { Nutrition } from "./Nutrition";
import { LoaderPage } from "./LoaderPage";
import Swal from "sweetalert2";
import Picture from './olive.png';
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

function App() {

  const [mySearch, setMySearch] = useState();
  const [wordSubmitted, setWordSubmitted] = useState('');
  const [myNutrition, setMyNutrition] = useState();
  const [stateLoader, setStateLoader] = useState(false);

  const APP_ID = '3f24af97';
  const APP_KEY = '311ce8ac8103e35065da1ba3a2a97898	';
  const APP_URL = 'https://api.edamam.com/api/nutrition-details';

  useLayoutEffect(() => {
    gsap.fromTo('.App', {y: -700, opacity: 0}, {y: 0, duration: 2, delay: .5, opacity: 1});
    gsap.fromTo('h1', {x: -1200, opacity: 0}, {x: 0, duration: 2, delay: 1.5, opacity: 1});
    gsap.fromTo('input', {x: 600, opacity: 0}, {x:0, ease: 'bounce', duration: 2.5, delay: 2, opacity: 1});
    gsap.fromTo('.btn', {x: 900, opacity: 0}, {x:0, duration: 1.8, delay: 2.1, opacity: 1});
    gsap.fromTo('.picture', {opacity: 0, scale: 2}, {duration: 4, ease: 'bounce', delay: 4.5, opacity: 1, scale: 1});
  }, [])

  const fetchData = async (ingr) => {
    setStateLoader(true);

    const response = await fetch(`${APP_URL}?app_id=${APP_ID}&app_key=${APP_KEY}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingr: ingr })
    })


    if(response.ok) {
      setStateLoader(false);
      const data = await response.json();
      setMyNutrition(data);} 

    else {
      setStateLoader(false);
      Swal.fire({
        title: "Attention!",
        text: "Ingredients entered incorrectly or you have not entered the desired amount of product",
        imageUrl: "https://img.freepik.com/free-vector/fruit-salad-bowl-concept_23-2148505162.jpg?t=st=1720422396~exp=1720425996~hmac=14cfc2c8c3f12e3993b52e999e2c8d7844af6aa99ec9587181496b8ef2e2f4b2&w=1060",
        imageWidth: 250,
        imageHeight: 250,
        imageAlt: "Image"
      });
      
    }
  }

  //!Alert, если не ввели никакие ингридиенты  
  const handleAlert = (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Attention!',
        text: `Oops... You didn't enter an ingredient.`,
        imageUrl: 'https://img.freepik.com/free-vector/beautiful-chef-girl-holding-empty-plate-cartoon-illustration_56104-314.jpg?t=st=1722325228~exp=1722328828~hmac=86b411e8e63f3e9ab2bcdaa486f121c03c648141c0ae9e4f1c7fab92d918a4d9&w=1380',
        imageWidth: 250,
        imageAlt: 'Custom image',
    })
}
//!

  const myRecipeSearch = e => {
    setMySearch(e.target.value);
  }

  const finalSearch = e => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  useEffect(() => {
    if (wordSubmitted !== '') {
      let ingr = wordSubmitted.split(/[,,;,\n,\r]/);
      fetchData(ingr);
    }
  }, [wordSubmitted])
  

  return (
    <div className="App">
      {stateLoader && <LoaderPage />}

      <h1>Nutrition Analysis</h1>
      <form className="form" onSubmit={ mySearch ? finalSearch : handleAlert }>
        <input className="input"
          placeholder="Enter a product..."
          onChange={myRecipeSearch}
        />
        <button className="btn" type="submit"
        onClick={ mySearch ? finalSearch : handleAlert }>Search</button>
      </form>
      <div className="result">
        {
          myNutrition && <p>{myNutrition.calories} kcal</p>
        }
        {
          myNutrition && Object.values(myNutrition.totalNutrients)
            .map(({ label, quantity, unit }) =>
              <Nutrition key={label}
                label={label}
                quantity={quantity}
                unit={unit}
              />
            )
        }
      </div>
      <div>
        <img className="picture" src={Picture} alt='food' />
      </div>
    </div>
  );
}

export default App;
