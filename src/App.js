import React from "react";
import "./index.css";
// import  CardVideo  from "./components/CardVideo";
// import  Filtro  from "./components/Filtro";
// import { Header } from "./components/Header";
// import Carrinho from "./components/Carrinho";
import styled from "styled-components";
import AppCarrinho from "./components/AppCarrinho"
import Home from "./components/Home"

const TelaInicial = styled.div`
margin:0;
padding:0;
box-sizing:border-box;
`
// const Div = styled.div`
//  font-family: sans-serif;
// `;
// const TelaInteira = styled.div`
// height: 100vh;
// display: flex;
// flex-direction: column;
// `;
// const Main = styled.main`
// min-height: 90%;
// display: grid;
// grid-template-columns: 1fr 3fr;
// gap: 20px;
// padding: 10px;
// `;
// const Nav = styled.nav`
// border: 2px solid #021729;
// `;


// class App extends React.Component{
//   render(){
//     return (
//       <Div>
//         <TelaInteira>
//           <Header />

//           <Main>
//             <Nav>
//                 <Filtro />
//             </Nav>

//             <section class="painel-de-videos">
//               <CardVideo
//                 url={"https://picsum.photos/400/400?a=1"}
//                 tituloDoVideo={"Título 1"}
//               />
//               <CardVideo
//                 url={"https://picsum.photos/400/400?a=2"}
//                 tituloDoVideo={"Título 1.5"}
//               />
//               <CardVideo
//                 url={"https://picsum.photos/400/400?a=3"}
//                 tituloDoVideo={"Título 2"}
//               />
//               <CardVideo
//                 url={"https://picsum.photos/400/400?a=4"}
//                 tituloDoVideo={"Título 3"}
//               />
//               <CardVideo
//                 url={"https://picsum.photos/400/400?a=5"}
//                 tituloDoVideo={"Título 4"}
//               />
//               <CardVideo
//                 url={"https://picsum.photos/400/400?a=6"}
//                 tituloDoVideo={"Título 5"}
//               />
//               <CardVideo
//                 url={"https://picsum.photos/400/400?a=7"}
//                 tituloDoVideo={"Título 6"}
//               />
//               <CardVideo
//                 url={"https://picsum.photos/400/400?a=8"}
//                 tituloDoVideo={"Título 7"}
//               />
//             </section>
//           </Main>
//           <Carrinho/>
//         </TelaInteira>
//       </Div>
//     );
//   }  
// }
const Car = styled.div`
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
position: fixed;
bottom: 20px;
right: 20px;
width: 80px;
height: 80px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 5px;
cursor: pointer;
border-radius: 50%;
transition: all 0.5s ease 0s;
`
const Imagem = styled.img`
width: 50%;
height: 45%;
`


class App extends React.Component {
  state = {
    Compras: false
  };

  handleClickCarrinho = () => {
    this.setState({ Compras: !this.state.Compras });
};
  render() {
    const renderiza = this.state.Compras ? <AppCarrinho /> : <Home />;
    return <TelaInicial>{renderiza}
      <Car onClick={this.handleClickCarrinho}>
        <Imagem src="https://cdn.discordapp.com/attachments/725392849348198411/725715711267307570/sacola.png" />
      </Car>
      </TelaInicial>
  };

}

export default App
