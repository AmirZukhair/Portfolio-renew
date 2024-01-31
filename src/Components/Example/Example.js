

import {  Divider, Card, CardMedia,Container,CardContent,Typography,Box,CardActions,Link } from '@mui/material';
function Example(props) {
    return (
<div>
<Container maxWidth="lg">
<Card sx={{ marginY: {xs: 5, md: 10}, background: "transparent", boxShadow: "none"}}>
        
     <Box  sx={{ display: "flex", justifyContent: {xs: "flex-end", sm: "space-between"} , alignItems: "flex-end", flexWrap: "wrap"}}>
        <CardContent >
        <Typography gutterBottom variant="h3" component="div" sx={{fontWeight: "700"}}>
        {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary"  sx={{fontWeight: "500"}}>
        {props.subTitle1}
        </Typography>

            <Typography variant="body2" color="text.secondary"  sx={{fontWeight: "500"}}>
                {props.subTitle2}
            </Typography>
       </CardContent>
      
       <CardActions sx={{ display: "flex"}}>
        <Link href={props.link} underline="none" target="_blank" variant='button' sx={{color: "rgba(0, 0, 0, 0.87)", "&:hover": {color: "#404040"}}}>
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