import React, { Component } from 'react'
import styled from 'styled-components';

// Break in case of change of mind
// border-radius: 30px;
// border-radius: 15px 15px 0 0;

const Wrapper = styled.div`
  margin: 5px;
  min-height: 245px;
  width: 220px;
  -webkit-box-shadow: 7px 7px 16px -1px rgba(0,0,0,0.41);
  -moz-box-shadow: 7px 7px 16px -1px rgba(0,0,0,0.41);
  box-shadow: 7px 7px 16px -1px rgba(0,0,0,0.41);
  background-color: white;
`

const Cover = styled.div`
  background: ${props => props.image ? "url(" + props.image + ") no-repeat 50% 50% / cover" : '#ececec'};  
  height: 120px;
`

const Title = styled.div`
  text-transform: uppercase;
  color: ${props => props.theme.blueShade};
  font-size: 12px;
  letter-spacing: 3px;
  padding: 15px 5px;  
  align-self: ${props => props.align};
  font-weight: 900;
`

const Subtitle = styled.div`
  padding: 7px 15px;
  border-radius: 10px;
  text-align: center;
  background-color: #ececec;
  color: ${props => props.theme.blueShade};
  margin: 10px 0;
  display: inline;
  font-size: 11px;
  align-self: ${props => props.align};
`

const TextWrapper = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 5px 10px;
`

const Content = styled.div`
  margin: 10px 0 25px 0;
  padding-left: 5px;
  line-height: 1.5;
  font-size: 12px;
`

export default class Card extends Component {

  render() {
    return (
      <Wrapper>
          <Cover 
            image={this.props.image}
          />
          <TextWrapper>
            { this.props.title && (
              <Title
                align={this.props.titleFlex ? this.props.titleFlex : 'center'}
              >
                {this.props.title}
              </Title>
            )}
            { this.props.subtitle && (
              <Subtitle
                align={this.props.subtitleFlex ? this.props.subtitleFlex : 'center'}
              >
                {this.props.subtitle}
              </Subtitle>
            )}            
            { this.props.content && (
              <Content>
                {this.props.content}
              </Content>
            )}            
          </TextWrapper>                    
      </Wrapper>
    )
  }
}