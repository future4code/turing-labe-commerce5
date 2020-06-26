import React from "react";
import styled from "styled-components"

const Divisao = styled.div`
margin: 20px;
margin-top:  ${props => props.margem};
`;
const Botaao = styled.button`
background-color: #00012a;
color: white;
`
class Filtro extends React.Component{
  state ={
    Foguetes:[
      {
        id: Date.now(),
        nome: "Foguete Atlas V",
        preco: 40.50,
      },
    
    {
        id: Date.now(),
        nome: "Foguete Minotaur",
        preco: 53.75,
      },
    
    {
        id: Date.now(),
        nome: "Foguete Taurus",
        preco: 99.00,
      },
    
    {
        id: Date.now(),
        nome: "Foguete Titan 23G",
        preco: 199.00,
      },
    
    {
        id: Date.now(),
        nome: "Foguete Thor-Burner",
        preco: 210.00,
      },
    
    {
        id: Date.now(),
        nome: "Foguete Scout",
        preco: 210.00,
      },
    
    {
        id: Date.now(),
        nome: "Foguete Juno II",
        preco: 499.99,
      },
    
    {
        id: Date.now(),
        nome: "Foguete Athena",
        preco: 655.99,
      },
    ],
    ValorMinimo:"",
    ValorMaximo:"",
    NomeProduto:"",
  }

  filtroValorMin = (event)=>{
    this.setState({ValorMinimo: event.target.value})
  }

  filtroValorMax = (event)=>{
    this.setState({ValorMaximo: event.target.value})
  }

  filtroProduto = (event)=>{
    this.setState({NomeProduto: event.target.value})
  }

  foguetes = ()=>{
   
  }
  render(){
    return (
      <Divisao>
        <h1>Filtros:</h1>

        <Divisao margem={"10px"}>
          <label>Valor Mínimo:</label>
          <input type="number" value={this.state.ValorMinimo} onChange={this.filtroValorMin}/>
        </Divisao>

        <Divisao>
          <label>Valor Máximo:</label>
          <input type="number" value={this.state.ValorMaximo} onChange={this.filtroValorMax}/>
        </Divisao>

        <Divisao>
          <label>Buscar Produto</label>
          <input value={this.state.NomeProduto} onChange={this.filtroProduto}/>
        </Divisao>

        <Divisao>
          <Botaao>Filtrar</Botaao>
        </Divisao>
      
      </Divisao>
      )
  }
}
export default Filtro