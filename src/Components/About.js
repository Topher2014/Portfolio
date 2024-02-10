import Image from '../Assets/Portrait2.jpg'
import book1 from '../Assets/Covers/chapter-house-dune.jpg'
import book2 from '../Assets/Covers/fingerprint_of_gods.jpg'
import book3 from '../Assets/Covers/economics.jpg'
import book4 from '../Assets/Covers/immortalIrishman.jpg'
import book5 from '../Assets/Covers/heretics-of-dune-1.jpg'
import book6 from '../Assets/Covers/caesar.jpg'
import book7 from '../Assets/Covers/return-of-the-king.jpg'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
const currentBooks = [book6, book2, book3]
const pastBooks = [book4, book1, book5]

const gridItem = (name, path) => {
    return (
        <Container
          sx={{
            width: '15rem',
            height: '8rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#292929',
            m: 'auto',
            p: 1,
            borderRadius: '10px',
            transition: '0.5s',
            '&:hover': { transform: 'scale(1.05)' }
          }}
        >
          <Box
            component='img'
            src={path}
            alt={`${name} logo`}
            height='5rem'
            mr={2}
          />
          <Typography color='#e1e1e1'>{name}</Typography>
        </Container>
    );
};



function About() {
    // console.log(books)
    return (
        <>
        <Container 
        id='intro'
        maxWidth='none'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          mt: {xs: '15vh', sm: '25vh'}, 
          mb: '5vh',
          width: '75%',
        }}
        >
           <Box
            component='img'
            src={Image}
            alt='headshot of Topher Ludlow'
            sx={{
              height: {xs:'65%', sm:'65%', md:'35%'},
              width: {xs:'65%', sm:'65%', md:'35%'},
              borderRadius: '10px',
            }}
          />
          <Box textAlign='center'>
            <Typography variant='h1'>Topher Ludlow</Typography>
            <Typography variant='h2'>Software Developer</Typography>
            <Typography>
              I am a software developer with a passion for learning and creating, 
              <br />
              using my background in communications, management, and a love of technology 
              <br />
              to solve problems and build applications.
              <br />
              I am always looking for work opportunities to develop and/enhance websites and applications 
              <br />
              using the most efficient tools and platform to meet your requirements. 
              <br />
              Please use the contact link to send me an email describing your needs and timeframe and I will respond promptly
            </Typography>
          </Box>
        </Container>

<Container
id='About'
maxWidth='none'
sx={{ 
  mx: 'auto', 
  mb: {xs: '15vh', sm: '25vh'}, 
  width: '75%',
}}
>
  <Typography variant='h2' textAlign='center' >About</Typography>
  <Box mt={2}>
      <Typography >
      I’m a software engineer and a US veteran with a background in communications. I recently finished Flatiron’s software development program where I learned javascript and python, though I have experience with other languages and technologies as well. 
My last job was with an emergency services agency during the height of the covid-19 pandemic; I’m someone who thrives under pressure and who always keeps a professional demeanor in the workplace. 
A self described techie with a strong work ethic, anything I’m not currently proficient in I can learn quickly. I’d appreciate the opportunity to talk to you more about how I can become an asset to your company.
      </Typography>
  </Box>
  <Box >
      <Typography 
        variant='h3' 
        textAlign='center'
        sx={{ mt: '5vh' }}
      >
        Books I'm Reading
        <br/>
      </Typography>
      <Box 
        display='flex' 
        flexDirection='row' 
        justifyContent='center'  
        alignItems='center'
      >
          {currentBooks.map((book, index) => {
              return (
                  <Box 
                    key={index}
                    component='img'   
                    src={book} 
                    alt='' 
                    sx={{
                      height: {md: '19vw', xs: '27vw'},
                      width: {md: '13vw', xs: '21vw'},
                      mx: {md:2, xs:1},
                      // mb: {md: '15vh', xs: '5vh'},
                      transition: '0.5s',
                      '&:hover': { transform: 'scale(1.05)' }
                    }}
                  mt={2}
                  />
              );
          })}
      </Box>
  </Box>
  <Box >
      <Typography 
        variant='h3' 
        textAlign='center'
        sx={{ mt: '5vh' }}
      >
        Last 3 Books I've Read
        <br/>
      </Typography>
      <Box 
        display='flex' 
        flexDirection='row' 
        justifyContent='center'  
        alignItems='center'
      >
          {pastBooks.map((book, index) => {
              return (
                  <Box 
                    key={index}
                    component='img'   
                    src={book} 
                    alt='' 
                    sx={{
                      height: {md: '19vw', xs: '27vw'},
                      width: {md: '13vw', xs: '21vw'},
                      mx: {md:2, xs:1},
                      // mb: {md: '15vh', xs: '5vh'},
                      transition: '0.5s',
                      '&:hover': { transform: 'scale(1.05)' }
                    }}
                  mt={2}
                  />
              );
          })}
      </Box>
  </Box>
</Container>
        </>

          
    )
}
export default About