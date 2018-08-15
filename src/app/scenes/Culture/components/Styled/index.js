import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
`

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .text-box {    
    align-self: center;
  }

  .cards {
    height: 550px;

    > div:nth-child(1) {
      position: absolute;
      right: 40px;
    }

    > div:nth-child(2) {
      position:absolute;
      left: -40px;
      top: 280px;
    }

    > div:nth-child(3) {
      position:absolute;
      right: 50px;
      bottom: 30px;
    }
  }
  .diversity {
    position: absolute;
  }
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${bp('ts')`
    align-items: center;
  `}
`

export const Map = styled.div`
  margin-bottom: 50px;

  > img {
    width: 500px;
    height: 309px;

    ${bp('ts')`
      width: 400px;
      height: 225px;
    `}
  }
`

export const Diversity = styled.div`
  display: flex;
  justify-content: center;
  ${bp('ts')`
    justify-content: center;
  `}
  align-items: center;
  margin: 50px;

  > div {
    width: 362px;
    
    > img {
      padding: 10px;
      height: 220px;      
    }
  }
`

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;  

  ${bp('md', 'min-width')`
      .left {
        align-self: flex-end;
      }
      .right {
        align-self: flex-start;
      }    
  `}
  > div {    
    margin: 20px;
    width: 350px;  
    > img {      
      width: 350px;
      height: 197px;
    }
    > div {
      border-radius: 1px
      padding: 7px;
      font-size: 28px;
      font-weight: 500;      
      color: ${props => props.theme.greyShade};      
      text-align: center;
      margin-top: 15px;
    }

    > p {
      text-align: center;
      line-height: 1.4;
    }
  }
`