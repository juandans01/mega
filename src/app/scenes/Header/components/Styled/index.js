import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.div`  
  margin-left: 60px;
  > img {
    width: 200px;
    height: 200px;
    margin-top: 8px;
  }
`

export const Menu = styled.div`
  color: ${props => props.theme.greyShade};
  float: right;
  margin-right: 30px;
  > div {
    display: inline;
    padding: 5px;
    cursor: pointer;
    position: relative;

    .solutions {
      position: absolute;
      right: -30px;
      margin: 0;
      padding: 10px;
      display: none;

      > li {        
        list-style-type: none;
        background: white;
        border-bottom: 1px #ececec solid;
        padding: 10px;
      }
    }
    
    .solutions:hover {      
      display: block;      
    }
  }

  #solution:hover {    
    .solutions {
      display: block;
    }
  }
`