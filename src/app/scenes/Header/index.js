import React, { Component } from 'react'
import { Wrapper, Title, Menu } from './components/Styled'

export default class Header extends Component {

  render() {
    return (
      <Wrapper>
        <Title>
          MEGARESEARCH
        </Title>
        <Menu>
          <div>Inicio</div>
          <div>Cultura</div>
          <div>Soluciones</div>
          <div>Confian en MEGA</div>
          <div>Contacto</div>                    
        </Menu>
      </Wrapper>
    )
  }
}