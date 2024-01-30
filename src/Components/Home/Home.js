import React, { useEffect, useState } from "react";
import {Grid, Container,Divider,Typography,CardMedia} from '@mui/material';
import Example from "../Example/Example.js";
import { styled } from '@mui/material/styles';


const StyledTypography  = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontWeight: 500, 
    fontSize: 24
  },
  [theme.breakpoints.up('md')]: {
    fontWeight: 500, 
    fontSize: 45
  },
}));

const StyledGrid  = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    'flex-direction': 'column-reverse',
    'align-items': 'center'
  },
}));

const StyledDivider  = styled(Divider)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    'margin-top': '-19px',
  },
}));






function Home() {

  useEffect(() => {
    
  },[])

  return (
    <div>
       <Container maxWidth="lg" >
   <StyledGrid container   spacing={2} sx={{marginTop: 10, justifyContent: 'center'}}>

  <Grid item md={6} sx={{alignItems: 'center', display: 'flex'}} justifyContent="center" order={{ xs: 3, md: 2, }}>
    <div>
    <Typography variant="caption" sx={{color: '#101010', fontWeight: 700, fontSize: 70}}>Hello!</Typography>

<StyledTypography variant="body2" sx={{color: '#404040'}} >
  
I'm Amir,  <br></br>
a fullstack <br></br>
web developer.
  
  
  </StyledTypography>
    </div>

  

  </Grid>

     <Grid item md={6} justifyContent="center" order={{ xs: 2, md: 3, }}>
       <CardMedia
           component="img"
           image="/images/author.jpg"
           alt="author"

           sx={{objectFit:"contain"}}
       />

     </Grid>


</StyledGrid>

   
   </Container>



   
   
   
  <div id="work">
  <Example  src="/images/mobzik.png" title="Playside" subTitle="MOBILE GAMES＆APPS - WEBSITE" link="https://playside.ru/"/>
  <Example   src="/images/surf.png" title="SURF" subTitle="SURF - WEBSITE" link="https://amirzukhair.github.io/website-surf/"/> 
  <Example   src="/images/td-ural.png" title="ТД УРАЛ" subTitle="BUILDING MATERIALS - WEBSITE" link="https://tdural.com/"/>
  </div>
    </div>
  
   
  );
}

export default Home;
