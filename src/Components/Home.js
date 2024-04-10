import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Header from './Header.js';


function Home () {
    if (window.location.pathname !== '/') {

    }

    return (
        <>
           
            <div className='header' id='Header'>
                <Header />
            </div>
            <div className='section' >
                <About />
            </div>
            <div clssName='section' id='Skills'>
                <Skills />
            </div>
            {/* <div className='section' id='Projects'>
                <Projects />
            </div> */}
            <div className='section' id='Contact'>
                <Contact />
            </div>
            </>
    );
}

export default Home;
