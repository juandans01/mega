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
import Brands from './scenes/Brands'
import Contact from './scenes/Contact'
import Footer from './scenes/Footer'

import MexLaunch from './scenes/MexLaunch'

injectGlobal`${global(theme)}` // eslint-disable-line

class App extends Component {
  


  render() {   
    return (      
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          { window.location && (window.location.pathname == "/lanzamientomexico"  || window.location.pathname == "/mega/lanzamientomexico") ? (
            <MexLaunch />
          ) : (
            <div> 
              <Hero />          
              <Culture/>
              <Solutions/>
              <Consumers/>
              <Clients />
              <Brands />
              <Contact />
            </div>            
          )}          
          <Footer />
        </div>
      </ThemeProvider>                      
    );
  }
}

export default App;
