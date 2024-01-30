import React, { useEffect } from "react";
import { Container, Typography,  Stack,Grid } from '@mui/material';
import './About.css';
function About() {

   useEffect(() => {
      window.scrollTo(0, 0)
    },[])

  return (
    <Container maxWidth="lg">
     <Grid container spacing={2} sx={{marginBottom: 5, marginTop: 10, justifyContent: 'space-between'}}>

     <Grid item md={5}>

  <Typography variant="caption" sx={{color: '#101010', fontWeight: 700, fontSize: 55, lineHeight: 1.4}}>
     I'm Amir, a web developer.
  </Typography>
  <Typography variant="body1" sx={{color: '#909090', fontSize: 24, lineHeight: 1.4}}>
   My experience of web developing is over 3.5 years.
   I usually make Responsive Web Site for clients.
   I also help making or update your OpenCart and Wordpress site too.
   Please feel free to contact me :)
  </Typography>

  
    
     

  </Grid>
  <Grid item md={5}>

  
  <Stack sx={{marginBottom: 3}}>
  <Typography variant="caption" sx={{color: '#101010', fontWeight: 700, fontSize: 32, lineHeight: 1.4}}>
     What I like
  </Typography>
  <Typography variant="caption" sx={{color: '#909090',fontSize: 24, lineHeight: 1.7}}>
     Making Websites
  </Typography>
  <Typography variant="caption" sx={{color: '#909090',fontSize: 24, lineHeight: 1.7}}>
    Animation
  </Typography>
  <Typography variant="caption" sx={{color: '#909090',fontSize: 24, lineHeight: 1.7}}>
    Basketball
  </Typography>
  </Stack>

  <Stack>
  <Typography variant="caption" sx={{color: '#101010', fontWeight: 700, fontSize: 32, lineHeight: 1.4}}>
  What I'm learning
  </Typography>
  <Typography variant="caption" sx={{color: '#909090',fontSize: 24, lineHeight: 1.7}}>
     Backend
  </Typography>
  <Typography variant="caption" sx={{color: '#909090',fontSize: 24, lineHeight: 1.7}}>
    Figma
  </Typography>
  <Typography variant="caption" sx={{color: '#909090',fontSize: 24, lineHeight: 1.7}}>
    日本語
  </Typography>
  </Stack>
  



  </Grid>

  </Grid>

  <Grid container spacing={2} sx={{marginY: 5, justifyContent: 'space-between'}}>
    
  <Grid item md={4}>
  <Typography variant="caption" sx={{color: '#101010', fontWeight: 700, fontSize: 35, lineHeight: 1.4}}>
  Web Languages:
  </Typography>
     <ul className="skills-list">
      <li>- HTML5</li>
      <li>- Bootstrap</li>
      <li>- CSS3</li>
      <li>- SCSS</li>
      <li>- JavaScript</li>
      <li>- jQuery</li>
      <li>- React.js</li>
      <li>- React-Native</li>
      <li>- Redux</li>
      <li>-MongoDB</li>
      <li>-Node.js -express</li>
     </ul>
  </Grid>
  <Grid item md={4}>
  <Typography variant="caption" sx={{color: '#101010', fontWeight: 700, fontSize: 35, lineHeight: 1.4}}>
     CMS Skills:
  </Typography>
     
       <ul className="skills-list">
      <li>- OpenCart</li>
      <li>- WordPress</li>
      <li>- Shopify</li>
      <li>- DLE</li>
      
     </ul>

  </Grid>
  <Grid item md={4}>
  <Typography variant="caption" sx={{color: '#101010', fontWeight: 700, fontSize: 35, lineHeight: 1.4}}>
     Other Skills:
  </Typography>
    
      <ul className="skills-list">
      <li>- DNS Setting</li>
      <li>- Web Hosting</li>
      <li>- Responsive Web Development</li>
      <li>- PSD(Photoshop) to HTML PSD(Figma) to HTML</li>
      <li>- Cross-Browser Development</li>
      <li>- Browser Developer Tools</li>
      <li>- Moving to OpenCart from WordPress</li>
      <li>-  Mobile apps (Android & IOS)</li>
      
     </ul>
  </Grid>
  </Grid>
  </Container>
  );
}

export default About;
