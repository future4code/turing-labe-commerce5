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


export default function App() {
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
             url={"https://cdn.discordapp.com/attachments/725392849348198411/726113358637564007/001.jpg"}
             nomeDoProduto={"Foguete Atlas V"}
             valorProduto={"R$ 40.50"}
            />
            <Produtos
             url={"https://media.discordapp.net/attachments/725392849348198411/726113366757736528/002.jpg"}
             nomeDoProduto={"Foguete Minotaur"}
             valorProduto={"R$ 53.75"}
            />
            <Produtos
             url={"https://media.discordapp.net/attachments/725392849348198411/726113370566033448/003.jpg"}
             nomeDoProduto={"Foguete Taurus"}
             valorProduto={"R$ 99.00"}
            />
            <Produtos
             url={"https://media.discordapp.net/attachments/725392849348198411/726113372449407016/004.jpg"}
             nomeDoProduto={"Foguete Titan 23G"}
             valorProduto={"R$ 199.00"}
            />
            <Produtos
             url={"https://media.discordapp.net/attachments/725392849348198411/726113373380673626/005.jpg"}
             nomeDoProduto={"Foguete Thor-Burner"}
             valorProduto={"R$ 210.00"}
            />
            <Produtos
             url={"https://media.discordapp.net/attachments/725392849348198411/726113374622187600/006.jpg"}
             nomeDoProduto={"Foguete Scout"}
             valorProduto={"R$ 210.00"}
            />
            <Produtos
             url={"https://media.discordapp.net/attachments/725392849348198411/726113379680518224/008.jpg"}
             nomeDoProduto={"Foguete Juno II"}
             valorProduto={"R$ 499.99"}
            />
            <Produtos
             url={"https://media.discordapp.net/attachments/725392849348198411/726113376358629376/007.jpg"}
             nomeDoProduto={"Foguete Athena"}
             valorProduto={"R$ 655.99"}
            />
          </section>
        </Main>
        <Carrinho/>
      </TelaInteira>
    </Div>
  );
}

