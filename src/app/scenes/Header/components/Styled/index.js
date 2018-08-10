import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  z-index: 3;
  position: fixed; /* Set the navbar to fixed position */
  top: 0;
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ececec;
`

export const Title = styled.div`  
  margin-left: 60px;
  > img {
    width: 200px;
    height: 200px;
    margin-top: 8px;
  }

  ${bp('md')`
    margin-left: 10px;
  `}
`

export const Menu = styled.div`
  color: ${props => props.theme.greyShade};
  float: right;
  margin-right: 80px;

  > div {    
    display: inline;
    padding: 5px 10px;
    cursor: pointer;
    position: relative;
    ${bp('md')`
      display: none;
    `}
  }

  ${bp('md')`
    position: absolute;
    margin: 5px 10px;
    right: 0;
    top: 50px;        
    background: white;
    color: ${props => props.theme.greyShade};    

    visibility: hidden;
    opacity: 0;
    transition: opacity 200ms ease, visibility 0ms 200ms;

    &.mobile-visible {
      visibility: visible;
      opacity: 1;
      transition: opacity 200ms ease, visibility 0ms 0ms;
    }

    border-radius: 2px;

    > div { 
      display: block;
      padding: 12px;
      border-bottom: 1px solid #ececec;
    }
  `}
`

export const MobileMenu = styled.div`
  display: inline-block;
  vertical-align: top;
  
  button {
    margin: 0 0 0 220px;
    width: 60px;
    height: 40px;
    background: transparent;
    border-radius: 1px;
    border: none;
    box-sizing: border-box;
    transition: background 300ms ease 0ms;
    outline: unset !important;
    cursor: pointer;

    ${bp('md')`
      margin-left: 30px;
    `}
  }

  svg {
    fill: ${props => props.theme.greyShade};
    width: 40px;
    height: 40px;
  }

  path {
    stroke: ${props => props.theme.greyShade};
    stroke-width: 6;
  }

  ${bp('md', 'min-width')`
    display: none;  
  `}

`