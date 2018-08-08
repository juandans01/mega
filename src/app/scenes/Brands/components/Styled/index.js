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
      width: 170px;
      height: 100px;
    }
  }
`