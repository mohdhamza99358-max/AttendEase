import { useState } from 'react';
import './Students.css';

function Students() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [studentClass, setStudentClass] = useState('B.Tech CSE');

  function addStudent(e) {
    e.preventDefault();

    if (!name.trim() || !roll.trim()) {
      alert('Please enter student name and roll number.');
      return;
    }

    if (students.some(s => s.roll.toLowerCase() === roll.trim().toLowerCase())) {
      alert('This roll number already exists.');
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      roll: roll.trim(),
      studentClass
    };

    setStudents([...students, newStudent]);

    setName('');
    setRoll('');
  }

  function deleteStudent(id) {
    setStudents(students.filter(student => student.id !== id));
  }

  return (
    <div className="students-page">
      <div className="students-header">
        <div>
          <h1>Students</h1>
          <p>Manage your registered students.</p>
        </div>
        <div className="student-count">
          Total Students: {students.length}
        </div>
      </div>

      <div className="student-form">
        <h3>Add New Student</h3>

        <form onSubmit={addStudent}>
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Roll Number"
            value={roll}
            onChange={e => setRoll(e.target.value)}
          />

          <select
            value={studentClass}
            onChange={e => setStudentClass(e.target.value)}
          >
            <option>B.Tech CSE</option>
            <option>B.Tech IT</option>
            <option>BCA</option>
            <option>MCA</option>
          </select>

          <button type="submit">+ Add Student</button>
        </form>
      </div>

      <div className="student-table">
        <h3>Registered Students</h3>

        {students.length === 0 ? (
          <p className="empty-message">
            No students added yet. Add your first student above!
          </p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Roll Number</th>
                  <th>Class</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.roll}</td>
                    <td>{student.studentClass}</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => deleteStudent(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Students;