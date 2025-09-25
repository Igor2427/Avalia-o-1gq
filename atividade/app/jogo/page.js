"use client";
import JogoForca from "@/components/JogoForca";
import Link from "next/link";

export default function JogoPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        minHeight: "100vh",
        color: "#fff",
        background: "linear-gradient(to bottom, #0055A4 0%, #0055A4 33.33%, #FFFFFF 33.33%, #FFFFFF 66.66%, #EF4135 66.66%, #EF4135 100%)", // três faixas sólidas
      }}
    >
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <JogoForca />
      </div>

      <Link
        href="/"
        style={{
          padding: "10px 20px",
          backgroundColor: "#64ffda",
          color: "#0A192F",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        Voltar para Home
      </Link>
    </div>
  );
}


