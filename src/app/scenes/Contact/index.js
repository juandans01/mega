import React, { Component } from 'react'
import { Wrapper } from './components/Styled'
// import { scrollTo } from '../../../helpers/styleHelper'
import Location from '../../../assets/location-icon.svg'

export default class Contact extends Component {

  render() {
    return (
      <div className="pure-g">
        <div className='pure-u-1'>
          <Wrapper id="contact">
            <div className='pure-u-1'>
              <div className='title'>¡Conecta con nosotros!</div>
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
                    <div className='text-separator'></div>
                    Niceto Vega 4736, Palermo<br/>
                    Buenos Aires, Argentina CP 1414<br/>
                  </span>
                </div>
                <div>
                  <p>México y Centroamérica</p>
                  <span>
                    mexico@megaresearch.net<br/>
                    centroamerica@megaresearch.net<br/>                    
                    <div className='text-separator'></div>
                    Av. Insurgentes Sur 1793 , Interior 805.<br/>
                    Colonia Guadalupe Inn CDMX (01020)<br/>                    
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