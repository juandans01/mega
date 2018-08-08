import React, { Component } from 'react'
import { Wrapper, RightColumn, Map, Diversity, Ways, Images } from './components/Styled'
import TextBox from '../../components/TextBox'
import Title from '../../components/Title'
//assets
import PhoneImage from '../../../assets/opt-phone.jpg'
import DiversityImage from '../../../assets/diversity.jpg'
import MapTestImage from '../../../assets/mapa.svg'

export default class Culture extends Component {

  render(){
    return (
      <Wrapper>
        <div id="culture" className='pure-g'>
          <div className='pure-u-1'>
            <Title>Cultura</Title>
          </div>
          <div className='pure-u-1'>
            <div className='pure-u-1-2'>
              <Diversity>
                <div>
                  <img src={DiversityImage}/>
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

              {/* <LeftColumn>
                <div className='text-box'>
                  
                </div>
                <div className='cards'>
                  <Card
                    image={DiversityImage}
                    title="Diversidad"
                  />
                  <Card
                    image={PhoneImage}
                    subtitle="Focus target"
                    subtitleFlex="flex-end"
                  />
                  <Card
                    image={PhoneImage}
                    subtitle="Paneles online"
                    subtitleFlex="center"
                  />
                </div>                
              </LeftColumn>               */}
            </div>
            <div className='pure-u-1-2'>
              <RightColumn>
                <Map>
                  <img src={MapTestImage} alt='mapa'/>
                </Map>                
              </RightColumn>
            </div>
          </div>
          <div className='pure-u-1'>
            <div className='pure-u-1-2'>
              <Ways>
                <div>
                  <TextBox
                    titleSize="28px"
                    title="De que manera?"
                    contentSize="16px"
                    content={(
                      <div>
                        Llegamos a conectar digitalmente con las
                        personas a través de dos vías:<br/>
                        <br/>
                        <strong>Via Paneles Online</strong> (contacto via e-mail) para
                        alcanzar masividad en países con más población.<br/>
                        <br/>
                        <strong>Focus Target (Contacto desde Redes Sociales)</strong>
                        para alcanzar targets más específicos, países
                        menos poblados (Trinidad & Tobago, El Salvador,
                        Guatemala, etc) o ciudades pequeñas.
                      </div>
                    )}
                    maxWidth="350px"
                  />
                </div>
              </Ways>
            </div>
            <div className='pure-u-1-2'>
              <Images>
                <div>
                  <img src={PhoneImage} alt='phone'/>
                  <div>Paneles online</div>
                </div>
                <div>
                  <img src={PhoneImage} alt='phone'/>
                  <div>Focus target</div>
                </div>
              </Images>
            </div>
          </div>   
        </div>
      </Wrapper>
    )
  }
}