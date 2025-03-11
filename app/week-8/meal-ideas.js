"use client";
import { useState, useEffect } from "react";

export default function MealIdea({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    async function loadMealIdeas() {
        const onlineMeals = await fetchMealIdeas(ingredient);
        setMeals(onlineMeals || []); // Ensure we always set an array
    }

    return (
        <div>
            {meals.map((meal, i) => (
                <div key={i}>
                    <h3>{meal.strMeal}</h3>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                </div>
            ))}
        </div>
    );
}

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals || []; // Return empty array if no meals found
    } catch (error) {
        console.error(error);
        return []; // Return empty array on error
    }
}