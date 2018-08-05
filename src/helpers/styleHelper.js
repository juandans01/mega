import { css } from 'styled-components'
import { normalize } from 'polished'
import { fadeInKeyframe } from './keyframes'
import PureCSS from './vendor/PureCSS'

export function fadeIn () {
  return css`
    opacity: 0.5;
    animation: forwards ${fadeInKeyframe} 400ms ease-in;
  `
}

export const breakpoints = {
  'ts': 1023,
  'md': 767,
  'sm': 540,
  'xs': 375
}

export const bp = function (id, type = 'max-width', delta = 0) {
  if (!breakpoints[id]) {
    console.warn(`Breakpoint ${id} do not exists.`)
    return () => null
  }

  return (...args) => css`
    @media (${type}: ${breakpoints[id] + delta}px) {
      ${css(...args)}
    }
  `
}

// ::selection {
//   color: #fff;
//   background: ${theme.primaryColor};
// }
export const global = (theme) => css`
  ${normalize()}
  ${PureCSS.grid()}
  ${PureCSS.gridResponsive(breakpoints)}

  @font-face {
    font-family: 'Proxima-Nova';
    font-style: normal;
    font-weight: 400;
    src:
      url(./fonts/Proxima-Nova-Regular.otf) format('opentype')      
  }


  @font-face {
    font-family: 'Proxima-Nova';
    font-style: italic;
    font-weight: normal;
    src:      
      url(./fonts/Proxima-Nova-Regular-Italic.otf) format('opentype')
  }

  
  html {
    font: 16px/1 'Proxima-Nova', sans-serif;
    color: ${theme.greyShade};
    background: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .pure-g [class*="pure-u"] {
    font: 16px/1 'Proxima-Nova', sans-serif;
  }

  strong {
    font-weight: 700;
  }
` 