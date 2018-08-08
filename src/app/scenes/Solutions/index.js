import React, { Component } from 'react'
import { Wrapper, Title, Button, ButtonsWrapper } from './components/Styled'
import { scrollTo } from '../../../helpers/styleHelper'

export default class Solutions extends Component {


  render() {
    return (
      <Wrapper id="solutions">
        <Title>Soluciones</Title>
        <ButtonsWrapper>
          <Button onClick={() => {scrollTo('consumers')}}>Consumidores</Button>
          <Button onClick={() => {scrollTo('clients')}}>Clientes</Button>
        </ButtonsWrapper>
      </Wrapper>
    )
  }
}