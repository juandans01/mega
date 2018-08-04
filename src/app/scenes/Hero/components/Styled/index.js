import styled from 'styled-components'
import Hero from '../../../../../assets/hero.jpg'

export const Wrapper = styled.div`
  height: 500px; 
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Hero});
  background-size: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > p {
    margin: 100px;
    color: white;
    font-size: 34px;
    font-weight: 600;  
  }
`