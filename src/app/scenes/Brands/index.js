import React, { Component } from 'react'
import { Wrapper, Slide } from './components/Styled'
import Slider from 'react-slick'

import DirectTVLogo from '../../../assets/logos/Logo-directv.svg'
import GivaudanLogo from '../../../assets/logos/Logo-givaudan.svg'

import AkzLogo from '../../../assets/logos/Logo-akzonobel.svg'
import CNLogo from '../../../assets/logos/Logo-Cartoon_Network.svg'
import DafitiLogo from '../../../assets/logos/Logo-dafiti.svg'
import GCLogo from '../../../assets/logos/Logo-grupo-cepas.svg'
import LeeLogo from '../../../assets/logos/Logo-Lee.svg'
import WalmartLogo from '../../../assets/logos/Logo-walmart.svg'
import WranglerLogo from '../../../assets/logos/Logo-Wrangler.svg'
import YPFLogo from '../../../assets/logos/Logo-YPF.svg'
import VFLogo from '../../../assets/logos/Vf-corp-logo.svg'

import TurnerLogo from '../../../assets/logos/turner.png'
import MCLogo from '../../../assets/logos/mac.png'
import MakroLogo from '../../../assets/logos/makro.png'
import FoxLogo from '../../../assets/logos/fox.png'
import FiberLogo from '../../../assets/logos/fibercorp.png'
import GanciaLogo from '../../../assets/logos/gancia.png'


export default class Brands extends Component {

  render() {
    const settings = {
      arrows: false,
      infinite: true,
      slidesToShow:  6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,            
          }
        }
      ]
    }    
    return (
      <Wrapper id='brands'>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <Slide>
            <div>
              <img src={DirectTVLogo} alt='directv'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img className='fiber' src={FiberLogo} alt='fibercorp'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img className='gancia' src={GanciaLogo} alt='gancia'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img src={GivaudanLogo} alt='givaudan'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img className='akz' src={AkzLogo} alt='akz'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img className='cn' src={CNLogo} alt='cn'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img src={DafitiLogo} alt='dafiti'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img className='fox' src={FoxLogo} alt='fox'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img src={GCLogo} alt='gc'/>
            </div>            
          </Slide>

          <Slide>
            <div>
              <img className='lee' src={LeeLogo} alt='lee'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img className='turner' src={TurnerLogo} alt='turner'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img src={WalmartLogo} alt='walmart'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img src={WranglerLogo} alt='wrangler'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img className='ypf' src={YPFLogo} alt='ypf'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img className="makro" src={MakroLogo} alt='makro'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img className='mc' src={MCLogo} alt='mc'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img src={VFLogo} alt='vf'/>
            </div>            
          </Slide>
        </Slider>
      </Wrapper>
    )
  }
}