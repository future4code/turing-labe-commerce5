import React from "react";
import styled from "styled-components"

const Divisao = styled.div`
margin: 20px;
margin-top:  ${props => props.margem};
`;
class Filtro extends React.Component{
  state ={

  }
  render(){
    return (
      <Divisao>
        <h1>Filtros:</h1>

        <Divisao margem={"10px"}>
          <label>Valor Mínimo:</label>
          <input type="number"/>
        </Divisao>

        <Divisao>
          <label>Valor Máximo:</label>
          <input type="number"/>
        </Divisao>

        <Divisao>
          <label>Buscar Produto</label>
          <input/>
        </Divisao>
      
      </Divisao>
      )
  }
}
export default Filtro