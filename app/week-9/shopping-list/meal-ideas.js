// Name: Alex Ghebremicael Assignment 9

"use client";

import { useEffect, useState } from "react";

// I ask TheMealDB for the meals that use the ingredient
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();

    // the API sends me meals: null when nothing matches
    return data.meals || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // I get the meals and save them in state
    async function loadMealIdeas() {
      const mealList = await fetchMealIdeas(ingredient);
      setMeals(mealList);
    }

    // nothing is selected yet, so I have nothing to look up
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow">
      <h2 className="mb-3 text-xl font-semibold text-slate-800">Meal Ideas</h2>

      {!ingredient ? (
        <p className="text-slate-600">Select an item to see meal ideas.</p>
      ) : (
        <>
          <p className="mb-3 text-sm text-slate-600">
            Meal ideas for{" "}
            <span className="font-semibold text-teal-700">{ingredient}</span>
          </p>
          {meals.length === 0 ? (
            <p className="text-slate-600">No meal ideas found.</p>
          ) : (
            <ul className="divide-y divide-slate-200">
              {meals.map((meal) => (
                <li key={meal.idMeal} className="py-2 text-slate-800">
                  {meal.strMeal}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
