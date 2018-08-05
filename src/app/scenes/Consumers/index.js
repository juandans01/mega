import React, { Component } from 'react'
import { Wrapper, ConsumersWrapper, Row, Picture } from './components/Styled'
// import Consumer from './components/Consumer'
import  TextBox from '../../components/TextBox'

export default class Consumers extends Component {

  render() {
    return (
      <Wrapper>
        <div className='pure-g'>
          <div className='pure-u-1'>
            <div className='title'>Consumidores</div>
            <div className='subtitle'><i>Contactarlos en los lugares donde se expresan</i></div>
          </div>
          <div className='pure-u-1'>
            <ConsumersWrapper>
              <Row>
                <div>
                  <Picture 
                    src="http://via.placeholder.com/150x150"
                  />
                  <TextBox
                    title={(
                      <div>Micro Grupos Focales en<br/>
                      Instagram / Skype</div>
                    )}
                    content="Conecta con Millenials en real time para conversar
                    tópicos más tradicionales (como un focus)"
                  />
                </div>
                <div>
                  <Picture 
                    src="http://via.placeholder.com/150x150"
                  />
                  <TextBox
                    title={(
                      <div>Videos Etnográficos<br/>
                      en Whatsapp</div>
                    )}
                    content="Construye un espacio ágil, dinámico y privado
                    para responder cosas tácticas como en profundidad"
                  />              
                </div>                                
              </Row>
              <Row>
                <div>
                  <Picture 
                    src="http://via.placeholder.com/150x150"
                  />
                  <TextBox
                    title={(
                      <div>Encuestas Online interactivas</div>
                    )}
                    content="Encuestas pensadas y adaptadas para una
                    participación comprometida. Dinámicas,
                    iconográficas y dirigidas a todo tipo de target"
                  />
                </div>
                <div>
                  <Picture 
                    src="http://via.placeholder.com/150x150"
                  />
                  <TextBox
                    title={(
                      <div>Comunidades Online</div>
                    )}
                    content="Promueve el encuentro grupal tipo red social.
                    Para todo tipo exploración, realizar actividades
                    audiovisuales, tareas, co-creación, hábitos, testeos."
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