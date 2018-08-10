import React, { Component } from 'react'
import { Wrapper, RightColumn, Map, Diversity, Ways, Image } from './components/Styled'
import TextBox from '../../components/TextBox'
import Title from '../../components/Title'
//assets
import PhoneImage from '../../../assets/opt-phone.jpg'
import PanelsImage from '../../../assets/Paneles-online.png'


export default class Culture extends Component {

  render(){
    return (
      <Wrapper>
        <div id="culture" className='pure-g'>
          <div className='pure-u-1'>
            <Title>Qué hacemos</Title>
          </div>
          <div className='pure-u-1'>
            <div className='pure-u-1-2 pure-u-md-1'>
              <Diversity>
                <div>            
                  <TextBox
                    titleSize="28px"
                    title="Conectar en la diversidad"
                    contentSize="16px"
                    content="Realizamos investigaciones en todo LATAM
                    sin perder de vista las particularidades de
                    cada mercado: porque cada país, cada ciudad,
                    cada consumidor tiene distintas formas de
                    vincularse con las marcas."
                    maxWidth="350px"
                  />
                </div>                
              </Diversity>              
            </div>
            <div className='pure-u-1-2 pure-u-md-1'>
              <RightColumn>
                <Map>
                  <img src="http://via.placeholder.com/350x200" alt='mapa'/>
                </Map>                
              </RightColumn>
            </div>
          </div>
          <div className='pure-u-1'>          
            <div className="pure-u-1">
                <TextBox
                  titleSize="28px"
                  titleAlign="center"
                  title="De que manera?"
                  separatorAlign="center"
                  contentSize="16px"
                  contentAlign="center"
                  content={(
                    <div>
                      Llegamos a conectar digitalmente con las
                      personas a través de dos vías:<br/>                      
                    </div>
                  )}                
                />
              </div>
              <div className='pure-u-1-2 pure-u-md-1'>
                <Image>
                  <div className='left'>
                    <img src={PanelsImage} alt='panels'/>
                    <div>Paneles online</div>
                    <p>Contacto via e-mail para alcanzar masividad en países con más población.</p>
                  </div>                
                </Image>
              </div>
              <div className='pure-u-1-2 pure-u-md-1'>
                <Image>
                  <div className='right'>
                    <img src={PhoneImage} alt='phone'/>
                    <div>Focus Target</div>
                    <p><strong>Contacto desde Redes Sociales</strong> para
                      alcanzar targets más específicos, países
                      menos poblados o ciudades pequeñas.
                    </p>
                  </div>                
                </Image>
              </div>            
          </div>   
        </div>
      </Wrapper>
    )
  }
}