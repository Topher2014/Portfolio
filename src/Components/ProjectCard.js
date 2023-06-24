import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';

const linkItem = (name, path) => {
    return (
        <Link
          href={path}
          target='_blank'
          textDecoration='none'
          sx={{
            cursor: 'pointer',
            color: '#e1e1e1',
            mx: 2,
            textDecoration: 'none', // added this line to remove underline
          }}          
        >
          <Typography variant='h3'>
            {name}
          </Typography>
        </Link>
    );
};

function ProjectCard ({ title, description, links, image, notes }) {
    return (
               <>
               <AppBar

sx={{
  height: '4rem',
  backgroundColor: '#000000',
  py: '1rem',
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
    <Typography 
    variant="h6" 
    noWrap
    style={{
        cursor: 'pointer',
        marginLeft: '-.47rem'
    }}
    onClick={() => {
          if (window.location.pathname !== '/') {
            window.location.href = '/';
    }
    }} >
      TOPHER LUDLOW
    </Typography>
  </Box>
</Container>
</AppBar>
        <Container sx={{display: 'flex'}}>
          <Box textAlign={'center'}>
            <Typography variant='h1' sx={{mt: 10}}>{title}</Typography>
            <Typography variant='h4'>{description}</Typography>
            <Box 
              justifyContent='center' 
              sx={{ 
                display: 'inline-flex',
                border: '2px solid #e1e1e1',
                borderRadius: '10px',
                mx: 'auto',
                my: 6,
                p: 2,
              }}
            >
              {links.map(([name, path]) => linkItem(name, path))}                                                 
            </Box>
            <Box>
              <Box 
                component='img'
                src={image}
                alt=''
                sx={{
                  width: '75%',
                  border: '1px solid #e1e1e1',
                  borderRadius: '10px',
                }}
              />
            </Box>
            <Box display='flex' justifyContent='center'>
              <List>
                {notes.map(note => {
                  return (
                    <ListItem>
                      <Typography variant='h4'>- {note}</Typography>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Box>
        </Container>
               </>
    );
}

export default ProjectCard;