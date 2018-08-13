import React, { Component } from 'react'
import { Wrapper, Title, Menu, MobileMenu } from './components/Styled'
import { scrollTo } from '../../../helpers/styleHelper'
import Logo from '../../../assets/megaresearch.svg'
import onClickOutside from 'react-onclickoutside'

class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
      navMobileVisible: false
    }
  }

  onMenuIconClick = () => {
    this.setState({
      navMobileVisible: !this.state.navMobileVisible
    })
  }

  handleClickOutside = (evt) => {
    this.setState({
      navMobileVisible: false
    })
  }

  render() {
    return (
      <Wrapper>
        <Title>
          <img src={Logo} alt='logo'/>
        </Title>
        <Menu className={this.state.navMobileVisible ? 'mobile-visible' : null}>
          <div onClick={() => {scrollTo('hero')}}>Inicio</div>
          <div onClick={() => {scrollTo('culture')}}>Qué hacemos</div>
          <div onClick={() => {scrollTo('solutions')}}>Soluciones</div>
          <div onClick={() => {scrollTo('clients')}}>Clientes</div>          
          <div onClick={() => {scrollTo('contact')}}>Contacto</div>                    
        </Menu>
        <MobileMenu onClick={this.onMenuIconClick}>
          <button type='button'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 139 139'>
              <path d='M26.5 46.3h86' />
              <path d='M26.5 92.7h86' />
              <path d='M26.5 69.5h86' />
              <path d='M26.5 69.5h86' />
            </svg>
          </button>
        </MobileMenu>
      </Wrapper>
    )
  }
}

export default onClickOutside(Header)