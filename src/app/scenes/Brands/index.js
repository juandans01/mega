import React, { Component } from 'react'
import { Wrapper, Slide } from './components/Styled'
import Slider from 'react-slick'

import DirectTVLogo from '../../../assets/logos/Logo-directv.svg'
import GivaudanLogo from '../../../assets/logos/Logo-givaudan.svg'

export default class Brands extends Component {

  render() {
    const settings = {
      arrows: false,
      infinite: true,
      slidesToShow:  4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1500,
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
              <img src={GivaudanLogo} alt='givaudan'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img src={DirectTVLogo} alt='directv'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img src={GivaudanLogo} alt='givaudan'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img src={DirectTVLogo} alt='directv'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img src={GivaudanLogo} alt='givaudan'/>
            </div>            
          </Slide>
          <Slide>
            <div>
              <img src={DirectTVLogo} alt='directv'/>
            </div>            
          </Slide>
        </Slider>
      </Wrapper>
    )
  }
}