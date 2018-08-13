import React, { Component } from 'react'
import Slider from 'react-slick'

import { SliderWrapper, Slide, SlideContent, FirstSlideContent, Dots, Subtitle, Title } from './components/Styled'
import DirectTVLogo from '../../../assets/logos/Logo-directv-blanco.svg'
import YPFLogo from '../../../assets/logos/Logo-YPF-blanco.svg'
import GivaudanLogo from '../../../assets/logos/Logo-givaudan-blanco.svg'
import Partner1 from '../../../assets/PARTNER01.png'
import Partner2 from '../../../assets/metodologias02.png'
import Partner3 from '../../../assets/deliveries03.png'

export default class Clients extends Component { 

  constructor(props) {
    super(props)
    this.state = {
      active: '0',
      firstActive: '0'
    }
  }

  // goToSlide = (index) => {
  //   this.setState({
  //     active: '' + index
  //   })
  //   this.slider.slickPause()    
  //   this.slider.slickGoTo(index)
  //   this.slider.slickPlay()
  // }

  goToSlideFirst = (index) => {
    this.setState({
      firstActive: '' + index
    })    
    this.firstSlider.slickPause()
    this.firstSlider.slickGoTo(index)
    this.firstSlider.slickPlay()
  }

  beforeSlideChange = (oldIndex, newIndex) => {    
    this.setState({
      firstActive: '' + newIndex
    })
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
      beforeChange: this.beforeSlideChange
    }
    return (
      <div id='clients' className="pure-g">
        <div className="pure-u-1">
          <Title>Clientes</Title>
          <Subtitle>
            <i>
              Trabajar codo a codo con nuestros clientes es lo que transforma<br/>
              un proyecto mas en un proyecto unico            
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
              customBackground={Partner2}
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
              customBackground={Partner3}
            >
              <FirstSlideContent>                                
                <div className='title'>
                  DELIVERIES
                </div>
                <div className='big-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet enim ut orci porttitor tincidunt.
                </div>
              </FirstSlideContent>
            </Slide>
            <Slide
              customBackground={Partner3}
            >
              <FirstSlideContent>
              <div className='title'>
                  DELIVERIES
                </div>
                <div className='image'>                  
                  <img src="http://via.placeholder.com/300x150" alt='deliveriesimage'/>
                </div>
              </FirstSlideContent>
            </Slide>  
          </Slider>          
          <Dots>
            <div>
              <li className={this.state.firstActive === '0' ? 'active' : ''} onClick={() => {this.goToSlideFirst(0)}}></li>
              <li className={this.state.firstActive === '1' ? 'active' : ''} onClick={() => {this.goToSlideFirst(1)}}></li>
              <li className={this.state.firstActive === '2' ? 'active' : ''} onClick={() => {this.goToSlideFirst(2)}}></li>
              <li className={this.state.firstActive === '3' ? 'active' : ''} onClick={() => {this.goToSlideFirst(3)}}></li>
            </div>
          </Dots>
        </div>



        <div className='pure-u-1'>
          <SliderWrapper>
            <div className='title'>
              La voz de nuestros clientes
            </div>
            <div className='content'>
              <div>              
                <SlideContent>             
                  <div className='logo'>
                    <img src={DirectTVLogo} alt='direct'/>
                  </div>                   
                  <div className='text'>
                    <i>
                      “Además de su dedicación y eficiencia, destaco por sobre todas
                      las cosas <strong>el ingenio que ponen en captar los mejores insights,

                      sus presentaciones con diseño personalizado</strong> y executive 
                      sumaries audiovisuales. Es un placer trabajar con ellos”
                    </i>
                  </div>
                  <div className='speaker'>                    
                    <div>
                      <strong>Victoria Varela</strong><br/>
                      Gerente Regional de Consumer & Market Insights<br/>                  
                    </div>                  
                  </div>
                </SlideContent>    
              </div>
              
              <div>
                <SlideContent>
                  <div className='logo'>
                    <img src={GivaudanLogo} alt='givaudan' />  
                  </div>      
                  <div className='text'>
                    <i>
                    “En menos de un año Mega Research se convirtió en nuestro
                    <strong> principal aliado estratégico para Consumer Insights. </strong>
                    Ofrecen un alto <strong>expertise en manejo de herramientas y técnicas de investigación</strong>, 
                    con un <strong>pensamiento innovador para brindar soluciones.</strong>
                    </i>
                  </div>
                  <div className='speaker'>                    
                    <div>
                      <strong>Sebastián Silva</strong><br/>
                      Latam Consumer Insights Manager<br/>                  
                    </div>                  
                  </div>
                </SlideContent>
              </div>

              <div>
                <SlideContent>             
                  <div className='logo'>
                    <img src={YPFLogo} alt='ypf'/>
                  </div>      
                  <div className='text'>
                    <i>
                    “Mega Research es para nosotros <strong>un partner.
                    Una consultora versátil, flexible</strong> y, sobre todo, que tengan
                    <strong>la capacidad de pensar y diseñar cada proyecto de forma
                     ad-hoc, con seniority y entendiendo el negocio.</strong> Mega cumple con todos estos requisitos”
                    </i>
                  </div>
                  <div className='speaker'>                    
                    <div>
                      <strong>Mariano Menéndez</strong><br/>
                      Gerente Regional de Consumer & Market Insights<br/>                  
                    </div>                  
                  </div>
                </SlideContent>
              </div>
            </div>          
          </SliderWrapper>
        </div>
      </div>
    )
  }
}