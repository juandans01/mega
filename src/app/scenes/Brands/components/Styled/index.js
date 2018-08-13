import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 150px;
  background-color: white;
`

export const Slide = styled.div`
  > div {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 130px;
      height: 75px;
    }

    .turner {
      height: 30px;
      width: 120px;
    }

    .lee {
      width: 80px;
      height: 35px;
    }

    .cn {
      width: 110px;
      height: 35px;
    }

    .ypf {
      width: 110px;
    }

    .mc {
      height: 65px;
    }
  }
`