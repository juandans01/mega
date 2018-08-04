import React, { Component } from 'react'
import { Wrapper } from './components/Styled'
import TextBox from '../../components/TextBox'
import Card from '../../components/Card'
import Title from '../../components/Title'
//assets
import PhoneImage from '../../../assets/opt-phone.jpg'
import DiversityImage from '../../../assets/diversity.jpg'


export default class Culture extends Component {

  render(){
    return (
      <Wrapper>
        <div className='pure-g'>
          <div className='pure-u-1'>
            <Title>Cultura</Title>
          </div>
          <div className='pure-u-1'>
            <div className='pure-u-1-2'>
              <TextBox
                title="Conectar en la diversidad"
                content="Realizamos investigaciones en todo LATAM
                sin perder de vista las particularidades de
                cada mercado: porque cada país, cada ciudad,
                cada consumidor tiene distintas formas de
                vincularse con las marcas."
                maxWidth="250px"
              />
              <Card
                image={DiversityImage}
                title="Diversidad"
              />
              <Card
                image={PhoneImage}
                subtitle="Focus target"
                subtitleFlex="flex-end"
              />
            </div>
            <div className='pure-u-1-2'>
            <TextBox
                title="De que manera?"
                content="Llegamos a conectar digitalmente con las
                personas a través de dos vías:
                
                Via Paneles Online (contacto via e-mail) para
                alcanzar masividad en países con más población.
                
                Focus Target (Contacto desde Redes Sociales)
                para alcanzar targets más específicos, países
                menos poblados (Trinidad & Tobago, El Salvador,
                Guatemala, etc) o ciudades pequeñas."
                maxWidth="250px"
              />
            </div>
          </div>          
        </div>
      </Wrapper>
    )
  }
}