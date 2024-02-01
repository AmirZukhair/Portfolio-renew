import React, { useEffect, useState } from "react";
import {Grid, Container,Divider,Typography,CardMedia,Box} from '@mui/material';
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
    <Typography variant="caption" sx={{color: 'secondary.dark', fontWeight: 700, fontSize: 70}}>Hello!</Typography>

<StyledTypography variant="body2" sx={{color: 'secondary.main'}} >
  
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



   <Box id="work" sx={{ textAlign: 'center', paddingTop: 10, paddingBottom: 5, marginTop: 1}}>
     <Typography variant="caption" sx={{color: 'secondary.secondary', fontWeight: 700, fontSize: 70}}>Work</Typography>
   </Box>
   
   
  <div >
    <Example   src="/images/surf.png" title="SURF" subTitle1="SURF - ウェブサイト - コーディングを担当 CSS アニメーションと外部 JavaScript ライブラリを使用。" subTitle2="上質なサイトになるようアニメーションにこだわりました。" link="https://amirzukhair.github.io/website-surf/" divider/>
  <Example  src="/images/mobzik.png" title="Playside" subTitle1="PlaySide - ウェブサイト - コーディングを担当"  subTitle2="アプリの評価機能や検索システムを備えたオンラインアプリケーションのカタログサイトです。" subTitle3="アクセスを強化するために、プラットフォーム用の新しいデザインとフレームワークを作成しました。" link="https://playside.ru/" divider/>
  <Example   src="/images/td-ural.png" title="TD URAL" subTitle1="建材会社 - ウェブサイト - コーディングを担当" subTitle2="クライアントが管理パネルから製品を追加したり、サイトのコンテンツを変更したりできるようにCMSの設定を行いました。" link="https://tdural.com/" divider/>
   {/*<Example   src="/images/zebra.png" title="Zebra" subTitle1="minimalist ecommerce website" subTitle2="" link="https://amirzukhair.github.io/Zebra-Lending-website/" divider/>*/}
    <Example   src="/images/school.png" title="School 28" subTitle1="School portal for students and teachers. Made for a school in my hometown. " subTitle2="GSAP used for interactive animation. DLE used as CMS." link="https://28.te.ua/" />
  </div>
    </div>
  
   
  );
}

export default Home;
