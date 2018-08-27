import React, { Component } from 'react'
import { Wrapper } from './components/Styled';

import Video from '../../../assets/HeroVideo.mp4'

export default class Hero extends Component {
  
  render() {
    return (
      <Wrapper id='hero'>
        <video
        height={600}
        autoPlay
        muted
        loop
        >
          <source src={Video} />
        </video>
        <div>
          <p>
            Investigación en movimiento<br/>          
          </p>
          <span>
            Tecnología y flexibilidad para<br/>
            afrontar los nuevos desafíos.
          </span>
        </div>        
      </Wrapper>
    )
  }
}



