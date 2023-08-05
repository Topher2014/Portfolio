import ProjectCard from '../ProjectCard';
import image from '../../Assets/OnlyKyles.png'


function OnlyKyles() {
    return (
        <ProjectCard
          title='OnlyKyles'
          description='A CLI application made for an orphanage where adopters can create user accounts, view current and past adoptees, and adopt currently available adoptees'
          links={[
            ['GitHub', 'https://github.com/Topher2014/kyle'],
            ['Demo', 'https://vimeo.com/manage/videos/826435366'],
            // ['Live Site', 'https://www.topheremby.com/']
          ]}
          image={image}
          notes={[
            'Enacted data verification to ensure that only adoptees and adopters named “Kyle” could participate',
            'Tailored a lightweight CLI in Python to access backend data',
            'Employed SQLite and SQLAlchemy to test and manipulate data'
          ]}
        />
    );
}

export default OnlyKyles;