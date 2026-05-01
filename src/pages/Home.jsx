import { useEffect, useState } from "react";
import MealCard from "../components/MealCard";
import FavoriteList from "../components/FavoriteList";

const meals = [
  {
    name: "Chicken Shawarma",
    type: "Lebanese",
    time: "10 min",
    level: "Easy",
    mood: "Fast",
    emoji: "🌯",
    description: "A quick Lebanese meal idea perfect when you want something tasty and fast."
  },
  {
    name: "Margherita Pizza",
    type: "Italian",
    time: "20 min",
    level: "Medium",
    mood: "Comfort",
    emoji: "🍕",
    description: "A simple and classic pizza choice for a comfortable meal."
  },
  {
    name: "Beef Burger",
    type: "American",
    time: "15 min",
    level: "Easy",
    mood: "Heavy",
    emoji: "🍔",
    description: "A filling meal idea for when you want something strong and satisfying."
  },
  {
    name: "Chicken Pasta",
    type: "Italian",
    time: "25 min",
    level: "Medium",
    mood: "Creamy",
    emoji: "🍝",
    description: "A rich pasta meal idea that works well for lunch or dinner."
  },
  {
    name: "Caesar Salad",
    type: "Healthy",
    time: "8 min",
    level: "Easy",
    mood: "Light",
    emoji: "🥗",
    description: "A lighter meal idea for users who want something fresh."
  },
  {
    name: "Sushi Rolls",
    type: "Japanese",
    time: "30 min",
    level: "Hard",
    mood: "Fresh",
    emoji: "🍣",
    description: "A fresh and unique meal idea for users who want something different."
  },
  {
    name: "Tacos",
    type: "Mexican",
    time: "15 min",
    level: "Easy",
    mood: "Spicy",
    emoji: "🌮",
    description: "A fun and spicy meal option with a fast preparation style."
  },
  {
    name: "Grilled Steak",
    type: "High Protein",
    time: "25 min",
    level: "Medium",
    mood: "Strong",
    emoji: "🥩",
    description: "A protein-focused meal idea for users who want a strong dinner."
  },
  {
    name: "Falafel Wrap",
    type: "Lebanese",
    time: "10 min",
    level: "Easy",
    mood: "Budget",
    emoji: "🧆",
    description: "A budget-friendly Lebanese meal idea that is fast and delicious."
  },
  {
    name: "Chicken Rice Bowl",
    type: "Fitness",
    time: "20 min",
    level: "Easy",
    mood: "Clean",
    emoji: "🍚",
    description: "A balanced meal idea for users who prefer a clean and simple option."
  }
];

export default function Home() {
  const [meal, setMeal] = useState(meals[0]);
  const [favorites, setFavorites] = useState([]);
  const [generatedCount, setGeneratedCount] = useState(0);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("quickmealFavorites");
    const savedCount = localStorage.getItem("quickmealGeneratedCount");

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    if (savedCount) {
      setGeneratedCount(Number(savedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("quickmealFavorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("quickmealGeneratedCount", String(generatedCount));
  }, [generatedCount]);

  const generateMeal = () => {
    let randomMeal = meals[Math.floor(Math.random() * meals.length)];

    if (randomMeal.name === meal.name && meals.length > 1) {
      randomMeal = meals[Math.floor(Math.random() * meals.length)];
    }

    setMeal(randomMeal);
    setGeneratedCount(generatedCount + 1);
  };

  const saveFavorite = () => {
    const alreadySaved = favorites.some((item) => item.name === meal.name);

    if (!alreadySaved) {
      setFavorites([...favorites, meal]);
    }
  };

  const removeFavorite = (mealName) => {
    setFavorites(favorites.filter((item) => item.name !== mealName));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-content">
          <span className="tag">React frontend application</span>
          <h1>Find your next meal without overthinking.</h1>
          <p>
            QuickMeal Finder is a modern web app that gives users instant meal ideas,
            saves favorite meals, and provides a clean responsive experience.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={generateMeal}>
              Generate Meal
            </button>

            <button className="secondary-btn" onClick={saveFavorite}>
              Save Current Meal
            </button>
          </div>
        </div>

        <MealCard meal={meal} onSave={saveFavorite} />
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <h3>{generatedCount}</h3>
          <p>Meals Generated</p>
        </div>

        <div className="stat-card">
          <h3>{favorites.length}</h3>
          <p>Saved Favorites</p>
        </div>

        <div className="stat-card">
          <h3>4</h3>
          <p>React Pages</p>
        </div>
      </section>

      <FavoriteList
        favorites={favorites}
        onRemove={removeFavorite}
        onClear={clearFavorites}
      />
    </main>
  );
}