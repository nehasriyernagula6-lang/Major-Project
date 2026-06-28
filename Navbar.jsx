import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  const userId = localStorage.getItem("userId");

  const logout = () => {
    localStorage.removeItem("userId");
    nav("/");
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Quiz Portal</h2>

      <div>
        {!userId ? (
          <>
            <Link to="/" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        ) : (
          <>
            <Link to="/quiz" style={styles.link}>Quiz</Link>
            <button onClick={logout} style={styles.btn}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#222",
    color: "#fff"
  },
  logo: {
    margin: 0
  },
  link: {
    color: "#fff",
    marginRight: "15px",
    textDecoration: "none"
  },
  btn: {
    padding: "5px 10px",
    background: "red",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  }
};