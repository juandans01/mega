import React, { Component } from 'react'
import { Wrapper, Title, Button, ButtonsWrapper } from './components/Styled'

export default class Solutions extends Component {


  render() {
    return (
      <Wrapper>
        <Title>Soluciones</Title>
        <ButtonsWrapper>
          <Button>Consumidores</Button>
          <Button>Clientes</Button>
        </ButtonsWrapper>
      </Wrapper>
    )
  }
}