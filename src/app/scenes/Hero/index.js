import React, { Component } from 'react'
import { Wrapper } from './components/Styled';


export default class Hero extends Component {
  
  render() {
    return (
      <Wrapper id='hero'>
        <p>
          Inteligencia de mercado,<br/>
          tecnología y flexibilidad para<br/>
          afrontar los nuevos desafíos
        </p>
      </Wrapper>
    )
  }
}



