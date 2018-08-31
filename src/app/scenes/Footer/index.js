import React, { Component } from 'react'
import { Wrapper } from './Styled'

import MegaLogo from '../../../assets/megaresearch-white.svg'
import Facebook from '../../../assets/social/facebook-icon.svg'
import Linkedin from '../../../assets/social/linkedin-icon.svg'
import Mercurias from '../../../assets/mercurias.svg'
export default class Footer extends Component {

  render() {
    return (
      <div className='pure-g'>
        <div className='pure-u-1'>
          <Wrapper>
          {/* <div className='pure-u-1'>
              <div className='contact-form'>
                <div className='contact-form-title'>¡Escribinos!</div>
                <form className='contact-form-body' action="https://formspree.io/info@megaresearch.net" method="POST">
                  <div>
                    <input className='contact-form-input' required type="text" name="name" placeholder="Nombre"/>
                    <input className='contact-form-input' required type="email" name="_replyto" placeholder="Email"/>
                  </div>                  
                  <textarea className='contact-form-message' required name="message" placeholder="Mensaje: (Opcional)"/>
                  <input type="hidden" name="_next" value="/" />
                  <input className='contact-form-button' type="submit" value="Enviar" />
                </form>
              </div>
            </div> */}
            <div className='pure-u-1'>
              <div className='footer'>
                <div className='upper'>
                  <div className='logo'>
                    <img src={MegaLogo} alt='megaresearch-white'/>
                    <div className='social'>
                      <a target="_blank" href='https://www.facebook.com/megaresearch2?ref=hl' rel="noopener noreferrer">
                        <img src={Facebook} alt='facebook-logo'/>
                      </a>                      
                      <a target="_blank" href="https://www.linkedin.com/company/mega-research" rel="noopener noreferrer">
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