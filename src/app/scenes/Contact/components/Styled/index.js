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
    font-family: Ubuntu;
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

      > p {
        font-weight: 700;
      }

      > span {
        line-height: 1.5;
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
  }

  .footer {
    height: 300px;
    ${bp('md')`
      height: 470px;
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
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;        

        ${bp('md')`
          padding: 10px 50px;          
        `}
        .social {
          margin: 30px 10px;
          a {
            margin: 20px 20px 0 0;
          }
        }
      }

      .list {
        padding: 0 180px;        
        display: flex;
        flex-direction: column;
        justify-content: center;

        ul {
          margin-top: 50px;
          li {
            cursor: pointer;
            padding: 10px;
          }
        }

        ${bp('md')`
          padding: 0 40px;

          ul {
            margin: 0;
          }
        `}
      }
    }

    .lower {      
      display: flex;
      justify-content: space-between;
      padding: 0 50px;
      font-size: 14px;

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
          width: 90px;
        }
      }

      ${bp('md')`
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        > div {
          margin: 10px;
        }
      `}
    }
  }
`