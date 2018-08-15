import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const SliderWrapper = styled.div`
  .title {
    font-size: 37px;    
    padding-top: 50px;
    text-align: center;
    color: white;
    background-color: ${props => props.theme.greenShade};
    font-family: Ubuntu;
  }

  .content{  
    display: flex;
    justify-content: center;
    align-items: center;

    ${bp('ts')`
      flex-direction: column;
    `}
    background-color: ${props => props.theme.greenShade};
    color: white;
  }
`

export const Slide = styled.div`
  height: 300px;
  background: ${props => 
    props.customBackground ? 
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + props.customBackground + ") no-repeat 50% 50% / cover" : 
    props.theme.greenShade};
  color: white;
  text-align: center;
  padding-top: 60px;

  ${bp('md')`
    padding: 0;
    height: 390px;
  `}
  
`

export const SlideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;  
  margin: 15px 30px;

  .logo {
    margin-top: 30px;
    ${bp('ts')`
      margin-top: 10px;
    `}
    
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > img {
      width: 110px;
    }      

    .directv {
      width: 150px;
    }

    .givaudan { 
      width: 140px;
    }
  }

  .text {
    margin: 10px;
    font-size: 15px;
    line-height: 1.4;
    width: 370px;
    text-align: justify;    
    height: 200px;
    max-width: 230px;
  }

  .speaker {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 120px;
    text-align: center;    
    margin: 10px;
    width: 200px;

    > div {
      line-height: 1.3;
      
      > span {
        font-size: 14px;
      }
    }
  }
`

export const FirstSlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${bp('md')`
    margin-top: 40px;
  `}

  .title {    
    font-size: 36px;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 2.3px;
    font-family: Ubuntu;
  }

  .big-text {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-top: 40px;
    line-height: 1.4;
  }

  .image {
    > img {
      
    }
  }
`

export const Dots = styled.ul`
  text-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0;
  margin: 0;

  .active {
    background-color: #323232;
  }
  
  > div {
    display: flex;
    justify-content: center;
    position: absolute;
    top: -50px;

    > li {
      background-color: white;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      list-style-type: none;
      margin: 5px;
      cursor: pointer;      
    }    
  }
`

export const Title = styled.div`
  text-align: center;
  font-size: 48px;
  font-family: Ubuntu;
`

export const Subtitle = styled.div`
  text-align: center;
  padding: 5px;
  color: ${props => props.theme.greenShade};
  line-height: 1.4;
  margin-top: 20px;
  margin-bottom: 30px;
`

export const FirstSliderWrapper = styled.div`
  position: relative;

  .right-arrow {
    position: absolute;
    cursor: pointer;
    right: 20px;
    top: 150px;
    
    img {
      height: 60px;
      width: 60px;
    }
  }

  .left-arrow {
    z-index: 2;
    position: absolute;
    left: 20px;
    top: 150px;
    
    img {
      cursor: pointer;
      height: 60px;
      width: 60px;
    }
  }
`