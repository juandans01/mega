import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'
import HeroImage from '../../../../../assets/HeroImage.png'

export const Wrapper = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  
  > video {
    position: absolute;
    height: 600px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: fill;        
    background: rgba(0, 0, 0, 0.50);
  }
  ${bp('md')`
    > video {
      display: none;
    }
  `}

  > div {
    background: rgba(0, 0, 0, 0.50);
    ${bp('md')`
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImage}) no-repeat 50% 50%;
      background-size: 100% 600px;
    `}
    z-index: 2;
    width: 100%;
    height: 600px;
    top: 0;
    left: 0;
    
    display: flex;
    flex-direction:column
    justify-content: center;
    align-items: flex-start;
    font-family: Ubuntu;
    > p {
      text-align: left;
      color: white;
      font-size: 32px;
      margin: 10px;
      margin-left: 100px;
      line-height: 1.2;
      font-weight: 600;    
      ${bp('md')`
        margin-left: 30px;
      `}
    }
  
    > span {
      text-align: left;
      color: white;
      font-size: 28px;
      margin-left: 100px;
      line-height: 1.2;
      font-weight: 400;
  
      ${bp('md')`
        margin-left: 30px;
      `}
    }
  }  
`