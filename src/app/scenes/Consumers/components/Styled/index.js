import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  margin: 30px;
  .title {
    text-align: center;
    font-size: 48px;
    ${bp('md')`
      font-size: 44px;
    `}
    font-family: Ubuntu;
  }

  .subtitle {
    text-align: center;
    padding: 5px;
    color: ${props => props.theme.greenShade};
    line-height: 1.4;
    margin: 20px 0;
  }
`

export const ConsumersWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Consumer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .textbox {
    width: 350px;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  > div {
    margin: 20px;
    width: 350px;
  }

  ${bp('ts')`
    flex-direction: column;
    align-items: center;    
  `}
`

export const Picture = styled.div`
  display: flex;
  justify-content: center;
  > img {
    margin: 10px;
    height: 197px;
    width: 350px;    
  }
`