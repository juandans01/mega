import React, { Component } from 'react'
import { Wrapper } from './components/Styled';


export default class Hero extends Component {
  
  render() {
    return (
      <Wrapper id='hero'>
        <p>
          Investigación en movimiento<br/>          
        </p>
        <span>
          Tecnología y flexibilidad para<br/>
          afrontar los nuevos desafíos.
        </span>
      </Wrapper>
    )
  }
}



