import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import python_img from '../Assets/technologies/python.png'
import flask_img from '../Assets/technologies/flask.png'
import javascript_img from '../Assets/technologies/javascript.png'
import react_img from '../Assets/technologies/react.png'
import html_img from '../Assets/technologies/html.png'
import css_img from '../Assets/technologies/css.png'
import mui_img from '../Assets/technologies/mui.png'
import numpy_img from '../Assets/technologies/numpy.png'
import pandas_img from '../Assets/technologies/pandas.png'
import github_img from '../Assets/technologies/github2.png'
import node_img from '../Assets/technologies/node.png'
import render_img from '../Assets/technologies/render.png'
import kotlin_img from '../Assets/technologies/kotlin.png'
import cplusplus_img from '../Assets/technologies/c++.png'
import c_img from '../Assets/technologies/c.png'
import ios_img from '../Assets/technologies/ios.png'
import android_img from '../Assets/technologies/android.png'
import { useMediaQuery } from '@mui/material';

function Skills () {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery((theme) => theme.breakpoints.down('md'));


  const getItemText = (name) => {
    if (isMobile) {
      switch (name) {
        case 'JavaScript':
          return 'JS';
        case 'Material UI':
          return 'MUI';
        default:
          return name;
      }
    } else {
      return name;
    }
  };

  const gridItem = (name, path) => {
    return (
        <Grid item xs={6} lg={3} 
        >
      <Container
        sx={{
          width: { sm: '12rem', xs: '7rem' },
          height: { sm: '6rem', xs: '3rem' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#292929',
          // m: 'auto',
          p: 1,
          borderRadius: '10px',
          transition: '0.5s',
          '&:hover': { transform: 'scale(1.05)' }
        }}
      >
        <Box component='img' src={path} alt={`${name} logo`} height='75%' mr={2} />
        <Typography color='#e1e1e1'>{getItemText(name)}</Typography>
      </Container>
        </Grid>
    );
  };

    return (
        <Box 
          maxWidth='none'
          id='Skills'
          sx={{
            display: 'flex', 
            // justifyContent: 'center',
            flexDirection: 'column', 
            alignItems: 'center',
            width: '75%',
            mx: 'auto',
            mb: {xs: '10vh', sm: '25vh'}, 
          }}
        >
          <Typography 
            id='skills'
            variant='h2'
            my={4} 
          >
            Skills
          </Typography>
            <Grid container columnSpacing={5} rowSpacing={1} >
                {gridItem('React', react_img)}
                {gridItem('JavaScript', javascript_img)}
                {gridItem('Python', python_img)}
                {gridItem('Flask', flask_img)}
                {gridItem('NumPy', numpy_img)}
                {gridItem('Kotlin', kotlin_img)}
                {gridItem('Android', android_img)}
                {gridItem('iOS', ios_img)}
                {gridItem('NodeJS', node_img)}
                {gridItem('Material UI', mui_img)}
                {gridItem('C++', cplusplus_img)}
                {gridItem('C', c_img)}
                {gridItem('HTML5', html_img)}
                {gridItem('CSS3', css_img)}
                {gridItem('GitHub', github_img)}
                {gridItem('Render', render_img, true)}

            </Grid>
      </Box>
    );
}

export default Skills;