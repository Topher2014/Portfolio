import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useMediaQuery } from '@mui/material';

function Contact() {

  const isMobile = useMediaQuery('(max-width: 600px)');

  const email = isMobile ? 'topherludlow@pm.me' : 'topherludlow@protonmail.com';
  const textSize = isMobile ? 'h4' : 'h3';


    return (
        <Container >
          <Typography variant='h2' textAlign='center'>
            Contact Me
          </Typography>
          <Box
            sx={{ border: '1px solid black', borderRadius: '10px', p: 2, mt: 2 }}
          >
            <Typography variant={textSize} textAlign='center'>
                Email: <a className="contact-link" href="mailto:topherludlow@protonmail.com">{email}</a> 
            </Typography>
            <Typography variant={textSize} textAlign='center'>
                LinkedIn: <a href="https://www.linkedin.com/in/topherludlow/" target="_blank" rel="noopener noreferrer">topherludlow</a> 
            </Typography>            
            <Typography variant={textSize} textAlign='center'>
                Book Time: <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0huejMDFxiUmR8Z30Gvgt1hERoq2e9H7TTZoBRx14Y1Xxd00Q8cLcU0F3Uf1SpmvINCYRXlLRq" target="_blank" rel="noopener noreferrer">Calendar</a> 
            </Typography>            
            <Typography variant={textSize} textAlign='center'>
                GitHub: <a href="https://github.com/Topher2014" target="_blank" rel="noopener noreferrer">Topher2014</a> 
            </Typography>
            <Typography variant={textSize} textAlign='center'>
                Phone: <span className="contact-text">(916) 505-0651</span> 
            </Typography>            
          </Box>
        </Container>
    )
}
export default Contact