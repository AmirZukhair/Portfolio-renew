

import {  Divider, Card, CardMedia,Container,CardContent,Typography,Box,CardActions,Link } from '@mui/material';
function Example(props) {
    return (
<div>
<Container maxWidth="lg">
<Card sx={{ marginY: 10, background: "transparent", boxShadow: "none"}}>
        
     <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
        <CardContent >
        <Typography gutterBottom variant="h3" component="div" sx={{fontWeight: "700"}}>
        {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary"  sx={{fontWeight: "500"}}>
        {props.subTitle}
        </Typography>
       </CardContent>
      
       <CardActions sx={{ display: "flex"}}>
        <Link href={props.link} underline="none" target="_blank" variant='button' sx={{color: "rgba(0, 0, 0, 0.87)", "&:hover": {color: "rgba(0, 0, 0, 0.6)"}}}>
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
    <Divider/>
    </Container>
    
  

    
</div>
    )
    
}

export default Example;