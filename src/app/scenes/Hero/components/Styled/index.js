import styled from 'styled-components'
import Hero from '../../../../../assets/header.png'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  height: 500px; 
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Hero});
  background-size: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: Poppins;

  > p {
    text-align: left;
    color: white;
    font-size: 32px;
    margin-left: 100px;
    line-height: 1.2;
    font-weight: 600;

    ${bp('md')`
      margin-left: 30px;
    `}
  }
`