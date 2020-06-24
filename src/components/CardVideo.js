import React from "react";

export class CardVideo extends React.Component {
  reproduzVideo = () => {
    console.log("Vídeo está sendo reproduzido");
  };

  render() {
    return (
      <div className="box-pagina-principal" onclick="reproduzVideo()">
        <img src={this.props.url} alt="" />
        <h4>{this.props.tituloDoVideo}</h4>
        <button onClick={this.reproduzVideo}>Reproduzir Vídeo</button>
      </div>
    );
  }
}
