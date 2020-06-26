import React from "react";
import "../index.css";
import  Produtos  from "./Produtos";
import  Filtro  from "./Filtro";
import { Header } from "./Header";
import Carrinho from "./Carrinho";
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
min-height: 90%;
display: grid;
grid-template-columns: 1fr 3fr 1fr;
gap: 20px;
padding: 10px;
`;
const Nav = styled.nav`
border: 2px solid #021729;
`;


class AppCarrinho extends React.Component {
  render(){
    return (
      <Div>
        <TelaInteira>
          <Header />
  
          <Main>
            <Nav>
                <Filtro />
            </Nav>
  
            <section class="painel-de-videos">
              <Produtos
                url={"https://picsum.photos/400/400?a=1"}
                tituloDoVideo={"Título 1"}
              />
              <Produtos
                url={"https://picsum.photos/400/400?a=2"}
                tituloDoVideo={"Título 1.5"}
              />
              <Produtos
                url={"https://picsum.photos/400/400?a=3"}
                tituloDoVideo={"Título 2"}
              />
              <Produtos
                url={"https://picsum.photos/400/400?a=4"}
                tituloDoVideo={"Título 3"}
              />
              <Produtos
                url={"https://picsum.photos/400/400?a=5"}
                tituloDoVideo={"Título 4"}
              />
              <Produtos
                url={"https://picsum.photos/400/400?a=6"}
                tituloDoVideo={"Título 5"}
              />
              <Produtos
                url={"https://picsum.photos/400/400?a=7"}
                tituloDoVideo={"Título 6"}
              />
              <Produtos
                url={"https://picsum.photos/400/400?a=8"}
                tituloDoVideo={"Título 7"}
              />
            </section>
          </Main>
          <Carrinho/>
        </TelaInteira>
      </Div>
    );
  }
  
  }
  export default AppCarrinho
  
