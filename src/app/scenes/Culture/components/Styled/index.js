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
  height: 350px;
  width: 300px;
  background-color: #ececec;
  margin-bottom: 30px;
`