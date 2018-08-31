import styled from 'styled-components'
import { bp } from '../../../../helpers/styleHelper'

export const Wrapper = styled.div`

.contact-form {
  height: 400px;
  background: #F6F6F6;
  color: ${props => props.theme.greyShade};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .contact-form-title {
    padding: 20px;
  }

  .contact-form-body {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      display: flex;
      
      justify-content: space-between;
      ${bp('md')`
        flex-direction: column;
      `}
    }
  }

  .contact-form-input {      
    border: 1px solid #D0D0D0;
    margin: 15px;
    padding: 10px;
  }

  .contact-form-message {      
    padding: 7px;
    height: 100px;
    width: 460px;      
    ${bp('md')`
      width: 80%;
    `}
    border: 1px solid #D0D0D0;
  }

  .contact-form-button {
    border: none;
    height: 35px;
    width: 90px;
    color: white;
    background-color: #00CAB8;
    padding: 10px 20px;
    margin-top: 10px;
    font-weight: 600
  }
}

.footer {
  height: 150px;
  ${bp('md')`
    height: 180px;
  `}
  background: ${props => props.theme.greyShade};
  color: white;    

  .upper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    ${bp('md')`
      flex-direction: column;
      align-items: flex-start;
    `}

    .logo {        
      display: flex;        
      justify-content: flex-start;        
      margin: 20px;
      
      ${bp('md')`
        margin: 0;          
        width: 100%;
        padding: 30px 0;
        justify-content: center;          
      `}
      > img {
        width: 185px;
        height: 40px;
      }

      .social {
        margin-left: 20px;
        display: flex;
        align-items: center
        > a {            
          margin: 0 10px;
          > img {
            height: 30px;
          }
        }
      }
    }
  }

  .lower {      
    display: flex;
    justify-content: space-between;
    padding: 30px 30px 20px 30px;
    font-size: 9px;

    .copyright {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .mercurias {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      img {
        width: 70px;
      }
    }

    ${bp('md')`
      flex-direction: column;
      align-items: center;
      padding: 0;
      justify-content: flex-start;
      > div {
        margin: 10px;
      }
    `}
  }
}
`