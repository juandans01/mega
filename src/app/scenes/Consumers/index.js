import React, { Component } from 'react'
import { Wrapper, ConsumersWrapper, Consumer, Row, Picture } from './components/Styled'
import  TextBox from '../../components/TextBox'

import Consumer1 from '../.././../assets/consumers/Consumidores-01.png'
import Consumer2 from '../.././../assets/consumers/Consumidores02.png'
import Consumer3 from '../.././../assets/consumers/Consumidores-03.png'
import Consumer4 from '../.././../assets/consumers/Consumidores-04.png'
import Consumer5 from '../.././../assets/consumers/Consumidores-05.png'

export default class Consumers extends Component {

  constructor(props){
    super(props)

    this.state = {
      titleAlign: "center",
      flexAlign: "center"
    }
  }

  componentDidMount(){
    let x = window.matchMedia("(max-width: 767px)")
    this.textboxQuery(x) // Call listener function at run time
    x.addListener(this.textboxQuery) // Attach listener function on state changes    
  }

  textboxQuery = (x) => {
    if (x.matches) {
      if (this.state.titleAlign !== "left") {
        this.setState({
          titleAlign: "left",
          flexAlign: "flex-start"
        })
      }      
    } else {
      if (this.state.titleAlign !== "center") {
        this.setState({
          titleAlign: "center",
          flexAlign: "center"
        })
      }
    }
  } 

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
                <div className="pure-u-1-3 pure-u-md-1">
                  <Consumer>
                    <Picture>
                      <img src={Consumer1} alt='consumer1'/>
                    </Picture>
                    <TextBox
                      title={(
                        <div>Micro Grupos Focales en<br/>
                        Instagram / Skype</div>
                      )}
                      titleAlign={this.state.titleAlign}
                      separatorAlign={this.state.flexAlign}
                      contentAlign={this.state.titleAlign}
                      content="Conecta con Millenials en real time para conversar
                      tópicos más tradicionales (como un focus)"
                    />
                  </Consumer>                  
                </div>
                <div className="pure-u-1-3 pure-u-md-1">
                  <Consumer>
                    <Picture>
                      <img src={Consumer2} alt='consumer2'/>
                    </Picture>
                    <TextBox
                      title={(
                        <div>Videos Etnográficos<br/>
                        en Whatsapp</div>
                      )}
                      titleAlign={this.state.titleAlign}
                      separatorAlign={this.state.flexAlign}
                      contentAlign={this.state.titleAlign}
                      content="Construye un espacio ágil, dinámico
                      y privado para responder cosas
                      tácticas como en profundidad"
                    />
                  </Consumer>
                </div>
                <div className="pure-u-1-3 pure-u-md-1">
                  <Consumer>
                    <Picture>
                      <img src={Consumer3} alt='consumer3'/>
                    </Picture>
                    <TextBox
                      title={(
                        <div>Encuestas Online<br/>
                        Interactivas</div>
                      )}
                      titleAlign={this.state.titleAlign}
                      separatorAlign={this.state.flexAlign}
                      contentAlign={this.state.titleAlign}
                      content="Encuestas pensadas y adaptadas para una
                      participación comprometida. Dinámicas,
                      iconográficas y dirigidas a todo tipo de target"
                    />
                  </Consumer>
                </div>                                
              </Row>
              <Row>
                <div className="pure-u-1-3 pure-u-md-1">
                  <Consumer>
                    <Picture>
                      <img src={Consumer4} alt='consumer4'/>
                    </Picture>
                    <TextBox
                      title={(
                        <div>Comunidades Online</div>
                      )}
                      titleAlign={this.state.titleAlign}
                      separatorAlign={this.state.flexAlign}
                      contentAlign={this.state.titleAlign}
                      content="Promueve el encuentro grupal tipo
                      red social. Para todo tipo exploración, realizar
                      actividades audiovisuales, tareas, co-creación,
                      hábitos, testeos."
                    />
                  </Consumer>                  
                </div>
                <div className="pure-u-1-3 pure-u-md-1">
                  <Consumer>
                    <Picture>
                      <img src={Consumer5} alt='consumer5'/>
                    </Picture>
                    <TextBox
                      title={(
                        <div>Social Listening</div>
                      )}
                      titleAlign={this.state.titleAlign}
                      separatorAlign={this.state.flexAlign}
                      contentAlign={this.state.titleAlign}
                      content="Metodología única de abordaje de las
                      menciones espontáneas de redes sociales,
                      con altos niveles de exactitud, combinado
                      con un análisis especial de thick data para
                      explorar insights."
                    />
                  </Consumer>
                </div>
                <div className="pure-u-1-3 pure-u-md-1">
                  <Consumer>
                    <Picture>
                      <img src={Consumer3} alt='consumer3'/>
                    </Picture>
                    <TextBox
                      title={(
                        <div>Informes Documentales</div>
                      )}
                      titleAlign={this.state.titleAlign}
                      separatorAlign={this.state.flexAlign}
                      contentAlign={this.state.titleAlign}
                      content="Promueve el encuentro grupal tipo
                      red social. Para todo tipo exploración, realizar
                      actividades audiovisuales, tareas, co-creación,                      
                      hábitos, testeos."
                    />
                  </Consumer>
                </div>                                
              </Row>
            </ConsumersWrapper>            
          </div>
        </div>
      </Wrapper>    
    )
  }
}