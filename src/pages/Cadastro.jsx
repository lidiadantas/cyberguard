import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    empresa: "",
    papel: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function cadastrar() {
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/login");
  }

  return (
    <div style={{ fontFamily: "Segoe UI", minHeight: "100vh", background: "#f8fafc" }}>
      <Header />

      <div style={{ paddingTop: "140px", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            width: "420px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2>Criar conta</h2>

          <input name="nome" placeholder="Nome" onChange={handleChange} style={input} />
          <input name="email" placeholder="Email" onChange={handleChange} style={input} />
          <input name="senha" type="password" placeholder="Senha" onChange={handleChange} style={input} />
          <input name="empresa" placeholder="Empresa" onChange={handleChange} style={input} />

          <select name="papel" onChange={handleChange} style={input}>
            <option value="">Selecione o papel</option>
            <option value="gestor">Gestor</option>
            <option value="ti">TI / Segurança</option>
            <option value="usuario">Usuário comum</option>
          </select>

          <button onClick={cadastrar} style={button}>
            Criar conta
          </button>
        </div>
      </div>
    </div>
  );
}

const input = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "10px",
  border: "1px solid #ddd",
};

const button = {
  width: "100%",
  marginTop: "20px",
  padding: "12px",
  background: "#1d4ed8",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};