import React, { Component } from 'react'
import { Wrapper, Title, Menu } from './components/Styled'
import { scrollTo } from '../../../helpers/styleHelper'
import Logo from '../../../assets/megaresearch.svg'

export default class Header extends Component {

  render() {
    return (
      <Wrapper>
        <Title>
          <img src={Logo}/>
        </Title>
        <Menu>
          <div onClick={() => {scrollTo('hero')}}>Inicio</div>
          <div onClick={() => {scrollTo('culture')}}>Cultura</div>
          <div id="solution">
            <span onClick={() => {scrollTo('solutions')}}>Soluciones</span>
            <ul className='solutions'>
              <li onClick={() => {scrollTo('consumers')}}>Consumidores</li>
              <li onClick={() => {scrollTo('clients')}}>Clientes</li>
            </ul>
          </div>
          <div onClick={() => {scrollTo('brands')}}>Confian en MEGA</div>
          <div onClick={() => {scrollTo('contact')}}>Contacto</div>                    
        </Menu>
      </Wrapper>
    )
  }
}