import React, {Component, useState} from "react";
import RecipeChoices from './RecipeChoices'
import drinksJson from "../drinks.json"

const BaristaForm = () => {

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
      });

    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

    const [currDrink, setCurrDrink] = useState('');

    const [trueRecipe, setTrueRecipe] = useState({});

    const [correctTemp, setCheckTemp] = useState('');
    const [correctSyrup, setCheckSyrup] = useState('');
    const [correctMilk, setCheckMilk] = useState('');
    const [correctBlend, setCheckBlend] = useState('');

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);

    }

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' 
        });

        setCheckTemp('');
        setCheckSyrup('');
        setCheckMilk('');
        setCheckBlend('');
          
        getNextDrink();
    }

    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']) {
            setCheckTemp('wrong');
        } else setCheckTemp("correct");

        if (trueRecipe.syrup != inputs['syrup']) {
            setCheckSyrup('wrong');
        } else setCheckSyrup("correct");

        if (trueRecipe.milk != inputs['milk']) {
            setCheckMilk('wrong');
        } else setCheckMilk("correct");

        if (trueRecipe.blended != inputs['blended']) {
            setCheckBlend('wrong');
        } else setCheckBlend("correct");

    }
  
  return (
    <div>
        <h2>Hi, I'd like to order a:</h2>
        <div className="drink-container">
            <h2 className="mini-header">{currDrink}</h2>
            <button type="new-drink-button" 
                    className="button newdrink" 
                    onClick={onNewDrink}>
                        🔄
                    </button>
        </div>
        <form>
            <h3>Temperature</h3>
            <div className="answer-space" id={correctTemp}>
                {inputs["temperature"]} 
            </div>
            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="temperature"
                choices={ingredients["temperature"]}
                checked={inputs["temperature"]}
            />

            <h3>Syrup</h3>
            <div className="answer-space" id={correctSyrup}>
                {inputs["syrup"]} 
            </div>
            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="syrup"
                choices={ingredients["syrup"]}
                checked={inputs["syrup"]}
            />

            <h3>Milk</h3>
            <div className="answer-space" id={correctMilk}>
                {inputs["milk"]} 
            </div>
            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="milk"
                choices={ingredients["milk"]}
                checked={inputs["milk"]}
            />

            <h3>Blended</h3>
            <div className="answer-space" id={correctBlend}>
                {inputs["blended"]} 
            </div>
            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="blended"
                choices={ingredients["blended"]}
                checked={inputs["blended"]}
            />
        </form>
        <button className="button submit" 
                type="submit" 
                onClick={onCheckAnswer}> 
            Check Answer
        </button>
        <button className="button submit" 
                type="new-drink-button" 
                onClick={onNewDrink}> 
            New Drink
        </button>
    </div>
  )
}

export default BaristaForm
