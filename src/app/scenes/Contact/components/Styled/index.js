import styled from 'styled-components'
import Image from '../../../../../assets/Contacto.png'

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
    text-align: center;
    max-width: 750px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
  }

  .separator {
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .border {
      width: 150px;
      background-color: black;
      height: 2px;
      margin: 10px
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
  }

  .footer {
    display: flex;
    align-items: center;    
    margin-bottom: 10px;

    > div {
      color: black;
      margin: 20px;
    }    
  }
`