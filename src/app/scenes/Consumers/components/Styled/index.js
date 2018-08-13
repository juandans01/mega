import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  margin: 30px;
  .title {
    text-align: center;
    font-size: 44px;
    font-family: Poppins;
  }

  .subtitle {
    text-align: center;
    padding: 5px;
    color: ${props => props.theme.greenShade};
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
    width: 220px;
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

  ${bp('md')`
    flex-direction: column;
    align-items: center;    
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