import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const SliderWrapper = styled.div`
  .title {
    font-size: 35px;    
    padding-top: 50px;
    text-align: center;
    color: white;
    background-color: ${props => props.theme.greenShade};
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

  ${bp('md')`
    flex-direction: column;
  `}
  .text {
    margin: 10px;
    font-size: 15px;
    line-height: 1.4;
    width: 350px;
    text-align: center;
  }

  .speaker {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {      
      width: 190px;            
    }

    margin: 10px;
    width: 200px;
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
    margin: 20px;    
    font-size: 34px;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 2.3px;
  }

  .big-text {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
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
  font-size: 44px;
`

export const Subtitle = styled.div`
  text-align: center;
  padding: 5px;
  color: ${props => props.theme.greenShade};
  margin-top: 20px;
  margin-bottom: 30px;
`