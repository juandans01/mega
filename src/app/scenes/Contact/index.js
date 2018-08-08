import React, { Component } from 'react'
import { Wrapper } from './components/Styled'

export default class Contact extends Component {

  render() {
    return (
      <Wrapper id="contact">
        <div className='title'>Ponete en contacto!</div>
        <div className='content'>
          Podemos ayudarte en algo? Estés donde estés, nos encantaría saber de ti.
          Tenemos varias oficinas donde puedes contactarte, y si no estás seguro,
          puedes ponerte en contacto con nosotros escribiendo a hola@megaresearch.net
        </div>
        <div className='separator'>
          <div className='border'></div>
          <div className='border'></div>
        </div>
        <div className='countries'>
          <div>
            <p>Argentina, Chile y Uruguay</p>
            <span>
              argentina@megaresearch.net<br/>
              (+54911) 6932-0000
            </span>
          </div>
          <div>
            <p>Mexico y Centroamerica</p>
            <span>
              mexico@megaresearch.net<br/>
              centroamerica@megaresearch.net<br/>
              (+54911) 6932-0000
            </span>
          </div>
          <div>
            <p>Brasil</p>
            <span>
              brasil@megaresearch.net<br/>              
              (+54911) 6932-0000
            </span>
          </div>
        </div>
        <div className='footer'>
          <div>REDES</div>
          <div>www.megaresearch.com</div>
        </div>
      </Wrapper>
    )
  }
}