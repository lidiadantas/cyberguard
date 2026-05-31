import Header from "../components/Header";

export default function Login() {
  return (
    <div style={{ fontFamily: "Segoe UI", minHeight: "100vh", background: "#f8fafc" }}>
      <Header />

      <div style={{ paddingTop: "140px", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            width: "400px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2>Login</h2>

          <input
            placeholder="Email"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          />

          <input
            placeholder="Senha"
            type="password"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          />

          <button
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "12px",
              background: "#1d4ed8",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}