import "./Services.css";

const services = [
  {
    number: "01",
    title: "Artificial Intelligence",
    desc: "AI Assistant, Chatbot, Data Analytics และระบบช่วยตัดสินใจสำหรับองค์กร",
  },
  {
    number: "02",
    title: "IoT Automation",
    desc: "ควบคุมไฟ แอร์ เซ็นเซอร์ และอุปกรณ์ทั้งหมดผ่านระบบอัจฉริยะ",
  },
  {
    number: "03",
    title: "Smart Security",
    desc: "Face Recognition, Smart CCTV และระบบควบคุมการเข้าออก",
  },
  {
    number: "04",
    title: "Energy Management",
    desc: "ตรวจสอบและลดการใช้พลังงานแบบ Real-time พร้อม Dashboard",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">

      <div className="services-header">
        <span>OUR SERVICES</span>
        <h2>Technology That Works For You</h2>
      </div>

      <div className="services-grid">
        {services.map((item) => (
          <div className="service-card" key={item.number}>

            <div className="service-number">
              {item.number}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button>
              Learn More →
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}