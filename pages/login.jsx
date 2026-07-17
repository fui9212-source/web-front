import "../pages/login.css";

export default function Login() {
  return (
    <div className="login-page">

      <div className="login-left">

        <div className="brand">
          <h1>AIoT Smart Office</h1>
          <p>
            Intelligent Workplace Management System
          </p>
        </div>


        <div className="features">

          <div>
            🤖
            <span>
              AI Assistant
              <small>ผู้ช่วยอัจฉริยะสำหรับพนักงาน</small>
            </span>
          </div>


          <div>
            📷
            <span>
              Smart Security
              <small>Face Recognition & CCTV AI</small>
            </span>
          </div>


          <div>
            🌱
            <span>
              Smart Environment
              <small>Temperature / Energy Monitoring</small>
            </span>
          </div>


        </div>


      </div>



      <div className="login-box">

        <h2>
          Welcome Back
        </h2>

        <p>
          Sign in to Smart Office System
        </p>


        <input 
          placeholder="Employee ID"
        />


        <input 
          type="password"
          placeholder="Password"
        />


        <select>
          <option>
            Intern
          </option>

          <option>
            Employee
          </option>

          <option>
            Admin
          </option>

        </select>



        <button>
          Login
        </button>


        <div className="footer">
          © 2026 AIoT Smart Office
        </div>


      </div>


    </div>
  );
}