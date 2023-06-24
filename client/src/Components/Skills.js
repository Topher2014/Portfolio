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

function Skills () {
    return (
        <Container 
          maxWidth='none'
          id='Skills'
          sx={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            width: '75%',
            mx: 'auto',
            mb: '25vh'
          }}
        >
          <Typography 
            id='skills'
            variant='h2'
            my={4} 
          >
            Skills
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                {gridItem('Python', python_img)}
              </Grid>
              <Grid item xs={3}>
                {gridItem('Flask', flask_img)}
              </Grid>
              <Grid item xs={3}>
                {gridItem('NumPy', numpy_img)}
              </Grid>
              <Grid item xs={3}>
                {gridItem('Pandas', pandas_img)}
              </Grid>
              <Grid item xs={3}>
                {gridItem('JavaScript', javascript_img)}
              </Grid>
              <Grid item xs={3}>
                {gridItem('NodeJS', node_img)}
              </Grid>              
              <Grid item xs={3}>
                {gridItem('React', react_img)}
              </Grid>
              <Grid item xs={3}>
                {gridItem('Material UI', mui_img)}
              </Grid>
              <Grid item xs={3}>
                {gridItem('HTML5', html_img)}
              </Grid>
              <Grid item xs={3}>
                {gridItem('CSS3', css_img)}
              </Grid>
              <Grid item xs={3}>
                {gridItem('GitHub', github_img)}
              </Grid>    
              <Grid item xs={3}>
                {gridItem('Render', render_img)}
              </Grid>                            
            </Grid>
          </Box>
      </Container>
    );
}

export default Skills;