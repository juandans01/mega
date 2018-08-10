import React, { Component } from 'react'
import { Wrapper } from './components/Styled'
import Location from '../../../assets/location-icon.svg'
export default class Contact extends Component {

  render() {
    return (
      <div className="pure-g">
        <div className='pure-u-1'>
          <Wrapper id="contact">
            <div className='pure-u-1'>
              <div className='title'>Ponete en contacto!</div>
            </div>
            <div className='pure-u-1'>
              <div className='content'>
                <div> 
                  Podemos ayudarte en algo? Estés donde estés, nos encantaría saber de ti.
                  Tenemos varias oficinas donde puedes contactarte, y si no estás seguro,
                  puedes ponerte en contacto con nosotros
                </div>                
              </div>
            </div>                    
            <div className='separator'>
              <div className='border'></div>
              <img src={Location} alt="location"/>
              <div className='border'></div>
            </div>
            <div className='pure-u-1'>
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
            </div>            
          </Wrapper>
        </div>        
      </div>      
    )
  }
}