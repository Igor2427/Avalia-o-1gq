"use client";
import React, { useState, useEffect } from "react";

const LISTA_PALAVRAS = [
  "REACT", "JAVASCRIPT", "NEXTJS", "COMPONENTE", "HOOKS", "ESTADO", "PROPRIEDADES",
  "BACKEND", "FRONTEND", "NODE", "BANCO", "API", "SERVIDOR", "CLIENTE", "CSS",
  "HTML", "FUNCAO", "OBJETO", "ARRAY", "VARIAVEL", "CONSTANTE", "ASYNC",
  "AWAIT", "PROMISE", "STRING", "NUMERO", "BOOLEAN", "IMPORT", "EXPORT",
  "ROTAS", "PROJETO", "DEPLOY", "NAVEGADOR", "PACOTE", "BIBLIOTECA",
  "FRAMEWORK", "MODULO", "EVENTO", "ESTRUTURA", "FORCA"
];

function Boneco({ tentativasRestantes }) {
  return (
    <svg height="250" width="200" style={{ margin: "20px auto", display: "block" }}>
      <line x1="10" y1="240" x2="150" y2="240" stroke="white" strokeWidth="4"/>
      <line x1="50" y1="20" x2="50" y2="240" stroke="white" strokeWidth="4"/>
      <line x1="50" y1="20" x2="120" y2="20" stroke="white" strokeWidth="4"/>
      <line x1="120" y1="20" x2="120" y2="40" stroke="white" strokeWidth="4"/>

      {tentativasRestantes <= 5 && <circle cx="120" cy="60" r="20" stroke="white" strokeWidth="4" fill="transparent" />}
      {tentativasRestantes <= 4 && <line x1="120" y1="80" x2="120" y2="140" stroke="white" strokeWidth="4" />}
      {tentativasRestantes <= 3 && <line x1="120" y1="100" x2="90" y2="120" stroke="white" strokeWidth="4" />}
      {tentativasRestantes <= 2 && <line x1="120" y1="100" x2="150" y2="120" stroke="white" strokeWidth="4" />}
      {tentativasRestantes <= 1 && <line x1="120" y1="140" x2="90" y2="180" stroke="white" strokeWidth="4" />}
      {tentativasRestantes <= 0 && <line x1="120" y1="140" x2="150" y2="180" stroke="white" strokeWidth="4" />}
    </svg>
  );
}

export default function JogoForca() {
  const [palavra, setPalavra] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(6);
  const [status, setStatus] = useState("jogando");

  useEffect(() => { novaPartida(); }, []);

  function tocarSom(tipo) {
    if (typeof window === "undefined") return; // só no cliente
    const audio = new Audio(tipo === "acerto" ? "/sounds/acerto.mp3" : "/sounds/erro.mp3");
    audio.play().catch(() => console.log("Erro ao tocar som"));
  }

  function novaPartida() {
    const aleatoria = LISTA_PALAVRAS[Math.floor(Math.random() * LISTA_PALAVRAS.length)];
    setPalavra(aleatoria);
    setLetrasCorretas([]);
    setLetrasErradas([]);
    setTentativasRestantes(6);
    setStatus("jogando");
  }

  function verificarLetra(letra) {
    if (status !== "jogando") return;
    letra = letra.toUpperCase();
    if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) return;

    if (palavra.includes(letra)) {
      setLetrasCorretas([...letrasCorretas, letra]);
      tocarSom("acerto");
    } else {
      setLetrasErradas([...letrasErradas, letra]);
      setTentativasRestantes(tentativasRestantes - 1);
      tocarSom("erro");
    }
  }

  useEffect(() => {
  if (!palavra) return; 
  if (tentativasRestantes === 0) setStatus("derrota");
  else if (palavra.split("").every((l) => letrasCorretas.includes(l))) setStatus("vitoria");
}, [letrasCorretas, tentativasRestantes, palavra]);



}