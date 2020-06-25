import React from "react";
import styled from "styled-components";
import AppCarrinho from "./AppCarrinho";
import App from "../App"

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
class Carrinho extends React.Component {
    render(){
        return(
            <Car>
                <Imagem onClick={this.handleClickCarrinho} src="https://cdn.discordapp.com/attachments/725392849348198411/725715711267307570/sacola.png"/>
            </Car>
        )
}
}
export default Carrinho