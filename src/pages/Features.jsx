const features = [
  {
    icon: "🎲",
    title: "Random Meal Generator",
    text: "Generates a new meal idea instantly with one click."
  },
  {
    icon: "❤️",
    title: "Favorites System",
    text: "Users can save meals they like and remove them later."
  },
  {
    icon: "💾",
    title: "Local Storage",
    text: "Favorites and generated count stay saved after refreshing the page."
  },
  {
    icon: "📱",
    title: "Responsive Design",
    text: "The layout adapts to desktop, tablet, and mobile screens."
  },
  {
    icon: "⚛️",
    title: "React Components",
    text: "The app is organized using reusable components and separate pages."
  },
  {
    icon: "🎨",
    title: "Modern UI",
    text: "Glassmorphism, gradients, animations, and clean spacing improve the user experience."
  }
];

export default function Features() {
  return (
    <main className="page">
      <section className="content-hero">
        <span className="tag">Application features</span>
        <h1>Designed to be functional, clean, and easy to use.</h1>
        <p>
          QuickMeal Finder includes practical frontend features that improve usability and
          demonstrate ReactJS skills.
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