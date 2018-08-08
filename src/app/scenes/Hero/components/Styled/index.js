import styled from 'styled-components'
import Hero from '../../../../../assets/hero.png'

export const Wrapper = styled.div`
  height: 500px; 
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Hero});
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    text-align: center;
    color: white;
    font-size: 34px;
    font-weight: 600;
  }
`