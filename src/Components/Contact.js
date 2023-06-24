import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Contact() {
    return (
        <Container >
          <Typography variant='h2' textAlign='center'>
            Contact Me
          </Typography>
          <Box
            sx={{ border: '1px solid black', borderRadius: '10px', p: 2, mt: 2 }}
          >
            <Typography variant='h3' textAlign='center'>
                Email: <a className="contact-link" href="mailto:topherludlow@protonmail.com">topherludlow@protonmail.com</a> 
            </Typography>
            <Typography variant='h3' textAlign='center'>
                LinkedIn: <a href="https://www.linkedin.com/in/topherludlow/" target="_blank" rel="noopener noreferrer">topherludlow</a> 
            </Typography>            
            <Typography variant='h3' textAlign='center'>
                GitHub: <a href="https://github.com/Topher2014" target="_blank" rel="noopener noreferrer">Topher2014</a> 
            </Typography>
            <Typography variant='h3' textAlign='center'>
                Phone: <span className="contact-text">(916) 505-0651</span> 
            </Typography>            
          </Box>
        </Container>
    )
}
export default Contact