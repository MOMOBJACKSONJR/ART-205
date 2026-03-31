import { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [page, setPage] = useState("dashboard");

  const students = [
    { id: 1, name: "John Doe", class: "Grade 9", age: 15 },
    { id: 2, name: "Mary Smith", class: "Grade 8", age: 14 },
    { id: 3, name: "Peter Johnson", class: "Grade 10", age: 16 },
  ];

  const grades = [
    { subject: "Math", score: "85%" },
    { subject: "English", score: "78%" },
    { subject: "Science", score: "92%" },
    { subject: "Social Studies", score: "80%" },
  ];

  const announcements = [
    "School resumes Monday at 8:00 AM.",
    "Mid-term exams start next week.",
    "Parents meeting on Friday at 2:00 PM.",
  ];

  function login() {
    if (username === "admin" && password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Invalid login. Try admin / 1234");
    }
  }

  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-blue-100">
        <div className="bg-white p-6 rounded-xl shadow-md w-80">
          <h1 className="text-xl font-bold mb-4 text-center">
            Government Day Care School Portal
          </h1>

          <input
            className="border p-2 w-full mb-3"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="border p-2 w-full mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={login}
            className="bg-blue-600 text-white w-full p-2 rounded"
          >
            Login
          </button>

          <p className="text-xs mt-3 text-gray-500 text-center">
            Demo login: admin / 1234
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-4">
        <h2 className="text-lg font-bold mb-6">
          Government Day Care School
        </h2>

        <button onClick={() => setPage("dashboard")} className="block mb-2">
          Dashboard
        </button>
        <button onClick={() => setPage("students")} className="block mb-2">
          Students
        </button>
        <button onClick={() => setPage("grades")} className="block mb-2">
          Grades
        </button>
        <button onClick={() => setPage("announcements")} className="block mb-2">
          Announcements
        </button>

        <button
          onClick={() => setLoggedIn(false)}
          className="mt-10 bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        {page === "dashboard" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to the student management system.</p>
          </div>
        )}

        {page === "students" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Students</h1>
            <div className="grid gap-3">
              {students.map((s) => (
                <div key={s.id} className="bg-white p-3 rounded shadow">
                  <p><b>Name:</b> {s.name}</p>
                  <p><b>Class:</b> {s.class}</p>
                  <p><b>Age:</b> {s.age}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "grades" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Grades</h1>
            <div className="bg-white p-4 rounded shadow w-64">
              {grades.map((g, i) => (
                <p key={i}>
                  {g.subject}: <b>{g.score}</b>
                </p>
              ))}
            </div>
          </div>
        )}

        {page === "announcements" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Announcements</h1>
            <ul className="bg-white p-4 rounded shadow">
              {announcements.map((a, i) => (
                <li key={i} className="mb-2">📢 {a}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}