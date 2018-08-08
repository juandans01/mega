import React, { Component } from 'react'
import { Wrapper, ConsumersWrapper, Row, Picture } from './components/Styled'
// import Consumer from './components/Consumer'
import  TextBox from '../../components/TextBox'

export default class Consumers extends Component {

  render() {
    return (
      <Wrapper id="consumers">
        <div className='pure-g'>
          <div className='pure-u-1'>
            <div className='title'>Consumidores</div>
            <div className='subtitle'><i>Contactarlos en los lugares donde se expresan</i></div>
          </div>
          <div className='pure-u-1'>
            <ConsumersWrapper>
              <Row>
                <div>
                  <Picture>
                    <img src="http://via.placeholder.com/150x150"/>
                  </Picture>
                  <TextBox
                    title={(
                      <div>Micro Grupos Focales en<br/>
                      Instagram / Skype</div>
                    )}
                    titleAlign="center"
                    separatorAlign="center"
                    contentAlign="center" 
                    content="Conecta con Millenials en real time para conversar
                    tópicos más tradicionales (como un focus)"
                  />
                </div>
                <div>
                  <Picture>
                    <img src="http://via.placeholder.com/150x150"/>
                  </Picture>
                  <TextBox
                    title={(
                      <div>Micro Grupos Focales en<br/>
                      Instagram / Skype</div>
                    )}
                    titleAlign="center"
                    separatorAlign="center"
                    contentAlign="center"
                    content="Conecta con Millenials en real time para conversar
                    tópicos más tradicionales (como un focus)"
                  />
                </div>
                <div>
                  <Picture>
                    <img src="http://via.placeholder.com/150x150"/>
                  </Picture>
                  <TextBox
                    title={(
                      <div>Videos Etnográficos<br/>
                      en Whatsapp</div>
                    )}
                    titleAlign="center"
                    separatorAlign="center"
                    contentAlign="center"
                    content="Construye un espacio ágil, dinámico y privado
                    para responder cosas tácticas como en profundidad"
                  />              
                </div>                                
              </Row>
              <Row>
                <div>
                  <Picture>
                    <img src="http://via.placeholder.com/150x150"/>
                  </Picture>
                  <TextBox
                    title={(
                      <div>Micro Grupos Focales en<br/>
                      Instagram / Skype</div>
                    )}
                    titleAlign="center"
                    separatorAlign="center"
                    contentAlign="center" 
                    content="Conecta con Millenials en real time para conversar
                    tópicos más tradicionales (como un focus)"
                  />
                </div>
                <div>
                  <Picture>
                    <img src="http://via.placeholder.com/150x150"/>
                  </Picture>
                  <TextBox
                    title={(
                      <div>Micro Grupos Focales en<br/>
                      Instagram / Skype</div>
                    )}
                    titleAlign="center"
                    separatorAlign="center"
                    contentAlign="center"
                    content="Conecta con Millenials en real time para conversar
                    tópicos más tradicionales (como un focus)"
                  />
                </div>
                <div>
                  <Picture>
                    <img src="http://via.placeholder.com/150x150"/>
                  </Picture>
                  <TextBox
                    title={(
                      <div>Videos Etnográficos<br/>
                      en Whatsapp</div>
                    )}
                    titleAlign="center"
                    separatorAlign="center"
                    contentAlign="center"
                    content="Construye un espacio ágil, dinámico y privado
                    para responder cosas tácticas como en profundidad"
                  />              
                </div>                                
              </Row>
            </ConsumersWrapper>            
          </div>
        </div>
      </Wrapper>    
    )
  }
}