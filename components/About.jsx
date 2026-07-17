import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">

        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200"
          alt="office"
        />

      </div>

      <div className="about-content">

        <span>WHO WE ARE</span>

        <h2>
          Smart Office
          <br />
          Powered by AI
        </h2>

        <p>
          เราพัฒนาระบบ Smart Office ที่รวม AI, IoT และ Automation
          เพื่อช่วยให้องค์กรทำงานได้อย่างมีประสิทธิภาพ ปลอดภัย
          และตอบสนองต่อการเปลี่ยนแปลงของธุรกิจยุคใหม่
        </p>

        <div className="about-number">

          <div>

            <h3>50+</h3>

            <small>Projects</small>

          </div>

          <div>

            <h3>1000+</h3>

            <small>Connected Devices</small>

          </div>

          <div>

            <h3>99.9%</h3>

            <small>System Uptime</small>

          </div>

        </div>

      </div>

    </section>
  );
}