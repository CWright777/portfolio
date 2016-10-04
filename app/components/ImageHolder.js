import React, { Component } from 'react';
import {
  Section,
  Heading,
  Image,
  Paragraph,
  Box
} from 'grommet';
import Animate from 'grommet/components/Animate';
import ReactHeight from 'react-height';

export class ImageHolder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      imageHeight: 0
    }
    this.onMouseOverHandler = () => {
      this.setState({
        visible: !this.state.visible
      })
    }
    this.onClickHandler = () => {
      window.location.assign(props.linkTo)
    }
    this.setImageHeight = (height) => {
        this.setState({
          imageHeight: height
        })
    }
  }

  render(){
    return (
      <a href={this.props.linkTo}>
        <Section
          onMouseEnter={this.onMouseOverHandler}
          onMouseLeave={this.onMouseOverHandler}
          onClick={this.onClickHandler}
          pad={{vertical: 'large'}}
        >
          <Animate
            enter={{"animation": "fade", "duration": 500}}
            visible={this.state.visible}
            keep={true}
            style={{position:'absolute',height: this.state.imageHeight,width:'100%'}}
          >
            <div
              style={{
                marginTop: (.75 * this.state.imageHeight),
                position:'absolute',
                zIndex: 1,
                marginLeft: this.state.imageHeight / 5,
              }}
            >
              <span style={{
                color: '#ffffff',
              }}>
              <Heading
                strong={true}
              >
                  {this.props.title}
                </Heading>
              </span>
            </div>
            <div
              style={{
                background:'linear-gradient(#485563, #29323c)',
                opacity: .9,
                height: this.state.imageHeight,
                width:'100%',
                padding:'auto',
                position:'absolute',
                cursor: 'pointer',
              }}
            />
          </Animate>
          <ReactHeight onHeightReady={height => this.setImageHeight(height)}>
            <Box
              style={{border: '1px solid black'}}
            >
              <Image
                src={this.props.imageSrc}
                full='horizontal'
              />
            </Box>
          </ReactHeight>
        </Section>
      </a>
    )
  }
}
