import './App.css';
import { useState } from 'react';
import Students from './Students';

function App() {
  const [activePage, setActivePage] = useState('Dashboard');
  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">AttendEase<span>.</span></h2>

        <p className="menu-title">MAIN MENU</p>

       <nav>
  <a
    href="#"
    className={activePage === 'Dashboard' ? 'active' : ''}
    onClick={() => setActivePage('Dashboard')}
  >
    ▦ Dashboard
  </a>

  <a
    href="#"
    className={activePage === 'Students' ? 'active' : ''}
    onClick={() => setActivePage('Students')}
  >
    ♙ Students
  </a>

  <a href="#">▣ Attendance</a>
  <a href="#">▤ Reports</a>
</nav>
        <div className="sidebar-bottom">
          <a href="#">⚙ Settings</a>
          <p>AttendEase v1.0</p>
        </div>
      </aside>

      <main className="main-content">
        {activePage === 'Students' ? (
  <Students />
) : (
  <>
        <header className="topbar">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, Administrator!</p>
          </div>
          <div className="profile">A</div>
        </header>

        <section className="welcome">
          <div>
            <p>ATTENDANCE MANAGEMENT</p>
            <h2>Good day, Admin!</h2>
            <span>Here's what's happening with your students today.</span>
          </div>
          <div className="welcome-icon">▦</div>
        </section>

        <section className="stats">
          <div className="stat-card">
            <p>Total Students</p>
            <h2>250</h2>
            <span>Registered students</span>
          </div>

          <div className="stat-card">
            <p>Present Today</p>
            <h2 className="green">218</h2>
            <span>Students present</span>
          </div>

          <div className="stat-card">
            <p>Absent Today</p>
            <h2 className="red">32</h2>
            <span>Students absent</span>
          </div>

          <div className="stat-card">
            <p>Attendance Rate</p>
            <h2 className="blue">87.2%</h2>
            <span>Today's attendance</span>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-heading">
              <h3>Today's Attendance</h3>
              <span>Overview</span>
            </div>

            <div className="attendance-circle">
              <div>
                <strong>87.2%</strong>
                <small>Present</small>
              </div>
            </div>

            <div className="legend">
              <span><i className="dot present-dot"></i> Present: 218</span>
              <span><i className="dot absent-dot"></i> Absent: 32</span>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <h3>Quick Actions</h3>
            </div>

            <button className="action-button">+ Add New Student</button>
            <button className="action-button">▣ Mark Attendance</button>
            <button className="action-button">▤ View Reports</button>
          </div>
        </section>

        <section className="panel recent-panel">
          <div className="panel-heading">
            <h3>Recent Students</h3>
            <span>Sample data</span>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Roll Number</th>
                  <th>Class</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rahul Sharma</td>
                  <td>CS001</td>
                  <td>B.Tech CSE</td>
                  <td><span className="status present">Present</span></td>
                </tr>
                <tr>
                  <td>Ayesha Khan</td>
                  <td>CS002</td>
                  <td>B.Tech CSE</td>
                  <td><span className="status absent">Absent</span></td>
                </tr>
                <tr>
                  <td>Arjun Verma</td>
                  <td>CS003</td>
                  <td>B.Tech CSE</td>
                  <td><span className="status present">Present</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <footer>© 2026 AttendEase. All rights reserved.</footer>
     
      </>
)}
 </main>
    </div>
  );
}

export default App;