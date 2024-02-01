import React from 'react';
import './Header.css';
import {AppBar, Container, Toolbar, Typography, Menu, Box, MenuItem} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import {
  Link
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';




function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}




function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  
const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
}

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
}


  return (

    <HideOnScroll>
    <AppBar  sx={{background: 'primary.main', boxShadow: 'none', color: 'secondary.main'}}>
     
      <Container maxWidth="xl">
      <Toolbar disableGutters>
      
     

       
          <Box sx={{ flexGrow: 1}}>
         
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'secondary.main',
              textDecoration: 'none',
              display: {xs: 'none', md: 'block'}
            }}
          >
            Amir Zukhair
          </Typography>

              <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                      mr: 2,
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'secondary.main',
                      textDecoration: 'none',
                      display: {xs: 'block', md: 'none'}
                  }}
              >
                  AZ
              </Typography>

            
          </Box>
       
          {/*<Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>*/}
          {/*<IconButton*/}
          {/*    size="large"*/}
          {/*    aria-label="account of current user"*/}
          {/*    aria-controls="menu-appbar"*/}
          {/*    aria-haspopup="true"*/}
          {/*    onClick={handleOpenNavMenu}*/}
          {/*    color="inherit"*/}
          {/*  >*/}
          {/*  <MenuIcon />*/}
          {/*  </IconButton>*/}

          {/*  <Menu*/}
          {/*    id="menu-appbar"*/}
          {/*    keepMounted*/}

          {/*    anchorEl={anchorElNav}*/}
          {/*    */}
          {/*    open={Boolean(anchorElNav)}*/}
          {/*    onClose={handleCloseNavMenu}*/}
          {/*    sx={{*/}
          {/*      display: { xs: 'block', md: 'none' },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*   */}
          {/*      <MenuItem  onClick={handleCloseNavMenu}>*/}
          {/*        <Link className="header__link-mob"  to="/" textAlign="center" onClick={()=>{window.scrollTo(0, 0)}}>Home</Link>*/}
          {/*      </MenuItem>*/}
          {/*      <MenuItem onClick={handleCloseNavMenu}>*/}
          {/*        <HashLink smooth to="/#work" className="header__link-mob" textAlign="center">*/}
          {/*          Work*/}
          {/*       </HashLink>*/}
          {/*      </MenuItem>*/}
          {/*      <MenuItem  onClick={handleCloseNavMenu}>*/}
          {/*        <Link className="header__link-mob" to="/about" textAlign="center">About</Link>*/}
          {/*      </MenuItem>*/}
          {/*   */}
          {/*  </Menu>*/}

          {/*  </Box>*/}
         
         
        
                 <Box sx={{ flexGrow: 0, display: 'flex' }}>



              <Link
                to="/"
                className="header__link"
                onClick={()=>{window.scrollTo(0, 0)}}
              >
               Home
              </Link>
              <HashLink smooth to="/#work" className="header__link" >
              Work
              </HashLink>
              <Link
                to="/about"
                className="header__link"
              >
               About
              </Link>


          </Box>
            
       

        </Toolbar>

      
          
      </Container>
    
    </AppBar>
    </HideOnScroll>
  );
}



export default Header;