import React, { Component } from 'react'

import Card from '../../components/Card'
import Title from '../../components/Title'

import { CardsWrapper } from './components/Styled'
import CardImage from '../../../assets/pcgirl.jpg'

export default class Clients extends Component { 

  render(){
    return (
      <div className="pure-g">
        <div className="pure-u-1">
          <Title>Clientes</Title>
        </div>
        <div className="pure-u-1">
          <CardsWrapper>
            <Card
              image={CardImage}
              subtitle="Client service"
              content="Equipo de especialistas con el
              seniority, flexibilidad y creatividad
              para liderar cada desafío, con
              orientación a negocio"
            />
            <Card
              image={CardImage}
              subtitle="Client service"
              content="Equipo de especialistas con el
              seniority, flexibilidad y creatividad
              para liderar cada desafío, con
              orientación a negocio"
            />
            <Card
              image={CardImage}
              subtitle="Client service"
              content="Equipo de especialistas con el
              seniority, flexibilidad y creatividad
              para liderar cada desafío, con
              orientación a negocio"
            />
          </CardsWrapper> 
        </div>        
      </div>
    )
  }
}