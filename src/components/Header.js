import React from "react";
import styled from "styled-components"

const Cabecalho = styled.header`
background-color: black;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 50px;
height: 8%;
`
export function Header(props) {
  return (
    <Cabecalho>
      <select>
          <option>Preço: Crescente</option>
          <option>Preço: Decrescente</option>
      </select>
    </Cabecalho>
  );
}
