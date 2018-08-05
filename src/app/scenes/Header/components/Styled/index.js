import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;  
  color: ${props => props.theme.greenShade};
  margin-left: 60px;
`

export const Menu = styled.div`
  color: ${props => props.theme.greyShade};
  float: right;
  margin-right: 30px;
  > div {
    display: inline;
    padding: 5px;
  }
`