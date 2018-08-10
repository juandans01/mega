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

  .title {
    margin: 20px;
    font-size: 40px;
    text-align: center;
    padding: 20px;
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
      width: 150px;
      background-color: ${props => props.theme.greyShade};
      height: 2px;
      margin: 10px
    }

    > img {
      width: 50px;
      height: 50px;
    }
  }

  .countries {
    display: flex;
    justify-content: space-around;
    width: 100%;
    
    > div {
      margin: 30px;

      > p {
        font-weight: 700;
      }
    }

    ${bp('md')`
      flex-direction: column;
      text-align: center;
      
      > div {
        margin: 0;
      }
    `}
  }

  .footer {
    display: flex;
    align-items: center;    
    margin-bottom: 10px;

    > div {
      color: ${props => props.theme.greyShade};
      margin: 20px;
    }    
  }
`