import { useState } from "react";

const meals = [
  { name: "Chicken Shawarma", type: "Lebanese", time: "10 min", mood: "Fast" },
  { name: "Margherita Pizza", type: "Italian", time: "20 min", mood: "Comfort" },
  { name: "Beef Burger", type: "American", time: "15 min", mood: "Heavy" },
  { name: "Chicken Pasta", type: "Italian", time: "25 min", mood: "Creamy" },
  { name: "Caesar Salad", type: "Healthy", time: "8 min", mood: "Light" },
  { name: "Sushi Rolls", type: "Japanese", time: "30 min", mood: "Fresh" },
  { name: "Tacos", type: "Mexican", time: "15 min", mood: "Spicy" },
  { name: "Grilled Steak", type: "High Protein", time: "25 min", mood: "Strong" },
  { name: "Falafel Wrap", type: "Lebanese", time: "10 min", mood: "Budget" },
  { name: "Chicken Rice Bowl", type: "Fitness", time: "20 min", mood: "Clean" }
];

export default function Home() {
  const [meal, setMeal] = useState(meals[0]);
  const [favorites, setFavorites] = useState([]);

  const generateMeal = () => {
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    setMeal(randomMeal);
  };

  const saveFavorite = () => {
    const exists = favorites.find((item) => item.name === meal.name);

    if (!exists) {
      setFavorites([...favorites, meal]);
    }
  };

  const removeFavorite = (mealName) => {
    setFavorites(favorites.filter((item) => item.name !== mealName));
  };

  return (
    <main className="page hero-page">
      <section className="hero">
        <div className="hero-content">
          <p className="tag">Smart meal ideas in seconds</p>
          <h1>Find your next meal without overthinking.</h1>
          <p className="hero-text">
            QuickMeal Finder gives you fast meal ideas with a clean, modern, and responsive interface.
          </p>

          <div className="hero-actions">
            <button onClick={generateMeal} className="primary-btn">
              Generate Meal
            </button>
            <button onClick={saveFavorite} className="secondary-btn">
              Save Favorite
            </button>
          </div>
        </div>

        <div className="meal-card">
          <div className="meal-badge">{meal.mood}</div>
          <h2>{meal.name}</h2>

          <div className="meal-info">
            <span>{meal.type}</span>
            <span>{meal.time}</span>
          </div>

          <p>
            A quick suggestion designed to help users decide what to eat faster.
          </p>
        </div>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <h3>10+</h3>
          <p>Meal ideas</p>
        </div>

        <div className="stat-card">
          <h3>4</h3>
          <p>React pages</p>
        </div>

        <div className="stat-card">
          <h3>100%</h3>
          <p>Responsive UI</p>
        </div>
      </section>

      <section className="favorites-section">
        <div className="section-title">
          <p className="tag">Saved meals</p>
          <h2>Your Favorites</h2>
        </div>

        {favorites.length === 0 ? (
          <div className="empty-card">
            <p>No favorites saved yet. Generate a meal and save it.</p>
          </div>
        ) : (
          <div className="favorites-grid">
            {favorites.map((item) => (
              <div className="favorite-card" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.type} • {item.time}</p>
                <button onClick={() => removeFavorite(item.name)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}