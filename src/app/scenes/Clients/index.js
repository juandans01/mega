import React, { Component } from 'react'

import Card from '../../components/Card'
import Title from '../../components/Title'
import Slider from 'react-slick'

import { CardsWrapper, Slide, Dots } from './components/Styled'
import CardImage from '../../../assets/pcgirl.jpg'

export default class Clients extends Component { 

  constructor(props) {
    super(props)
    this.state = {
      active: '0'
    }
  }

  goToSlide = (index) => {
    this.setState({
      active: '' + index
    })
    console.log('here with ' + index)
    this.slider.slickGoTo(index)
  }

  render(){
    const settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="pure-g">
        <div className="pure-u-1">
          <Title>Clientes</Title>
        </div>
        <div className="pure-u-1">
          <CardsWrapper>
            <div>
              <Card
                image={CardImage}
                subtitle="Client service"
                content="Equipo de especialistas con el
                seniority, flexibilidad y creatividad
                para liderar cada desafío, con
                orientación a negocio"
              />
              <Card
                image={CardImage}
                subtitle="Client service"
                content="Equipo de especialistas con el
                seniority, flexibilidad y creatividad
                para liderar cada desafío, con
                orientación a negocio"
              />
              <Card
                image={CardImage}
                subtitle="Client service"
                content="Equipo de especialistas con el
                seniority, flexibilidad y creatividad
                para liderar cada desafío, con
                orientación a negocio"
              />
            </div>            
          </CardsWrapper> 
        </div>
        <div className='pure-u-1'>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            <Slide>
              <div className='title'>
                La voz de nuestros clientes
              </div>
              <div className='content'>
                “Además de su dedicación y eficiencia, destaco por sobre todas
                las cosas el ingenio que ponen en captar los mejores insights,

                sus presentaciones con diseño personalizado y executive suma-
                ries audiovisuales. Se preocupan mucho por entender la visión y

                cultura de la empresa comprendiendo el negocio cómo si fueran
                parte de esta compañía. Es un placer trabajar con ellos”
              </div>
              <div className='footer'>
                Victoria Varela<br/>
                Gerente Regional de Consumer & Market Insights<br/>
                DIRECTV SKY Latin America<br/>
              </div>
            </Slide>
            <Slide>Second Slide</Slide>
            <Slide>Third Slide</Slide>
          </Slider>
          <Dots>
            <div>
              <li className={this.state.active === '0' ? 'active' : ''} onClick={() => {this.goToSlide(0)}}></li>
              <li className={this.state.active === '1' ? 'active' : ''} onClick={() => {this.goToSlide(1)}}></li>
              <li className={this.state.active === '2' ? 'active' : ''} onClick={() => {this.goToSlide(2)}}></li>
            </div>
          </Dots>
        </div>
      </div>
    )
  }
}