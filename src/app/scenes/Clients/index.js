import React, { Component } from 'react'
import Slider from 'react-slick'

import { SliderWrapper, Slide, SlideContent, FirstSlideContent, Dots, Subtitle, Title } from './components/Styled'
import WalmartLogo from '../../../assets/logos/Logo-walmart-blanco.svg'
import YPFLogo from '../../../assets/logos/Logo-YPF-blanco.svg'
import GivaudanLogo from '../../../assets/logos/Logo-givaudan-blanco.svg'
import Partner1 from '../../../assets/PARTNER01.png'

export default class Clients extends Component { 

  constructor(props) {
    super(props)
    this.state = {
      active: '0',
      firstActive: '0'
    }
  }

  goToSlide = (index) => {
    this.setState({
      active: '' + index
    })    
    this.slider.slickGoTo(index)
  }

  goToSlideFirst = (index) => {
    this.setState({
      firstActive: '' + index
    })    
    this.firstSlider.slickGoTo(index)
  }

  render(){
    const settings = {
      arrows: false,
      infinite: true,      
      slidesToShow:  1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 1500,
    }
    return (
      <div id='clients' className="pure-g">
        <div className="pure-u-1">
          <Title>Clientes</Title>
          <Subtitle>
            <i>
              Construimos relaciones de confianza. Vemos en cada proyecto<br/>
              una oportunidad de reforzar esa conexión, sin importar si es grande o pequeño.<br/>
              Transformamos deadlines imposibles en proyectos entregados.
            </i>            
          </Subtitle>
        </div>
        <div className="pure-u-1">
        <Slider ref={slider => (this.firstSlider = slider)} {...settings}>
            <Slide
              customBackground={Partner1}
            >
              <FirstSlideContent>                                
                <div className='title'>
                  Partner Relationship
                </div>
                <div className='big-text'>
                  Equipo de especialistas con el<br/>
                  seniority, flexibilidad, agilidad<br/>
                  y creatividad para liderar cada desafío,<br/>
                  con orientación a negocio
                </div>
              </FirstSlideContent>
            </Slide>
            <Slide
              customBackground={Partner1}
            >
              <FirstSlideContent>                                
                <div className='title'>
                  INNOVACIÓN METODOLÓGICA
                </div>
                <div className='big-text'>
                  A la vanguardia de técnicas de investigación<br/>
                  para obtener un feedback más profundo<br/>
                  del consumidor y sus experiencias.
                </div>
              </FirstSlideContent>
            </Slide>
            <Slide
              customBackground={Partner1}
            >
              <FirstSlideContent>                                
                <div className='title'>
                  DELIVERIES
                </div>
              </FirstSlideContent>
            </Slide>
          </Slider>
          {/* <Dots>
            <div>
              <li className={this.state.firstActive === '0' ? 'active' : ''} onClick={() => {this.goToSlideFirst(0)}}></li>
              <li className={this.state.firstActive === '1' ? 'active' : ''} onClick={() => {this.goToSlideFirst(1)}}></li>
              <li className={this.state.firstActive === '2' ? 'active' : ''} onClick={() => {this.goToSlideFirst(2)}}></li>
            </div>
          </Dots> */}
        </div>



        <div className='pure-u-1'>
          <SliderWrapper>
            <div className='title'>
              La voz de nuestros clientes
            </div>
            <Slider ref={slider => (this.slider = slider)} {...settings}>
              <Slide>              
                <SlideContent>                                
                  <div className='text'>
                    <i>
                      “Además de su dedicación y eficiencia, destaco por sobre todas
                      las cosas <strong>el ingenio que ponen en captar los mejores insights,

                      sus presentaciones con diseño personalizado</strong> y executive 
                      sumaries audiovisuales. Se preocupan mucho por entender la visión y

                      cultura de la empresa <strong>comprendiendo el negocio cómo si fueran
                      parte de esta compañía</strong>. Es un placer trabajar con ellos”
                    </i>
                  </div>
                  <div className='speaker'>
                    <img src={WalmartLogo} alt='walmart'/>
                    <div>
                      <strong>Victoria Varela</strong><br/>
                      Gerente Regional de Consumer & Market Insights<br/>                  
                    </div>                  
                  </div>
                </SlideContent>    
              </Slide>
              <Slide>
                <SlideContent>                   
                  <div className='text'>
                    <i>
                    “Mega Research es para nosotros <strong>un partner</strong>. 
                    Por las características de YPF, requerimos que las consultoras 
                    con las que trabajamos sean <strong>versátiles, flexibles</strong> y, 
                    sobre todo, que tengan la <strong>capacidad de pensar y diseñar cada proyecto de forma ad-hoc</strong>.
                    Esto requiere de <strong>equipos con mucho nivel de seniority</strong>,
                    para comprender la <strong>realidad del negocio, la necesidad de investigación</strong> y por lo 
                    tanto la mejor forma de abordarlo. Mega cumple con todos estos requisitos”
                    </i>
                  </div>
                  <div className='speaker'>
                    <img src={YPFLogo} alt='ypf'/>
                    <div>
                      <strong>Mariano Menéndez</strong><br/>
                      Gerente Regional de Consumer & Market Insights<br/>                  
                    </div>                  
                  </div>
                </SlideContent>
              </Slide>
              <Slide>
                <SlideContent>                   
                  <div className='text'>
                    <i>
                    “En menos de un año Mega Research se convirtió en nuestro
                    <strong>principal aliado estratégico para Consumer Insights.</strong>
                    Ofrecen un alto <strong>expertise en manejo de herramientas y técnicas de investigación</strong>, 
                    con un <strong>pensamiento innovador para brindar soluciones al negocio</strong> a 
                    una muy <strong>interesante ecuación precio-calidad en cualquier país de LATAM.</strong> 
                    Además brindan un <strong>excelente servicio al cliente</strong>, buscando superar continuamente nuestras expectativas..” 
                    </i>
                  </div>
                  <div className='speaker'>
                    <img src={GivaudanLogo} alt='givaudan' />
                    <div>
                      <strong>Sebastián Silva</strong><br/>
                      Latam Consumer Insights Manager<br/>                  
                    </div>                  
                  </div>
                </SlideContent>
              </Slide>
            </Slider>
          
            {/* <Dots>
              <div>
                <li className={this.state.active === '0' ? 'active' : ''} onClick={() => {this.goToSlide(0)}}></li>
                <li className={this.state.active === '1' ? 'active' : ''} onClick={() => {this.goToSlide(1)}}></li>
                <li className={this.state.active === '2' ? 'active' : ''} onClick={() => {this.goToSlide(2)}}></li>
              </div>
            </Dots> */}
          </SliderWrapper>
        </div>
      </div>
    )
  }
}