import React from "react";
import styled from "styled-components"

const Cabecalho = styled.header`
background-color: #00012a;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 50px;
height: 8%;
`
const Image = styled.img`
width: 200px;
justify-content: flex-start;
`
/*const Select = styled.select`
background-color: white;
`;
const option = styled.option`
background-color: white;
`*/
export function Header(props) {
  return (
    <Cabecalho>
      <Image src="https://cdn.discordapp.com/attachments/725392849348198411/725713816775819324/logo.png"/>
      <select className="fundo">
          <option>Preço: Crescente</option>
          <option> Preço: Decrescente</option>
      </select>
    </Cabecalho>
  );
}
