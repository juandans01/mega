import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 70px;
  background-color: white;
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;  
  display: inline-block;
  color: ${props => props.theme.greenShade};
  margin: 20px;
`

export const Menu = styled.div`
  color: ${props => props.theme.greyShade};
  display: inline-block;
  float: right;
  margin: 10px;
  > div {
    display: inline;
    padding: 5px;
  }
`