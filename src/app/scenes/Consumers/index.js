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

  // componentDidMount(){
  //   let x = window.matchMedia("(max-width: 767px)")
  //   this.textboxQuery(x) // Call listener function at run time
  //   x.addListener(this.textboxQuery) // Attach listener function on state changes    
  // }

  // textboxQuery = (x) => {
  //   if (x.matches) {
  //     if (this.state.titleAlign !== "left") {
  //       this.setState({
  //         titleAlign: "left",
  //         flexAlign: "flex-start"
  //       })
  //     }      
  //   } else {
  //     if (this.state.titleAlign !== "center") {
  //       this.setState({
  //         titleAlign: "center",
  //         flexAlign: "center"
  //       })
  //     }
  //   }
  // } 

  render() {
    return (
      <Wrapper id="consumers">
        <div className='pure-g'>
          <div className='pure-u-1'>
            <div className='title'>Consumidores</div>
            <div className='subtitle'><i>Conectamos con los consumidores en los lugares donde se expresan.<br/>
Obteniendo un feedback que favorece la aparición de insights.</i></div>
          </div>
          <div className='pure-u-1'>
            <ConsumersWrapper>
              <Row>
                <div className="pure-u-1-3 pure-u-md-1">
                  <Consumer>
                    <Picture>
                      <img src={Consumer1} alt='consumer1'/>
                    </Picture>
                    <div className='textbox'>
                      <TextBox
                        title={(
                          <div>Micro Grupos Focales en<br/>
                          Instagram / Skype</div>
                        )}
                        titleAlign={this.state.titleAlign}
                        separatorAlign={this.state.flexAlign}
                        contentAlign={this.state.titleAlign}
                        content={(
                          <div>
                            Conecta con Millenials en <i>real time</i> para conversar
                            tópicos en su entorno natural .
                          </div>
                        )}
                      />
                    </div>                    
                  </Consumer>                  
                </div>
                <div className="pure-u-1-3 pure-u-md-1">
                  <Consumer>
                    <Picture>
                      <img src={Consumer2} alt='consumer2'/>
                    </Picture>
                    <div className='textbox'>
                      <TextBox
                        title={(
                          <div>Videos Etnográficos<br/>
                          en Whatsapp</div>
                        )}
                        titleAlign={this.state.titleAlign}
                        separatorAlign={this.state.flexAlign}
                        contentAlign={this.state.titleAlign}
                        content="Construye un espacio ágil, dinámico
                        y privado para responder consignas
                        tácticas."
                      />
                    </div>                    
                  </Consumer>
                </div>
                <div className="pure-u-1-3 pure-u-md-1">
                  <Consumer>
                    <Picture>
                      <img src={Consumer3} alt='consumer3'/>
                    </Picture>
                    <div className='textbox'>
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
                        iconográficas, multitarget y mobile friendly."
                      />
                    </div>                    
                  </Consumer>
                </div>                                
              </Row>
              <Row>
                <div className="pure-u-1-3 pure-u-md-1">
                  <Consumer>
                    <Picture>
                      <img src={Consumer4} alt='consumer4'/>
                    </Picture>
                    <div className='textbox'>
                      <TextBox
                        title={(
                          <div>Comunidades Online</div>
                        )}
                        titleAlign={this.state.titleAlign}
                        separatorAlign={this.state.flexAlign}
                        contentAlign={this.state.titleAlign}
                        content="Un espacio digital especialmente diseñado para que los consumidores
                        interactuen, compartan ideas, valores y opiniones. Ideal para testeos, diarios de consumo
                        y brand positioning."
                      />
                    </div>                    
                  </Consumer>                  
                </div>
                <div className="pure-u-1-3 pure-u-md-1">
                  <Consumer>
                    <Picture>
                      <img src={Consumer5} alt='consumer5'/>
                    </Picture>
                    <div className='textbox'>
                      <TextBox
                        title={(
                          <div>Social Listening</div>
                        )}
                        titleAlign={this.state.titleAlign}
                        separatorAlign={this.state.flexAlign}
                        contentAlign={this.state.titleAlign}
                        content="Escucha a los consumidores mediante una metodología única de análisis de 
                        menciones en redes sociales; combinando IA y thick data para captar insights."
                      />
                    </div>
                  </Consumer>
                </div>
                <div className="pure-u-1-3 pure-u-md-1">
                  <Consumer>
                    <Picture>
                      <img src={Consumer3} alt='consumer3'/>
                    </Picture>
                    <div className='textbox'>
                      <TextBox
                        title={(
                          <div>Etnografías<br/> audiovisuales</div>
                        )}
                        titleAlign={this.state.titleAlign}
                        separatorAlign={this.state.flexAlign}
                        contentAlign={this.state.titleAlign}
                        content="Antropología social al servicio de la investigacion de mercados:
                        ingresa a los hogares, acompaña sus compras, entiende sus razones más profundas y comparte experiencias."
                      />
                    </div>                    
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