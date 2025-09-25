import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #0a192f, #112240)", 
        color: "var(--color-text)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >

      <div
        style={{
          width: "100%",
          backgroundColor: "black",
          padding: "15px 0",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "white",
        }}
      >
        Currículo
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <img
            src="/assets/images/Foto.jpg"
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover",
              borderRadius: "8px",
              border: "3px solid black",
            }}
            alt="Foto de perfil"
          />

          <Link
            href="/jogo"
            style={{
              padding: "10px 20px",
              backgroundColor: "var(--color-accent)",
              color: "#0A192F",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            Jogar Forca
          </Link>
        </div>

        <table
          style={{
            borderCollapse: "collapse",
            width: "500px",
            border: "2px solid black",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <tbody>
            <tr>
              <th
                style={{
                  padding: "8px",
                  textAlign: "left",
                  borderBottom: "2px solid black",
                }}
              >
                Nome: Igor Gabriel Lira Uchôa
              </th>
            </tr>
            <tr>
              <th
                style={{
                  padding: "8px",
                  textAlign: "left",
                  borderBottom: "2px solid black",
                }}
              >
                Idade: 20
              </th>
            </tr>
            <tr>
              <th
                style={{
                  padding: "8px",
                  textAlign: "left",
                  borderBottom: "2px solid black",
                }}
              >
                Sobre:
              </th>
            </tr>
            <tr>
              <td
                style={{
                  padding: "8px",
                  textAlign: "justify",
                  borderBottom: "2px solid black",
                }}
              >
                Nasci no estado de Pernambuco na cidade de Recife, me formei no
                colégio Damas da instrução Cristã no ano de 2022 e atualmente
                estou cursando o curso de Ciência da Computação na Unicap (5º
                período)
              </td>
            </tr>
            <tr>
              <th
                style={{
                  padding: "8px",
                  textAlign: "left",
                  borderBottom: "2px solid black",
                }}
              >
                Tecnologias:
              </th>
            </tr>
            <tr>
              <td
                style={{
                  padding: "8px",
                  textAlign: "justify",
                  borderBottom: "2px solid black",
                }}
              >
                Python, Java, C, CSS.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
