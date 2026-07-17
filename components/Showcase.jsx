import "./Showcase.css";

const projects = [
  {
    title: "AI Assistant",
    subtitle: "Conversational AI for Smart Office",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600",
  },
  {
    title: "Smart Security",
    subtitle: "Face Recognition & Access Control",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600",
  },
  {
    title: "IoT Monitoring",
    subtitle: "Real-time Sensor Dashboard",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600",
  },
];

export default function Showcase() {
  return (
    <section className="showcase" id="projects">

      <div className="showcase-title">
        <span>FEATURED SOLUTIONS</span>
        <h2>Designed For Modern Workplace</h2>
      </div>

      {projects.map((item, index) => (

        <div
          className={`showcase-item ${index % 2 ? "reverse" : ""}`}
          key={item.title}
        >

          <div className="showcase-image">

            <img
              src={item.image}
              alt={item.title}
            />

          </div>

          <div className="showcase-text">

            <h3>{item.title}</h3>

            <p>{item.subtitle}</p>

            <button>
              View Project →
            </button>

          </div>

        </div>

      ))}

    </section>
  );
}