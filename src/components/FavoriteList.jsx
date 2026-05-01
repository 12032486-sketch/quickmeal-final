export default function FavoriteList({ favorites, onRemove, onClear }) {
  return (
    <section className="favorites-section">
      <div className="section-title">
        <span className="tag">Saved meals</span>
        <h2>Your Favorites</h2>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-card">
          <p>No favorite meals yet. Generate a meal and save it.</p>
        </div>
      ) : (
        <>
          <div className="favorites-grid">
            {favorites.map((meal) => (
              <div className="favorite-card" key={meal.name}>
                <span>{meal.emoji}</span>
                <h3>{meal.name}</h3>
                <p>{meal.type} • {meal.time}</p>
                <button onClick={() => onRemove(meal.name)}>Remove</button>
              </div>
            ))}
          </div>

          <button className="danger-btn" onClick={onClear}>
            Clear All Favorites
          </button>
        </>
      )}
    </section>
  );
}