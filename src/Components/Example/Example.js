

import {  Divider, Card, CardMedia,Container,CardContent,Typography,Box,CardActions,Link } from '@mui/material';
function Example(props) {
    return (
<div>
<Container maxWidth="lg">
<Card sx={{ marginY: {xs: 5, md: 10}, background: "transparent", boxShadow: "none"}}>
        
     <Box  sx={{ paddingBottom: "20px", display: "flex", justifyContent: {xs: "flex-end", sm: "space-between"} , alignItems: "flex-end", flexWrap: "wrap"}}>
        <CardContent >
        <Typography gutterBottom variant="h3" color="secondary.main" component="div" sx={{fontWeight: "700"}}>
        {props.title}
        </Typography>
        <Typography variant="body2" color="secondary.main"  sx={{fontWeight: "500"}}>
        {props.subTitle1}
        </Typography>

            <Typography variant="body2" color="secondary.main"  sx={{fontWeight: "500"}}>
                {props.subTitle2}
            </Typography>
       </CardContent>

       <CardActions sx={{ display: "flex"}}>
        <Link href={props.link} underline="none" target="_blank" variant='button'
              sx={{border:" 2px solid #fbddcd",
                   padding: "14px 20px",
                   borderRadius: "32px",
                   transition: "color .3s cubic-bezier(.47, 0, .745, .715), background-color .3s cubic-bezier(.47, 0, .745, .715)",
                   color: "secondary.secondary",
                   "&:hover": {color: "#0D0D0D", backgroundColor: "secondary.secondary"}}}>
            View project
        </Link>
      </CardActions>
       
     </Box>

       
       
      
        <CardMedia
            component="img"
            
            image={props.src}
            alt="mobile games website"
            
        />
    </Card>
    </Container>

    <Container maxWidth="xl">

        {props.divider &&  <Divider sx={{ bgcolor: 'rgba(191,191,191,0.5)' }}   />}



    </Container>
    
  

    
</div>
    )
    
}

export default Example;