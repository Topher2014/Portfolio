import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import movie from '../Assets/movie.png'
import workout from '../Assets/workout.png'
import commandLine from '../Assets/commandLine.png'
import aidSupply from '../Assets/aidSupplyLogo.png'
import baseBeta from '../Assets/baseBetaLogo.webp'

const BoxWithHover = styled(Box)`
  transition: .5s;
  &:hover {
    transform: scale(1.05); /* Enlarge the image on hover */
  }
`;

const projectItem = (image, name, func) => {
  return (
      <>
      <Grid item  md={1}>
        <BoxWithHover sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onClick={func}>
          <Box component='img' src={image} sx={{height: '15vw', width: '15vw', borderRadius: '5vw'}}/>
          <Typography variant='h3'>{name}</Typography>
        </BoxWithHover>
      </Grid>
      </>
);
}

function Projects () {
    const navigate = useNavigate();
    const reroute = (path) => {
        return () => navigate(path);
        // return () => window.open(path, '_blank');
    };

    return (
        <Container
        id='Projects'
        maxWidth='none'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          // mt: {xs: '15vh', sm: '25vh'}, 
          mb: '25vh',
          width: '75%',
        }}
        >
          <Typography 
            id='skills'
            variant='h2'
            my={4} 
          >
            Projects
          </Typography>

            <Grid container spacing={4} sx={{display: 'flex', flexDirection: {md: 'row', sm: 'column', xs: 'column'}, alignItems: 'center', mb: {md: '10vh', sm:'2vh'}}} columns={{md: 3}}>
                {projectItem(aidSupply, 'AidSupply', reroute('/AidSupply') )}
                {projectItem(baseBeta, 'BaseBeta', reroute('/BaseBeta') )}
                {projectItem(movie, 'Topher Emby', reroute('/TopherEmby') )}
            </Grid>
            <Grid container spacing={4} sx={{display: 'flex', flexDirection: {md: 'row', sm: 'column', xs: 'column'}, alignItems: 'center', mb: '10vh'}} columns={{md: 2}}>
                {projectItem(workout, 'Flat & Iron Abs', reroute('/FlatIronAbs') )}
                {projectItem(commandLine, 'OnlyKyles', reroute('/OnlyKyles') )}
            </Grid>

        </Container>
    );
}

export default Projects;