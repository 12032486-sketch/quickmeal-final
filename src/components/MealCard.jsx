export default function MealCard({ meal, onSave }) {
  return (
    <div className="meal-card">
      <div className="meal-top">
        <span className="meal-emoji">{meal.emoji}</span>
        <span className="meal-badge">{meal.mood}</span>
      </div>

      <h2>{meal.name}</h2>

      <div className="meal-info">
        <span>{meal.type}</span>
        <span>{meal.time}</span>
        <span>{meal.level}</span>
      </div>

      <p>{meal.description}</p>

      <button className="secondary-btn" onClick={onSave}>
        ❤️ Save to Favorites
      </button>
    </div>
  );
}