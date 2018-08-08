import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 30px;

  
  .title {
    text-align: center;
    font-size: 44px;
  }

  .subtitle {
    text-align: center;
    padding: 5px;
    color: ${props => props.theme.greenShade};
    margin-bottom: 20px;
  }
`

export const ConsumersWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  justify-content: center;

  > div {
    margin: 20px;
    width: 350px;
  }
`

export const Picture = styled.div`
  display: flex;
  justify-content: center;

  > img {
    margin: 10px;
    height: 110px;
    width: 110px;
    border-radius: 50%; 
  }
`