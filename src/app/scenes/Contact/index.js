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
              <div className='title'>Conecta con nosotros!</div>
            </div>
            <div className='pure-u-1'>
              <div className='content'>
                <div> 
                  ¿Podemos ayudarte en algo?<br/>
                  Estés donde estés, nos encantaría saber de ti.
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
                  <p>Argentina y Cono Sur</p>
                  <span>
                    argentina@megaresearch.net<br/>
                    conosur@megaresearch.net<br/>
                    (+54911) 6932-0000<br/>
                    Niceto Vega 4736, Buenas Aires, Argentina
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
              </div>
            </div>            
          </Wrapper>
        </div>        
      </div>      
    )
  }
}