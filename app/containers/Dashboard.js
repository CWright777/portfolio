import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Section,
  Heading,
  Image,
  Animate,
  Box,
} from 'grommet';
import { ImageHolder } from '../components/ImageHolder';

export class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render(){
    return (
      <Section>
        <div style={{borderBottom: '1px solid black'}}>
          <Heading>
            Select Hobby Projects
          </Heading>
        </div>
        <ImageHolder
          title='Unicode Viewer'
          imageSrc='https://s3-us-west-1.amazonaws.com/cliff-website/UnicodeViewer.png'
          linkTo='https://univiewer.cliffordwright.com'
        />
        <ImageHolder
          title='Blog'
          imageSrc='https://s3-us-west-1.amazonaws.com/cliff-website/Blog.png'
          linkTo='https://blog.cliffordwright.com'
        />
        <ImageHolder
          title='First Portfolio Site'
          imageSrc='https://s3-us-west-1.amazonaws.com/cliff-website/PersonalSite.png'
          linkTo='https://portfolio-og.cliffordwright.com'
        />
        <ImageHolder
          title='Devine React Native App'
          imageSrc='https://s3-us-west-1.amazonaws.com/cliff-website/React_Native.png'
          linkTo='http://imgur.com/a/sqZMf'
        />
        <ImageHolder
          title='Network Switch Manager'
          imageSrc='https://s3-us-west-1.amazonaws.com/cliff-website/SwitchManager'
          linkTo='https://github.com/CWright777/cisco-switch-manager'
        />
        <ImageHolder
          title='Ruby Pig Latin Proxy'
          imageSrc='https://s3-us-west-1.amazonaws.com/cliff-website/RubyPigLatinProxy.png'
          linkTo='https://github.com/CWright777/ruby-proxy'
        />
      </Section>
    )
  }
}

function mapStateToProps(state) {
  const {
  } = state || {
  }
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators({delimiterActions}, dispatch),
    dispatch
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)

const styles= {
}
