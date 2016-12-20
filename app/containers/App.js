import React, { Component } from 'react';
import {
  App,
  Box,
  Header,
  Title,
  Anchor,
  Menu,
  Heading,
} from 'grommet';
import { connect } from 'react-redux';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';
import LinkedInIcon from 'grommet/components/icons/base/SocialLinkedin';
import EmailIcon from 'grommet/components/icons/base/SocialEmail';


const Application = props => {
    return (
      <App centered={false}> 
        <Header justify="between" colorIndex="light-1" pad={{"horizontal": "large"}} size='small' fixed={true}>
          <Title size='large'>
            CLIFF WRIGHT
          </Title>
          <Box responsive={false} direction="row" >
            <Box direction='row' pad='small'>
              <Anchor primary={true} size='medium' href='https://github.com/CWright777' icon={<GithubIcon colorIndex='neutral-1'/>} label='GITHUB' />
            </Box>
            <Box direction='row' pad='small'>
              <Anchor primary={true} href='mailto:clifford@cliffordwright.com'size='medium' label='EMAIL' icon={<EmailIcon/>}/>
            </Box>
          </Box>
        </Header>
        <App inline={true} centered={true}>
          {props.children}
          <Box style={{width: '200px',height: '18px', margin: 'auto'}} size='small' texture='https://s3-us-west-1.amazonaws.com/cliff-website/ignasi_pattern.png'/>
          <Heading margin='large' tag='h5' align='center' strong={true}>
            © Clifford Wright 2016
          </Heading>
        </App>
      </App>
    )
}

export default Application

            //<Box direction='row' pad='small'>
              //<Anchor primary={true} href="https://www.linkedin.com/in/cliffordrwright" size='medium' icon={<LinkedInIcon/>}label='LINKEDIN'/>
            //</Box>
