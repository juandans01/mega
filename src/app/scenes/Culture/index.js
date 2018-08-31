import React, { Component } from 'react'
import { Wrapper, RightColumn, Map, Diversity, Image } from './components/Styled'
import TextBox from '../../components/TextBox'
import Title from '../../components/Title'
//assets
import PhoneImage from '../../../assets/opt-phone.jpg'
import PanelsImage from '../../../assets/left-culture.jpg'

import { bp } from '../../../helpers/styleHelper'
const CustomTitle = Title.extend`
  
  ${bp('ts', 'min-width')`
    margin-bottom: 70px;
  `}
  ${bp('md')`
    font-size: 44px;
    margin-bottom: 10px;
  `}
`

export default class Culture extends Component {

  render(){
    return (
      <Wrapper>
        <div id="culture" className='pure-g'>
          <div className='pure-u-1'>
            <CustomTitle>Qué hacemos</CustomTitle>
          </div>
          <div className='pure-u-1'>
            <div className='pure-u-1-2 pure-u-md-1'>
              <Diversity>
                <div>            
                  <TextBox
                    titleSize="30px"
                    title="Conectar en la diversidad"                    
                    contentSize="16px"
                    contentAlign="justify"
                    content="Realizamos investigaciones en todo LATAM
                    sin perder de vista las particularidades de
                    cada mercado: porque cada país, cada ciudad,
                    cada consumidor tiene distintas formas de
                    vincularse con las marcas."
                    maxWidth="362px"
                  />
                </div>                
              </Diversity>              
            </div>
            <div className='pure-u-1-2 pure-u-md-1'>
              <RightColumn>
                <Map>
                  <iframe title="welcome-video" width="640" height="365" src="https://www.youtube.com/embed/6O2k0RuW1ew?rel=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>                
                </Map>                
              </RightColumn>
            </div>
          </div>
          <div className='pure-u-1'>          
            <div className="pure-u-1">
                <TextBox
                  titleSize="30px"
                  titleAlign="center"
                  title="¿De qué manera?"
                  separatorAlign="center"
                  contentSize="16px"
                  contentAlign="center"
                  content={(
                    <div>
                      Conectamos digitalmente con las personas a través de dos vías:<br/>                      
                    </div>
                  )}                
                />
              </div>
              <div className='pure-u-1-2 pure-u-md-1'>
                <Image>                                  
                  <div className='left'>
                    <img src={PhoneImage} alt='phone'/>
                    <div>Focus Target</div>
                    <p><strong>Contacto desde Redes Sociales</strong> para
                      alcanzar targets más específicos, países
                      menos poblados o ciudades pequeñas.
                    </p>
                  </div>
                </Image>
              </div>
              <div className='pure-u-1-2 pure-u-md-1'>
                <Image>
                  <div className='right'>
                    <img src={PanelsImage} alt='panels'/>
                    <div>Paneles online</div>
                    <p>Heterogeneidad de paneles para garantizar muestras más representativas y<br/> adecuadas al target.</p>
                  </div>
                </Image>
              </div>            
          </div>   
        </div>
      </Wrapper>
    )
  }
}