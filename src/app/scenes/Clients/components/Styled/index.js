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
  height: 330px;
  background-color: ${props => props.theme.greenShade};
  color: white;
  text-align: center;
  padding-top: 75px;

  .title {
    font-size: 35px;
    margin-bottom: 10px;
  }

`

export const SlideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    margin: 10px;
    line-height: 1.1;
    width: 350px;
    text-align: left;
  }

  .speaker {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
      height: 110px;
      width: 110px;
      border-radius: 50%; 
      margin: 10px;
    }

    margin: 10px;
    width: 200px;
  }

  .brand-icon {
    display: flex;
    align-items: center;
    margin: 10px;

    > img {
      width: 150px;
      height: 25px;
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
  font-size: 44px;
`

export const Subtitle = styled.div`
  text-align: center;
  padding: 5px;
  color: ${props => props.theme.greenShade};
  margin-bottom: 20px;
`