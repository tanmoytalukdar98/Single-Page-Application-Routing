import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* ---------- Center Style ---------- */

const centerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
  fontSize: "28px",
  fontWeight: "bold"
};

/* ---------- Pages ---------- */

function Home() {
  return <div style={centerStyle}>🏠 Home Page</div>;
}

function About() {
  return <div style={centerStyle}>ℹ️ About Page</div>;
}

function Contact() {
  return <div style={centerStyle}>📞 Contact Page</div>;
}

function Dashboard() {
  return <div style={centerStyle}>📊 Dashboard</div>;
}

function Profile() {
  return <div style={centerStyle}>👤 Profile</div>;
}

function NotFound() {
  return <div style={centerStyle}>❌ Page Not Found</div>;
}

/* ---------- App ---------- */

function App() {
  return (
    <BrowserRouter>

      {/* Navigation Bar */}
      <nav style={{
        padding: "15px",
        background: "#eee",
        textAlign: "center",
        fontSize: "18px"
      }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
