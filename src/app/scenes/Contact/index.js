import React, { Component } from 'react'
import { Wrapper } from './components/Styled'
import { scrollTo } from '../../../helpers/styleHelper'
import Location from '../../../assets/location-icon.svg'
import MegaLogo from '../../../assets/megaresearch-white.svg'
import Facebook from '../../../assets/social/facebook-icon.svg'
import Linkedin from '../../../assets/social/linkedin-icon.svg'
import Mercurias from '../../../assets/mercurias.svg'

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
                    Niceto Vega 4736, Buenos Aires, Argentina
                  </span>
                </div>
                <div>
                  <p>Mexico y Centroamerica</p>
                  <span>
                    mexico@megaresearch.net<br/>
                    centroamerica@megaresearch.net<br/>                    
                  </span>
                </div>
              </div>
            </div>
            <div className='pure-u-1'>
              <div className='footer'>
                <div className='upper'>
                  <div className='logo'>
                    <img src={MegaLogo} alt='megaresearch-white'/>
                    <div className='social'>
                      <a target="_blank" href='https://www.linkedin.com/company/mega-research' rel="noopener noreferrer">
                        <img src={Facebook} alt='facebook-logo'/>
                      </a>
                      <a target="_blank" href="https://www.facebook.com/megaresearch2?ref=hl" rel="noopener noreferrer">
                        <img src={Linkedin} alt='linkedin-logo'/>
                      </a>                               
                    </div>
                  </div>
                </div>
                <div className='lower'>
                  <div className='copyright'>
                    Copyright ©2018 MEGARESEARCH. Todos los Derechos Reservados.
                  </div>
                  <div className='mercurias'>
                    <div>Diseñado y desarrollado por</div>
                    <img src={Mercurias} alt='mercurias'/>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>        
      </div>      
    )
  }
}