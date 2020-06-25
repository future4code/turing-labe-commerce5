import React from "react";
import "./index.css";
import styled from "styled-components";
import AppCarrinho from "./components/AppCarrinho";
import Home from "./components/Home";

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
grid-template-columns: 1fr 3fr;
gap: 20px;
padding: 10px;
`;
const Nav = styled.nav`
border: 2px solid #021729;
`;


class App extends React.Component{
  state = {
    Carrinho: false
  };

  handleClickCarrinho = () => {
    this.setState({ Carrinho: !this.state.Carrinho });
};
 
 
    render() {
      const renderiza = () => {
        if (!this.state.Carrinho) {
          return (
            <AppCarrinho
              funcao={this.handleClickCarrinho}
            />
          );
        } else {
          return <Home/>;
        }
      };
  
      return <App>{renderiza()}</App>;
    }
  }
export default App

