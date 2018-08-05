import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: ${props => props.maxWidth ? props.maxWidth : ''};
  padding: 10px;
`

const Title = styled.div`
  font-size: 16px;
  padding-bottom: 10px;
`

const Separator = styled.div`
  height: 2px;
  width: 35px;
  background-color: ${props => props.theme.greenShade}
`

const Content = styled.div`
  font-size: 14px;
  padding-top: 20px;
`

export default class TextBox extends Component {
  
  render(){
    return (
      <Wrapper maxWidth={this.props.maxWidth}>
        <Title>
          {this.props.title}
        </Title>       
        <Separator />
        <Content>
          {this.props.content}
        </Content>
      </Wrapper>
    )
  }
}