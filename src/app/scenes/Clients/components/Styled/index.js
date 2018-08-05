import styled from 'styled-components'

export const CardsWrapper = styled.div`
  position: relative;
  height: 275px;

  > div {
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    > div {
      margin: 20px;
    }
  }
`

export const Slide = styled.div`
  height: 300px;
  background-color: ${props => props.theme.greenShade};
  color: white;
  text-align: center;
  padding-top: 75px;

  .title {
    font-size: 28px;
  }

  .content {
    margin: 50px 100px;
  }
`

export const Dots = styled.ul`
  text-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0;

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