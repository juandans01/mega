import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  margin-top: 70px;
  background: white;
  
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  padding-top: 100px;
  width: 640px;

  ${bp('md')`
    width: 320px;    
  `}
  .image {
    > img {      
      width: 640px;
      height: 360px;

      ${bp('md')`
        width: 320px;
        height: 180px;
      `}
    }
  }

  .text {
    text-align: justify;
    font-size: 16px;
    line-height: 1.5;
  }

  .title {    
    color: ${props => props.theme.greyShade};
    font-size: 48px;
    font-family: Ubuntu;
  }
`