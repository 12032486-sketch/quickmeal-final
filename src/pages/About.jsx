export default function About() {
  return (
    <main className="page">
      <section className="content-hero">
        <p className="tag">About the project</p>
        <h1>QuickMeal Finder is built to solve a simple daily problem.</h1>
        <p>
          Many people waste time deciding what to eat. This application helps users get quick meal ideas instantly through a simple and modern React interface.
        </p>
      </section>

      <section className="about-grid">
        <div className="glass-box">
          <h2>Project Goal</h2>
          <p>
            The goal is to create a functional frontend web application using ReactJS while focusing on clean UI, responsive design, and usability.
          </p>
        </div>

        <div className="glass-box">
          <h2>Real-World Use</h2>
          <p>
            The app can be used by students, workers, or families who want a fast meal suggestion without searching manually.
          </p>
        </div>

        <div className="glass-box">
          <h2>Design Direction</h2>
          <p>
            The interface uses a modern glass-style layout, strong spacing, gradients, and clean cards to improve user experience.
          </p>
        </div>
      </section>
    </main>
  );
}