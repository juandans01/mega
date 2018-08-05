import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { theme } from '../helpers/theme'
import { global } from '../helpers/styleHelper'
import Header from './scenes/Header'
import Hero from './scenes/Hero'
import Culture from './scenes/Culture'
import Solutions from './scenes/Solutions'
import Clients from './scenes/Clients'
import Consumers from './scenes/Consumers'
import Contact from './scenes/Contact'

injectGlobal`${global(theme)}` // eslint-disable-line

class App extends Component {
  
  render() {   
    return (      
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <Hero />          
          <Culture />
          <Solutions />
          <Consumers />
          <Clients />
          <Contact />
        </div>
      </ThemeProvider>                      
    );
  }
}

export default App;
