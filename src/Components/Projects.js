import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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
            flexDirection: {xs:'column', sm:'row'}, 
        // flexDirection: 'row', 
        alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        mx: 'auto',
        // mb: '1rem',
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
            mr: 2,
          }}
        />
      </BoxWithHover>
        <Box  textAlign='center'>
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
            
            alignItems: 'center',
            width: '100%',
            mx: 'auto',
            mb: '25vh'
          }}        
        >
            <Typography 
              id='projects'
              variant='h2' 
              my={4}
            >
              Projects
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: {xs:'column', sm:'row'}}}>
              {/* {projectItem(movie, 'Topher Emby', reroute('/TopherEmby') )}
              {projectItem(commandLine, 'OnlyKyles', reroute('/OnlyKyles') )}
              {projectItem(workout, 'Flat & Iron Abs', reroute('/FlatIronAbs') )} */}
              {projectItem(movie, 'Topher Emby')}
              {projectItem(commandLine, 'OnlyKyles')}
              {projectItem(workout, 'Flat & Iron Abs')}
            </Box>
        </Container>
    );
}

export default Projects;