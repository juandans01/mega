import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: ${props => props.maxWidth ? props.maxWidth : ''};
  padding: 10px;
`

const Title = styled.div`
  font-size: ${props => props.titleSize};
  padding-bottom: 10px;
  text-align: ${props => props.titleAlign}
`

const SeparatorWrapper = styled.div`
  display: flex;
  justify-content: ${props => props.separatorAlign};
`

const Separator = styled.div`
  height: 2px;
  width: 35px;
  background-color: ${props => props.theme.greenShade}
`

const Content = styled.div`
  font-size: ${props => props.contentSize};
  padding-top: 20px;
  line-height: 1.4;
  text-align: ${props => props.contentAlign}
`

export default class TextBox extends Component {
  
  render(){
    return (
      <Wrapper maxWidth={this.props.maxWidth}>
        <Title 
          titleAlign={this.props.titleAlign ? this.props.titleAlign : "left"}
          titleSize={ this.props.titleSize ? this.props.titleSize : "16px"}
        >
          {this.props.title}
        </Title>
        <SeparatorWrapper
          separatorAlign={this.props.separatorAlign ? this.props.separatorAlign : "flex-start"}
        > 
          <Separator />
        </SeparatorWrapper>               
        <Content
          contentAlign={this.props.contentAlign ? this.props.contentAlign : "left"}
          contentSize={ this.props.contentSize ? this.props.contentSize : "14px"}
        >
          {this.props.content}
        </Content>
      </Wrapper>
    )
  }
}