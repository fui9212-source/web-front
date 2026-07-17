import "../components/Hero.css";


export default function Hero() {
  return (
    <section className="hero">

      {/* Background */}

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-tag">
          Innovative Information System Development.
        </span>

        <h1>
          The Future
          <br />
          of Smart Office
        </h1>

        <p>
          Intelligent Workspace Platform powered by
          Artificial Intelligence, IoT and Automation.
        </p>

        <div className="hero-buttons">

          <button className="btn-primary">
            Explore
          </button>

          <button className="btn-outline">
            Watch Demo
          </button>

        </div>

      </div>

      <div className="scroll-down">

        <span></span>

      </div>

    </section>
  );
}