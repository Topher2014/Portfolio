import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from '@mui/material';

// import resume_pdf from '../Assets/Resume.pdf';
import github_img from '../Assets/githubWhite.png';
import github_img2 from '../Assets/githubBlack.png'
import linkedin_img from '../Assets/linkedin.png';

const navLink = (toId, text) => {
    return (
      <ScrollLink
        to={toId}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => {
          console.log(document.getElementById(toId))
          if (window.location.pathname !== '/') {
            window.location.href = '/';
          }
        }}        
      >
        <Typography
          variant="h6"
          sx={{
            mx: 2,
            color: {xs:'#000000', sm:'#000000', md:'#e1e1e1'},
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          {text}
        </Typography>
      </ScrollLink>
    );
};



function Header() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down(1080));
  const links = () => {
    return (
      <>  
        {navLink('About', 'ABOUT')}
        {navLink('Skills', 'SKILLS')}
        {navLink('Projects', 'PROJECTS')}
        {navLink('Contact', 'CONTACT')}
        
        <Typography
          variant="h6"
          component="a"
          href='https://docs.google.com/document/d/1wHXmc9S2mm0Sm_0pqHT6RAHcmE2cGWG8Qsy25w9zZpA/edit'
          target="_blank"
          sx={{
            mx: 2,
            color: {xs:'#000000', sm:'#000000', md:'#e1e1e1'},
            textDecoration: 'none',
          }}
        >
          RESUME
        </Typography>

        <Link href="https://github.com/Topher2014" target="_blank">
        {isMobile ? (
            <Box component="img" src={github_img2} alt="" sx={{ mx: 2, height: '2rem' }} />
          ) : (
            <Box component="img" src={github_img} alt="" sx={{ mx: 2, height: '2rem' }} />
          )}      </Link>

        <Link href="https://www.linkedin.com/in/topherludlow" target="_blank">
          <Box component="img" src={linkedin_img} alt="" sx={{ mx: 2, height: '2rem' }} />
        </Link>
      </>
    );
  };
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
      ) { return; }
      setIsDrawerOpen(!isDrawerOpen);
    };
    
  const renderMobileMenu = () => {
    return (
      <>
        <Button onClick={() => toggleDrawer()}>
          <MenuIcon sx={{color: '#e1e1e1'}}/>
        </Button>
        <SwipeableDrawer
          open={isDrawerOpen}
          onOpen={toggleDrawer}
          onClose={toggleDrawer}
          >
                    <Typography
          variant="h6"
          sx={{
            mx: 2,
            color: {xs:'#000000', sm:'#000000', md:'#e1e1e1'},
            textDecoration: 'none',
            cursor: 'pointer'
          }}
          onClick={scrollToTop}
        >
            TOPHER LUDLOW
          </Typography>
          {links()}
        </SwipeableDrawer>
      </>
    );
  };
  
  const renderDesktopMenu = () => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {links()}
      </Box>
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AppBar

      sx={{
        height: '4rem',
        backgroundColor: '#000000',
        py: '.9rem',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" noWrap    
          style={{
        cursor: 'pointer',
        }}
        onClick={scrollToTop}
        >
            TOPHER LUDLOW
          </Typography>
        </Box>
        {isMobile ? renderMobileMenu() : renderDesktopMenu()}
      </Container>
    </AppBar>
  );
}

export default Header;

