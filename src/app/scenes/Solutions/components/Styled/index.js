import styled from 'styled-components'
import Image from '../../../../../assets/soluciones.png'

export const Wrapper = styled.div`
  height: 360px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image}) no-repeat 50% 50% / cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.div`
  font-size: 55px;
  font-weight: 900;
  color: white;
  text-align: center;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.div`
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  padding: 7px 10px;
  margin: 35px 10px;
  background-color: #ececec;
  color: ${props => props.theme.blueShade};
`