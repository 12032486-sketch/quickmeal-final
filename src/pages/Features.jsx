const features = [
  {
    icon: "🎲",
    title: "Random Meal Generator",
    text: "Generates a meal suggestion instantly with one click."
  },
  {
    icon: "❤️",
    title: "Favorites List",
    text: "Users can save meal ideas they like and remove them later."
  },
  {
    icon: "📱",
    title: "Responsive Design",
    text: "The layout works properly on desktop, tablet, and mobile screens."
  },
  {
    icon: "⚡",
    title: "Fast Experience",
    text: "The app is lightweight, simple, and quick to use."
  },
  {
    icon: "🎨",
    title: "Modern UI",
    text: "The design uses glass cards, gradients, smooth hover effects, and clean spacing."
  },
  {
    icon: "🧩",
    title: "React Components",
    text: "The project is organized using reusable React pages and components."
  }
];

export default function Features() {
  return (
    <main className="page">
      <section className="content-hero">
        <p className="tag">Application features</p>
        <h1>Built with useful features and a clean frontend structure.</h1>
        <p>
          This page highlights the core features included in QuickMeal Finder for Phase 2.
        </p>
      </section>

      <section className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}