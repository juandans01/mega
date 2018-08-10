import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

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

export const Consumer = styled.div`
  ${bp('md')`
    display:  flex;
  `}
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  > div {
    margin: 20px;
    width: 350px;
  }


  ${bp('md')`
    flex-direction: column;
    > div {
      width: 100%;
    }
  `}
`

export const Picture = styled.div`
  display: flex;
  justify-content: center;
  > img {
    margin: 10px;
    height: 113px;
    width: 200px;    
  }
`