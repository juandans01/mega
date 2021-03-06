import styled from 'styled-components'
import Image from '../../../../../assets/Contacto.png'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  background: url(${Image}) no-repeat 50% 50% / cover;
  color: white;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;

  ${bp('md')`      
    padding-top: 20px;
  `}
  .title {
    margin: 20px;
    font-size: 44px;
    text-align: center;
    padding: 20px;
    font-family: Ubuntu;
    ${bp('md')`
      font-size: 40px;
      padding: 10px;
    `}
  }

  .content {
    display: flex;
    justify-content: center;
        
    > div {
      text-align: center;
      max-width: 750px;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.2;
    }
  }

  .separator {
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .border {
      width: 300px;
      background-color: ${props => props.theme.greyShade};
      height: 1px;
      margin: 10px

      ${bp('md')`
        height: 2px;
        width: 100px;
      `}
    }

    > img {
      width: 50px;
      height: 50px;
    }
  }

  .countries {
    display: flex;
    justify-content: center;
    width: 100%;
    
    > div {
      margin: 30px;
      font-size: 16px;

      > p {
        font-weight: 700;
      }

      > span {
        line-height: 1.5;
      }

      .text-separator {
        padding: 3px 0;
      }
    }

    ${bp('md')`
      flex-direction: column;
      text-align: center;
      
      > div {
        padding: 15px;
        margin: 0;
      }
    `}

    padding-bottom: 60px;
  }

`