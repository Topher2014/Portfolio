import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import movie from '../Assets/movie.png'
import workout from '../Assets/workout.png'
import commandLine from '../Assets/commandLine.png'

const BoxWithHover = styled(Box)`
  transition: .5s;
  &:hover {
    transform: scale(1.05); /* Enlarge the image on hover */
  }
`;

const projectItem = (image, name, func) => {
  return (
    <Container
      maxWidth='none'
      onClick={func} 
      sx={{
        display: 'flex', 
            flexDirection: {xs:'column', sm:'column'}, 
        // flexDirection: 'row', 
        // justify: 'center',
        // alignContent: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        mx: 'auto',
        // mb: '1rem',
            // height: '10vw',
            // width: '10vw',
        cursor: 'pointer'
      }}       
    >
      <BoxWithHover>
        <Box 
          component='img'
          src={image}
          alt={`${name} logo`}
          sx={{
            height: '10vw',
            width: '10vw',
            // mr: 2,
          }}
        />
      </BoxWithHover>
        {/* <Box  textAlign='center'> */}
        <Box
          sx={{
            height: '10vw',
            width: '20vw',
            // mr: 2,
          }}
        >
          <Typography variant='h3'>{name}</Typography>
        </Box>
    </Container>
  );
};

function Projects () {
    const navigate = useNavigate();
    const reroute = (path) => {
        return () => navigate(path);
        // return () => window.open(path, '_blank');
    };

    return (
        <Container
          maxWidth='none'
          sx={{
            display: 'flex', 
            flexDirection: 'column', 
            // alignItems: 'center',
        // justify: 'center',
        // alignContent: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
            // width: '100%',
            // mx: 'auto',
            mb: '25vh'
          }}        
        >
            <Typography 
              id='projects'
              variant='h2' 
              // my={4}
            >
              Projects
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: {xs:'column', sm:'row'}}}>
              {projectItem(movie, 'Topher Emby', reroute('/TopherEmby') )}
              {projectItem(commandLine, 'OnlyKyles', reroute('/OnlyKyles') )}
              {projectItem(workout, 'Flat & Iron Abs', reroute('/FlatIronAbs') )}
            </Box>
            {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}> */}
            {/* <Box sx={{ display: 'flex', flexDirection: {xs:'row', sm:'row'}}}> */}
            <Box>
              <Grid container spacing={4} sx={{display: 'flex', flexDirection: 'row'}}>
              {/* <Grid> */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  {projectItem(movie, 'Topher Emby', reroute('/TopherEmby') )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  {projectItem(commandLine, 'OnlyKyles', reroute('/OnlyKyles') )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  {projectItem(workout, 'Flat & Iron Abs', reroute('/FlatIronAbs') )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  {projectItem(workout, 'Flat & Iron Abs', reroute('/FlatIronAbs') )}
                </Grid>
              </Grid>
            </Box>

        </Container>
    );
}

export default Projects;