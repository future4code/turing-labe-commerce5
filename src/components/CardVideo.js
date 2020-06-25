import React from "react";
import styled from "styled-components";

const Botao = styled.button`
color: white;
background-color:#F26522;
/*background-image: linear-gradient(to right, transparent, rgba(15,21,166,0.5));*/
padding:8px;
margin:4px;
border-radius:8px;
box-shadow: inset 0 2px 3px 0 rgba(255,255,255,.3), inset 0 -3px 6px 0 rgba(0,0,0,.2), 0 3px 2px 0 rgba(0,0,0,.2);
font-size: 16px;
`
const Titulo = styled.h4`
 margin-left: 20px;
 color: #170229;
`
class CardVideo extends React.Component {
  reproduzVideo = () => {
    console.log("Vídeo está sendo reproduzido");
};



  render() {
    return (
      <div className="box-pagina-principal" onclick="reproduzVideo()">
        <img src={this.props.url} alt="" />
        <Titulo>{this.props.tituloDoVideo}</Titulo>
        <Botao onClick={this.reproduzVideo}>Adicionar ao Carrinho</Botao>
      </div>
    );
  }
}
export default CardVideo
