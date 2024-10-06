import React, {Component, useState} from "react";
import RecipeChoices from './RecipeChoices'

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

    const onNewDrink = () => {

    }

    const onCheckAnswer = () => {

    }
  
  return (
    <div>
        <h2>Hi, I'd like to order a:</h2>
        <form>
            <h3>Temperature</h3>
                <div className="answer-space" >
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
