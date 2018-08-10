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
  ${bp('md')`
    align-items: center;
  `}
`

export const Map = styled.div`
  margin-bottom: 50px;
`

export const Diversity = styled.div`
  display: flex;
  justify-content: flex-end;
  ${bp('md')`
    justify-content: center;
  `}
  align-items: center;
  margin: 0 50px;

  > div {
    width: 350px;
    
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
    width: 260px;  
    > img {      
      width: 260px;
      height: 170px;
    }
    > div {
      border-radius: 1px
      padding: 7px;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 1.2px;
      background-color: #ececec;
      color: ${props => props.theme.blueShade};
      text-transform: uppercase;
      text-align: center;
    }

    > p {
      text-align: center;
    }
  }
`