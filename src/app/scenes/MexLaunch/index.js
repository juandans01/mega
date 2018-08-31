import React, { Component } from 'react'
import { Wrapper, Content } from './components/Styled'
import Image from '../../../assets/mexico.jpg'

export default class MexLaunch extends Component {


  render(){
    return (
      <div className='pure-g'>
        <div className='pure-u-1'>
        <Wrapper>
        <Content>
          <div className='image'>
            <img src={Image} alt='mexico' />
          </div>
          <div className='text'>
            <p className='title'>MEGA RESEARCH se expande y abre oficinas en M&eacute;xico</p>
            <p>La empresa de investigaci&oacute;n de mercado con foco en Latinoam&eacute;rica anunci&oacute; la apertura de sus oficinas en Ciudad de M&eacute;xico a partir del pr&oacute;ximo 3 de Septiembre.</p>
            <p>Su llegada a M&eacute;xico coincide con una gran necesidad de la industria de complementar la investigaci&oacute;n de mercado tradicional con nuevas alternativas digitales para un alcance masivo a trav&eacute;s de Online, Mobile y Social Media.</p>            
            <p>
              De la mano de un equipo de especialistas con <i>seniority</i>, flexibilidad y creatividad para liderar
              cada desafío, MEGARESEARCH realiza investigaciones en todo Latinoamérica conectando
              digitalmente con las personas a través de sus distintas metodologías.
            </p>
            <p><a name="_GoBack"></a> Para la inauguraci&oacute;n estar&aacute;n presentes sus fundadores, Damian Suarez y Ezequiel Erdei, con el objetivo de transmitir los resultados del trabajo mediante las herramientas de Focus Target y Paneles Online en localidades donde la investigaci&oacute;n tradicional no tiene llegada, como peque&ntilde;os poblados o localidades alejadas de las principales ciudades de M&eacute;xico.</p>
            <p>&nbsp;</p>
            <p><strong>SOBRE MEGARESEARCH</strong></p>            
            <p>MEGARESEARCH realiza investigaciones de mercado en todo Latinoam&eacute;rica desde hace m&aacute;s de 6 a&ntilde;os.</p>
            <p>Desde su fundaci&oacute;n, la compa&ntilde;&iacute;a ha contribuido al crecimiento de empresas como DirectTv, McDonald&rsquo;s, FOX, Walmart, Turner, Givaudan generando insights de valor mediante diversas t&eacute;cnicas que conectan a los consumidores, desde encuestas online interactivas, Comunidades Online, Etnograf&iacute;as Audiovisuales, Minigrupos focales en Instagram, Videos Etnogr&aacute;ficos en Whatsapp, entre otras herramientas.</p>
            <p>Entre sus m&eacute;todos de investigaci&oacute;n tambi&eacute;n promocionan herramientas de Social Listening con alto valor agregado.</p>
            <p>&nbsp;</p>
            <p><strong>CONTACTO:</strong> <span><u><a href="mailto:mexico@megaresearch.net">mexico@megaresearch.net</a></u></span> | <span><u><a href="mailto:centroamerica@megaresearch.net">centroamerica@megaresearch.net</a></u></span></p>
            <p><strong>DAMIAN SUAREZ:</strong> damian@megaresearch.net</p>
            <p><strong>EZEQUIEL ERDEI:</strong> ezequiel@megaresearch.net</p>
            <p><br /><br /></p>
          </div>
        </Content>
      </Wrapper>
        </div>
      </div>      
    ) 
  }
}