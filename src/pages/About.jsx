export default function About() {
  return (
    <main className="page">
      <section className="content-hero">
        <span className="tag">About the project</span>
        <h1>A smart and simple solution for daily meal decisions.</h1>
        <p>
          QuickMeal Finder is a ReactJS frontend web application created for CSCI390 Web Programming.
          It solves a common daily problem: deciding what to eat quickly.
        </p>
      </section>

      <section className="about-grid">
        <div className="glass-box">
          <h2>Project Goal</h2>
          <p>
            The goal is to build a functional, responsive, and user-friendly frontend application
            using ReactJS and modern web design principles.
          </p>
        </div>

        <div className="glass-box">
          <h2>Real-World Problem</h2>
          <p>
            Many people waste time thinking about meal choices. This app gives users quick
            suggestions and helps them save meals they like.
          </p>
        </div>

        <div className="glass-box">
          <h2>Design Approach</h2>
          <p>
            The interface uses glass cards, gradients, soft shadows, responsive layouts,
            hover effects, and clear navigation.
          </p>
        </div>
      </section>

      <section className="timeline">
        <div>
          <span>01</span>
          <h3>Generate</h3>
          <p>User clicks a button to receive a meal idea.</p>
        </div>

        <div>
          <span>02</span>
          <h3>Review</h3>
          <p>The meal card displays type, time, level, mood, and description.</p>
        </div>

        <div>
          <span>03</span>
          <h3>Save</h3>
          <p>User can save meals to favorites using local storage.</p>
        </div>
      </section>
    </main>
  );
}