import React from "react";
import "./index.css";
import { CardVideo } from "./components/CardVideo";
import { Topico } from "./components/Topico";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styled from "styled-components";

const Div = styled.div`
 font-family: sans-serif;
`;
const TelaInteira = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`;
const Main = styled.main`
min-height: 80%;
display: flex;
`;
const Nav = styled.nav`
flex-basis: 200px;
border-right-style: solid;
border-right-width: thin;
}
`

export default function App() {
  return (
    <Div>
      <TelaInteira>
        <Header />

        <Main>
          <Nav>
            <ul>
              <Topico tituloDoTopico={"Início"} />
              <Topico tituloDoTopico={"Em alta"} />
              <Topico tituloDoTopico={"Inscrições"} />
              <Topico tituloDoTopico={"Originais"} />
              <hr />
              <Topico tituloDoTopico={"Biblioteca"} />
              <Topico tituloDoTopico={"Histórico"} />
            </ul>
          </Nav>

          <section class="painel-de-videos">
            <CardVideo
              url={"https://picsum.photos/400/400?a=1"}
              tituloDoVideo={"Título 1"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=2"}
              tituloDoVideo={"Título 1.5"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=3"}
              tituloDoVideo={"Título 2"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=4"}
              tituloDoVideo={"Título 3"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=5"}
              tituloDoVideo={"Título 4"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=6"}
              tituloDoVideo={"Título 5"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=7"}
              tituloDoVideo={"Título 6"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=8"}
              tituloDoVideo={"Título 7"}
            />
          </section>
        </Main>

        <Footer />
      </TelaInteira>
    </Div>
  );
}

