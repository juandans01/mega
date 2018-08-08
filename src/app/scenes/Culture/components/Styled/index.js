import styled from 'styled-components'

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
`

export const Map = styled.div`
  margin-bottom: 30px;
  > img {
    height: 350px;
    width: 300px;
  }
`

export const Diversity = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 50px;

  > div {
    width: 350px;
    display: flex;
    flex-direction: column;
    
    > img {
      padding: 10px;
      height: 220px;
    }
  }
`

export const Ways = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 50px;

  > div {
    width: 350px;
  }
`

export const Images = styled.div`
  > div {
    margin: 20px;
    width: 260px;  
    > img {      
      width: 260px;
      height: 170px;
    }
    > div {
      border-radius: 1px
      padding: 5px;
      background-color: #ececec;
      color: ${props => props.theme.blueShade}
      text-transform: uppercase;
      text-align: center;
    }    
  }
`